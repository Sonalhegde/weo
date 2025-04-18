from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import json
import pandas as pd
import numpy as np

app = Flask(__name__)

# CORS setup: Allow requests from frontend (React app) on port 3000
CORS(app, origins="http://localhost:3000")

STRATEGY_FILE = 'storage/strategies.json'

# Function to analyze the strategy
def analyze_strategy(csv_path):
    # Read CSV and parse the 'Date' column
    df = pd.read_csv(csv_path, parse_dates=['Date'])
    df.sort_values('Date', inplace=True)

    # Check if 'Close' column exists
    if 'Close' not in df.columns:
        return {'error': 'Close column not found in the CSV file'}

    # Calculate the Simple Moving Averages (SMA)
    df['SMA5'] = df['Close'].rolling(window=5).mean()
    df['SMA10'] = df['Close'].rolling(window=10).mean()
    

    # Signal generation (Buy/Sell)
    df['Signal'] = df.apply(lambda row: 'Buy' if row['SMA5'] > row['SMA10'] else 'Sell', axis=1)

    # Convert datetime columns to string to avoid serialization issues
    df['Date'] = df['Date'].dt.strftime('%Y-%m-%d')  # Convert Date to string

    df = df.replace(np.nan, 0)

    # Return the last 10 records and the full strategy data
    last_10 = df.tail(10).to_dict(orient='records')
    full_data = df.to_dict(orient='records')

    # Convert any Timestamps to string to avoid serialization errors
    for record in full_data:
        for key, value in record.items():
            if isinstance(value, pd.Timestamp):
                record[key] = value.strftime('%Y-%m-%d')

    return last_10, full_data

@app.route('/upload', methods=['POST'])
def upload_file():
    # Handle file upload
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    filepath = f'storage/{file.filename}'
    file.save(filepath)

    # Analyze the strategy using the uploaded file
    try:
        last_10, full_data = analyze_strategy(filepath)

        # Save the full data in the strategies.json file
        full_data_clean = json.loads(json.dumps(full_data, default=str))
        with open(STRATEGY_FILE, 'w') as f:
            json.dump(full_data_clean, f, indent=4)

        return jsonify({'message': 'Strategy saved successfully!', 'last_10': last_10})

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/strategy', methods=['GET'])
def get_strategy():
    try:
        with open(STRATEGY_FILE, 'r') as f:
            data = json.load(f)  # This is your array of objects
        return jsonify(data)
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/stocks', methods=['GET'])
def dummy_stocks():
    return jsonify([
        {'symbol': 'AAPL', 'price': 178.12},
        {'symbol': 'TSLA', 'price': 225.32},
        {'symbol': 'GOOGL', 'price': 135.21}
    ])

if __name__ == '__main__':
    app.run(debug=True)

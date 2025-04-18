import pandas as pd

def analyze_strategy(csv_path):
    df = pd.read_csv(csv_path, parse_dates=['Date'])
    df.sort_values('Date', inplace=True)
    
    df['SMA5'] = df['Close'].rolling(window=5).mean()
    df['SMA10'] = df['Close'].rolling(window=10).mean()
    df['Signal'] = df.apply(lambda row: 'Buy' if row['SMA5'] > row['SMA10'] else 'Sell', axis=1)
    
    return df.tail(10).to_dict(orient='records'), df.to_dict(orient='records')

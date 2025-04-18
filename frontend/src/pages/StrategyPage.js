import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend);

const StrategyPage = () => {
  const [strategyData, setStrategyData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/strategy')
      .then((response) => {
        setStrategyData(response.data);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching strategy data');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center my-5">Loading...</div>;
  if (error) return <div className="text-center my-5 text-danger">{error}</div>;

  const labels = strategyData.map((s) => s.Date);
  const buyData = strategyData.map((s) => (s.Signal === 'Buy' ? s.Close : null));
  const sellData = strategyData.map((s) => (s.Signal === 'Sell' ? s.Close : null));

  const chartData = {
    labels,
    datasets: [
      {
        label: 'Close Price',
        data: strategyData.map((s) => s.Close),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
      {
        label: 'Buy Signal',
        data: buyData,
        pointBackgroundColor: 'rgba(0,255,0,0.9)',
        borderColor: 'transparent',
        pointRadius: 6,
        pointStyle: 'circle',
        showLine: false,
      },
      {
        label: 'Sell Signal',
        data: sellData,
        pointBackgroundColor: 'rgba(255,0,0,0.9)',
        borderColor: 'transparent',
        pointRadius: 6,
        pointStyle: 'rectRot',
        showLine: false,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: function (context) {
            const i = context.dataIndex;
            const item = strategyData[i];
            console.log(item);
            return [
              `Close: ${item.Close}`,
              `Volume: ${item.Volume}`,
              `SMA5: ${item.SMA5}`,
              `SMA10: ${item.SMA10}`,
              `Signal: ${item.Signal}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        title: { display: true, text: 'Date' },
        ticks: { maxRotation: 90, minRotation: 45 },
      },
      y: {
        title: { display: true, text: 'Close Price' },
      },
    },
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Stock Strategy Analysis</h1>

      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center">Stock Behavior</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <h3 className="mb-3">Stock Data Table</h3>
          <div className="table-responsive">
            <table className="table table-bordered table-hover">
              <thead className="table-dark">
                <tr>
                  <th>Date</th>
                  <th>Open</th>
                  <th>High</th>
                  <th>Low</th>
                  <th>Close</th>
                  <th>Volume</th>
                  <th>SMA_5</th>
                  <th>SMA_10</th>
                  <th>Signal</th>
                </tr>
              </thead>
              <tbody>
                {strategyData.map((strategy, index) => (
                  <tr key={index}>
                    <td>{strategy.Date}</td>
                    <td>{strategy.Open}</td>
                    <td>{strategy.High}</td>
                    <td>{strategy.Low}</td>
                    <td>{strategy.Close}</td>
                    <td>{strategy.Volume}</td>
                    <td>{strategy.SMA5}</td>
                    <td>{strategy.SMA10}</td>
                    <td>
                      <span
                        className={`badge ${
                          strategy.Signal === 'Buy' ? 'bg-success' : 'bg-danger'
                        }`}
                      >
                        {strategy.Signal}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrategyPage;

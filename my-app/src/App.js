
import './App.css';
import React from 'react';
import { Pie } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      data: [300, 50, 100],
      backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h1>Pie Chart Example</h1>
      <Pie data={data} />
    </div>
  );
};

export default App;


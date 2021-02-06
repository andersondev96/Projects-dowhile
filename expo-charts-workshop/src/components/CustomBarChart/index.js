import React from 'react';

import { BarChart } from 'react-native-svg-charts'

function CustomBarChart({ chartData }) {
  return (
    <BarChart
      data={chartData}
      style={{ height: 200, borderWidth: 1 }}
    />
  );
}

export default CustomBarChart;

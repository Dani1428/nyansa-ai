import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ProjectTrendChartProps {
  data: number[];
}

const ProjectTrendChart: React.FC<ProjectTrendChartProps> = ({ data }) => {
  // Transform the simple array into objects for Recharts
  const chartData = data.map((value, index) => ({
    name: `Week ${index + 1}`,
    value: value,
  }));

  return (
    <div style={{ width: '100%', height: 280 }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--color-primary-container)" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="var(--color-primary-container)" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="var(--color-border)" />
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fontSize: 10, fontWeight: 600, fill: 'var(--color-on-surface-variant)' }}
            dy={10}
          />
          <YAxis 
            hide={true}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'var(--color-white)', 
              borderRadius: '0.5rem', 
              border: '1px solid var(--color-border)',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
              fontSize: '0.75rem',
              fontWeight: 700
            }}
          />
          <Area 
            type="monotone" 
            dataKey="value" 
            stroke="var(--color-primary-container)" 
            strokeWidth={3}
            fillOpacity={1} 
            fill="url(#colorValue)" 
            animationDuration={1500}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProjectTrendChart;

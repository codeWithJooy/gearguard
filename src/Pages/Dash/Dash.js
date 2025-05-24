import React, { useState } from "react";
import "./Dash.css";
import DashHeader from "../../Component/Client/DashHeader/DashHeader";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FaUsers, FaChartLine, FaCalendarDay, FaCalendarAlt } from 'react-icons/fa';

const Dash = () => {
  const [stats] = useState({
    totalVisitors: 24580,
    todayVisitors: 342,
    monthVisitors: 8540
  });

  const [chartData] = useState([
    { date: 'Mon', visitors: 400 },
    { date: 'Tue', visitors: 620 },
    { date: 'Wed', visitors: 800 },
    { date: 'Thu', visitors: 550 },
    { date: 'Fri', visitors: 730 },
    { date: 'Sat', visitors: 920 },
    { date: 'Sun', visitors: 680 },
  ]);

  return (
    <div className="dashSectionMain">
      <div className="fuContainer">
        <div className="dashTopSticky">
          <DashHeader title={"Dashboard"} />
        </div>

        <div className="dashboardContent">
          {/* Stats Cards */}
          <div className="statsGrid">
            <div className="statsCard">
              <div className="cardIcon total">
                <FaUsers size={24} />
              </div>
              <h3>Total Visitors</h3>
              <h2>{stats.totalVisitors.toLocaleString()}</h2>
              <div className="trendIndicator positive">
                <FaChartLine /> 12.5%
              </div>
            </div>

            <div className="statsCard">
              <div className="cardIcon today">
                <FaCalendarDay size={24} />
              </div>
              <h3>Today's Visitors</h3>
              <h2>{stats.todayVisitors.toLocaleString()}</h2>
              <div className="trendIndicator negative">
                <FaChartLine /> 3.2%
              </div>
            </div>

            <div className="statsCard">
              <div className="cardIcon month">
                <FaCalendarAlt size={24} />
              </div>
              <h3>This Month</h3>
              <h2>{stats.monthVisitors.toLocaleString()}</h2>
              <div className="trendIndicator positive">
                <FaChartLine /> 8.1%
              </div>
            </div>
          </div>

          {/* Chart Section */}
          <div className="chartCard">
            <h3>Visitors Overview</h3>
            <div className="chartContainer">
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="visitors" 
                    stroke="#6366f1" 
                    strokeWidth={2}
                    dot={{ fill: '#6366f1' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
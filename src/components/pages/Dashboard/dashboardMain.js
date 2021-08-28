import React from 'react'
import './dashboardMain.css';
import hello from '../../../assets/hello.svg';
import { PieChart, Pie, Tooltip , Cell, ResponsiveContainer } from 'recharts';
import Chart from '../Dashboard/Chart';


const DashboardMain = () => {


    const data = [
      { name: "Total", value:2000000},
      { name: "onhold", value:1500000},
      { name: "running", value:250000},
      { name: "rejected", value:400000},

    ];

    const data1 = [
      { name: "Total", value:100000},
      { name: "onhold", value:3000},
      { name: "running", value:80000},
      { name: "rejected", value:5000},

    ];



    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];




  return (

    <main>
      <div className="main__container">

        <div className="main__title">
          <img src={hello} alt="hello" />
          <div className="main__greeting">
            <h1>Hello Admin</h1>
            <p>Welcome to the dashboard</p>
          </div>
        </div>

        <h1 style={{marginLeft:"380px",}}><text className="text30">OVERALL STATISTICS</text></h1>
        
        <div>
        <PieChart width={400} height={400}>
          <Pie
           data={data}
            dataKey="value"
             cx={200} 
             cy={200}
              outerRadius={140}
               fill="#8884d8" 
               label  
               >
                  {data.map((entry, index) => (
              <Cell  fill={COLORS[index % COLORS.length]} />
            ))}
            
                 </Pie> 
          <Tooltip/>       
        </PieChart>

        
        
        </div>

        


        <div className='chart2' style={{marginLeft:"700px",}}>
        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            dataKey="value"
            cx={200}
            cy={200}
            outerRadius={140}
            fill="#8884d8" 
            label >
              {data.map((entry, index) => (
              <Cell  fill={COLORS[index % COLORS.length]} />
            ))}

            </Pie>

          <Tooltip/>       
        </PieChart>
        </div>
                
        
          
        <div className="charts">
        <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Bookings Stats </h1>
                <p>Banglore, Karnataka, INDIA</p>
              </div>
              <i className="fa fa-inr" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Total Bookings</h1>
                <p>75,300</p>
              </div>

              <div className="card2">
                <h1>Confirmed Bookings</h1>
                <p>124,200</p>
              </div>

              <div className="card3">
                <h1>Pending Bookings</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Closed Bookings</h1>
                <p>1881</p>
              </div>
            </div>
          </div>

          {/* <div className="charts__left">
            <div className="charts__left__title">
              <div>
                <h1>Daily Reports</h1>
                <p>Banglore, Karnataka, INDIA</p>
              </div>
              <i className="fa fa-usd" aria-hidden="true"></i>
            </div>
            <Chart />
          </div> */}

          <div className="charts__right">
            <div className="charts__right__title">
              <div>
                <h1>Food Order Stats</h1>
                <p>Banglore, Karnataka, INDIA</p>
              </div>
              <i className="fa fa-inr" aria-hidden="true"></i>
            </div>

            <div className="charts__right__cards">
              <div className="card1">
                <h1>Total Orders</h1>
                <p>75,300</p>
              </div>

              <div className="card2">
                <h1>Confirmed Orders</h1>
                <p>124,200</p>
              </div>

              <div className="card3">
                <h1>Pending Orders</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Closed Orders</h1>
                <p>1881</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;

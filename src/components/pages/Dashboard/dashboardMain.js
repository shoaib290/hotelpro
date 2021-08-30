import React from 'react'
import './dashboardMain.css';
import hello from '../../../assets/hello.svg';
import { PieChart, Pie, Tooltip , Cell, ResponsiveContainer } from 'recharts';
import { useState, useEffect } from 'react'


const DashboardMain = () => {

  const [totalBookings, setTotalBookings] = useState();
  const [confirmedBookings, setConfirmedBookings] = useState();
  const [pendingBookings, setPendingBookings] = useState();
  const [closedBookings, setClosedBookings] = useState();

  const [totalOrders, setTotalOrders] = useState();
  const [confirmedOrders, setConfirmedOrders] = useState();
  const [pendingOrders, setPendingOrders] = useState();
  const [closedOrders, setClosedOrders] = useState();
  
  


    const data = [
      { name: "Total", value:totalBookings},
      { name: "confirmed", value:confirmedBookings},
      { name: "pending", value:pendingBookings},
      { name: "rejected", value:closedBookings},

    ];

    const data1 = [
      { name: "Total", value:totalOrders},
      { name: "confirmed", value:confirmedOrders},
      { name: "pending", value:pendingOrders},
      { name: "rejected", value:closedOrders},

    ];


    const getData = () => {
      fetch("https://entemadb.entema-software.com/getDashData",{
      headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
           }
          })
          .then((response) => response.json())
          .then((json) => {
            setTotalBookings(json[0].TOTAL_ORDER)
            setConfirmedBookings(0)
            setPendingBookings(json[1].TOTAL_ORDER)
            setClosedBookings(json[2].TOTAL_ORDER)

            setTotalOrders(json[3].TOTAL_ORDER)
            setConfirmedOrders(json[5].TOTAL_ORDER)
            setPendingOrders(json[4].TOTAL_ORDER)
            setClosedOrders(json[6].TOTAL_ORDER)
              console.log('herooo  ', json);
            
          });
  };

  useEffect(() => {
    getData();
}, []);

    
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
                <p>{totalBookings}</p>
              </div>

              <div className="card2">
                <h1>Confirmed Bookings</h1>
                <p>{confirmedBookings}</p>
              </div>

              <div className="card3">
                <h1>Pending Bookings</h1>
                <p>{pendingBookings}</p>
              </div>

              <div className="card4">
                <h1>Closed Bookings</h1>
                <p>{closedBookings}</p>
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
                <p>{totalOrders}</p>
              </div>

              <div className="card2">
                <h1>Confirmed Orders</h1>
                <p>{confirmedOrders}</p>
              </div>

              <div className="card3">
                <h1>Pending Orders</h1>
                <p>{pendingOrders}</p>
              </div>

              <div className="card4">
                <h1>Closed Orders</h1>
                <p>{closedOrders}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMain;

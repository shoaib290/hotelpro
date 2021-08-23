import React from 'react'
import './dashboardMain.css';
import Chart from '../../Charts/Chart';
import hello from '../../../assets/hello.svg';


const DashboardMain = () => {
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
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
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
                <h1>Income</h1>
                <p>$75,300</p>
              </div>

              <div className="card2">
                <h1>Sales</h1>
                <p>$124,200</p>
              </div>

              <div className="card3">
                <h1>Users</h1>
                <p>3900</p>
              </div>

              <div className="card4">
                <h1>Orders</h1>
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

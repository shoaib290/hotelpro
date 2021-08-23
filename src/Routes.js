import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DashboardMain from './components/pages/Dashboard/dashboardMain';
import FoodOrders from './components/pages/Food/FoodOrders';
import Profile from './components/pages/Login/Profile';
import Bookings from './components/pages/Bookings/Bookings';

function Routes() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/Dashboard" exact component={DashboardMain} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/FoodOrders" exact component={FoodOrders} />
          <Route path="/Bookings" exact component={Bookings} />
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

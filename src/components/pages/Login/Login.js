/* eslint-disable no-unused-vars */ // eslint-disable-next-line

import React, { useState } from 'react';
import './Login.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { useHistory } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import iconsimage from '../../../assets/iconsimage.png';
import { login } from '../../../features/userSlice';
import { useDispatch } from 'react-redux';



const useStyles = makeStyles({
  root: {
    width: "50%",
    marginLeft: "30%",
    marginTop: "%"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    width: 200,
    height: 200,
  }


});



function Login() {


  const classes = useStyles();
  const history = useHistory();

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(login({
      user: username,
      password: password,
      loggedIn: true
    })
    );

    history.push('/Dashboard');
  };



  return (
    <div className="LogIn">
      <div className="row" style={{ width: "100%" }}>

        <div className="col-sm-6 imageDiv">
          <div >
            <img src={iconsimage} style={{ width: "350px", height: "350px" }} />

          </div>
        </div>

        <div className="col-sm-6 CardDiv">
          <div >

            <img src={logo} style={{ width: "200px", height: "50px", marginLeft: "58px" }} />

            <Card className={classes.root}>
              <CardContent>

                <div className="col-md-12" style={{ marginTop: "50px" }}>
                  <TextField id="outlined-basic" label="UserName" style={{ width: "200px" }}

                    value={username}

                    onChange={(e) => setUserName(e.target.value)}

                  />
                </div>


                <div className="col-md-12" style={{ marginTop: "20px" }} >
                  <TextField type="password" id="outlined-basic" label="Password" style={{ width: "200px" }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}

                  />
                </div>


                <Button variant="contained" color="primary" style={{ marginTop: "10%" }}
                  onClick={(e) => handleSubmit(e)}
                >
                  Login
                </Button>

              </CardContent>
              <CardActions>
              </CardActions>
            </Card>


          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;

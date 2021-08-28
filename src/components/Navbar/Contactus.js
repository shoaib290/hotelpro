 // eslint-disable-next-line
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import BusinessIcon from '@material-ui/icons/Business';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import HelpIcon from '@material-ui/icons/Help';


const useStyles = makeStyles((theme) => ({
  dialogWrapper: {
    padding: theme.spacing(2),
    position: "absolute",
    top: theme.spacing(5),
  },
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function Popup(props) {
  const { setId, id, openPopup, setOpenPopup } = props;

  // console.log("FROM MODAL WINDOW ", id);
  const classes = useStyles();

  const [clientcpname, setClientcpname] = useState();
  const [clientcompname, setClientcompname] = useState();
  const [clientphone, setClientphone] = useState();
  const [clientemail, setClientemail] = useState();
  const [clientadd, setClientadd] = useState();
  const [createdby, setCreatedby] = useState();

  useEffect(() => {
    axios
      .post("http://entemadb.entema-software.com/getClientBasedOnId", {
        clientID: id,
      })
      .then((res) => {
        // console.log("records received ", res.data[0]);

        if (id > 0) {
          setClientcpname(res.data[0].CLIENT_CPNAME);
          setClientcompname(res.data[0].CLIENT_COMP_NAME);
          setClientphone(res.data[0].CLIENT_PHONE);
          setClientemail(res.data[0].CLIENT_EMAIL);
          setClientadd(res.data[0].CLIENT_ADD);
          setCreatedby(res.data[0].CLIENT_CREATED_BY);
        }
      });
  }, [id]);

  const handleChangeEvent = (e) => {
    const input = e.target.name;

    if (input === "clientcpname") {
      setClientcpname(e.target.value);
    } else if (input === "clientcompname") {
      setClientcompname(e.target.value);
    } else if (input === "clientphone") {
      setClientphone(e.target.value);
    } else if (input === "clientemail") {
      setClientemail(e.target.value);
    } else if (input === "clientadd") {
      setClientadd(e.target.value);
    }
  };

  const handleSubmit = (event) => {
    // event.preventDefault();
    // console.log("event : ", event);
    // console.log("FROM SUBMIT", id);
    axios
      .post("http://entemadb.entema-software.com/UpdateClientData", {
        clientID: id,
        clientcpname: clientcpname,
        clientcompname: clientcompname,
        clientphone: clientphone,
        clientemail: clientemail,
        clientadd: clientadd,
      })
      .then((res) => {
        setId(0);
        // setData(res.data);
        //  setDupData(res.data);
        // console.log("result set in effect: ", res);
      });

    setOpenPopup(false);
  };
  const onClosePopup = () => {
    setId(0);
    setOpenPopup(false);
  };

  const testOnlurr = () => {
    axios
      .post("http://entemadb.entema-software.com/getClientCmpValidation", {
        clientCmpName: clientcompname,
      })
      .then((res) => {
        if (res.data[0].CLIENTSCOUNT > 0) {
          alert("Client Already Exist");
          setClientcompname("");
        }
      });
  };

  return (
    <Dialog
      open={openPopup}
      maxWidth="md"
      classes={{ paper: classes.dialogWrapper }}
    >
      <DialogTitle>
        <div style={{ display: "flex" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onClosePopup()}
            style={{ flex: "end" }}
          >
            Close
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>
        <div
          class="container"
          style={{ paddingTop: "30px", paddingLeft: "50px" }}
        >
          <div className="heading-layout1">
            <div className="item-title">
              <h4 style={{ paddingBottom: "20px",color:"blue" }}>
                  <HelpIcon color="primary" style={{marginBottom:"5px"}}></HelpIcon>
                  Need Help? Contact MadcapSolutions  <br></br>24/7  Quick Service</h4>
            </div>
          </div>
          <div className="scroll">
            <form>
              <div className="row">
                <div class="col-md-6 mb-3">
                  <label for="userName">
                      <PersonOutlineIcon color="primary" style={{marginBottom:"5px"}}></PersonOutlineIcon>
                      Name</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="clientcpname"
                    name="clientcpname"
                    required
                    value={clientcpname}
                    onChange={handleChangeEvent}
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="userName">
                      <BusinessIcon color="primary" style={{marginBottom:"5px"}}></BusinessIcon>
                     Your Company Name</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="clientcompname"
                    name="clientcompname"
                    required
                    onBlur={testOnlurr}
                    value={clientcompname}
                    onChange={handleChangeEvent}
                  />
                </div>
              </div>
              <div className="row">
                <div class="col-md-6 mb-3">
                  <label for="userName">
                      <PhoneIcon color="primary" style={{marginBottom:"5px"}}></PhoneIcon>
                      Mobile</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="clientphone"
                    name="clientphone"
                    required
                    value={clientphone}
                    onChange={handleChangeEvent}
                  />
                </div>
                <div class="col-md-6 mb-3">
                  <label for="userName">
                      <EmailIcon color="primary" style={{marginBottom:"5px"}}></EmailIcon>
                      Email</label>
                  <input
                    type="text"
                    class="form-control is-valid"
                    id="clientemail"
                    name="clientemail"
                    required
                    value={clientemail}
                    onChange={handleChangeEvent}
                  />
                </div>
              </div>
              <div class="col-md-8 mb-3">
                <label for="userFname">
                    <MessageIcon color="primary" ></MessageIcon>
                    Message</label>
                <textarea
                  type="text"
                  class="form-control is-valid"
                  id="clientadd"
                  name="clientadd"
                  required
                  value={clientadd}
                  onChange={handleChangeEvent}
                />
              </div>

              <div>
                <button
                  type="button"
                  class="btn btn-outline-success"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

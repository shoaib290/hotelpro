/* eslint-disable no-unused-vars */
import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import axios from 'axios';
import Search from '../../Search/index';
import SearchIcon from '@material-ui/icons/Search';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import CheckIcon from '@material-ui/icons/Check';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CallToActionIcon from '@material-ui/icons/CallToAction';
import RoomIcon from '@material-ui/icons/Room';
import Pagination from '../../Datatable/Pagination'
import { useState, useEffect } from 'react'
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({

    root: {
        width: '115%',
        marginLeft: '-82px',
        marginTop: '10px',
        backgroundColor: "#f2ecec",

        borderTop: 'outset',
    },

    container: {

        borderRightColor: 'red',
    },
});



export default function MatPaginationTable() {
    const [comments, setComments] = useState([]);
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [totalItems, setTotalItems] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [sorting, setSorting] = useState({ field: "", order: "" });
    const [test, setTest] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [id, setId] = React.useState(null);

    const ITEMS_PER_PAGE = 6;

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 10);
    }, [test]);


    const getData = () => {
        fetch("https://entemadb.entema-software.com/getBookingNAData", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            }
        })
            .then((response) => response.json())
            .then((json) => {
                console.log('herooo  ', json);
                setComments(json);
                // console.log(comments[0].BOOK_FNAME)
            });
    };

    const removeDelTimeSheet = (id) => {
        axios
            .post("https://entemadb.entema-software.com/removeDelNoteBasedOnId", {
                delId: id,
            })
            .then((res) => {
                getData();

            });
    };

    const updateRequest = (bookingId, sts) => {
        alert('Checked out.Successfully');
        console.log('values uid : ', bookingId);
        axios
            .post("https://entemadb.entema-software.com/updateBookingStatus", {
                bookSts: sts,
                bookingId: bookingId
            })
            .then((res) => {
                getData();

            });
            setAnchorEl(null);
    }

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.BOOK_FNAME.toLowerCase().includes(search.toLowerCase()) ||
                    comment.BOOK_EMAIL.toLowerCase().includes(search.toLowerCase()) ||
                    comment.BOOK_PHONE.toLowerCase().includes(search.toLowerCase())
            );
        }
        setTotalItems(computedComments.length);

        //Sorting comments
        if (sorting.field) {
            const reversed = sorting.order === "asc" ? 1 : -1;
            computedComments = computedComments.sort(
                (a, b) => reversed * a[sorting.field].localeCompare(b[sorting.field])
            );
        }

        //Current Page slice
        return computedComments.slice(
            (currentPage - 1) * ITEMS_PER_PAGE,
            (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
        );
    }, [comments, currentPage, search, sorting]);

    useEffect(() => {
        getData();
    }, [test]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = event => {
        setRowsPerPage(+event.target.value);

        setPage(0);

    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        //console.log("MY ID : ",id);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const buttonClick = (id) => {
        
        setId(id)
    };

    return (
        <>
            <div className='row'>
                <h1 className='tname'>
                    <RoomIcon style={{ fontSize: 50, marginTop: "-10px" }}></RoomIcon>
                    Room Reservations</h1>

                <div style={{
                    marginTop: "-4  5px", marginLeft: "870px", marginTop: '-52px'
                }}>
                    <Search
                        onSearch={(value) => {
                            setSearch(value);
                            // setCurrentPage(1);
                        }}
                    >
                    </Search>
                </div>


            </div>

            <div className="container" style={{ color: 'milkywhite' }}>




                <section className="featured-rooms">


                    <Paper className={classes.root}>

                        <TableContainer className={classes.container}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>

                                        {/* <TableCell align="center" style={{ backgroundColor: "#e8e5f6" }}>Room No</TableCell> */}
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <MeetingRoomIcon color="primary" ></MeetingRoomIcon>
                                            Room Type</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <PersonOutlineIcon color="primary" ></PersonOutlineIcon>
                                            Full Name</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <EmailIcon color="primary" ></EmailIcon>
                                            Email ID</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <PhoneIcon color="primary"  ></PhoneIcon>
                                            Phone Number</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <CheckIcon color="primary" ></CheckIcon>
                                            Check In</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <ErrorOutlineIcon color="primary" ></ErrorOutlineIcon>
                                            Check Out</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <CallToActionIcon color="primary" ></CallToActionIcon>
                                            Action</TableCell>
                                            <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <CallToActionIcon color="primary" ></CallToActionIcon>
                                            Booking Status</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {commentsData.map((comments) => (
                                        <TableRow >
                                            {/* <TableCell align="center">01</TableCell> */}

                                            <TableCell align="center"> {comments.BOOK_ROOM_TYPE}</TableCell>
                                            <TableCell align="center">{comments.BOOK_FNAME}</TableCell>
                                            <TableCell align="center">{comments.BOOK_EMAIL}</TableCell>
                                            <TableCell align="center">{comments.BOOK_PHONE}</TableCell>
                                            <TableCell align="center">{comments.BOOK_CHECKIN}</TableCell>
                                            <TableCell align="center">{comments.BOOK_CHECKOUT}</TableCell>
                                            <td onClick={() => buttonClick(comments.BOOKING_ID)}>
                                                <div>
                                                    <Button
                                                        aria-controls="simple-menu"
                                                        aria-haspopup="true"
                                                        onClick={handleClick}
                                                    >
                                                        <MenuOpenIcon />
                                                    </Button>
                                                    <Menu
                                                        id="simple-menu"
                                                        anchorEl={anchorEl}
                                                        keepMounted
                                                        open={Boolean(anchorEl)}
                                                        onClose={handleClose}
                                                    >
                                                        <MenuItem
                                                            onClick={() => {
                                                                updateRequest(id,"Confirmed")
                                                            }}
                                                        >
                                                            Confirm
                                                        </MenuItem>

                                                        <MenuItem
                                                            onClick={() => {
                                                                updateRequest(id,"Pending")
                                                            }}
                                                        >
                                                            Pending
                                                        </MenuItem>

                                                        <MenuItem
                                                            onClick={() => {
                                                                updateRequest(id,"Close")
                                                            }}
                                                        >
                                                            Close
                                                        </MenuItem>

                                                        <MenuItem
                                                            onClick={() => {
                                                                updateRequest(id,"Cancel")
                                                            }}
                                                        >
                                                            Cancel
                                                        </MenuItem>

                                                    </Menu>
                                                </div>
                                            </td>
                                            <TableCell align="center">{comments.BOOK_STATUS}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <div className="col-md-6">
                            <Pagination
                                total={totalItems}
                                itemsPerPage={ITEMS_PER_PAGE}
                                currentPage={currentPage}
                                onPageChange={(page) => setCurrentPage(page)}
                            />
                        </div>
                    </Paper> </section></div>
        </>
    );
}
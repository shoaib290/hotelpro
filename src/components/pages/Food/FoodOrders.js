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
import FastfoodIcon from '@material-ui/icons/Fastfood';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import Pagination from '../../Datatable/Pagination';


import { useState, useEffect } from 'react'


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

    const ITEMS_PER_PAGE = 10;

    useEffect(() => {
        setTimeout(() => {
            getData();
        }, 10);
    }, [test]);
    const getData = () => {


        fetch("https://entemadb.entema-software.com/getHotelFoodOrderData", {
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            }
        })
            .then((response) => response.json())
            .then((json) => {

                setComments(json);
                console.log('herooo  ', comments);
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

    const commentsData = useMemo(() => {
        let computedComments = comments;

        if (search) {
            computedComments = computedComments.filter(
                (comment) =>
                    comment.PERSON_FNAME.toLowerCase().includes(search.toLowerCase()) ||
                    comment.PERSON_PHONE.toLowerCase().includes(search.toLowerCase())
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





    return (
        <>
            <div className='row'>
                <h1 className='tname'>
                    <FastfoodIcon color="primary" style={{ fontSize: 50, marginTop: "-20px" }} ></FastfoodIcon>
                    Food Orders
                    <RoomServiceIcon style={{ fontSize: 50, marginTop: "-10px" }}></RoomServiceIcon>
                </h1>

                <div style={{
                    marginTop: "-4  5px", marginLeft: "870px", marginTop: '-52px'
                }}>
                    <Search
                        onSearch={(value) => {
                            setSearch(value);
                            setCurrentPage(1);
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
                                            <PersonOutlineIcon color="primary" ></PersonOutlineIcon>
                                            Name</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <PhoneIcon color="primary" ></PhoneIcon>
                                            phone</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <RoomServiceIcon color="primary" ></RoomServiceIcon>
                                            Room No</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <FastfoodIcon color="primary"  ></FastfoodIcon>
                                            Food Items</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <LocalOfferIcon color="primary" ></LocalOfferIcon>
                                            Price</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <NoteAddIcon color="primary" ></NoteAddIcon>
                                            Extra Note</TableCell>
                                        <TableCell align="center" style={{ backgroundColor: "lightgray", fontWeight: "bolder" }}>
                                            <CallToActionIcon color="primary" ></CallToActionIcon>
                                            Action</TableCell>

                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {commentsData.map((comments) => (
                                        <TableRow >
                                            {/* <TableCell align="center">01</TableCell> */}

                                            <TableCell align="center"> {comments.PERSON_FNAME}</TableCell>
                                            <TableCell align="center">{comments.PERSON_PHONE}</TableCell>
                                            <TableCell align="center">{comments.PERSON_ROOM}</TableCell>
                                            <TableCell align="center" className="breaking21" >{comments.FOOD_NAME}</TableCell>
                                            <TableCell align="center">{comments.FOOD_PRICE}</TableCell>
                                            <TableCell align="center">{comments.PERSON_COMMENTS}</TableCell>
                                            <TableCell align="center"><button type="submit" className="btn-primary" style={{ width: '83px' }}>  Confirm Order</button></TableCell>                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[5, 10, 25, 50]}
                            component="div"
                            count={data.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onChangePage={handleChangePage}
                            onChangeRowsPerPage={handleChangeRowsPerPage}
                        />
                    </Paper>
                </section>

            </div>
        </>
    );
}
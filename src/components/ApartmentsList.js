import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { red, grey, blue } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {deleteApartment} from '../services/apartmentService';

const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
//   tableWidth: {
//       width: 400,
//   },
    hover: {
        '&:hover': {
        backgroundColor: '#9e9e9e !important',
        },
    },
});

function ApartmentsList(props) {

    const classes = useStyles();

    const handleDelete = (apartmentId) => {
        deleteApartment(apartmentId);
    }

    return (
        <TableContainer component={Paper} className={classes.tableWidth}>
            <Button><AddCircleIcon style={{ color: blue[500] }}/> Create Apartment</Button>
            {/* <Input  key="search" placeholder="Search" onChange={filterTable} style={{ width: 400}}></Input> */}
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow style={{backgroundColor: grey[900]}}>
                        <TableCell style={{color: '#fff'}}><b>id</b></TableCell>
                        <TableCell style={{color: '#fff'}}><b>Apartment</b></TableCell>
                        <TableCell style={{color: '#fff'}}><b>Delete</b></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.data.map((apartment) => (
                    <TableRow hover className={classes.hover} style={{backgroundColor: grey[800]}}>
                        <TableCell component="th" scope="row" style={{color: '#fff'}}>
                        {apartment._id}
                        </TableCell>
                        <TableCell style={{color: '#fff'}}>{apartment.name}</TableCell>
                        <TableCell ><Button onClick={ () => handleDelete(apartment._id)}><DeleteForeverOutlinedIcon style={{ color: red[500] }}/></Button></TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
  );
}

export default ApartmentsList
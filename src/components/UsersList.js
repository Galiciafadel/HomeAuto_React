import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import Input from '@material-ui/core/Input';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import { red, grey, blue } from '@material-ui/core/colors';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import ApartmentIcon from '@material-ui/icons/Apartment';
import { updateApartment } from '../services/apartmentService';
import {postUser, deleteUser} from '../services/userService';

const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function UsersList(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [drop, setDrop] = React.useState(false);
    const [firstname, setFirstname] = React.useState("");
    const [lastname, setLastname] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [apartmentId, setApartmentId] = React.useState("");
    const [selected, setSelected] = React.useState("");

    const handleOpen = () => {
      setOpen(true);
    };

    const handleUsernameChange = e => {
      setUsername(e.target.value)
    }
  
    const handlePasswordChange = e => {
      setPassword(e.target.value)
    }

    const handleFirstnameChange = e => {
      setFirstname(e.target.value)
    }
  
    const handleLastnameChange = e => {
      setLastname(e.target.value)
    }
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleDelete = userId => {
      deleteUser(userId);
    };


    const handleClick = () => {
        setDrop(!drop);
      };

    const handleSelect = (apartmentId, apartmentName) => {
      setApartmentId(apartmentId);
      setSelected(apartmentName)
      setDrop(!drop);
    };

    const filterTable = e => {
      props.data.filter(user => {
        console.log(user)
        user.firstname.includes(e.target.value)
      });
    }

    const addUser = async () => {
      let user = {
        'username': username,
        'password': password,
        'firstname': firstname,
        'lastname': lastname,
      }
      let res = await postUser(user);
      let u = {'user': res.data._id};
      updateApartment(apartmentId, u);        
    }

    return (
    <TableContainer component={Paper}>
      <div>
          <Button style={{fontSize: 8}}><AddCircleIcon style={{ color: blue[500], fontSize: 40 }} onClick={handleOpen}/> Create User</Button>
          <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 500,
          }}
          >
          <Fade in={open}>
            <div className={classes.paper}>
                <h4 id="transition-modal-title">Create User</h4>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                      <TextField id="firstname" label="Firstname" value={firstname} onChange={handleFirstnameChange}/>
                  </div>
                  <div>
                      <TextField id="lastname" label="Lastname" value={lastname} onChange={handleLastnameChange}/>
                  </div>
                  <div>
                      <TextField id="username" label="Username" value={username} onChange={handleUsernameChange}/>
                  </div>
                  <div>
                      <TextField id="password" type="password" label="Password" value={password} onChange={handlePasswordChange}/>
                  </div>
                  <div>
                      <ListItem button onClick={handleClick}>
                        <ListItemIcon>
                            <ApartmentIcon />
                        </ListItemIcon>
                        <ListItemText primary={selected? selected : "Apartment"} />
                        {drop ? 
                        <ExpandLess />
                        : 
                        <ExpandMore />
                        }
                      </ListItem>
                      <Collapse in={drop} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            {props.apartments.map((apartment) => (
                            <ListItem button className={classes.nested} onClick={() =>
                              handleSelect(apartment._id, apartment.name)}>
                              <ListItemText primary={apartment.name} />
                            </ListItem>
                            ))}
                        </List>
                      </Collapse>
                  </div>
                  <Button color="primary" variant="contained" onClick={addUser}>Submit</Button>
                </form>
            </div>
          </Fade>
          </Modal>
      </div>
      {/* <Input  key="search" placeholder="Search" onChange={filterTable} style={{ width: 400}}></Input> */}
      <Table aria-label="simple table">
          <TableHead>
            <TableRow style={{backgroundColor: grey[900]}}>
            <TableCell style={{color: '#fff'}}><b>id</b></TableCell>
            <TableCell style={{color: '#fff'}}><b>Firstname</b></TableCell>
            <TableCell style={{color: '#fff'}}><b>Lastname</b></TableCell>
            <TableCell style={{color: '#fff'}}><b>Delete</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.data.map((user) => (
            <TableRow style={{backgroundColor: grey[800]}} >
            <TableCell component="th" scope="row" style={{color: '#fff', fontSize: 10}}>
            {user._id}
            </TableCell>
            <TableCell style={{color: '#fff'}}>{user.firstname}</TableCell>
            <TableCell style={{color: '#fff'}}>{user.lastname}</TableCell>
            <TableCell><Button onClick={() => handleDelete(user._id)}><DeleteForeverOutlinedIcon style={{ color: red[500] }}/></Button></TableCell>
            </TableRow>
            ))}
          </TableBody>
      </Table>
    </TableContainer>
  );
}

export default UsersList
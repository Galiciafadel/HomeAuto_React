import React, { useState } from "react";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlinedIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  customInput: {
    backgroundColor: '#3d3a3a',
    borderRadius: 15,
    border: '0.7px solid #3d3a3a',
    color: '#ffffff',
  },
  customContainer: {
    backgroundColor: '#141313'
  },
  customText: {
    color: 'white'
  },
  customButton: {
    marginBottom: 50,
    marginTop: 50
  }
}));

const Admin = () => {

  const classes = useStyles();
  
  return (
    <Container component="main" maxWidth="xs" className={classes.customContainer}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.customText}>
          Admin
        </Typography>
          <Button
            className={classes.customButton}
            fullWidth
            variant="contained"
            color="primary"
          >
            View Apartments
          </Button>
          <Button
            className={classes.customButton}
            fullWidth
            variant="contained"
            color="primary"
          >
            View Users
          </Button>
      </div>
    </Container>
  );
}

export default Admin;
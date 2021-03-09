import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './register.css';

//Paths to be changed accordingly
import logo from '../images/don.png';
import logo1 from '../images/logo.png';



const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  notchedOutline: {
    borderWidth: "2px",
    borderColor: "#000000 !important",
    borderRadius: 20,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    borderRadius: 35,
  },
}));

export default function SignIn() {
  const classes = useStyles();
  return (
    <body bgcolor="white">
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        
         <h3 align="center"><b>Create Account</b></h3>
          <form className={classes.form} validate>
            <TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="name"
              placeholder="Enter your name"
              name="name"
              autoComplete="name"
              autoFocus
            />
	  		<TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="uid"
              placeholder="Enter User ID"
              name="uid"
              autoComplete="uid"
              autoFocus
            />
	  		<TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="email"
              placeholder="PFW Email"
              name="email"
              autoComplete="email"
              autoFocus
            />
       		<TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="password1"
	  			type="password"
              placeholder="Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
	  		<TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="password2"
	  			type="password"
              placeholder="Re-Enter Password"
              name="password"
              autoComplete="password"
              autoFocus
            />
	  		
	  		<TextField
	  			
              variant="outlined"
              margin="normal"
              required
              fullWidth
              InputProps={{
                classes: {
                  notchedOutline: classes.notchedOutline
                }
              }}
              id="phone"
              placeholder="Enter Phone Number"
              name="phone"
              autoComplete="phone"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: 'black', color: "#D4AB39" }}
              className={classes.submit}
            >
              Sign Up
          </Button>


            <Grid container>
              <Grid item xs align="center">
                <Link href="login.js" variant="body2" style={{ color: 'black' }}>
                  {"Login"}
                </Link>
              </Grid>
              
            </Grid>
          </form>
        

      </Container>
    </body>
  );
}
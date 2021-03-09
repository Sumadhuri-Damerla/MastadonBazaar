import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './forgotpassword.css';

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
	  <br/><br/>
	  <h2 align="center"><b>Forgot Password</b></h2>
        <div className={classes.paper} >
         
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
              id="forgot"
              placeholder="Enter your PFW Email Address"
              name="forgot"
              autoComplete="forgot"
              autoFocus
            />
       


            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ background: 'black', color: "#D4AB39" }}
              className={classes.submit}
            >
              Reset
          </Button>


            <Grid container>
              <Grid item xs align="center">
                <Link href="login.js" variant="body2" style={{ color: 'black' }}>
                  {"Login"}
                </Link>
              </Grid>
              
            </Grid>
          </form>
        </div>

      </Container>
    </body>
  );
}
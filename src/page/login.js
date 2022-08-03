import React, { Component, useState } from 'react';
import { withStyles } from '@material-ui/core/styles';

import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  TextField,
} from '@material-ui/core'



// class LogIn extends React.Component {
    

//     render() {
//         return(
//             <></>
//         );
//     }
// }

function LogIn(props) {
    // state 정의 : useState() 훅 사용.
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');

    // props 정의 : theme
    const { classes } = props;

    function handleChange(e) {
        switch(e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;
            case 'password':
                setPassword(e.target.value);
                break;
            default:
                break;
        }
    }

    function handleLogin() {
        console.log(email, password);
    }

    return(
        <div className={classes.root}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Grid className={classes.logo}>
                    <img 
                        src={'/image/logo192.png'}
                        alt="Logo"
                        title="Product Managing Web Project"
                        draggable={false}
                    />
                    </Grid>

                    <form className={classes.form} noValidate>
                    <TextField
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        label={'Email Address'}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete="off"
                        autoFocus
                    />
                    <TextField
                        id="password"
                        name="password"
                        type="password"
                        onChange={handleChange}
                        value={password}
                        label={'Password'}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        autoComplete="off"
                    />
                    {message!==''
                        ? (<p className={classes.errorMessage}>{message}</p>)    
                        : (<div style={{height: 36}}></div>)
                    }
                    <Button
                        type="submit"
                        onClick={handleLogin}
                        className={classes.submit}
                        variant="contained"
                        fullWidth
                    >
                        {'SIGN IN'}
                    </Button>
                    </form>
                </div>
            </Container>
        </div>
    );
}

const styles = theme => ({
    root: {
      display: 'flex',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#dadada',
        },
        '&.Mui-focused fieldset': {
          borderColor: '#7579E7',
        },
        '&:hover fieldset': {
          borderColor: '#7579E7',
        },
      },
      '& .MuiInputBase-input' : {
        backgroundColor: '#fff'
      },
      '& .MuiInputLabel-root.Mui-focused' : {
        color: '#7579E7',
      },
    },
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    form: {
      width: '100%',
      marginTop: theme.spacing(1),
    },
    logo: {
      margin: theme.spacing(4),
      marginBottom: theme.spacing(7),
    },
    submit: {
      fontFamily: 'Work Sans',
      fontSize: 20,
      backgroundColor: "#7579E7",
      color: "#ffffff",
      '&:hover': {
        backgroundColor: "#7579E7",
      },
    },
    errorMessage: {
      color: "red"
    },
})

export default withStyles(styles)(LogIn);
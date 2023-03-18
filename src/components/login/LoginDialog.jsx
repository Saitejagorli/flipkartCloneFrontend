import { useState, useContext } from 'react';
import { Dialog, Box, Typography, TextField, styled, Button } from '@mui/material';

import { DataContext } from '../../context/DataProvider';
import { authenticateSignup } from '../../service/api';
import { authenticateLogin } from '../../service/api';

const Component = styled(Box)`
 height:80vh;
 width:90vh;
`;
const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:83%;
width:30%;
padding:40px 35px ;
& > p, & >h5{
    color:#FFFF;
    font-weight:600;
}

`;
const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:0px 35px 35px;
 & > div, & > button , & > p {
    margin-top:20px;
 }
`;

const Loginbutton = styled(Button)`
text-transform:none;
color:#fff;
background:#FB6418;
height:48px;
border-radius:2px;
&:hover{
    background:#FB6418;
}
`;
const RequestOtp = styled(Button)`
text-transform:none;
color:#2874f0;
background:#fff;
height:48px;
border-radius:2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 /20%);
`;
const Text = styled(Typography)`
  font-size:12px;
  color:#878787;
`;

const Createaccount = styled(Typography)`
font-size:14px;
text-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;

const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:600;
`;

const Accountintialvalue = {
    login: {
        view: "login",
        heading: "Login",
        subHeading: "Get access to your Orders, Wishlist and Recommendations"
    },
    signup: {
        view: "signup",
        heading: "Looks like you're new here",
        subHeading: "signup with your mobile number to get started"
    }
}

const signupInitialvalues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    password: ''
}

const LoginDialog = ({ open, setopen }) => {
    const [account, toggleaccount] = useState(Accountintialvalue.login);
    const [signup, setsignup] = useState(signupInitialvalues);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);
    const { setAccount } = useContext(DataContext);
    const handleClose = () => {
        setopen(false);
        toggleaccount(Accountintialvalue.login);
        setError(false);
    }
    const togglesignup = () => {
        toggleaccount(Accountintialvalue.signup);
    }
    const onInputChange = (e) => {
        setsignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }
    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });

    }
    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) return;
        handleClose();
        setAccount(signup.username)
    }
    const loginUser = async () => {
        let response = await authenticateLogin(login);

        if (response.status === 200) {
            handleClose();
            setAccount(login.username);
        } else {
            setError(true);
        }


    }
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }} >
            <Component >
                <Box style={{ display: "flex", height: "100%" }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography>{account.subHeading}</Typography>
                    </Image>
                    {account.view === 'login' ?
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='username' label='Enter Username' />
                            <TextField variant='standard' onChange={(e) => { onValueChange(e) }} name='password' label='Enter Password' />
                            {
                                error && <Error>Please enter valid username or password</Error>
                            }

                            <Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <Loginbutton onClick={loginUser}>Login</Loginbutton>
                            <Typography style={{ textAlign: 'center' }}>OR</Typography>
                            <RequestOtp>Request OTP</RequestOtp>
                            <Createaccount onClick={togglesignup}>New to Flipkart? Create an account</Createaccount>
                        </Wrapper>
                        :
                        <Wrapper>
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="firstname" label='Enter First Name' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="lastname" label='Enter Last Name' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="username" label='Enter UserName' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="email" label='Enter Email' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="password" label='Enter Password' />
                            <TextField variant='standard' onChange={(e) => onInputChange(e)} name="phone" label='Enter Phone' />
                            <Loginbutton onClick={signupUser}>Continue</Loginbutton>

                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
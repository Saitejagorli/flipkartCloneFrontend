import { useState, useContext } from 'react';
import { Box, Button, Typography, styled,Badge } from '@mui/material';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

//components
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile.jsx';

const Wrapper = styled(Box)(({theme})=>({
    display : 'flex',
    margin: '0 3% 0 auto',
    '& > button, & > p , & > div ':{
       marginRight:'40px',
       fontSize:'16px',
       alignItems:'center'
    },
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));

const Loggedbutton = styled(Button)`
text-transform:none;
color:#2874f0;
background-color:#fff;
padding:5px 40px;
border-radius:2px;
box-shadow:none;
font-weight:600;
height:32px;
`;
const CustomWrapper = styled(Link)(({theme})=>({
    marginTop:'5px',
    textDecoration:'none',
    color:'inherit',
    display:'flex',
    [theme.breakpoints.down('md')]:{
        display:'block'
    }
}));
const Custombuttons = () => {
    const [open, setopen] = useState(false);
    function Opendialog() {
        setopen(true);
    }
    const { account } = useContext(DataContext);
    const { setAccount } = useContext(DataContext);
    const {cartItems} = useSelector(state=>state.cart);
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <Loggedbutton variant="contained" onClick={Opendialog}>Login</Loggedbutton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>
            
            <CustomWrapper to="/cart">
                <Badge badgeContent={cartItems?.length} color="secondary">
                <FaShoppingCart size='1.2em' />
                </Badge>
                <Typography style={{marginLeft:5}}>&nbsp;Cart</Typography>
            </CustomWrapper>
            
            <LoginDialog open={open} setopen={setopen} />
        </Wrapper>
    )
}

export default Custombuttons;
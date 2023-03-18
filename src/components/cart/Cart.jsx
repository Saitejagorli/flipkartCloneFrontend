
import { useSelector } from "react-redux";
import { Grid, Box, Typography, Button, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

import CartItem from './CartItem';
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";

const Header = styled(Box)`
padding : 15px 24px;
background:#fff;
`;
const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }
}));
const ButtonWrapper = styled(Box)`
padding:16px 22px;
background-color:#fff;
bod-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
border-top:1px solid #f0f0f0;
`;
const StyledButton = styled(Button)`
display:flex;
margin-left:auto;
background-color:#fb641b;
color:#fff;
width:250px;
border-radius:2px;
&:hover{
    background-color:#fb641b;
    color:#fff;
}
`;
const LeftComponent=styled(Grid)(({theme})=>({
 [theme.breakpoints.down('md')]:{
    marginBottom:15
 }
}));
const Cart = () => {
    const { cartItems } = useSelector(state => state.cart);
    const navigate = useNavigate();
    const ordered = () => {
        navigate('/ordered');
    }
    return (
        <>{
            cartItems.length ?
                <Container container>
                    <LeftComponent item lg={9} md={9} sm={12} xs={12}>
                        <Header style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography>My Cart ({cartItems.length})</Typography>
                            <Typography style={{fontSize:14}}>From saved adress</Typography>
                            <Button style={{ fontSize:"12px",textTransform: 'none',width:'130px',height:"40px",fontWeight:600,border:'1px solid #ECECEC' }} variant='outlined'>Enter Delivery Pincode</Button>
                        </Header>
                        {
                            cartItems.map(item => (
                                <CartItem product={item} />
                            ))
                        }
                        <ButtonWrapper>
                            <StyledButton onClick={ordered}>PLACE ORDER</StyledButton>
                        </ButtonWrapper>
                    </LeftComponent>
                    <Grid item lg={3} md={3} sm={12} xs={12}>
                        <TotalView cartItems={cartItems} />
                    </Grid>

                </Container>
                : 
                
                    <EmptyCart />
                
        }
        </>
    )
}

export default Cart;
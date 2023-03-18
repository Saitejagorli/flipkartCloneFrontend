
import { Box, Typography, styled } from "@mui/material"

const Component= styled(Box)(({theme})=>({
    height:'65vh',
    width:'80%',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
   backgroundColor:'#fff',
   margin:'100px 120px',
   [theme.breakpoints.down('md')]:{
    magin:'100px 20px',
    width:'80%'
   }
    
}));
const Container = styled(Box)`
text-align:center;
`;
const EmptyCart = () => {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
    return (

        
            <Component>
                <Container>
                <img style={{width:'15%'}} src={imgurl} alt="cart" />
                <Typography>Your Cart is Empty!</Typography>
                <Typography>Add items to Cart</Typography>
                </Container>
            </Component>
        

    )
}

export default EmptyCart;
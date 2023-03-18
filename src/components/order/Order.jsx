
import {Box,styled,Typography} from "@mui/material";
import Confetti from "react-confetti";
import React, { useEffect } from 'react';


import order from "../../images/order-confirmed.png";

const Wrapper = styled(Box)`
display:flex;
justify-content:center;
margin-top:100px;
`;
const Img = styled('img')({
    width:500
});
const Order = () => {


  useEffect(() => {
    const timeoutId = setTimeout(() => {
        window.location.href = '/';
    }, 10000);

    // Clean up the timeout if the component unmounts before it fires
    return () => clearTimeout(timeoutId);
},[]);
    return(
        <Wrapper>
               <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={true}
          numberOfPieces={200}
        />
            <Box style={{textAlign:'center'}}>
            <Img src={order} alt="order-confirmed" />
            <Typography>Ordered Successfully </Typography>
            </Box>
        </Wrapper>
    )
}
export default Order;
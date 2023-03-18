import { Box, Typography, styled } from "@mui/material";
import { useEffect, useState } from "react";

const Heading = styled(Box)`
padding:15px 20px;
border-bottom:1px solid #f0f0f0;
color:#878787;
`;
const Container = styled(Box)`
padding:15px 20px;
& > p {
    margin-bottom:20px;
    font-size:14px;
}
& > h6{
    margin-bottom:20px;
}

`;
const Price = styled(Box)`
float:right;
`;

const TotalView = ({ cartItems }) => {
    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);
    useEffect(()=>{
        totalAmount();
    },[cartItems])
    const totalAmount=()=>{
        let price=0,discount=0;
        cartItems.map(item=>{
            price+=item.price.mrp;
            discount+=(item.price.mrp - item.price.cost);
        });
        setPrice(price);
        setDiscount(discount);
    }
    return (
        <Box style={{ backgroundColor: '#fff', marginLeft: "10px", }}>
            <Heading>
                <Typography>Price Details</Typography>
            </Heading>
            <Container>

                <Typography>Price ({cartItems?.length} items)
                    <Price component="span">
                        {price}
                    </Price>
                </Typography>

                <Typography>Discount 
                    <Price component="span">
                        -{discount}
                    </Price>
                </Typography>

                <Typography>Delivery Charges 
                    <Price component="span">
                        ₹40
                    </Price>
                </Typography>

                <Typography variant="h6">Total Amount
                    <Price component="span">
                    ₹{price-discount+40}
                    </Price>
                </Typography>

                <Typography style={{color:"green", fontWeight:'500',fontSize:12}}>
                   you will save ₹{discount-40} on this order
                </Typography>

            </Container>
        </Box>
    )
}
export default TotalView;
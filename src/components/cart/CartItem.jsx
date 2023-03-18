
import { Box,styled, Typography ,Button} from "@mui/material";
import { useDispatch } from "react-redux";

import {addEllipsis} from "../../utils/common-utils";
import GroupedButton from "./GroupedButton";
import {removeFromCart} from "../../redux/actions/cartAction";

const Component = styled(Box)`
border-top:1px solid #f0f0f0;
display:flex;
background:#fff;
`;
const LeftComponent = styled(Box)`
margin:20px;
display:flex;
flex-direction:column;
`;
const SmallText = styled(Typography)`
color:#878787;
font-size:14px;
margin-top:10px;
`;
const RemoveButton = styled(Button)`
margin-top:20px;
font-size:16px;
color:#000;
&:hover{
    color:#2874f0;
}
`;


const CartItem = ({product}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const dispatch = useDispatch();
    const removeItemFromCart= (id) => {
        dispatch(removeFromCart(id));
    }
    return(
        <Component>
            <LeftComponent>
                <img src={product.url} style={{height:110,width:110}} alt='item' />
                <GroupedButton />
            </LeftComponent>
            <Box style={{margin:20}}>
                <Typography>{addEllipsis(product.title.longTitle)}</Typography>
                <SmallText>seller:RetailNet
                    <Box component='span'>
                        <img src={fassured} alt='flipkart' style={{width:50,marginLeft:10 }} />
                    </Box>
                </SmallText>
                <Typography style={{margin:'20px 0'}}>
                <Box component='span' style={{ fonWeight:600,fontSize:18}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#878787' }}>₹<strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{ color: '#388E3C' }}>{product.price.discount}</Box>
            </Typography>
            <RemoveButton onClick={()=>removeItemFromCart(product.id)}>Remove</RemoveButton>
            
            </Box>
            
        </Component>
    )
}

export default CartItem;

import {Box,styled,Button} from '@mui/material';
import {FaShoppingCart} from 'react-icons/fa';
import {MdFlashOn} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { addToCart } from '../../redux/actions/cartAction';



const LeftComponent = styled(Box)(({theme})=>({
    minWidth:'40%',
    padding : '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding:'20px 40px'
    }
}));
const Image = styled('img')({
    padding:'15px',
    width:'95%'
});
const StyledButton = styled(Button)(({theme})=>({
    width:'48%',
    height:'50px',
    borderRadius:'2px',
    [theme.breakpoints.down('lg')]:{
        width:'46%'
    },
    [theme.breakpoints.down('sm')]:{
        width:'48%'
    }
}));

const ActionItem = ({product}) => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;
    const addItemToCart = () => {
        dispatch(addToCart(id,1));
        navigate("/cart");
    }
    const ordered = () => {
        navigate('/ordered');
    }
    return(
        <LeftComponent>
            <Box style={{padding:'15px 20px', border:'1px solid #f0f0f0',marginRight:10}}>
            <Image src={product.detailUrl} alt='product' />
            </Box>
            <StyledButton style={{marginRight:10,background:'#ff9f00'}} onClick={addItemToCart} variant='contained'><FaShoppingCart  />&nbsp;Add to Cart</StyledButton>
            <StyledButton  style={{background:'#fb541b'}} onClick={ordered}  variant='contained'><MdFlashOn size={20}/>&nbsp;Buy Now</StyledButton>
        </LeftComponent>
    )
}
export default ActionItem;
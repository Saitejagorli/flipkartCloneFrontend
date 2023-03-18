// eslint-disable-next-line
import { InputBase, styled, Box,List, ListItem } from "@mui/material";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { Link } from "react-router-dom";

import { getProducts } from "../../redux/actions/productsAction";


const SearchBox = styled(Box)`
background-color:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
`;
const InputSearch = styled(InputBase)`
padding-left:10px; 
width : 100%;
font-size:unset;
`;
const ListWrapper = styled(List)`
position:absolute;
background:#FFFFFF;
color:#000;
margin-top:38px;
`;
const Search = () => {
  const [text,setText]=useState('');
  const {products} = useSelector(state => state.getProducts);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getProducts);
  },[dispatch])
  const getText = (text) => {
    setText(text);

  }
  return (

    <SearchBox style={{ display: "flex" }}>
      <InputSearch placeholder="search for products,design and more"
      onChange={(e)=> getText(e.target.value)}
      value={text}>
      </InputSearch>
      <Box>
        <FaSearch style={{ color: "#2874f0", padding: 8 }} />
      </Box>
     {
      text &&
       <ListWrapper>
        {
          products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
            <ListItem>
              <Link
              to={`/product/${product.id}`}
              onClick={()=>setText('')}
              style={{textDecoration:'none',}}>
              {product.title.longTitle}
              
              </Link>
            </ListItem>
          ))
        }
      </ListWrapper>
     }
    </SearchBox>

  )
}

export default Search;
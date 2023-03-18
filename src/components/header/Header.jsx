// eslint-disable-next-line
import { AppBar, Drawer, Toolbar, styled, Box,List,ListItem, Typography, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";

//components
import Search from "./Search";
import Custombuttons from "./Custombuttons";
import { MdMenu } from "react-icons/md";

const Styledhead = styled(AppBar)`
background-color:#2874f0;
height :55px;
`;
const Component = styled(Link)`
margin-left:12%;
line-height:0;
text-decoration:none;
color:inherit;
`;
const SubHeading = styled(Typography)`
font-size:10px;
font-style:italic;
`;
const Plusimage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 2
});
const Wrapper = styled(Box)(({ theme }) => ({
    marginLeft: "20px",
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));
const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]: {
        display: 'block'
    }
}));





const Header = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true);
    }
    const handelClose = () => {
        setOpen(false);
    }
    const list = () => (
        <Box style={{width:200}} onClick={handelClose}>
            <List>
              <ListItem >
                  <Custombuttons />
              </ListItem>
          </List>
        </Box>
      )
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <Styledhead>
            <Toolbar style={{ minHeight: 55 }}>
                <MenuButton onClick={handleOpen}>
                    <MdMenu size={25} />
                </MenuButton>

                <Drawer open={open} onClose={handelClose}>
                    {list()}
                </Drawer>

                <Component to='/'>
                    <img src={logoURL} alt="logo" style={{ width: 75 }} />
                    <Box style={{ display: "flex" }} >
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{ color: "#FFE500" }}>Plus</Box>
                        </SubHeading>
                        <Plusimage src={subURL} alt="sub-logo" />
                    </Box>
                </Component>
                <Search />
                <Wrapper >
                    <Custombuttons />
                </Wrapper>
            </Toolbar>
        </Styledhead>

    )
}

export default Header;
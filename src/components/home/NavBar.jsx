
import { Box, styled, Typography } from '@mui/material';

import { navData } from '../constants/Navdata';

const Component = styled(Box)(({theme})=>({
    display:'flex',
    margin:'55px 130px 0',
    justifyContent:'space-between',
    overflow:'hidden',
    [theme.breakpoints.down('lg')]:{
        margin:0
    }
}));
const Containier = styled(Box)`
padding:12px 8px;
text-align:center;
`;
const Text = styled(Typography)`
font-size:14px;
font-weight:600;
font-family:inherit;
`;
const NavBar = () => {
    return (
        <Box style={{background:'#fff'}}>
        <Component>
            {
                navData.map((data) => {
                    return (
                        <Containier>
                            <img src={data.url} alt={data.text} style={{ width: 64 }} />
                            <Text>{data.text}</Text>
                        </Containier>
                    )
                })
            }
        </Component>
        </Box>
    )
}

export default NavBar;
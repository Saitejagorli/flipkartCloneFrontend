import { useState } from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import { FaPowerOff } from 'react-icons/fa'


const Component = styled(Menu)`
margin-top : 5px;
`;
const Logout = styled(Typography)`
font-size :14px;
margin-left:5px;
`;
const Profile = ({ account, setAccount }) => {
  const [open, setOpen] = useState(false);
  const handleClick = (event) => {
    setOpen(event.currentTarget);
  }
  const handleClose = () => {
    setOpen(false);
  }
  const logout = () => {
    setAccount(false);
  }
  return (
    <>
      <Box>
        <Typography onClick={handleClick} style={{ marinTop: 2, cursor: "pointer" }} >{account}</Typography>
        <Component

          anchorEl={open}
          open={Boolean(open)}
          onClose={handleClose}

        >
          <MenuItem onClick={() => { handleClose(); logout(); }}>
            <FaPowerOff style={{ color: "#2874f0" }} />
            <Typography>
              <Logout >Logout</Logout>
            </Typography>
          </MenuItem>
        </ Component>
      </Box>
    </>
  )
}
export default Profile;
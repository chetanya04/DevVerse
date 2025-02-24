import React, { useState } from "react";
import styles from "../../HomePage.module.css"
import {
  Box,
  Menu,
  MenuItem,
  Typography,
  Divider,
  Avatar,
} from "@mui/material";

const AccountDropdown = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box component="span">
      <a
        href="#"
        onClick={handleClick}
        className={styles['home']}

      >
        Account
      </a>
      <Menu
        id="account-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 4,
          sx: {
            width: 200,
            mt: 1.5,
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar sx={{ width: 24, height: 24, mr: 1 }} /> {/* Icon */}
          <Typography variant="body2" fontWeight="500">
            Log In
          </Typography>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{ width: 24, height: 24, mr: 1 }}
            src="/icons/wallet-icon.png"
          /> {/* Icon */}
          <Typography variant="body2" fontWeight="500">
            My Wallet
          </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar
            sx={{ width: 24, height: 24, mr: 1 }}
            src="/icons/history-icon.png"
          /> {/* Icon */}
          <Typography variant="body2" fontWeight="500">
            Payment History
          </Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default AccountDropdown;
    
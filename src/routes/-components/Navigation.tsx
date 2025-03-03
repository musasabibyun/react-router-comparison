import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMouseEnter = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setAnchorEl(null);
    }, 100);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          React Router App
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Button
              color="inherit"
              aria-controls={open ? "concerts-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              Concerts
            </Button>
            <Menu
              id="concerts-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              onMouseLeave={handleMouseLeave}
              onMouseEnter={handleMouseEnter}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem component={Link} to="/concerts/trending">
                Trending
              </MenuItem>
              <MenuItem component={Link} to="/concerts/tokyo">
                Tokyo
              </MenuItem>
              <MenuItem component={Link} to="/concerts/korea">
                Korea
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

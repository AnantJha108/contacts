import { AppBar, Typography, Toolbar, IconButton, Avatar, Stack, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Header = (props) => {
    return (
        <Box>
            <AppBar position="static" color="transparent" sx={{ color: "black", boxShadow: 0 }}>
                <Toolbar>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Avatar sx={{ bgcolor: "#1976d2", marginLeft: "10px" }}/>
                    <Typography variant="h6" sx={{ flexGrow: 0.1, marginLeft: "16px" }}>Contacts</Typography>
                    <Stack sx={{flexGrow:1}}>
                    <div className="col-8 ms-5">
                        <input type="text" onChange={(e) => props.setSearch(e.target.value)} placeholder="Search" className="form-control" />
                    </div>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                        <HelpOutlineIcon />
                        <SettingsIcon />
                        <AppsIcon />
                    </Stack>
                    <Avatar sx={{ bgcolor: "red", marginLeft: "10px" }}>
                        A
                    </Avatar>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;
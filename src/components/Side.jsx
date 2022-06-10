import { Button, Divider, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import SystemUpdateAltOutlinedIcon from '@mui/icons-material/SystemUpdateAltOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import MergeOutlinedIcon from '@mui/icons-material/MergeOutlined';

const Side = () => {
    return (
        <List>
            <Button variant="outlined" sx={{ borderRadius: 20, color: 'black', boxShadow: 3, textTransform: "capitalize", marginBottom: 2 }}>
                <AddIcon sx={{ fontSize: 36, color: "red" }} /> Create Contact
            </Button>
            <ListItem  disablePadding>
                <ListItemButton>
                    <AccountCircleOutlinedIcon /> <ListItemText sx={{ marginLeft: 1 }}> Contacts</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <HistoryOutlinedIcon /> <ListItemText sx={{ marginLeft: 1 }}>Frequently Contacted</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <MergeOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Merge and fix</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
                <ListItemButton>
                    <KeyboardArrowUpOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Labels</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <AddOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Create Label</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
                <ListItemButton>
                    <FileDownloadOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Import</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <CloudDownloadOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Export</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <LocalPrintshopOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Print</ListItemText>
                </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem  disablePadding>
                <ListItemButton>
                    <SystemUpdateAltOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Other Contact</ListItemText>
                </ListItemButton>
            </ListItem>
            <ListItem  disablePadding>
                <ListItemButton>
                    <DeleteOutlineOutlinedIcon /><ListItemText sx={{ marginLeft: 1 }}>Bin</ListItemText>
                </ListItemButton>
            </ListItem>
        </List>
    )
}
export default Side;
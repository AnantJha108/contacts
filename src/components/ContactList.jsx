import { Avatar, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

const List = (props) => {
    const handleDelete=(id)=>{
        console.log("this is table data" +id);
        props.handleDelete(id);
    }
    return (
        <TableRow hover="true">
            <TableCell>
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: "green", width:32, height:32 }}>{props.value.name[0]}</Avatar>
                    <Typography sx={{ paddingTop: 0.5 }}>{props.value.name}</Typography>
                </Stack>
            </TableCell>
            <TableCell>{props.value.email}</TableCell>
            <TableCell>{props.value.number}</TableCell>
            <TableCell>{props.value.contact1}</TableCell>
            <TableCell>{props.value.job}</TableCell>
            <TableCell>
                <IconButton color="error">
                    <DeleteIcon onClick={() =>handleDelete(props.id)}/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}


const ContactList = (props) => {
    const handleDelete=(id)=>{
        props.handleDelete(id);
    }
    return (
        <Table stickyHeader>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone Number</TableCell>
                    <TableCell>Alternate Number</TableCell>
                    <TableCell>Job title & Company</TableCell>
                    <TableCell>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    (props.searchData.length > 0)?
                    props.searchData.map((value, index) =><List key={index} handleDelete={(id) =>handleDelete(id)} value={value} />):
                    props.data.map((value, index) =><List key={index} handleDelete={(id) =>handleDelete(id)} value={value} />)
                }
            </TableBody>
        </Table>
    )
}

export default ContactList;
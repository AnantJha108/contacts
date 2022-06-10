import { Avatar, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteIcon from '@mui/icons-material/Delete';

const List = (value) => {
    const handleDelete=(id)=>{
        console.log("this is table data" +id);
        value.handleDelete(id);
    }
    return (
        <TableRow hover="true">
            <TableCell>
                <Stack direction="row" spacing={2}>
                    <Avatar sx={{ bgcolor: "green", width:32, height:32 }}>{value.name[0]}</Avatar>
                    <Typography sx={{ paddingTop: 0.5 }}>{value.name}</Typography>
                </Stack>
            </TableCell>
            <TableCell>{value.email}</TableCell>
            <TableCell>{value.number}</TableCell>
            <TableCell>{value.contact1}</TableCell>
            <TableCell>{value.job}</TableCell>
            <TableCell>
                <IconButton color="error">
                    <DeleteIcon onClick={() =>handleDelete(value.id)}/>
                </IconButton>
            </TableCell>
        </TableRow>
    )
}


const ContactList = (value) => {
    const handleDelete=(id)=>{
        value.handleDelete(id);
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
                    value.data.map((value, index) => (
                        <List key={index} handleDelete={(id) =>handleDelete(id)} id={value.id} name={value.name} lastname={value.lastname} number={value.number} contact1={value.contact1} email={value.email} job={value.job} />
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default ContactList;
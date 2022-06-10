import { Dialog, DialogContent, DialogTitle, Fab, TextField, Box, DialogActions, Button } from '@mui/material';
import './App.css';
import Content from './components/Content';
import Header from './components/Header';
import AddIcon from '@mui/icons-material/Add';
import { useEffect, useState } from 'react';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import BusinessOutlinedIcon from '@mui/icons-material/BusinessOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CakeOutlinedIcon from '@mui/icons-material/CakeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import contactData from './Data/Contact';


function App() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");
  const [birth, setBirth] = useState("");
  const [notes, setNotes] = useState("");
  const [contact, setContact] = useState("");
  const [contact1, setContact1] = useState("");
  const [tempData, setTempData] = useState([]);
  const [data, setData] = useState(() => {

  let saveData = localStorage.getItem("data")
  console.log(contactData);
  if (saveData) {
    return JSON.parse(saveData);
  }
  else {
    return [];
  }
});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    localStorage.setItem("data",JSON.stringify(data))
  },[data]);

  const handleInsert = () => {
    let newArray = { id: data.length + 1, name: name, number: contact,contact1:contact1, email: email, job: job, company: company, notes: notes, birth: birth, lastname: lastname };
    setData([...data, newArray]);
    console.log(newArray);
    handleClose();
  }

  const handleDelete=(id)=>{
    let newArray =data.filter((item) => item.id !== id);
    setData(newArray);
  }

  const handleSearching = (searchData) =>{
    if(searchData !== "") {
      setTempData(data.filter((item) =>{
        if(item.name.toLowercase().includes(searchData.toLowercase())){
          return item;
        }
      }));
      setData(tempData)
    }else{
      setData(data);
    }
  }

  return (
    <>
      <Header search={(d) => handleSearching(d)}/>
      <Content data={data} handleDelete={(id) => handleDelete(id)} />
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle>Create Contact</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <PeopleOutlineOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="First Name" size='small' value={name} onChange={(e) => setName(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField variant='standard' label="Surname" size='small' value={lastname} onChange={(e) => setLastname(e.target.value)} sx={{ marginLeft: 4 }} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <BusinessOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Company" size='small' value={company} onChange={(e) => setCompany(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <TextField variant='standard' label="Job title" size='small' sx={{ marginLeft: 4 }} value={job} onChange={(e) => setJob(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <EmailOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Email" size='small' value={email} onChange={(e) => setEmail(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CallOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Phone" size='small' value={contact} onChange={(e) => setContact(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CallOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Alternate Number" size='small' value={contact1} onChange={(e) => setContact1(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <CakeOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Birthday" size='small' value={birth} onChange={(e) => setBirth(e.target.value)} fullWidth />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <DescriptionOutlinedIcon sx={{ mr: 1, color: "gray" }} />
            <TextField variant='standard' label="Notes" size='small' value={notes} onChange={(e) => setNotes(e.target.value)} fullWidth />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => handleInsert()} variant='contained' size="small">Save</Button>
        </DialogActions>
      </Dialog>
      <Fab color="primary" onClick={handleClickOpen} aria-label="add" sx={{ position: "absolute", right: 60, bottom: 30 }}>
        <AddIcon />
      </Fab>
    </>
  );
}

export default App;

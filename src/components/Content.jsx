import { Grid ,Container} from "@mui/material"
import Side from "./Side";
import ContactList from "./ContactList";

const Content = (props) =>{
    const handleDelete = (id) =>{
        props.handleDelete(id);
    }
    return(
        <Container maxWidth="xl" sx={{width:"100%",height:"100vh",position:"fixed"}}>
            <Grid container>
                <Grid item lg={2}>
                    <Side/>
                </Grid>
                <Grid item lg={10}  sx={{width:"100%",height:"100vh",overflow:'auto'}}>
                    <ContactList data={props.data} handleDelete={(id) =>handleDelete(id)}/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Content;
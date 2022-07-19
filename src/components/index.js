import React, { useState } from 'react'
import axios from 'axios'
import { 
    ButtonGroup,
    TextField,
    Button,
    Box 
} from '@mui/material';

function familyTree(props) {

    const [familyname, setFamilyName] = useState("")
    const [data, setData] = useState([]);
    const [familyNameEdit, setfamilyNameEdit] = useState("")
    const [selectednameId, setSelectedNameId] = useState(" ");

    const nameInputChange = (e) => {
      setFamilyName(e.target.value);
    }

    const nameEditInputChange = (e) => {
      setfamilyNameEdit(e.target.value);
    }

    const handleAddButton = async () => {
        try {
            const detail = {
                familyname: familyname,
                userId: props.userId
            }
            if (familyname !== "") {
                const event = await axios.post('/names', detail)
                if (event.data.Type === "Success") {
                  setFamilyName("");
                  localStorage.setItem("name", familyTree)
                }
                else {
                    alert("pop")
                }
            }
        }
        catch (error) {
            alert(error)
        }

    }



      return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined"  onChange={nameInputChange} value={name}/>
          <ButtonGroup>
          <Button onClick={handleAddButton}>Add</Button>
          <Button>Delete</Button>
          <Button>View</Button>
          </ButtonGroup>
         
        </Box>
      );
    
}

export default familyTree;
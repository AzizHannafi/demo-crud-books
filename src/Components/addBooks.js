import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import  { useState } from 'react'







function AddBooks(props) {



  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [categorie, setCategorie] = useState("");


  const btn_add_book= ()=>{
    const _id = Math.random();
    let book={
      id:_id,
      name :name,
      author: author,
      categorie:categorie
    }
    props.setbooks([...props.books, book])
    console.log(props.books)
   
  }       

  
  
  
  return (
    <Container>
       <div>
       <Stack
          component="form"
          sx={{
            width: '25ch',
          }}
          spacing={2}
          noValidate
          autoComplete="off"
          
    >
      <TextField
        hiddenLabel
        id="filled-hidden-label-small"
       placeholder='Name'
        variant="filled"
        size="small"
        onChange={(event=>{setName(event.target.value)})}
      />
      <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='Author'
        variant="filled"
        onChange={(event=>{setAuthor(event.target.value)})}
      />
        <TextField
        hiddenLabel
        id="filled-hidden-label-normal"
        placeholder='category'
        variant="filled"
        onChange={(event=>{setCategorie(event.target.value)})}
      />

      <Button variant="contained" color="success" onClick={btn_add_book}>
        Add book to List
      </Button>
    </Stack>
    </div>
    </Container>
   
  )
}


export default AddBooks
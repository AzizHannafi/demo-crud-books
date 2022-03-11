import React ,{ useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';


function EditBook(props) {
    
    const [name, setName] = useState();
    const [author, setAuthor] = useState();
    const [categorie, setCategorie] = useState();

    const btn_updateBook= (id)=>{
        
        const _id = Math.random();
        let book={
          id:_id, 
          name :name,
          author: author,
          categorie:categorie
        }
        for(let i=0; i<props.books.length;i++){
         if(props.books[i].id == id){
            console.log('found')
            props.books[i]=book
         }
          props.setbooks([...props.books])
        }
       
  
       
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
                      
                        value={props.name}
                      
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-small"
                        placeholder='Name'
                        variant="filled"
                        size="small"
                       // value={props.name}
                        onChange={
                            (event=>{
                                setName(event.target.value)
                            })}
                    />
                    <TextField
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='Author'
                        variant="filled"
                        //value={props.author}
                        onChange={(event=>{setAuthor(event.target.value)})}
                    />
                        <TextField
                     //   value={props.categorie}
                        hiddenLabel
                        id="filled-hidden-label-normal"
                        placeholder='category'
                        variant="filled"
                        onChange={(event=>{setCategorie(event.target.value)})}
                    />

            <Button variant="contained" color="success"  onClick={()=>{
                if(window.confirm("u gonna update this book ??")){
                    btn_updateBook(props.id)
                  }
               
                }}>
                Edit this book
            </Button>
            </Stack>
        </div>
        </Container>

  )
}

export default EditBook
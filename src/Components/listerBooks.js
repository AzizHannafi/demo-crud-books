import React, { useState,useEffect } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditBook from '../Components/editBooks';
import AddBook from '../Components/addBooks';
import { Container } from '@mui/material';
import { Delete, Edit } from '@material-ui/icons';






function ListerBooks() {
  const [showEditBook, setEditBook] = useState(false);
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [categorie, setcategorie] = useState("");
  const [listBooks, setListBooks] = useState([
    {
      id: "1",
      name: "book 1",
      author: "author 1",
      categorie: "categorie 1",
    },
    {
        id: "2",
        name: "book 2",
        author: "author 2",
        categorie: "categorie 2",
    },
      {
        id: "3",
        name: "book 3",
        author: "author 3",
        categorie: "categorie 3",
    },
    {
        id: "4",
        name: "book 4",
        author: "author 4",
        categorie: "categorie 4",
    },
  ]);
const handleDelete = (id) => {
 
    const smallList = listBooks.filter((list) => list.id != id);
    setListBooks(smallList);
  };
  const handleEdit = () => {
      console.log("book :",id, name,author,categorie)
    };
  

  return (
    <div>
        <Container>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Name &nbsp;</TableCell>
                  <TableCell align="right">  Author&nbsp;</TableCell>
                  <TableCell align="right">Categorie&nbsp;</TableCell>
                  <TableCell> </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { listBooks.map((book) => (
                  <TableRow
                    key={book.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                  
                    <TableCell align="right">{book.name}</TableCell>
                    <TableCell align="right">{book.author}</TableCell>
                    <TableCell align="right">{book.categorie}</TableCell>
                    <TableCell align="right"onClick={()=>{
                      if(window.confirm("u gonna delete this book ?")){
                        handleDelete(book.id)
                      }
                     
                    }}><Delete/></TableCell>
                    <TableCell align="right" onClick={()=>{
                      setid(book.id)
                      setname(book.name)
                      setauthor(book.author)
                      setcategorie(book.categorie)
                      
                    }} ><Edit/></TableCell>
                  </TableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br/>
      <AddBook books={listBooks} setbooks={setListBooks}/> 
      <EditBook books={listBooks} setbooks={setListBooks} id={id} name={name} author={author} categorie={categorie} /> 
      
    </Container>
    
    </div>
  )
}

export default ListerBooks
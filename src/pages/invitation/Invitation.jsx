import React, {useState, useEffect} from 'react';
import { Button } from '@chakra-ui/react';
import '../page.css';
import { useNavigate, Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


function Invitation() {

    const navi = useNavigate();

    const [invi, setInvi] = useState(null)
      
    const LoadEdit =(id) =>{
        navi("/create_invitation/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/invitation/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/invitation").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setInvi(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])

    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_invitation'}>
                    <Button className='main-btn' colorScheme='blue'>  Add New ( + )</Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Title</Th>                            
                            <Th> Files</Th>
                            <Th> Message </Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody>
                        {  invi &&
                             invi.map(item=>(
                                <Tr key={item.id} >
                                    <Td>{item.id}</Td>
                                    <Td>{item.title}</Td>
                                    <Td>{item.files}</Td>
                                    <Td>{item.message}</Td>
                                     
                                    <Td>
                                        <Button onClick={()=>{LoadEdit(item.id)}} colorScheme='blue'> Edit </Button>
                                        <Button onClick={()=>{RemoveFunc(item.id)}} colorScheme='red' > Delete </Button>
                                    </Td>
                                </Tr>
                            ))                                                            
                        }         
                        </Tbody>                        
                    </Table>
                </TableContainer>
            </div>
        </div>
        </section>
     
    )
}

export default Invitation;
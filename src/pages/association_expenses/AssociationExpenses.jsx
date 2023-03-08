import React,{useState, useEffect} from 'react';
import { Button } from '@chakra-ui/react';
import '../page.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'


function AssociationExpenses() {

    const navi = useNavigate();

    const [assexp, setAssexp] = useState(null)
      
    const LoadEdit =(id) =>{
        navi("/create_ass_expenses/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/assexpenses/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/assexpenses").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setAssexp(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])

  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_ass_expenses'}>
                    <Button className='main-btn' colorScheme='blue'>  Add New ( + ) </Button>
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
                        {   
                            assexp &&
                             assexp.map(item=>(
                                <Tr key={item.id} >
                                    <Td>{item.id}</Td>
                                    <Td>{item.title}</Td>
                                    <Td>{item.files}</Td>
                                    <Td >{item.message}</Td>                                     
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

export default AssociationExpenses;
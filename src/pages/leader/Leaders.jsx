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
import moment from 'moment';


function Leaders() {

    const navi = useNavigate();

    const [lead, setLead] = useState(null)
      
    const LoadEdit =(id) =>{
        navi("/create_leaders/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/leaders/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/leaders").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setLead(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])
  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_Leaders'}>
                    <Button className='main-btn' colorScheme='blue'>Create Leaders</Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Name</Th>
                            <Th> Posting </Th>
                            <Th> From</Th>
                            <Th> To</Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody> 
                        {   lead &&
                             lead.map(item=>(
                                <Tr key={item.id} >
                                    <Td>{item.id}</Td>
                                    <Td>{item.name}</Td>
                                    <Td>{item.posting.label}</Td>
                                    <Td>{moment(item.fromdate).utc().format('DD-MM-YYYY')} </Td>
                                    <Td>{moment(item.todate).utc().format('DD-MM-YYYY')} </Td>
                                     
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

export default Leaders;
import React, { useState, useEffect} from 'react';
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


function Members() {
  
    const navi = useNavigate();

    const [member, setMember] = useState(null);
    
    const LoadEdit =(id) =>{
        navi("/create_members/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/members/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/members").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setMember(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])

    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_members'}>
                    <Button className='main-btn' colorScheme='blue'> Add New  ( + ) </Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Name</Th>
                            <Th> MobileNumber </Th>
                            <Th> CompanyName</Th>
                            <Th> Address</Th>
                            <Th> Image</Th>
                            <Th> Status</Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody >  
                            {                 
                                member && 
                                    member.map(item=>(
                                    <Tr key={item.id} >
                                        <Td>{item.id}</Td>
                                        <Td>{item.name}</Td>
                                        <Td>{item.mobilenum}</Td>
                                        <Td>{item.companyname}</Td>
                                        <Td>{item.address}</Td>
                                        <Td>{item.img}</Td>
                                        <Td>{item.status}</Td>
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

export default Members;
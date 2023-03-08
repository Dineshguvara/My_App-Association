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
import moment from 'moment';


function MembersPayment() {
    
    const navi = useNavigate();

    const [mempay, setMempay] = useState(null);
    
    const LoadEdit =(id) =>{
        navi("/create_members_payment/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/membersPay/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/membersPay").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setMempay(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])
    

    return  (   
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_members_payment'}>
                    <Button className='main-btn' colorScheme='blue'>  Add New  ( + )</Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Image</Th>
                            <Th> Date </Th>
                            <Th> Description</Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody>
                              {
                                mempay && 
                                mempay.map(item=>(
                                    <Tr key={item.id}>
                                        <Td>{item.id}</Td>
                                        <Td>{item.img}</Td>
                                        <Td>{moment(item.date).utc().format('DD-MM-YYYY')}</Td>
                                        <Td>{item.description}</Td>
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

export default MembersPayment;
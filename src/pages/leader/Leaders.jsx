import { Button } from '@chakra-ui/react';
import '../page.css';
import  LeadersProfileData from './LeadersData';
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


function Leaders() {
  
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
                        {                
                            LeadersProfileData.map((item)=>{
                                return(
                                    <Tr>
                                    <Td>{item.Id}</Td>
                                    <Td>{item.Name}</Td>
                                    <Td>{item.PostName}</Td>
                                    <Td>{item.From}</Td>
                                    <Td>{item.To}</Td>            
                                    <Td>
                                        <Button   >Edit</Button>
                                        <Button  >Delete</Button>
                                    </Td>
                                    </Tr>  
                                    )
                                })                                                            
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
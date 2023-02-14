import { Button } from '@chakra-ui/react';
import '../page.css';
import MembersProfileData from './MembersData';
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
  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_members'}>
                    <Button className='main-btn' colorScheme='blue'>Create Member</Button>
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
                        <Tbody>
                        {                
                            MembersProfileData.map((item)=>{
                                    return(
                                    <Tr>
                                    <Td>{item.Id}</Td>
                                    <Td>{item.Name}</Td>
                                    <Td>{item.MobileNumber}</Td>
                                    <Td>{item.CompanyName}</Td>
                                    <Td>{item.Address}</Td>
                                    <Td>{item.Image}</Td>
                                    <Td>{item.Status}</Td>              
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

export default Members;
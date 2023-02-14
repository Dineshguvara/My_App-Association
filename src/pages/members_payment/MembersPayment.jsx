import { Button } from '@chakra-ui/react';
import '../page.css';
import MembersPaymentsData from './MembersPaymentData';
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


function MembersPayment() {
  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_members_payment'}>
                    <Button className='main-btn' colorScheme='blue'> Add Members Payment</Button>
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
                            MembersPaymentsData.map((item)=>{
                                    return(
                                    <Tr>
                                    <Td>{item.Id}</Td>
                                    <Td>{item.Image}</Td>
                                    <Td>{item.Date}</Td>
                                    <Td>{item.Description}</Td>             
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

export default MembersPayment;
import { Button } from '@chakra-ui/react';
import '../page.css';
import AssociationPayData from './AssociationPaymentsData';
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


function AssociationPayments() {
  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_ass_payment'}>
                    <Button className='main-btn' colorScheme='blue'> Add Payment</Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Payment Name</Th>
                            <Th> Amount </Th>
                            <Th> Date</Th>
                            <Th> Status</Th>
                            <Th> Description</Th>
                            <Th> End Date</Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody>
                        {                
                            AssociationPayData.map((item)=>{
                                    return(
                                    <Tr>
                                    <Td>{item.Id}</Td>
                                    <Td>{item.PaymentName}</Td>
                                    <Td>{item.Amount}</Td>
                                    <Td>{item.Date}</Td>
                                    <Td>{item.Status}</Td>
                                    <Td>{item.Description}</Td>
                                    <Td>{item.EndDate}</Td>              
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

export default AssociationPayments;
import { Button } from '@chakra-ui/react';
import '../page.css';
import HistoryData from './HistoryData';
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


function History() {
  
    return  (
     
    <section>
        <div  className='container' >
            <div className='btn-wrap'>
                <Link to={'/create_history'}>
                    <Button className='main-btn' colorScheme='blue'>  Add History</Button>
                </Link>
            </div>
            <div className='table-wrap'>
                <TableContainer>
                    <Table variant='simple' > 
                        <Thead>
                        <Tr>
                            <Th> #</Th>
                            <Th> Title</Th>
                            <Th> Message </Th>
                            <Th> Files</Th>
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody>
                        {                
                            HistoryData.map((item)=>{
                                    return(
                                    <Tr>
                                    <Td>{item.Id}</Td>
                                    <Td>{item.Title}</Td>
                                    <Td>{item.Message}</Td>
                                    <Td>{item.Files}</Td>             
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

export default History;
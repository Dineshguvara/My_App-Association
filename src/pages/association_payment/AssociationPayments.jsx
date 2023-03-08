import React, {useState, useEffect} from 'react';
import { Button } from '@chakra-ui/react';
import '../page.css';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, } from '@chakra-ui/react'
import moment from 'moment';

function AssociationPayments() {
  
    const [asspay, setAsspay] = useState(null);

    const navi = useNavigate();
      
    const LoadEdit =(id) =>{
        navi("/create_ass_payment/"+ id   );
        
    }
    const RemoveFunc =(id) =>{
        if(window.confirm('Do you want to remove?')){
            fetch("http://localhost:8000/asspayment/"+ id,{
            method:"DELETE"
            }).then((res)=>{
                window.location.reload();             
            }).catch((err)=>{
            console.log(err.message)
            })
        }
    }

    useEffect(() => {
      fetch("http://localhost:8000/asspayment").then((res)=>{
        return res.json();
      }).then((resp)=>{
        setAsspay(resp);
      }).catch((err)=>{
        console.log(err.message);
      })
    }, [])


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
                            <Th> End Date</Th>
                            <Th> Status</Th>
                            <Th> Description</Th>                            
                            <Th> Actions </Th>                             
                        </Tr>
                        </Thead>
                        <Tbody>
                        { 
                            asspay && 
                             asspay.map(item=>(
                                <Tr key={item.id}>
                                    <Td>{item.id}</Td>
                                    <Td>{item.paymentname}</Td>
                                    <Td>{item.amount}</Td>
                                    <Td>{moment(item.date).utc().format('DD-MM-YYYY')}</Td>
                                    <Td>{moment(item.enddate).utc().format('DD-MM-YYYY')}</Td>
                                    <Td>{item.status}</Td>
                                    <Td >{item.description}</Td>
                                    <Td>
                                        <Button onClick={()=>{LoadEdit(item.id)}} colorScheme="blue"  > Edit </Button>
                                        <Button onClick={()=>{RemoveFunc(item.id)}} colorScheme="red"  > Delete </Button>
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

export default AssociationPayments;
import React,{useState, useEffect} from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  Input,
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useNavigate, useParams, Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import moment from "moment";

const schema = yup.object().shape({
  paymentname: yup.string().required(),
  amount: yup.number().typeError("Amount is Mandatory").required(),   
  date: yup.date().typeError("Date is Mandatory").required(),
  status: yup.string().required("Status is Mandatory"),
  description: yup.string().required("Description is Mandatory"),
  enddate:  yup.date().typeError("Date is Mandatory").required()
});

function AssociationPaymentsForm() {
  let navi = useNavigate();

  const {
  register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema) 
  });

  const [paymentname, setPayname] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [enddate, setEnddate] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  const { empid } = useParams()

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8000/asspayment/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{    
        setPayname(resp.paymentname)
        setAmount(resp.amount)
        setDate(moment(resp.date).utc().format('YYYY-MM-DD'))
        setEnddate(moment(resp.enddate).utc().format('YYYY-MM-DD'))
        setStatus(resp.status)
        setDescription(resp.description)                  
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, []) 

    const formSubmiter = (data) =>{    
      if (empid) {
        fetch("http://localhost:8000/asspayment/"+ empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
        navi("/ass_payment")
      }).catch((err)=>{
        console.log(err.message)
      })
    } else {
      fetch("http://localhost:8000/asspayment",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
        navi("/ass_payment")
      }).catch((err)=>{
        console.log(err.message)
      })
    }
  }

  return (
    <section>
      <div className="container">
        <form className="add_form" onSubmit={handleSubmit(formSubmiter)}>
          <FormControl className="form">
            <Grid templateColumns="repeat(2, 1fr)" gap={6}>
              
              <GridItem w="70%">
                <FormLabel> Payment Name</FormLabel>                
                <Input {...register("paymentname")} placeholder="Enter Payment Name" type="text" name="paymentname"
                value={paymentname}
                onChange={e=>setPayname(e.target.value)}
                /><br/><br/>
                <p>{errors.paymentname?.message}</p>                  
              </GridItem>

              <GridItem w="70%">
                <FormLabel> Amount</FormLabel>
                <Input {...register("amount")}  placeholder=" Enter Amount" type="number" name="amount"
                value={amount}
                onChange={e=>setAmount(e.target.value)}
                /><br/><br/>
                <p>{errors.amount?.message}</p>
              </GridItem>

              <GridItem w="70%">
                <FormLabel> Date</FormLabel>
                <Input {...register("date")} type="date" name="date" 
                value={date}
                onChange={e=>setDate(e.target.value)}
                /><br/><br/>
                <p>{errors.date?.message}</p>
              </GridItem>

              <GridItem w="70%">
                <FormLabel> End Date</FormLabel>
                <Input {...register("enddate")} type="date" name="enddate" 
                value={enddate}
                onChange={e=>setEnddate(e.target.value)}
                /><br/><br/>
                <p>{errors.enddate?.message}</p>
              </GridItem>

              <GridItem w="70%">
                <FormLabel> Status</FormLabel>
                <Textarea {...register("status")} placeholder="Enter Status" type="text" name="status" 
                value={status}
                onChange={e=>setStatus(e.target.value)}
                /><br/><br/>
                <p>{errors.status?.message}</p>
              </GridItem>

              <GridItem w="70%">
                <FormLabel> Description</FormLabel>
                <Textarea  {...register("description")} placeholder="Enter Description" type="text" name="description" 
                value={description}
                onChange={e=>setDescription(e.target.value)}
                
                /><br/><br/>
                <p>{errors.description?.message}</p>
              </GridItem>
              
            </Grid>
            <Button colorScheme="teal" type="submit"> Save </Button>       
            <Link to="/ass_payment"> <Button colorScheme="red" >Back</Button> </Link>
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default AssociationPaymentsForm;

import React,{ useState, useEffect } from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";

const schema = yup.object().shape({
  // img: yup.mixed().typeError('image is required'),   
  date:yup.date().typeError('Date is required').required(),
  description:yup.string().required('Description is required')
  })

  
function MembersPaymentForm() {

  let navi = useNavigate();

  const [date, setDate] = useState("");
    const [description, setDescription] = useState("");
  
 
  const{register, handleSubmit, formState:{errors} }= useForm({
    resolver : yupResolver(schema)
  });
 
  
  const { empid } = useParams()
  // const [mpdata, mpdatachange] = useState({});

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8000/membersPay/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{         
        setDate(moment(resp.date).utc().format('YYYY-MM-DD'));
        setDescription(resp.description);
        console.log("useful");
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, []) 

  const formSubmiter = (data) =>{    
    if (empid) {
      fetch("http://localhost:8000/membersPay/"+ empid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{      
       navi("/members_payment")
    }).catch((err)=>{
      console.log(err.message)
    })
  } else {
    fetch("http://localhost:8000/membersPay",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{      
       navi("/members_payment")
    }).catch((err)=>{
      console.log(err.message)
    })
  }
}  

 
  

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit(formSubmiter)}>
          <FormControl className="form1">

            <FormLabel>  Image </FormLabel>
            <Input  {...register('img')}    type="file" name="img" disabled="disabled"  />
            <br/><br/>
            <p>{errors.img?.message}</p><br/>

            <FormLabel> Date </FormLabel>
            <Input  {...register('date')}  type="date" name="date"  
               value={date}
               onChange={e=>setDate(e.target.value)}  
            />
            <br/><br/>
            <p>{errors.date?.message}</p><br/>

            <FormLabel> Description</FormLabel>
            <Textarea  {...register('description')} type="text" name="description"  
             onChange={e=>setDescription(e.target.value)} value={description} 
            />

            <br/><br/>
            <p>{errors.description?.message}</p><br/>            
            
            <Button colorScheme="teal" type="submit">  Save </Button>

            <Link to="/members_payment"> <Button colorScheme="red" >Back</Button> </Link>
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default MembersPaymentForm;

import React,{useState, useEffect} from "react";
import "../page.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
 


const schema = yup.object().shape({
  title: yup.string().required(" Title is Mandatory"),
  message: yup.string().required("Message is Mandatory"),
  
});

function InvitationForm() {

  let navi = useNavigate();

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const {
    register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  });

  const { empid } = useParams()

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8000/invitation/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{         
        setTitle(resp.title);
        setMessage(resp.message);
              
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, []) 

    const formSubmiter = (data) =>{    
      if (empid) {
        fetch("http://localhost:8000/invitation/"+ empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/invitation")
      }).catch((err)=>{
        console.log(err.message)
      })
    } else {
      fetch("http://localhost:8000/invitation",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/invitation")
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
            
            <FormLabel> Title </FormLabel>
            <Input {...register("title")}  placeholder="Enter Title Name"  type="text"  name="title"
             value={title}
             onChange={e=>setTitle(e.target.value)} 
            />
             <br/><br/>
            <p>{errors.title?.message}</p><br/>
             
            <FormLabel> Files</FormLabel>
            <Input  type="file" name="file" disabled="disabled"   />
            <br/><br/>            
            
            <FormLabel> Message </FormLabel>
            <Textarea {...register("message")}  placeholder=" Enter Message"  type="text"  name="message" 
            value={message}
            onChange={e=>setMessage(e.target.value)} 
            />
             <br/><br/>
             <p>{errors.message?.message}</p> <br />
          
            <Button colorScheme="teal" type="submit"> Save </Button>              
            <Link to="/invitation"> <Button colorScheme="red" >Back</Button> </Link>
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default InvitationForm;

import React,{useState, useEffect} from "react";
import "../page.css";
import { Textarea, Button, GridItem, Grid } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useNavigate, useParams, Link } from "react-router-dom";


const schema = yup.object().shape({
  name:yup.string().required('Name is required'),
  mobilenum:yup.number().typeError('Mobile Number is required').required(),
  companyname:yup.string().required('Company name is required'),
  address:yup.string().required('Address is required'),
  status:yup.string().required('Status is required'),
  })

function MembersForm() {

  let navi = useNavigate();

    const [name, setName] = useState("");
    const [mobilenum, setMobilenum] = useState("");
    const [companyname, setCompanyname] = useState("");
    const [img, setImg] = useState("");
    const [address, setAddress] = useState("");
    const [status, setStatus] = useState("");

  const{register, handleSubmit, formState:{errors} }= useForm({
    resolver : yupResolver(schema)
  });

  const { empid } = useParams()

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8000/members/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{         
        setName(resp.name);
        setMobilenum(resp.mobilenum);
        setCompanyname(resp.companyname);
        setAddress(resp.address);
        setStatus(resp.status);       
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, []) 

    const formSubmiter = (data) =>{    
      if (empid) {
        fetch("http://localhost:8000/members/"+ empid,{
        method:"PUT",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/members")
      }).catch((err)=>{
        console.log(err.message)
      })
    } else {
      fetch("http://localhost:8000/members",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/members")
      }).catch((err)=>{
        console.log(err.message)
      })
    }
  }  
  

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit(formSubmiter)}>
          <FormControl className="form">
            <Grid templateColumns='repeat(2, 1fr)' gap={6}>
              <GridItem w='90%'> 
                <FormLabel> Name</FormLabel>
                <Input {...register('name')} placeholder="Enter Your Name" type="text" name="name"
                value={name}
                onChange={e=>setName(e.target.value)}  
                /> 
                <br/><br/>
                <p>{errors.name?.message}</p><br/>
              </GridItem>
              <GridItem w='90%'>
                <FormLabel> Mobile Number</FormLabel>
                <Input {...register('mobilenum')} placeholder=" Enter Mobile Number" type="number" name="mobilenum"
                value={mobilenum}
                onChange={e=>setMobilenum(e.target.value)}  
                />
                <br/><br/>
                <p>{errors.mobilenum?.message}</p><br/>
              </GridItem>
              <GridItem w='90%'>
                <FormLabel>Company name</FormLabel>
                <Input {...register('companyname')} placeholder="Enter Company name" type="text" name="companyname"
                 value={companyname}
                 onChange={e=>setCompanyname(e.target.value)} 
                />
                <br/><br/>
                <p>{errors.companyname?.message}</p><br/>
              </GridItem>
              <GridItem w='90%'>
                <FormLabel> Image</FormLabel>
                <Input  type="file" name="img" disabled="disabled"  
                 value={img}
                 onChange={e=>setImg(e.target.value)} 
                />
                <br/><br/>
              </GridItem>
              <GridItem w='90%'>
                <FormLabel> Address</FormLabel>
                <Textarea {...register('address')} placeholder="Enter Address" type="text" name="address"
                 value={address}
                 onChange={e=>setAddress(e.target.value)} 
                />
                <br/><br/>
                <p>{errors.address?.message}</p><br/>
              </GridItem>             
              <GridItem w='90%'>
                <FormLabel> Status</FormLabel>
                <Textarea {...register('status')} placeholder="Enter Status" type="text" name="status" 
                 value={status}
                 onChange={e=>setStatus(e.target.value)} 
                />
                <br/><br/>
                <p>{errors.status?.message}</p><br/>
              </GridItem>
            </Grid>
            <Button colorScheme="teal" type="submit" className="btn"> Save </Button>
            <Link to="/members"> <Button colorScheme="red" className="btn" >Back</Button> </Link>
            
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default MembersForm;

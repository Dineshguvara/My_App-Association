import React,{useState, useEffect} from "react";
import "../page.css";
import { useNavigate, useParams, Link } from "react-router-dom";
import { Button, GridItem } from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { FormControl, FormLabel, Input, Grid } from "@chakra-ui/react"; 
import * as yup from 'yup';
import { yupResolver  } from "@hookform/resolvers/yup";
import { Select } from "chakra-react-select";
import { useSelector } from "react-redux";
import moment from 'moment';



const schema = yup.object().shape({
name:yup.string().required('Name is required'),
posting:yup.string().required('Posting is required'),
fromdate:yup.date().typeError('Date is mandatory').required(),
todate:yup.date().typeError('Date is mandatory').required()
})



function LeadersForm() {
  
  let navi = useNavigate();

  const { postings } = useSelector((state) => state.poste);

  
  const [name, setName] = useState("");
  const [posting, setPosting] = useState("");
  const [todate, setTodate] = useState("");
  const [fromdate, setFromdate] = useState("");

  const { register, handleSubmit, control, formState: { errors }} = useForm({ 
    resolver: yupResolver(schema),
  });

  // const postings = [
  //   {
  //     value: "AL",
  //     label: "Alabama",
  //   },
  //   {
  //     value: "AK",
  //     label: "Alaska",
  //   },
  //   {
  //     value: "AZ",
  //     label: "Arizona",
  //   }
  // ]

  const { empid } = useParams()

  useEffect(() => {
    if(empid){
      fetch("http://localhost:8000/leaders/" + empid).then((res)=>{
        return res.json();
      }).then((resp)=>{         

        
        setName(resp.name);
        // setPosting(resp.posting);
        setTodate(moment(resp.todate).utc().format('YYYY-MM-DD'));
        setFromdate(moment(resp.fromdate).utc().format('YYYY-MM-DD'));
              
      }).catch((err)=>{
        console.log(err.message);
      })
    }
    }, []) 

  const formSubmiter = (data) =>{    
    
    if (empid) {
      fetch("http://localhost:8000/leaders/"+ empid,{
      method:"PUT",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{      
       navi("/leaders")
    }).catch((err)=>{
      console.log(err.message)
    })
  } else {
    console.log(data);
    fetch("http://localhost:8000/leaders",{
      method:"POST",
      headers:{"content-type":"application/json"},
      body:JSON.stringify(data)
    }).then((res)=>{      
       navi("/leaders")
    }).catch((err)=>{
      console.log(err.message)
    })
  }
}

  return (
    <section>
      <div className="container">
        <form onSubmit={handleSubmit(formSubmiter)}>
          <FormControl className="form"  >
            <Grid templateColumns="repeat(2, 1fr)" gap={6} >
              
              <GridItem w='70%'>
                <FormLabel> Name</FormLabel>
                <Input {...register('name')} placeholder="Enter Your Name" type="text" name="name" 
                value={name}
                onChange={e=>setName(e.target.value)}
                /> 
                <br/><br/>
                <p>{errors.name?.message}</p> <br/>
              </GridItem>
              
              <GridItem w='70%'>
                {/* <FormLabel>Posting Name</FormLabel>
                  <Select {...register('posting')} placeholder='Select posting' name='posting'
                   
                  >
                    <option>President </option>
                    <option>Secretary</option>
                    <option>Chairman</option>
                  </Select><br/>                 */}
                <Controller
                  control={control}
                  name="posting"
                  
                  render={({
                    field: { onChange, onBlur, value, name, ref },
                    fieldState: { error },
                  }) => (
                    <FormControl >
                      <FormLabel> Postings </FormLabel>
                      
                      <Select
                       className="bg-white"
                        name={name}
                        ref={ref}
                        onChange={(e) => {
                          onChange(e);
                        }}                  
                        onBlur={onBlur}
                        value={value}
                        options={postings}
                        getOptionLabel={(e) => e.label}
                        getOptionValue={(e) => e.value}
                        placeholder="Select posting"
                        closeMenuOnSelect={true}                        
                      /> 
                      <br />
                      <Link to="/add_posting"> <Button colorScheme="blue" >Add Posting </Button> </Link>  
                    </FormControl>

                  )}                 
                />
                <p>{errors.posting?.message}</p><br/>
              </GridItem>
              
              <GridItem w='70%'>
                <FormLabel>From</FormLabel>
                <Input {...register('fromdate')} type="date" name="fromdate" 
                value={fromdate}
                onChange={e=>setFromdate(e.target.value)}
                /><br/><br/>
                <p>{errors.fromdate?.message}</p> <br/>
              </GridItem>
              
              <GridItem w='70%'>
                <FormLabel> To</FormLabel>
                <Input {...register('todate')}  type="date" name="todate" 
                value={todate}
                onChange={e=>setTodate(e.target.value)}
                /><br/><br/>
                <p>{errors.todate?.message}</p><br/>
              </GridItem>
            
            </Grid>
            <Button colorScheme="teal" type="submit"  > Save </Button>              
            <Link to="/leaders"> <Button colorScheme="red" >Back</Button> </Link>
            
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default LeadersForm;

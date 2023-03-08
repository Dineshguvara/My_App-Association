import React  from "react";
import "../page.css";
import { Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import {addPostings} from "../../features/newSlice"

const schema = yup.object().shape({
    label: yup.string().required(" Label is Mandatory"),
    value: yup.string().required("Value is Mandatory"),
    
  });

function AddPosting() { 

    const  dispatch = useDispatch();

    let navi = useNavigate();

    const {
      register, handleSubmit, formState: { errors }} = useForm({
      resolver: yupResolver(schema),
    });
  
     

    const formSubmiter = (data) =>{
        console.log(data);
        dispatch(addPostings(data))
        navi('/create_leaders')
    }

    return(
       
        <section>
      <div className="container">
        <form onSubmit={handleSubmit(formSubmiter)}>
          <FormControl className="form1">
           
            <FormLabel> Label </FormLabel>
            <Input  {...register("label")} placeholder="Enter Label Name"  type="text"  name="label"  
               
            />   
            <br /><br />
            <p>{errors.label?.message}</p><br />
            
            <FormLabel> Value </FormLabel>
            <Input  {...register("value")}  placeholder=" Enter Value Here"  type="text"  name="value"  
            
            />
            <br /><br />
            <p>{errors.value?.message}</p> <br />
            
            <Button colorScheme="teal" type="submit">Save </Button>
            <Link to="/create_leaders"> <Button colorScheme="red" >Back</Button> </Link>
          </FormControl>
        </form>
      </div>
    </section>
    )
}

export default AddPosting;
import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
 
import { FormControl, FormLabel, Input, Select } from "@chakra-ui/react";

function LeadersForm() {
   

  return (
    <section>
      <div className="container">
        <FormControl className="form"  >
          <FormLabel> Name</FormLabel>
          <Input
            placeholder="Enter Your Name"
            type="text"
            name="name"
          /> 
          <br />
          <br />
          <FormLabel>Posting Name</FormLabel>
            <Select placeholder='Select Posting'>
              <option>President </option>
              <option>Secretary</option>
              <option>Chairman</option>
            </Select>
           
          <br />
          <FormLabel>From</FormLabel>
          <Input
             
            type="date"
            name="from"
          />
          <br />
          <br />
          <FormLabel> To</FormLabel>
          <Input   type="date" name="to" />
          <br />
          <br />
          
           
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </FormControl>
      </div>
    </section>
  );
}

export default LeadersForm;

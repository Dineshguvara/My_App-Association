import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
 
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function MembersForm() {
   

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
          <FormLabel> Mobile Number</FormLabel>
          <Input
            placeholder=" Enter Mobile Number"
            type="mobileNumber"
            name="name"
          />
          <br />
          <br />
          <FormLabel>Company name</FormLabel>
          <Input
            placeholder="Enter Company name"
            type="text"
            name="companyName"
          />
          <br />
          <br />
          <FormLabel> Address</FormLabel>
          <Textarea placeholder="Enter Address" type="text" name="address" />
          <br />
          <br />
          <FormLabel> Image</FormLabel>
          <Input type="file" name="image" />
          <br />
          <br />
          <FormLabel> Status</FormLabel>
          <Textarea placeholder="Enter Status" type="text" name="status" />
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

export default MembersForm;

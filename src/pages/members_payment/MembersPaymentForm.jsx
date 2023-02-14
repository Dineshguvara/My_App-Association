import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function MembersPaymentForm() {
  return (
    <section>
      <div className="container">
        <FormControl className="form">
          <FormLabel>  Image </FormLabel>
          <Input
            type="file"
            name="img"
          />
          <br />
          <br />
          <FormLabel> Date </FormLabel>
          <Input   type="Date" name="date" />
          <br />
          <br />
          <FormLabel> Description</FormLabel>
          <Textarea  type="text" name="description" />
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

export default MembersPaymentForm;

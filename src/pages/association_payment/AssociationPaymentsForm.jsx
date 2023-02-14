import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function AssociationPaymentsForm() {
  return (
    <section>
      <div className="container">
        <FormControl className="form">
          <FormLabel> Payment Name</FormLabel>
          <Input
            placeholder="Enter Payment Name"
            type="text"
            name="payment_name"
          />
          <br />
          <br />
          <FormLabel> Amount</FormLabel>
          <Input placeholder=" Enter Amount" type="number" name="amount" />
          <br />
          <br />
          <FormLabel> Date</FormLabel>
          <Input type="date" name="date" />
          <br />
          <br />
          <FormLabel> Status</FormLabel>
          <Textarea placeholder="Enter Status" type="text" name="status" />
          <br />
          <br />
          <FormLabel> Description</FormLabel>
          <Textarea
            placeholder="Enter Description"
            type="text"
            name="description"
          />
          <br />
          <br />
          <FormLabel> End Date</FormLabel>
          <Input type="date" name="end_date" />
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

export default AssociationPaymentsForm;

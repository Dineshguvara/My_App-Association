import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

function EventGalleryForm() {
  return (
    <section>
      <div className="container">
        <FormControl className="form">
          <FormLabel>  Title </FormLabel>
          <Input
            placeholder="Enter Title Name"
            type="text"
            name="title_name"
          />
          <br />
          <br />
          <FormLabel> Message </FormLabel>
          <Textarea placeholder=" Enter Message" type="text" name="message" />
          <br />
          <br />
          <FormLabel> Files</FormLabel>
          <Input  type="file" name="files" />
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

export default EventGalleryForm;

import React from "react";
import "../page.css";
import { Textarea, Button } from "@chakra-ui/react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  title: yup.string().required(" Title is Mandatory"),
  msg: yup.string().required("Message is Mandatory"),
  files: yup.mixed().required("file is required"),
});

function HistoryForm() {
  let navi = useNavigate();

  const {
    register,
    FormSubmitter,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
   
  });

  return (
    <section>
      <div className="container">
        <form onSubmit={FormSubmitter}>
          <FormControl className="form">
            <FormLabel> Title </FormLabel>
            <Input
              placeholder="Enter Title Name"
              type="text"
              name="title_name"
              {...register("title_name")}
            />
            <p>{errors.title_name?.message}</p>
            <br />

            <FormLabel> Message </FormLabel>
            <Textarea
              {...register("msag")}
              placeholder=" Enter Message"
              type="text"
              name="msag"
            />
            <p>{errors.msag?.message}</p>
            <br />

            <FormLabel> Files</FormLabel>
            <Input {...register("files")} type="file" name="files" />
            <p>{errors.files?.message}</p>
            <br />

            <Button colorScheme="blue" type="submit">
              Submit
            </Button>
          </FormControl>
        </form>
      </div>
    </section>
  );
}

export default HistoryForm;

import React from "react";
import {
  GridItem,
  Grid,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is Mandatory"),
  id: yup
    .string().required(" Email is Mandatory")
    .email("please provide valid email"),
    
  password: yup
    .string().required("Password is mandatory")
    .min(5, "Minimum 5 Character")
    .max(15, "Maximum 15 characters"),
    
  conpassword: yup
    .string().required("Confirm password is required")
    .oneOf([yup.ref("password")]),
    
});

const Login = () => {
  const navi = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  
  const formSubmiter = (data) => {
    fetch("http://localhost:8000/register",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
      }).then((res)=>{      
         navi("/login")
      }).catch((err)=>{
        console.log(err.message)
      })
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-45 p-b-45 widt">
            <form
              className="login100-form validate-form"
              onSubmit={handleSubmit(formSubmiter)}
            >
              <span className="login100-form-title p-b-49">Register</span>
              <Grid templateColumns="repeat(2, 1fr)" gap={6}>
                <GridItem w="70%">
                  <div className="wrap-input100 validate-input m-b-23">
                    <span className="label-input100">Name</span>
                    <input
                      {...register("name")}
                      className="input100"
                      type="text"
                      name="name"
                      placeholder="Enter your username"
                      
                    />
                    <span className="focus-input100" data-symbol="" />
                  </div>
                  <p className="clr-red">{errors.name?.message}</p>
                  <br />
                </GridItem>
                <GridItem w="70%">
                  <div className="wrap-input100 validate-input m-b-23">
                    <span className="label-input100">Email</span>
                    <input
                      {...register("id")}
                      className="input100"
                      type="email"
                      name="id"
                      placeholder="Enter your email"
                      
                    />
                    <span className="focus-input100" data-symbol="" />
                  </div>
                  <p className="clr-red">{errors.id?.message}</p>
                  <br />
                </GridItem>
                <GridItem w="70%">
                  <div className="wrap-input100 validate-input m-b-23">
                    <span className="label-input100">Password</span>
                    <input
                      {...register("password")}
                      className="input100"
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      
                    />
                    <span className="focus-input100" data-symbol="" />
                  </div>
                  <p className="clr-red">{errors.password?.message}</p>
                  <br />
                </GridItem>
                <GridItem w="70%">
                  <div className="wrap-input100 validate-input m-b-23">
                    <span className="label-input100"> Confirm Password</span>
                    <input
                      {...register("conpassword")}
                      className="input100"
                      type="text"
                      name="conpassword"
                      placeholder="Enter your password"
                      
                    />
                    <span className="focus-input100" data-symbol="" />
                  </div>
                  <p className="clr-red">{errors.conpassword?.message}</p>
                  <br />
                </GridItem>
              </Grid>
              <div className="text-right p-t-8 p-b-31"></div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn widt">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Register</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  {" "}
                  Already have an account ? &nbsp;{" "}
                  <Link to="/login" className="reg">
                    {" "}
                    Login Here
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div id="dropDownSelect1" />
    </div>
  );
};

export default Login;

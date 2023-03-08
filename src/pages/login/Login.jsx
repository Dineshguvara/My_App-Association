import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../page.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  
  useremail: yup
    .string()
    .email("please provide valid email")
    .required(" Email is Mandatory"),
  password: yup
    .string()
    .required("Password is mandatory")
    .min(5, "Minimum 5 Character")
    .max(15, "Maximum 15 characters")
});

const Login = () => {

  const navi = useNavigate();
 
  const [useremail, setUseremail] = useState("");
  const [password, setPassword] = useState("");

  const { 
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(()=>{
    let username = sessionStorage.getItem("user");
    if(username==='' || username===null){
        navi('/login')
    }
  },[])

  const formSubmiter = (data) => {
    fetch("http://localhost:8000/register/" + useremail ).then((res)=>{
        return res.json();
      }).then((resp)=>{         
       console.log(resp)
              if(resp.password === password){
                sessionStorage.setItem("user",useremail)
                navi('/')
              }else{
                console.log('password incorrect')
              }
      }).catch((err)=>{
        console.log(err.message);
      })
    
  };

  return (
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{ backgroundImage: 'url("images/bg-01.jpg")' }}
        >
          <div className="wrap-login100 p-l-55 p-r-55 p-t-35 p-b-35">
            <form className="login100-form validate-form" 
            onSubmit={handleSubmit(formSubmiter)}
            >
              <span className="login100-form-title p-b-49">Login</span>
              <div className="wrap-input100 validate-input m-b-20"  >
                <span className="label-input100">Email</span>
                <input
                 {...register("useremail")}
                  className="input100"
                  type="email"
                  name="useremail"
                  placeholder="Enter your useremail"
                  value={useremail}
                  onChange={e=>setUseremail(e.target.value)} 
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <p className="clr-red">{errors.useremail?.message}</p><br/>

              <div className="wrap-input100 validate-input m-b-20"  >
                <span className="label-input100">Password</span>
                <input
                 {...register("password")}
                  className="input100"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={e=>setPassword(e.target.value)} 
                />
                <span className="focus-input100" data-symbol="" />
              </div>
              <p className="clr-red">{errors.password?.message}</p>

              <div className="text-right p-t-8 p-b-31">
                <a href="#">Forgot password?</a>
              </div>

              <div className="container-login100-form-btn">
                <div className="wrap-login100-form-btn">
                  <div className="login100-form-bgbtn" />
                  <button className="login100-form-btn">Login</button>
                </div>
              </div>
              <div className="txt1 text-center p-t-54 p-b-20">
                <span>
                  {" "}
                  Don't you have an account ? &nbsp;{" "}
                  <Link to="/register" className="reg">
                    {" "}
                    Register Here
                  </Link>
                </span>
              </div>
              <div className="flex-c-m">
                <a href="#" className="login100-social-item bg1">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#" className="login100-social-item bg2">
                  <i className="fa fa-twitter" />
                </a>
                <a href="#" className="login100-social-item bg3">
                  <i className="fa fa-google" />
                </a>
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

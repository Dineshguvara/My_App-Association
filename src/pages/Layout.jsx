import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
 


const Layout = () => {

     
    const navi = useNavigate();
    const [logout, setLogout] = useState(false);

    useEffect(()=>{
        if(!sessionStorage.getItem('user')) 
        navi('/login');
    },[logout])
    
    const handleSubmitter = e =>{
        e.preventDefault();
        sessionStorage.removeItem('user')
        setLogout('true')
    }
    
    return(
        <>
        <Sidebar>     
            <Button colorScheme='blue' style={{float:'right'}} onClick={handleSubmitter}  >Logout</Button>             
        
            <Outlet/>
        </Sidebar>
        </>
    );
}

export default Layout;


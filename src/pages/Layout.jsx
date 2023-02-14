import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import SidebarWithHeader from "../components/sidebar1";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Layout = () => {

    const navi = useNavigate();
    const [logout, setLogout] = useState(false);

    useEffect(()=>{
        if(!localStorage.getItem('auth')) 
        navi('/login');
    },[logout])
    
    const handleSubmitter = e =>{
        e.preventDefault();
        localStorage.removeItem('auth')
        setLogout('true')
    }
    
    return(
        <>
        <Sidebar>
            <Button colorScheme='blue' style={{float:'right'}} onClick={handleSubmitter} >Logout</Button>             
            <Outlet/>
        </Sidebar>
        </>
    );
}

export default Layout;


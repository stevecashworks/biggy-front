import './App.css';
import styled from 'styled-components'
import { RouterProvider } from 'react-router-dom';
import {createContext,useEffect,useState} from 'react';

import  router from './Router'

const AppCon=styled.div`
height: calc(100vh - 40px);
width:100vw;
position:relative;
top:40px;
`
export const apiEntry="https://biggycapitals.onrender.com/api/v3" 

export const AppContext=createContext()
function App() {
  const [user,setUser]=useState()
  const [noOfVisits,setNoOfVisits]=useState(0)
 useEffect(()=>{
    const token=localStorage.getItem('token');
     const fetchUser=async()=>{
      const thisUser= await fetch(`${apiEntry}/user/token`,{
        method:"POST",
        headers:{"Content-Type":"application/json","tk":token}
      }).then(res=>res.json()).then(data=>data).catch(err=>console.log(err))
    if(thisUser.success){
      setUser(thisUser.result)
    }
    }
    const fetchVisits=async()=>{
      const api2="http://localhost:8080/api/v3"
      const visits =await fetch(`${apiEntry}/visits`).then(res=>res.json()).then(data=>data).catch(err=>console.log(err))
      if(visits.success){
        setNoOfVisits(visits.result.no)
      }
   }
   fetchVisits()
     
    
  
    fetchUser()
     

 },[])
  return (
    <AppContext.Provider value={ {user,setUser,noOfVisits}} >
      
    {console.log(user)}

  <AppCon>
 <RouterProvider router={router}/>
  </AppCon> 
    </AppContext.Provider>
);
}

export default App;

import {CiPower} from 'react-icons/ci'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const Button=styled.button`
width: 150px;
border:none;
color:white;
background-color:var(--blue-back);
display:flex;
align-items:center;
justify-content:center;
margin:20px auto;
height:40px;
padding-top:15px;
padding-bottom:15px;
border-radius:20px;
cursor:pointer;


`

const Logout=()=>{
    const  navigate=useNavigate();
    const logout=()=>{
        const canProceed=window.confirm('This action removes this user, are you sure you want to logout?')
        if(canProceed){

            localStorage.removeItem("token")
            localStorage.removeItem("id")
            navigate('/')
        }
    }

    return(
        <Button onClick={logout}>
            <CiPower style={{color:'white',marginRight:'20px',fontWeight:"inherit"}}/>
            Logout
        </Button>
    )
}

export default Logout
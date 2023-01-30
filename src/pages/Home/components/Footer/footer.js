import styled from 'styled-components';
import  logo from '../.././../../assets/logo.png'
import  certified from '../.././../../assets/seal.png'
import './footer.css'
import {Link} from 'react-router-dom'
const Container=styled.div`
height:300px;
width:100%;
 background-color:var(--blue-back);
 color:White;
 display:flex;
 @media (max-width:480px){
   height:auto;
 }
 
 `
 const CenterCon=styled.div`
 width:60%;
 display:flex;
 justify-content:center;
 margin:0 auto;
 gap:30px;
 @media (max-width:480px){
    width:100%; 
    flex-direction:column-reverse;
    height:auto;
    align-items:center;
 }
 `
 const Left=styled.div`
  width:50%;
  display:flex;
  flex-direction:column;
  align-items:left;
 `
 const Right=styled.div`
 width:50%;
 display:flex;
 color:white;
 flex-direction:column;
 align-items:right;
 padding:20px auto;
 
 `
 const Header=styled.p`
 font-weight:500px;
 font-size:20px;
 margin-top:30px;
 @media (max-width:480px){
   text-align:center;
 }

 `
 const LinkCon=styled.div`
 display:${props=>props.hasNav?'block':'none'}
 
 `
 const Logo=styled.img`
 width:400px;
 @media (max-width:480px){
   width:250px;
 }
 
 `
 const LinkItem=styled.a`
 font-size:18px;
 font-weight:200;
 color:white;
 text-decoration:none;
 display:block;
 margin-top:20px;
 transition:all 1s ease;
 &:hover{
    transform:scale(1.2)
 }
 @media (max-width:480px){
   text-align:center;
 }

 `
 const linkStyle={
    color:'white',
    fontSize:'18px',
    textDecoration:'none',
    marginTop:'20px',
    display:'block',

 }
 const Footer=({hasNav})=>{
 console.log(hasNav)
   return (
    <Container >
        <CenterCon>

    <Left>
    <Logo src={logo} />
    <Logo src={certified} />
    </Left>
    <Right>
    <Header>Quick Links</Header>
    <LinkCon hasNav={hasNav}>
    <LinkItem href="#About">About us</LinkItem>
    <LinkItem href="#Plans">Our plans</LinkItem>
    <Link to="user/register" className="link" style={linkStyle}>Join us now</Link>
    <LinkItem  href="#Achievements">Our Acheivements</LinkItem>
    </LinkCon>
    </Right>
    </CenterCon>
    </Container>
 )
 }
 export default  Footer
import styled from "styled-components"
import  awardImg from './assets/award.png'
const CardCon= styled.div`
 width:300px;
 height:400px;
 box-shadow:var(--box-shadow);
 display:flex;
 flex-direction:column;
  gap:30px;
  align-items:center;
  border-radius:30px;
  @media (max-width:480px){
    margin:20px auto;
    height:auto;
    gap:10px;

  }

 `
 const Award= styled.img`
  width:130px;
  height:100px;
  object-fit:cover;
  margin-top:20px
 `
 const Title=styled.p`
 color:black;
 width:90%;
 margin:20px auto;
 font-weight:500;
 font-size:20px;
 text-align:center;

 `
 const Text=styled.p`
 color:white;
 margin:20px auto;
 font-weight:300;
 font-size:18px;
 text-align:center;
 background-color:var(--blue-back);
 text-transform:capitalize;
 padding:5px;
 opacity:0.8;

 
 `
 const Card=({title,text})=>{
 return(
    <CardCon>
        <Award src={awardImg}></Award>
        <Title>{title}</Title>
        <Text>{text}</Text>
        
    </CardCon>
 )
 }
 export default Card
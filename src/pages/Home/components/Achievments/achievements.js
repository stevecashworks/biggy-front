 import styled from 'styled-components'
import achievementData from './AchievementData'
import Card from './achievementCard'
 const Container= styled.div`
  width:100%;
  height:500px;
  display:flex;
  align-items:center;
  justify-content:space-around;
  @media (max-width:480px){
    flex-direction:column;
    height:auto;
  }
 `
 
 
 const Achievements= ()=>{
    return(
        <Container id ="Acheivments">
           {achievementData.map(award=> <Card  title={award.title} text={award.text} />)} 

        </Container>
    )
 }
 export default Achievements
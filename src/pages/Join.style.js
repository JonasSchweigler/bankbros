import styled from 'styled-components'

export const Wrapper = styled.div`
  /*code*/
  display: flex;
  flex-direction: column;
  color: white;
  
  .link-element:hover {
    text-decoration: underline;
  }
`;

export const TopContainer = styled.div`
  /*code*/
  display: flex;
  flex-direction: row;
  overflow: hidden;
  width:100%;
`;

export const TitleWrapper = styled.div`
  /*code*/
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.text`
  /*code*/
  color: lightgreen;
  font-size: 3.5vw;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    font-size: 4vw;
  }
`;

export const UnderTitle = styled.text`
  /*code*/
  color: lightgreen;
  font-size: 2vw;
  font-weight: bold;
  @media only screen and (max-width: 700px) {
    font-size: 5vw;
  }
`;

export const ContentWrapper = styled.div`
  /*code*/
  align-items: center;
  justify-content: center;
  min-height: 800px;
  background: #000;
  display: flex;
  flex-direction: column;
  padding-right: 12vw;
  padding-left: 12vw;
`;

export const TextWrapper = styled.div`
  /*code*/
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  border: 4px solid white;
  border-radius: 10px;
  min-height: 30vh;
  max-width: 25vw;
  
  @media only screen and (max-width: 765px) {
    min-width: 70vw;
  }
`;

export const Paragraph = styled.text`
  /*code*/
`;

export const LinkTreeBox = styled.div`
  /*code*/
  align-items: center;
  display: flex;
  margin: 10px;
  padding: 10px;
  flex-direction: column;
  justify-content: space-evenly;
  border: 4px solid white;
  border-radius: 10px;
  min-height: 30vh;
  min-width: 25vw;
`;

export const JoinSection = styled.div`
  /*code*/
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  
  @media only screen and (max-width: 768px) {
    flex-direction: column !important;
  }
`;

export const BenefitBox = styled.div`
  /*code*/
  .listWrapper {
    padding-left: 25px;
  }
`;

export const BenefitWrapper = styled.div`
  /*code*/
  display: flex;
  margin: 10px;
  padding: 20px;
  flex-direction: column;
  justify-content: center;
  border: 4px solid white;
  border-radius: 10px;
  min-height: 30vh;
  min-width: 25vw;
`;
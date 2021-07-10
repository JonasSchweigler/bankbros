import styled from 'styled-components'

export const FooterWrapper = styled.div`
  /*code*/
  background-color: #01bf71;
  .footer-parts {
    width: 100%;
    height: 150px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    .footer-element {
      margin: 5px;
      color: #0d0d0d;
      font-size: 1.2rem;
    }
  }
  
  @media only screen and (max-width: 765px) {
    .footer-element {
      font-size: 0.8rem !important;
    }
  }
`

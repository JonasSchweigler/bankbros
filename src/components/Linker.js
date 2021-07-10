import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const LinkerButton = styled.div`
    font-size: 3rem;
    z-index: 1;
    cursor: pointer;
    color: grey;
    
    &:hover {
      color: #01bf71;
      width: 22px;
      height: 22px;
    }
`

export const BackWrapper = styled(Link)`
  right: 90%;
  bottom: 80%;
  width: 5vw;
  height: 10vh;
  position: fixed;
  
  @media screen and (max-width: 770px) {
    bottom: 85%;
  }
`
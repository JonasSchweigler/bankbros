import styled from 'styled-components'

export const Button = styled.div`
    position: fixed;
    left: 90%;
    bottom: 10%;
    width: 22px;
    height: 20px;
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
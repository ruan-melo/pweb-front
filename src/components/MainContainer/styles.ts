import styled from "styled-components";
import { colors } from "../../styles/colors";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;

    background: linear-gradient(to right bottom , ${colors.pink} , ${colors.pink} 50%,  ${colors.darkPink}  50% , ${colors.darkPink} 100%);

    footer{
        margin-top: 1rem;
        a{
            color: white;
        }
        
    }
` 

export const Content = styled.div`
    height: 30em;
    width: 20em;
    background: ${colors.darkGray};
    padding: 1em 5em;
    border-radius: 5px;

    width: 30em;
   
`;
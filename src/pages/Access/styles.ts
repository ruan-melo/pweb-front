import styled from 'styled-components';
import { colors } from '../../styles/colors';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;


    background: ${colors.darkGray};
    font-size: 1.5rem;
    height: 100%;

    /* color: #bfbebb; */
    color: #d9d8d7;

    h1{
        font-size: 2rem;
        font-weight: bold;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        margin-top: 1.4em;

        .input-container{
            display: flex;
            gap: 10px;
            flex-direction: column;
            margin-top: 1em;
            
            /* justify-content: center; */
            
            label{
                font-size: 1rem;
                width: 3em;
            }

            input{
                padding: 0.5em;
            }

            
        }

        button{
            margin-top: 1em;
            font-size: 1.2rem;
            width: 100%;
        }
    }

    .access-message{
        margin-top: auto;
        font-size: 1rem;

        span{
            cursor: pointer;
            text-decoration: underline;
        }
    }


   
   
`;
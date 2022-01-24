import styled from 'styled-components';
import { colors } from '../../styles/colors';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 1em;
   
    font-size: 1.5rem;
    height: 100%;
    width: 100%;

    /* color: #bfbebb; */
    color: #d9d8d7;


    header{
        display: flex;
        width: 100%;
        button{
            margin-left: auto;
        }
    }

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;
        width: 100%;

        & > *{
           
        }
    }

    input{
        color: #d9d8d7;

        width: 100%;
        height: 2em;
        padding: 0.2em;

    }


    ul{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 0.5em;

        overflow: auto;

        height: 9em;

        /* ===== Scrollbar CSS ===== */
        /* Firefox */
        & {
            scrollbar-width: auto;
            scrollbar-color: ${colors.darkPink} ${colors.text};
        }

        /* Chrome, Edge, and Safari */
        &::-webkit-scrollbar {
            width: 10px;
        }

        &::-webkit-scrollbar-track {
            background: ${colors.gray};
            border-radius: 10px;
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${colors.darkPink};
            border-radius: 10px;
            /* border: 3px solid #ffffff; */
        }
    }

`;

export const TaskContainer = styled.li`
    display: flex;

    font-size: 1rem;
    gap: 1em;
    /* align-items: center; */
    width: 100%;
    padding-right: 1em;

   

    input{
        width: 1.2em;
        height: 1.2em;
    }

    h4{
        font-size: 0.9em;
        font-weight: bold;
    }
    p{
        font-size: 0.75em;
    }

    .delete-task{
        margin-left: auto;
    }

    &.done{

        opacity: 0.5;
       
        h4{
            text-decoration: line-through;
        }
        p{
            text-decoration: line-through;
        }
    }

    .delete-task{
        cursor: pointer;
        color: ${colors.red};

        svg{
            fill: currentColor;
            width: 1.2em;
            height: 1.2em;
        }
    }


    .container {
        display: block;
        position: relative;
        height: 0.8em;
        width: 0.8em;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .content{
        display: flex;
        flex-direction: column;
        gap: 0.5em;
    }
        

    /* Hide the browser's default checkbox */
    .container input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 0.8em;
        width: 0.8em;
        background-color: ${colors.gray};
        border: 1.9px solid ${colors.border};
    }

    /* On mouse-over, add a grey background color */
    /* .container:hover input ~ .checkmark {
        background-color: ;
    } */

    /* When the checkbox is checked, add a blue background */
    .container input:checked ~ .checkmark {
        background-color: ${colors.darkPink};
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "";
        position: absolute;
        display: none;
    }

    /* Show the checkmark when checked */
    .container input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .container .checkmark:after {
        left: 0.15em;
        top: 0.05em;
        width: 0.2em;
        height: 0.4em;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }

    
`
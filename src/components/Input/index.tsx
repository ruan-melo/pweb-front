import {StyledInput} from './styles';


type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props:  InputProps) => {
    return (
        <StyledInput {...props}/>
    )
}
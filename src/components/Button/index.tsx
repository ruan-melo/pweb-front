import {StyledButton} from './styles';


type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
    return <StyledButton {...props} />
}
import { useState } from "react"
import { Button } from "../../components/Button";
import { Input } from "../../components/Input"
import { useAuth } from "../../hooks/useAuth";
import { Container } from "./styles"

export const Access = () => {
    const {login, signUp} = useAuth();

    const [type, setType ] = useState<'login' | 'signUp'>("login");

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(name, email, password);

        if ((!name && type === 'signUp') || !email || !password) return window.alert("Preencha todos os campos");

        if (type === "login") {
            await login({ email, password });
        }else{
            await signUp({ name, email, password });
        }
    }

    return (
        <Container>
            <h1>ToDo</h1>

            <form onSubmit={handleSubmit}>

                {type === 'signUp' && 
                (   <div className = 'input-container name-container'>
                        <label htmlFor="name">
                            Nome
                        </label>
                        <Input value = {name} onChange = { (e) => setName(e.target.value)} id="name" type="text"  />
                    </div>
                )
                }
               

                <div className = 'input-container email-container'>
                    <label htmlFor="email">
                        Email
                    </label>
                    <Input value = {email} onChange = { (e) => setEmail(e.target.value)} id="email" type="text" />
                </div>
               
                <div className = 'input-container password-container'>
                    <label htmlFor="password">
                        Senha
                    </label>

                    <Input value = {password} onChange = { (e) => setPassword(e.target.value)} id="password" type="password"  />
                
                </div>

                <Button type = 'submit'>
                    {type === 'login' ? 'Entrar' : 'Cadastrar'}
                </Button>

            </form>

            <div className = 'access-message'>
                <p>{type === 'login'? 'Ainda não possui uma conta? ': 'Já possui uma conta? '}<span onClick = {(e) => setType(t => t === 'login' ? 'signUp': 'login')}>Clique aqui</span></p>
            </div>
        </Container>
    )
}
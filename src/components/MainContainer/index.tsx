import React from 'react';
import { Container, Content } from './styles';




export const MainContainer = ({children} : {children: React.ReactNode}) => {
    return (
        <Container>
            <Content>
                {children}
            </Content>
            <footer>
                <a target={"_blank"} href='https://collectui.com/designers/iamleejihye/to-do-list' rel="noreferrer">Inspiração de cores/design</a>
            </footer>
        </Container>

        
    )
} 
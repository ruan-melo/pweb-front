import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";


export interface Task{
  id: number
  title: string
  description: string | null
  done: boolean
  authorId?: number
}

interface User{
  id: number;
  name: string;
  email: string;
  tasks: Omit<Task, 'authorId'>[];
}

interface AuthContextData{
  user: User | null;
  signUp(data : {name: string, email: string, password: string}): Promise<void>;
  login(data : {email: string, password: string}): Promise<void>;
  signOut(): void;
}

export const AuthContext = createContext({} as AuthContextData)

interface AuthProvider{
  children: ReactNode;
}

type AuthResponse = {
  token: string;
  user: User
}

export const AuthContextProvider = ({children}: AuthProvider) => {
  const [user, setUser] = useState<User| null>(null)


  useEffect( () => {
    console.log('Usuário', user)
  }, [user])

  async function signUp(data : {name: string, email: string, password: string}) {
    try{
      const response = await api.post('/signUp', data)
      const {token, user} = response.data as AuthResponse
  
      localStorage.setItem('@todo:token', token)
      api.defaults.headers.common.authorization = `Bearer ${token}`;
  
      setUser({...user})
    }catch{
      window.alert('Usuário ou senha incorretos')
    }
    
  }

  async function login(data : {email: string, password: string}) {
    try{
      const response = await api.post<AuthResponse>('/login', data)
      const { token, user } = response.data;

      localStorage.setItem('@todo:token', token);
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      
      setUser({...user});
    }catch{
      window.alert('Usuário ou senha incorretos')
    }
   
  }

  function signOut() {
    setUser(null);
    localStorage.removeItem('@todo:token');
  }

  useEffect(() => {
    const token = localStorage.getItem('@todo:token');

    if(token){  
      api.defaults.headers.common.authorization = `Bearer ${token}`;

      api.get<User>('profile').then(response => {
        setUser(response.data);
      })
    }
  }, [])

  return(
    <AuthContext.Provider value={{user, signUp, login , signOut}}>
      {children}
    </AuthContext.Provider>
  )

}
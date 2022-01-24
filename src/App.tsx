
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { MainContainer } from './components/MainContainer';

import { useAuth } from './hooks/useAuth';

import { Access} from './pages/Access';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  const {user} = useAuth();

  return (
    
      <BrowserRouter>
      <GlobalStyle  />
      <MainContainer>
        
          <Switch>
            <Route path="/" component={
                user ? Home : Access
              }/>
          </Switch>

      </MainContainer>
        
      </BrowserRouter>
    
    
  );
}

export default App;

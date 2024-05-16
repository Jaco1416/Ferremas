import styled from 'styled-components';
import { MyRoutes } from './Routers/Router';
import React ,{ useState } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar/Sidebar';
import { Light,Dark } from '../src/Styles/Themes';
import { ThemeProvider } from 'styled-components';

export const ThemeContext = React.createContext(null);


function App() {
  const [theme, setTheme] = useState('light');
  const themeStyle = theme === "light" ? Light : Dark;
  const CambiarTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  };

  const [sidebarOpen, setSidebarOpen] = useState(true);
  return (
    <ThemeContext.Provider value={{setTheme, theme}}>
      <ThemeProvider theme={themeStyle}>

        <BrowserRouter>
          <Container className={sidebarOpen?"sidebarState active": ""}>
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
            <MyRoutes/>
          </Container>
        </BrowserRouter>

      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

const Container = styled.div`
  
  display : grid;
  grid-template-columns: 90px auto;
  background-color: ${({theme})=>theme.bgtotal};
  transition: all 0.3s;
  &.active{
    grid-template-columns: 300px auto;
  }
  
`;
export default App;

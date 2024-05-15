import styled from "styled-components";
import logo from "../../assets/Ferremas_logo.png";
import { v } from "./Variables";
import { TiThMenu } from "react-icons/ti";


export function Sidebar({sidebarOpen, setSidebarOpen}) {
  return (
    <Container isOpen={sidebarOpen}>
      <div className="sidebarButton">

      </div>
      <div className="LogoContent">
        <div className="imgContent">
          <img src={logo}/>
        </div>
        <h2>Ferremas</h2>
      </div>
    </Container>
  );
}


const Container = styled.div`
  color: ${(props)=> props.theme.text};
  background: ${(props)=> props.theme.bg};
  position: sticky;
  padding-top: 20px;  
  .LogoContent{
    display : flex;
    justify-content: center;
    align-items: center;
    padding-bottom:$(v.lgSpacing);
    .imgcontent{
      display: flex;
      img{ 
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({isOpen}) =>(isOpen?`scale(1.8)`:`scale(0.5)`)};
    }
    h2{
      display:${({isOpen}) =>(!isOpen?`none`:`block`) }
    }

  }
`;

import styled from "styled-components";
import logo from "../../assets/Ferremas_logo.png";
import { v } from "../../Styles/Variables";
import { AiOutlineLeft, AiOutlineHome } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaBasketShopping, FaCartShopping  } from "react-icons/fa6";
import { IoMdLogIn } from "react-icons/io";
import { NavLink } from "react-router-dom";



export function Sidebar({sidebarOpen, setSidebarOpen}) {
  const ModSidebaropen=()=>{
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <Container isOpen={sidebarOpen}>
      <button className="sidebarButton" onClick={ModSidebaropen}>
        <AiOutlineLeft />
      </button>
      <div className="LogoContent">
        <div className="imgContent">
          <img src={logo}/>
        </div>
        <h2 className="Title">Ferremas</h2>
      </div>
      {linkArray.map(({icon, label, to}) => (
        <div className="linkContainer" key={label}>
          <NavLink to={to} className={({isActive})=> `Links${isActive?` active`:``}`}>
            <div className="Linkicon">
              {icon}
            </div>
            {sidebarOpen &&(
              <span>{label}</span>
            ) 

            }
          </NavLink>
        </div>
      ))}
      <Divider/>
      {secondarylinkArray.map(({icon, label, to}) => (
        <div className="linkContainer" key={label}>
          <NavLink to={to} className={({isActive})=> `Links${isActive?` active`:``}`}>
            <div className="Linkicon">
              {icon}
            </div>
            {sidebarOpen &&(
              <span>{label}</span>
            ) 

            }
          </NavLink>
        </div>
      ))}
      <Divider/>
    </Container>
  );
}

//regions - links de la sidebar
const linkArray=[
  {
    label:"Inicio",
    icon: <AiOutlineHome/>,
    to:"/"
  },
  {
    label:"Perfil",
    icon: <FaUserCircle/>,
    to:"/Profile"
  },
  {
    label:"Tienda",
    icon: <FaBasketShopping/>,
    to:"/Shop"
  },
  {
    label:"Carrito",
    icon: <FaCartShopping />,
    to:"/Cart"
  },
]
const secondarylinkArray=[
  {
    label:"Inicio de sesion",
    icon: <IoMdLogIn/>,
    to:"/Login"
  },

]
//endregion

//regiones - comoponentes stilizaza

const Container = styled.div`

  color: ${(props)=> props.theme.text};
  background: ${(props)=> props.theme.bg};
  position: sticky;
  padding-top: 20px;
  .sidebarButton{
    position: absolute;
    top: ${v.xxlSpacing};
    right: -18px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: ${(props)=> props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props)=> props.theme.bg3}, 0 0 7px ${(props)=> props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s;
    transform: ${({isOpen}) =>(isOpen?`initial`:`rotate(180deg)`)};
    border: none;
    letter-spacing: inherit;
    color: inherit;
    font-size: inherit;
    text-align: inherit;
    padding: 0; 
  }  
  .LogoContent{
    display : flex;
    justify-content: center;
    align-items: center;
    padding-bottom:$(v.lgSpacing);
    .imgContent{
      display: flex;
      img{ 
        max-width: 100%;
        height: auto;
      }
      cursor: pointer;
      transition: all 0.3s;
      transform: ${({isOpen}) =>(isOpen?`scale(0.8)`:`scale(1.2)`)};
    }
    h2{
      display:${({isOpen}) =>(!isOpen?`none`:`block`) }
    }

  }
  .linkContainer{
    margin: 8px 0;
    padding: 0 15%;
    :hover{
      background: ${(props)=> props.theme.bg3};
      border-radius: 10px;
    }
    .Links{
      display: flex;
      align-items: center;
      text-decoration: none;
      color: ${(props)=> props.theme.white};
      padding: calc(${v.smSpacing}-2px) 0;
      height: 50px;
      .Linkicon{
        padding: ${v.smSpacing} ${v.mdSpacing};
        display: flex;
        svg{
          color: ${(props)=> props.theme.white};
          font-size: 25px;
        }
      }
      &.active{
        :hover{
          background: ${(props)=> props.theme.bg4};
          border-radius: 12px;
        }
        background: ${(props)=> props.theme.bg4};
        border-radius: 10px
      }
    }
  }
  .Title{
    color: ${(props)=> props.theme.white};
  }
`;

//endregion

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: ${(props)=> props.theme.white};
  margin: ${v.lgSpacing} 0;
`;
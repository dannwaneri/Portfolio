import { NavLink } from 'react-router-dom';
import {useState,useEffect} from 'react'
import styled from 'styled-components';
import {debounce} from '../utilities/helpers'
import AboutIcon from '../icons/AboutIcon'
import ProjectIcon from '../icons/ProjectIcon'
import Blogicon from '../icons/BlogIcon'
import ContactIcon from '../icons/ContactIcon'

const navs = [{ path: '/',name: 'About',icon: <AboutIcon/>,},{path: '/project',name: 'Project',icon: <ProjectIcon/>},{
    path: '/blog',name: 'Blog',
    icon: <Blogicon/>,
},{path: '/contact',name: 'Contact',icon: <ContactIcon/>,
}]

const Wrapper = styled.nav`
width: 100vw;
  height: auto;
  bottom: 0;
  right: 0;
  z-index: 10;
  position: fixed;
  padding-top:0.8rem;
  padding-bottom:0.8rem;
  border-bottom: 1px solid var(--border-clr);
  border-top: 1px solid var(--border-clr);
  background-color:var(--bg-nav);
  transition: bottom 250ms ease-in-out;
  opacity:1;
ul{
  width: 100%;
  grid-template-columns: repeat(4, minmax(0px, 1fr));
   display: grid;
   list-style: none;
}

li{
list-style-type: none;
}

a{
    justify-content: center;
    align-items: center;
    position: relative;
    flex-direction: column;
    display: flex;
    font-size: 0.75rem;
    color: var(--linkclr);
    -webkit-tap-highlight-color:transparent;
    text-decoration: none;
    white-space: nowrap;
    overflow: hidden;
  transition: color 300ms ease-in;
}
 span{
    font-size: 0.75rem; 
 }
  .current{
  a{

  }  color:rgba(29,161,242,1.00); 
  }
`;
const Nav = () => {
        let [prevScrollPos, setPrevScrollPos] = useState(0)
        const handleScroll = debounce( () => {
            const currentScrollPos = window.pageYOffset || document.documentElement.scrollTop;
            setPrevScrollPos(currentScrollPos)
            if (currentScrollPos > prevScrollPos) {
                document.querySelector('nav').style.bottom = "-100%";
            } else {
               document.querySelector('nav').style.bottom = "0";
            }
        },100);
    
        useEffect(() => {
            window.addEventListener('scroll', handleScroll,{passive:true})
            return() =>{
                window.removeEventListener('scroll', handleScroll,{passive:true})
            }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[prevScrollPos, handleScroll])
    return ( 
        <Wrapper>
        <ul>
        {navs.map((Item) => (
            <li key = {Item.path}>
            <NavLink exact to ={Item.path} activeClassName ='current'>
                {Item.icon}
            <span>{Item.name}</span>
                </NavLink>
                </li>))}
        </ul>
        </Wrapper>
     );
}
 
export default Nav;

import {useState,useRef,useEffect} from 'react'
import styled from 'styled-components'
import {debounce} from '../utilities/helpers'
import Profile from '../img/profile.jpg';
import Toggle from '../Toggle'
 

const HeaderWrapper = styled.header`
    background-color:var(--bg-nav);
     padding: 0.5rem 1.1rem;
     position: fixed;
     top: 0;
     left: 0;
     width: 100%;
     border-bottom: 1px solid var(--border-clr);
     height: 3.125rem;
     z-index: 10;
     opacity: 1;
     transition: all 250ms ease-in-out;
     body.fixed-header{
    top: 0;
  }
   body.fixed-header main{
     transform: scale(1);
   }

`;

const HeaderGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2,minmax(0px, 1fr));

`;

const ImgWrapper = styled.div`
 display: flex;
   justify-content: center;
   align-items: center;
   &:focus{
       outline: none !important;
   }
   @media (max-width:40rem){
    margin-right: auto;
   }
`;

const Img = styled.img`
   display: block;
   object-fit: cover;
   border-radius: 3.125rem;
   width: 2.2rem;
   height: 2.2rem;
   border: 1px solid var(--border-clr);
   background-color:rgba(255,255,255,1.00);

`;

const Header = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const[height,setHeight] = useState(0)
    const ref = useRef(null)



    const handleScroll = debounce( () => {
    const currentScrollPos = window.pageYOffset
    setPrevScrollPos(currentScrollPos)

    if(currentScrollPos > 0){
    document.body.classList.add('fixed-header')
    document.body.style.paddingTop = height +'px';
} else{
    document.body.style.paddingTop = 0;
    
}

},100);

useEffect(() => {
    window.addEventListener('scroll', handleScroll,{ passive: true})
    setHeight(ref.current.clientHeight)
    return() =>{
        window.removeEventListener('scroll', handleScroll,{ passive: true})
    }
// eslint-disable-next-line react-hooks/exhaustive-deps
},[prevScrollPos])
    return ( 
        <HeaderWrapper  ref = {ref}>
            <HeaderGrid>
                <ImgWrapper>
                    <Img  src={Profile} alt=''/>
                </ImgWrapper>
                <Toggle/>
            </HeaderGrid>
        </HeaderWrapper>
     );
}
 
export default Header;

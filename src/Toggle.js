import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import Sun from './icons/Sun'
import Moon from './icons/moon'
import { setTheme } from './utilities/themes'


const Button = styled.button`
background: transparent;
  border: 0;
  color: rgba(29,161,242,1.00);
  cursor: pointer;
  font-size:1.125rem;
  transition: color .3s ease-out;
&:focus{
    outline: none;
}
@media (max-width:40rem){
    margin-left: auto;
   }
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;





function Toggle() {
    const [togClass, setTogClass] = useState('dark');
    let theme = localStorage.getItem('theme');

    const handleOnClick = () => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTheme('theme-light');
            setTogClass('light')
        } else {
            setTheme('theme-dark');
            setTogClass('dark')
        }
    }

    useEffect(() => {
        if (localStorage.getItem('theme') === 'theme-dark') {
            setTogClass('dark')
        } else if (localStorage.getItem('theme') === 'theme-light') {
            setTogClass('light')
        }
    }, [theme])
                /* Whenever state is updated, Toggle re-renders and useEffect runs */

/*To avoid executing the effect callback after each render, 
we provide a second argument, an empty array.**/


/*With an empty array, our button doesn't work no matter how many times we click it... 
    The theme is only set once, when the component first mounts.*/


/* 
    Let's add theme to our dependencies array
    When theme changes, useEffect will execute the effect function again
  */
    return (
                    <ButtonWrapper>
                  
                    <Button onClick={handleOnClick}>
                        {
                            togClass ==='light' ?
                          <Moon/>
                            : 
                          <Sun/>
                        }
                    </Button>
                    </ButtonWrapper>
                        
    )
}

export default Toggle;
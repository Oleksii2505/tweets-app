import styled from 'styled-components';
import { NavLink } from "react-router-dom"; 

export const Header = styled.header`
position: fixed;
top: 0;
left: 0;
width: 100%;
z-index: 999;
margin: 0 auto;
justify-content: flex-start;
gap: 40px;
display: flex;
background-color: #5df0eb;
padding: 15px 25px;
margin-bottom: 12px;
box-shadow: 10px -15px 110px -9px rgba(0,0,0,0.75);
border-radius: 8px;
`;

export const Link = styled(NavLink)`
cursor: pointer;
font-size: 25px;
line-height: 2;
font-weight: 500;
color: inherit;
text-decoration: none;
&.active {
    color: #4321b0;
}
:hover,
:focus {
    color: #4321b0;
}   
`;
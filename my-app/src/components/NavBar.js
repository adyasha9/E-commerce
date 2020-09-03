import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import img from './sloth.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';


export default class NavBar extends Component {
    render() {
        return ( 
        <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5 navbar-toggle">
       
        <Link to="/">
        <img src={require("./sloth.png")} className='navbar-brand-dark' width='80x' height='80px' alt='sloth'/>
        </Link>
        <ul className='navbar-nav align-items-center'>
        <li className='nav-item ml-5'></li>
        <Link to="/ProductList" className="nav-link">
        Products
        </Link> 
        
      
       
        </ul>
        
        <Link to="/cart" className="ml-auto">
        <ButtonContainer>
        <span className="mr-2" color="#ff0000">
         <i className="fas fa-shopping-cart" />
         </span>
        
        </ButtonContainer>
        </Link>
       
        <LoginButton/>
        <LogoutButton/>
        </NavWrapper>
        );
      }
    }
    const NavWrapper = styled.nav`
    background:#000;
    
   `;
    
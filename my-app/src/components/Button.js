import styled from 'styled-components'

export const ButtonContainer = styled.button `
    text-transform:capitalize;
    font-size:1.4rem;
    background:black;
    border:0.05rem solid;
    border-color:${props => 
     props.cart? "var(--mainYellow)":"var(--lightBlue)"};
    color:${prop => (prop.cart? "var(--mainYellow)":"var(--lightBlue)")};
    border-radius:0.5rem;
    padding:0.2rem 0.5 rem;
    cursor:pointer;
    margin:0.2rem 0.5rem 0.2rem 0;
    transition: all 0.5s ease-in-out;
    &:hover{
     background:#000000;
     color:yellow;
    }
    &:focus{
     outline:none;
    }
    `;
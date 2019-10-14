import styled, { css } from 'styled-components';


export default styled.button`
  font-family:${props => props.theme.font};
  font-size: 1.3rem;
  border:none;
  border-radius:5px;
  /* background:${props => props.primary ? ('red') : ('green')}; */
  /* background: ${props => props.theme.primary}; */
  ${props => props.color && 
  css`
  background: ${props => props.theme[props.color]};
  ` }
  padding:7px 10px;
  color:#fff;
  &:hover{
    background:blue;
    cursor:pointer;
  }
`

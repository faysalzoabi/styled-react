import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import './App.css';
import Button from './elements/Button';


const theme = {
  primary: 'red',
  secondary:'green',
  alert:'yellow',
  font:'sans-serif'
}


const H1 = styled.h1`
  font-size:3rem;
  font-family:${props => props.theme.font};
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <H1>Styled Components</H1>
        <form>
          <input type="text"/>
          <button>Create</button>
          <Button color="primary">Create</Button>
        </form>
    </div>
    </ThemeProvider>
  );
}

export default App;

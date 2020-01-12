import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from "../theme"

const Form = styled.form`
  margin: 0 auto;
  width: 50%;
  min-width: 400px;
  max-width: 800px;
  text-align: center;
  border: 1px solid #ddd;
  padding: 0 32px 32px;
  color: black;
  background: ${(props) => props.theme.greyLighter};
`;

const Title = styled.h2`
  margin-top: 40px;
  margin-bottom: 70px;
  font-size; 1.5em;
  color: ${(props) => props.theme.greyDark};
`;

const Button = styled.button`
  font-size: 1.5em;
  background-color: black;
  color: white;
`;

const Input = styled.input`
  font-size: 1.45em;
  border: 1px solid #ddd;
`;

export default class SignupForm extends React.Component {
  
  signUp = (e) => {
    const email = new FormData(e.target).get('email');
    e.preventDefault();
    console.log(`New signup from ${email}`);
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Form onSubmit={this.signUp}>
          <Title>
            Sign up to my newsletter
          </Title>
          <Input type="email" name="email" />
          <Button>Sign Up</Button>
        </Form>
      </ThemeProvider>
    )
  }

}
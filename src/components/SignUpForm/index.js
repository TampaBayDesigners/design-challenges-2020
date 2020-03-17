import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import styled from 'styled-components'
import { theme } from '../../theme/theme'

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`;

const SignUpForm = () => {
  return (
    <FormContainer>
      <h5>Sign Up for Updates</h5>
      <p style={{ color: theme.grayDark }}>Want to be updated about the next meetup? Sign up for the event newsletter - we’ll never spam you or sell your email address, and you can unsubscribe at any time.</p>
      <Mailchimp
        className='mc-form'
        action='https://gmail.us3.list-manage.com/subscribe/post?u=ef718d2964b104bbffc89e54d&amp;id=76321af71d'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Enter your Email',
            type: 'email',
            required: true
          }
        ]}
      />
    </FormContainer>
  )
}

export default SignUpForm
import React from 'react'
import Mailchimp from 'react-mailchimp-form'
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`;

const SignUpForm = () => {
  return (
    <FormContainer>
      <h5>Sign Up for Updates</h5>
      <p>Want to be updated about the next meetup? Sign up for the event newsletter - we’ll never spam you or sell your email address, and you can unsubscribe at any time.</p>
      <Mailchimp
        className='mc-form'
        action='https://grapalab.us19.list-manage.com/subscribe/post?u=e54a0fff03392363fb6d0e9a9&amp;id=ff50655cf6'
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
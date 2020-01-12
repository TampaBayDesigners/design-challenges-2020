import React from 'react';
import styled from 'styled-components';

const SlackCta = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1.6rem 0;
`;

const SlackLink = styled.a`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  background: white;
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-top: 1.6rem;
`;

const SlackLinkContent = styled.span`
  padding-left: 1.6rem;
  color: rgba(0,0,0,1);
  font-weight: 900;
`;

export const SlackButton = () => {
  return (
    <SlackCta>
      <SlackLink href="https://join.slack.com/t/tampabaydesigners/shared_invite/enQtNjkxOTYxMjM2ODU1LWQzNWYyZDhmZWRkNjBlYTdkZGZmMjZiZTU4NTMzMDkxYTFkNmU0ZjEzZjgyYjRkOWQ1YmEzYWIxNjIyMGU5ODU" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" viewBox="0 0 60 60" width="25" height="25" ariaLabel="Slack"><path d="m21.902.148c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985h5.974v-5.985a5.98 5.98 0 0 0 -5.974-5.985m0 15.96h-15.929c-3.299 0-5.973 2.68-5.973 5.986 0 3.305 2.674 5.985 5.973 5.985h15.93c3.298 0 5.973-2.68 5.973-5.985 0-3.306-2.675-5.986-5.974-5.986" fill="#36c5f0"></path><path d="m59.734 22.094c0-3.306-2.675-5.986-5.974-5.986s-5.973 2.68-5.973 5.986v5.985h5.973a5.98 5.98 0 0 0 5.974-5.985m-15.929 0v-15.961a5.98 5.98 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985v15.96c0 3.307 2.674 5.987 5.973 5.987a5.98 5.98 0 0 0 5.974-5.985" fill="#2eb67d"></path><path d="m37.831 60a5.98 5.98 0 0 0 5.974-5.985 5.98 5.98 0 0 0 -5.974-5.985h-5.973v5.985c0 3.305 2.674 5.985 5.973 5.985m0-15.96h15.93c3.298 0 5.973-2.68 5.973-5.986a5.98 5.98 0 0 0 -5.974-5.985h-15.929c-3.299 0-5.973 2.68-5.973 5.985a5.979 5.979 0 0 0 5.973 5.985" fill="#ecb22e"></path><path d="m0 38.054a5.979 5.979 0 0 0 5.973 5.985 5.98 5.98 0 0 0 5.974-5.985v-5.985h-5.974c-3.299 0-5.973 2.68-5.973 5.985m15.929 0v15.96c0 3.306 2.674 5.986 5.973 5.986a5.98 5.98 0 0 0 5.974-5.985v-15.961a5.979 5.979 0 0 0 -5.974-5.985c-3.299 0-5.973 2.68-5.973 5.985" fill="#e01e5a"></path></svg>
        <SlackLinkContent>
          Join us on Slack!
        </SlackLinkContent>
      </SlackLink>
    </SlackCta>
  )
}
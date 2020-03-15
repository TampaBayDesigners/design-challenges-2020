import React from "react"
import styled from "styled-components"
import { CardHover } from '../Card'
import { theme } from "../../theme/theme"
import { Badge } from "../Badge"

const EventImg = styled.div`
  width: 21.6rem;
  height: 21.6rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${theme.blue};
  filter: grayscale(0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 8rem;
  background-image: url('${(props) => props.image}');
  transition: all 200ms ease-out 0s;
  @media screen and (max-width: 769px) {
    width: 7.2rem;
    height: 7.2rem;
    top: -4.8rem;
    right: 3vw;
    position: absolute;
    font-size: 3.2rem;
  }
`;

const EventContent = styled.div`
  padding-left: 3.2rem;
  @media screen and (max-width: 769px) {
    padding-left: 0;
    margin-top: 1.6rem;
    width: 100%;
  }
`;

const EventName = styled.h4`
  color: ${theme.grayDark}
`;

const EventTitle = styled.h2`
  color: ${theme.white}
`;

const EventDate = styled.h6`
  color: ${theme.grayDark}
`;

const EventContainer = styled(CardHover)`
  margin-bottom: 5.6rem;
  &:hover, &:focus {
    ${EventImg} {
      transform: scale(1.05) rotate(-3deg);
      filter: grayscale(0);
    }
  }
  @media screen and (max-width: 769px) {
    flex-direction: column;
  }
`;

const EventItem = (props) => {
  return (
    <EventContainer>
      <EventImg image={props.event.image}></EventImg>
      <EventContent>
        <EventName>Next Event</EventName>
        <EventTitle>{props.event.date}</EventTitle>
        <EventDate>{props.event.time}, {props.event.location}</EventDate>
        <Badge color={theme.pink} style={{ marginBottom: '8px' }}>{props.event.type}</Badge>
      </EventContent>
    </EventContainer>
  )
}

export default EventItem
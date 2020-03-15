import styled from 'styled-components'

export const Section = styled.section`
  padding-top: 8rem;
  padding-bottom: 6.4rem;
`;

export const Wrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 1.6rem;
  position: relative;
`;

export const Grid = styled.div`
  list-style: none;
  margin-left: -1.6rem;
`;

export const Col = styled.div`
  width: ${(props) => props.width ? props.width : '100%'};
  box-sizing: border-box;
  display: inline-block;
  margin-right: -.25em;
  min-height: 1px;
  padding-left: 1.6rem;
  vertical-align: top;
  @media (max-width: 700px) {
    display: block;
    margin-left: 0;
    margin-right: 0;
    width: auto;
  }
`;

export const ColCentered = styled(Col)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
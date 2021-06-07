import styled from '@emotion/styled';
import { fontColor, borderColor } from '../../../../styles/variables';

const Container = styled.div`
  padding: 40px 80px;

  @media screen and (max-width: 425px) {
    padding: 10px;
  }
`;
const Form = styled.form`
  border: 1px solid ${borderColor};
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-gap: 30px;

  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const TimerContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: ${fontColor};
  font-weight: lighter;
`;
const Button = styled.button`
  background: none;
  border: none;
`;

export {
  Container,
  Form,
  TimerContainer,
  Button
};

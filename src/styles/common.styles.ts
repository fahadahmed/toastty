import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import {
  fontColor,
  borderColor,
  buttonBorder,
  buttonBackground
} from './variables';

const Container = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border: 1px solid ${borderColor};
  // border-radius: 3px;
  box-shadow: 5px 10px ${buttonBackground};
  width: 400px;
  min-height: 300px;
  text-align: center;
  color: ${fontColor};

  p {
    font-size: 24px;
    font-weight: lighter;
  }
`;

const LinkButton = styled(Link)`
  background: ${buttonBackground};
  padding: 10px;
  text-decoration: none;
  color: ${fontColor};
  font-weight: bold;
  border: 2px solid ${buttonBorder};
  margin: 10px;

  &:hover {
    background: ${buttonBorder};
    color: white;
  }
`;

export {
  Container,
  Card,
  LinkButton
};

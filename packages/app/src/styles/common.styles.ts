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
  @media screen and (max-width: 425px) {
    width: 360px;
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

const FormButton = styled.button`
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

const PublicForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormInput = styled.input`
  border: 1px solid ${borderColor};
  padding: 10px;
  color: ${fontColor};
  font-size: 20px;
  margin: 10px;
`;

export {
  Container,
  Card,
  LinkButton,
  PublicForm,
  FormInput,
  FormButton
};
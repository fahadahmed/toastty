import styled from '@emotion/styled';
import { fontColor, borderColor } from '../../../../styles/variables';

const Container = styled.div`
  padding: 40px 80px;
`;

const Form = styled.form`
  border: 1px solid ${borderColor};
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
  display: grid;
  grid-template-columns: 10fr 2fr;
  grid-gap: 30px;
`;
const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const DescriptionInput = styled.input`
  border: none;
  padding: 10px;
  border-bottom: 1px solid ${borderColor};
  font-size: 16px;
`;
const MetaDataContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
`;
const MetaDataInput = styled.input`
  border: 1px solid ${borderColor};
  padding: 10px;
  border-radius: 3px;
  font-size: 14px;
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
  TaskContainer,
  DescriptionInput,
  MetaDataContainer,
  MetaDataInput,
  TimerContainer,
  Button
};

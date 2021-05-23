import styled from '@emotion/styled';
import { 
  borderColor,
  fontColor,
  buttonBackground,
  buttonBorder
} from '../../styles/variables';

const Container = styled.div`
  display: flex;
  flex-direction: row nowrap;
  border-bottom: 1px solid ${borderColor};
  justify-content: space-between;
  padding: 10px 80px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 24px;
  font-weight: bolder;
  color: ${fontColor};
  text-transform: uppercase;
`;

const LogoutBtn = styled.button`
  color: ${fontColor};
  font-size: 16px;
  font-weight: bold;
  border: 3px solid ${buttonBorder};
  background: ${buttonBackground};
  padding: 10px;
  border-radius: 3px;
  min-width: 120px;
`;

const Username = styled.span`
  font-size: 16px;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${fontColor};
  padding: 0px 10px;
`;

export {
  Container,
  Title,
  LogoutBtn,
  Username
};

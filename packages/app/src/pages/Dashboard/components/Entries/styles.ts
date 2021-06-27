import styled from '@emotion/styled';
import { fontColor, borderColor } from '../../../../styles/variables';

const Container = styled.div`
  padding: 0px 80px;
  @media screen and (max-width: 425px) {
    padding: 0px 10px;
  }
`;
const Heading = styled.h1`
  font-weight: lighter;
  margin: 0;
  color: ${fontColor};
`;
const Entry = styled.div`
  border: 1px solid ${borderColor};
  margin: 20px 0px;
  padding: 10px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 9fr 2fr 1fr;
  min-height: 80px;
  @media screen and (max-width: 425px) {
    grid-template-columns: 1fr;
  }
`;
const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const MetaDataContainer = styled.div`
  display: flex;
  flex-direction: row nowrap;
  justify-content: space-between;
  @media screen and (max-width: 425px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
`;
const TimeContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #888888;
  font-weight: lighter;
`;
const EntryHeader = styled.h3`
  margin: 0;
  color: ${fontColor};
  font-size: 24px;
  @media screen and (max-width: 425px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export {
  Container,
  EntryHeader,
  Entry,
  DescriptionContainer,
  MetaDataContainer,
  TimeContainer,
  Heading
};
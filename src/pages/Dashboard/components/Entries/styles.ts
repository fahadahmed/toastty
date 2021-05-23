import styled from '@emotion/styled';
import { fontColor, borderColor } from '../../../../styles/variables';

const Container = styled.div`
  padding: 0px 80px;
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
  grid-template-columns: 10fr 2fr;
  min-height: 80px;
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

import React from 'react';
import styled from '@emotion/styled';
import { borderColor } from '../../styles/variables';

const Container = styled.div`
  padding: 40px;
`;

const Form = styled.form`
  border: 1px solid ${borderColor};
  border-radius: 3px;
  padding: 10px;
  min-height: 100px;
`;

const AddEntry = () => {
  return(
    <Container>
      <Form action="">
        <input type="text" name="description" placeholder="What are you working on?" />
        <input type="text" name="project" placeholder="project name" />
        <input type="text" name="client" placeholder="client name" />
        <span>00:00</span>
        <button>Submit</button>
      </Form>
    </Container>
  );
}

export default AddEntry;
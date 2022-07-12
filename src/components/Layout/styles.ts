import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  width: 870px;
  padding: 0;
  margin: 20px auto;

  display: flex;
  gap: 10px;
  @media(max-width: 769px) {
    width: 100%;
    padding: 0;
    margin: 0;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 90vh;
  @media(max-width: 769px) {
    width: 100%;
    height: 100vh;
  }
`;

import styled from 'styled-components';

export const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  background: ${(props) => props.theme.secondaryBg};
  width: 100%;
  height: 60px;
  gap: 20px;
  padding: 0 20px;
  @media (max-width: 769px) {  
    justify-content: space-between;
    gap: 0;
  }
`;

export const SearchInput = styled.input`
  height: 34px;
  width: 40%;
  border-radius: 4px;
  background-color: ${(props) => props.theme.primaryBg};
  border: 2px solid transparent;
  color: ${(props) => props.theme.primaryText};
  padding: 0 20px;
  font-family: Montserrat, sans-serif;
  &::placeholder {
    color: ${(props) => props.theme.gray};
    font-size: 14px;
    line-height: 14px;
    font-family: Montserrat, sans-serif;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid ${(props) => props.theme.purple};
    border-radius: 4px 4px 0 0;
  }
    @media (max-width: 769px) {
        width: 100%;
    }
`;

export const TabWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
    @media (max-width: 769px) {
        width: 100%;
        justify-content: flex-end;
    }
`;

export const TabBtn = styled.button<{ isActive: boolean }>`
  background: none;
  border: none;
  border-bottom: 2px solid
    ${({isActive, theme}) => (isActive ? theme.purple : 'transparent')};
  padding: 0 10px;
  height: 34px;
  color: ${({isActive, theme}) =>
    isActive ? theme.primaryText : theme.gray};
  cursor: pointer;
    transition: 0.3s;
    border-radius: ${({isActive}) =>
      isActive ? '4px 4px 0 0' : '4px'};
  &:focus {
    outline: none;
    background-color: ${(props) => props.theme.purpleOpacity};
  } 
  &:hover {
    background-color: ${(props) => props.theme.purpleOpacity};
  } 
`;

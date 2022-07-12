import styled from 'styled-components';
import {LoaderProps} from './index';

export const LoaderComponent = styled.div<LoaderProps>`
    display: inline-block;
    width: 20px;
    height: 20px;
  padding-top: 1px;
  &:after {
    content: " ";
    display: block;
    width: ${({size}) => size + 'px'};
    height: ${({size}) => size + 'px'};
    border-radius: 50%;
    border-width: 3px;
    border-style: solid;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
    box-sizing: border-box;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

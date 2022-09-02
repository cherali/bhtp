import React from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`

const LoadingContainer = styled.div`
  display: inline-block;
  width: 45px;
  height: 45px;

  :after {
    content: " ";
    display: block;
    width: 30;
    height: 30px;
    margin: 4px;
    border-radius: 50%;
    border: 4px solid ${({ theme }) => theme.pallete.primary.dark};
    border-color: ${({ theme }) => theme.pallete.primary.dark} transparent ${({ theme }) => theme.pallete.primary.dark} transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`

const Loading = () => {
  return (
    <LoadingContainer />
  )
}

export default Loading
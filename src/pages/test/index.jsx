import React from 'react'
import styled from 'styled-components'
import BaseButton from '../../components/shared/button/Button'
import Logo from '../../components/shared/logo/LogoBox'

function test() {
  return (
    <TestContainer>
      <BaseButton text="테스트입니다" size="large"/>
      <BaseButton text="테스트입니다" size="medium"/>
      <BaseButton text="테스트입니다" size="small"/>
      <BaseButton text="테스트입니다" size="extra-small"/>
      <BaseButton text="테스트입니다" size="large" color="blue"/>
      <BaseButton text="테스트입니다" size="large" color="red"/>
      <BaseButton text="테스트입니다" size="large" bgColor={"green"}/>
      <BaseButton text="테스트입니다" size="large" bgColor={"purple"}/>
      <Logo size="extra-small"/>
      <Logo size="small"/>
      <Logo size="medium"/>
      <Logo size="large"/>
    </TestContainer>
  )
}

export default test

const TestContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1vh;
`
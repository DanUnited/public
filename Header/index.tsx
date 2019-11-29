import React, { useState } from 'react'

import { Button, Menu } from 'semantic-ui-react'
import styled from 'styled-components'

import { Logo } from 'icons/'
import Sidebar from 'features/Sidebar'

const Wrapper = styled.span`
  position: relative;
  button {
    width: 30px;
    height: 30px;
    border-radius: 15px !important;
    padding: 0 !important;
  }
`

const MainWrapper = styled.div`
  height: 70px;
  .menu {
    margin-top: 0;
  }
`

const Score = styled.div`
  color: #fff;
  margin-right: 10px;
`

export const Header = () => {
  const [visible, setVisible] = useState(false)
  return (
    <MainWrapper>
      <Menu size='large' secondary>
        <Menu.Item position='left'>
          <Logo width='180' height='45' />
        </Menu.Item>
        <Menu.Item position='right'>
          <Score>
            674 балла
          </Score>
          <Wrapper>
            {
              visible && <Sidebar clickOutside={() =>setVisible(false)}/>
            }
            <Button circular onClick={() => setVisible(!visible)}>
              A
            </Button>
          </Wrapper>
        </Menu.Item>
      </Menu>
    </MainWrapper>
  )

}
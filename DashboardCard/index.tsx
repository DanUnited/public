import React, { ReactNode, useState } from 'react'

import styled from 'styled-components'
import { Transition } from 'semantic-ui-react'

import { Info } from 'icons/Info'
import { Tooltip } from 'features/Tooltip'

type TProps = {
  children: ReactNode,
  info?: boolean,
  visible: boolean,
  duration: number,
  className?: string,
}

const Wrapper = styled.div`
  background: rgba(196, 196, 196, .1);
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 18px;
  line-height: 140%;
  color: #FFFFFF;
  height: 210px;
  margin-right: 20px;
  margin-bottom: 20px;
  padding: 27px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  .title {
    width: 84%;
  }
  &:hover {
    background: rgba(196, 196, 196, .2);
  }
`

const Svg = styled.span`
  position: absolute;
  right: 22px;
  top: 18px;
  cursor: pointer;
  .tooltip {
    width: 284px;
    position: absolute !important;
    bottom: 35px;
    left: -132px;
    font-size: 14px;
    line-height: 150%;
    padding: 20px;
    z-index: 2;
    &:hover {
      color: #000 !important;
    }
  }
`

export const DashboardCard = ({ children, info, visible, duration, className }: TProps) => {
  const [show, toggle] = useState(false)
  return (
  <Transition visible={visible} animation='fade up' duration={duration}>
    <Wrapper className={`dashboard-card ${className}`}>
      {
        info && (
          <Svg>
            <Info onClick={() => toggle(!show)}/>
            {
              show && <Tooltip clickOutside={() => toggle(false)} />
            }
          </Svg>
        )
      }
      {children}
    </Wrapper>
  </Transition>
)}

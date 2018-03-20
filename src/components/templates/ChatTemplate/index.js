// https://github.com/diegohaz/arc/wiki/Atomic-Design#templates
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { size } from 'styled-theme'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 3.75rem;
  min-height: 100vh;
  box-sizing: border-box;
  @media screen and (max-width: 640px) {
    padding-top: 3.25rem;
  }
  // background: url(/bg-web.png) no-repeat center center;
  // background-size: cover;
  // background-attachment: fixed;
`

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
	background-color: rgba(0, 4, 6, 0.6);
`

const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  margin: 5rem auto;
  margin-bottom: 0rem;
  max-width: ${size('maxWidth')};
  height: calc(100vh - 3.75rem - 2rem);
  @media screen and (max-width: 640px) {
    height: calc(100vh - 3.25rem - 2rem);
  };
`

const ChatTemplate = ({
  header, hero, sponsor, children, footer, ...props
}) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

ChatTemplate.propTypes = {
  header: PropTypes.node.isRequired,
  children: PropTypes.any.isRequired,
}

export default ChatTemplate

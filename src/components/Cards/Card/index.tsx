import React, {CSSProperties, FC, ReactNode} from "react"

// Styles
import {
  Wrapper,
  MobileWrapper,
  Header,
  Img,
  ImgContainer,
  Content
} from "./styles"

// Scripts
import { routeLink } from "../../../static/scripts/global";

// Scripts
const toggleOpenState = (el) => {
  const card = el.target.closest('.card.icon');
  if (card) card.classList.toggle('active');
}

interface Props {
  image?: String,
  icon?: String,
  mobile?: String,
  link?: String,
  title: String,
  children?: ReactNode
  imgStyle?: CSSProperties | undefined
  background?: String,
  displayImage?: Boolean
}

const Card: FC<Props> = ({ image=null, icon=null, mobile=null, link=null, title, children, imgStyle, background, displayImage }) => {
  const imageClass = (displayImage) ? ((icon !== null) ? "icon" : "image") : "no-image"

  return (
    <>
      <Wrapper className={`card hide-at-mobile ${imageClass} ${background}`} href={link} onClick={routeLink}>
        {(displayImage) ? (
          <Header className="card-header">
            <ImgContainer className={(image !== null) ? 'image' : 'icon'}>
              <Img
                src={(image !== null) ? image : icon}
                placeholder="BLURRED"
                maxWidth={(image === null) ? 128 : null}
                maxHeight={(image === null) ? 98 : null}
                alt="Card Icon Image"
                style={{...imgStyle}}
              />
            </ImgContainer>
          </Header>
        ) : null }
        <Content className="card-content">
          <h4 className="hide-at-mobile">{title}</h4>
          {children}
        </Content>
      </Wrapper>
      <MobileWrapper className={`card show-at-mobile ${imageClass} ${background}`}>
        <Header className="card-header" onClick={toggleOpenState}>
          {(displayImage) ? (
            <ImgContainer className={(image !== null) ? 'image' : 'icon'}>
              <Img
                src={(image !== null) ? image : (mobile != null) ? mobile : icon}
                placeholder="BLURRED"
                maxWidth={(image === null) ? 128 : null}
                maxHeight={(image === null) ? 98 : null}
                alt="Card Icon Image"
              />
            </ImgContainer>
          ) : null }
          <h4 className="show-at-mobile">{title}</h4>
        </Header>
        <Content className="card-content">
          {children}
        </Content>
      </MobileWrapper>
    </>
  )
}

export default Card
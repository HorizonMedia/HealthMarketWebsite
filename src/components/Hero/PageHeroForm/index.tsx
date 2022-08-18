// Library
import React, { FC } from "react";

// Styles
import {
  Wrapper,
  Buttons,
  Btn,
  Form,
  InputGroup,
  Input,
  Footer,
  CTA
} from "./styles"

// Components
import Button from "../../Buttons/Button"

// Images
import MapPin from "../../../images/location.png"
import PhoneIcon from "../../../images/phone-icon.png"

interface Props {
  centered?: boolean,
  light?: boolean,
  btnLeftText: String,
  btnRightText: String,
  inputId: String
}

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId }) => {
  const toggleForm = (el) => {
    const parent = el.target.parentElement;
    // if not already active...
    if (el.target.classList.contains('accented')) return
    // toggle button state
    parent.firstChild.classList.toggle('accented')
    parent.firstChild.nextSibling.classList.toggle('accented')
    // toggle form state
    parent.parentElement.classList.toggle('agent')
  }

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`}>
      <Buttons>
          <Btn className="accented" onClick={toggleForm}>{btnLeftText}</Btn>
          <Btn onClick={toggleForm}>{btnRightText}</Btn>
      </Buttons>
      <Form>
          <InputGroup>
              <img src={MapPin} alt="map location pin image" />
              <Input id={inputId} type="text" name={inputId} placeholder="Enter Zip Code/City" />
          </InputGroup>
          <Footer>
            <Button style={{borderRadius: "4px"}} background="accent" border="light" color="light">Search</Button>
            <CTA>
              <img src={PhoneIcon} />
              <span>
                Call us 24/7 at <a href="tel:+18555652552">(855) 565-2552</a>
              </span>
            </CTA>
          </Footer>
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm
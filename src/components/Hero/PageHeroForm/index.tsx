// Library
import React, { FC, useEffect, useState } from "react";
import { useLocation } from '@reach/router';

// Styles
import {
  Wrapper,
  Buttons,
  Form,
  Radio,
  Footer,
  CTA,
  FirstWrapper,
  HideOnDesktopWrapper,
} from "./styles"

// Scripts
import {
  toggleForm,
  sendForm
} from "../../../static/scripts/global"

// Components
import Button from "../../Buttons/Button"
import AutocompleteField from "../../Inputs/Geocode/AutocompleteField";

// Images
import PhoneIcon from "../../../static/images/phone-icon.png"

interface Props {
  centered?: boolean,
  light?: boolean,
  btnLeftText: string,
  btnRightText: string,
  inputId: string,
  buttons?: boolean,
  footerContent: string,
  hideFooter?: boolean
}

// set geocode earth api key
const api_key = 'ge-8876b9780ea0871d';

// set the urls to change the form action to
const plans = "https://shop.healthmarkets.com/en/about-me/info/";
const agents = "/local-health-insurance-agent/search/";
const finalExpense = "/life-insurance/final-expense-insurance/"

const PageHeroForm: FC<Props> = ({ centered, light, btnLeftText, btnRightText, inputId, buttons, footerContent, hideFooter,...rest  }) => {
const [firstButtonActive, setFirstButtonActive] = useState(false);
const [secondButtonActive, setSecondButtonActive] = useState(true);

// these functions and conditionals will serve as temporary measures until all pages have been redesigned to reflect the updated requirements for this component

  const onClickFirstButton = (el) => {
    toggleForm(el)
    setFirstButtonActive(true);
    setSecondButtonActive(false)
  }

  const onClickSecondButton = (el) => {
    toggleForm(el)
    setFirstButtonActive(false);
    setSecondButtonActive(true)
  }

  const renderButton = () => { 
  if (firstButtonActive) {
    return (
      <>
      <FirstWrapper>
      <Footer>
      <Button style={{borderRadius: "4px", marginTop: "-180px", height: '50px'}} background="accent-alt" border="light" color="light">
      <a className="phone-link" href="tel:+18339100995">Call 1-833-910-0995</a></Button>
      </Footer>
      </FirstWrapper>
      </>
    ) 
  } else if (secondButtonActive) {
    return (
      <>
      <AutocompleteField />
      <div id="zipCodeField" className="hidden-inputs">
          <input type="hidden" id="zipCode" value="" />
          <input type="hidden" id="county" value="" />
        </div>
        <Footer>
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light"><div className="mobile-button">Search</div><div className="desktop-button">Find a licensed insurance agent</div></Button>
          <CTA>
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
            </Footer>
      </>
   )
  }
}

  return (
    <Wrapper className={`${(centered) ? `centered` : ``} ${(light) ? `light` : ``}`} {...rest}>
      <Form id="zipCodeForm" action={plans} autocomplete="off" onSubmit={(e) => { sendForm(e) }}>
    { useLocation()?.pathname !== finalExpense ?
        <>
        {(buttons || buttons === undefined) ? (
          <Buttons>
            <Radio onClick={toggleForm} className="accented">{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={toggleForm}>{btnRightText}
              <input id="radioSearchAgents" type="radio" value={agents} />
            </Radio>
          </Buttons>
        ) : null}
        <AutocompleteField />
        <div id="zipCodeField" className="hidden-inputs">
          <input type="hidden" id="zipCode" value="" />
          <input type="hidden" id="county" value="" />
        </div>
        <Footer>
          <Button style={{borderRadius: "4px"}} background="accent-alt" border="light" color="light">Search</Button>
          {(!hideFooter || hideFooter === undefined) ? (
            <CTA>
              <img src={PhoneIcon} />
              <span dangerouslySetInnerHTML={{ __html: footerContent }} />
            </CTA>
          ) : null}
        </Footer>
        </>
        : (
          <>
          <HideOnDesktopWrapper>
          <Buttons>
            <Radio onClick={onClickFirstButton}>{btnLeftText}
              <input id="radioSearchPlans" type="radio" value={plans} checked />
            </Radio>
            <Radio onClick={onClickSecondButton} className="accented">{btnRightText}
              <input id="radioSearchAgents" type="radio" value={agents} />
            </Radio>
          </Buttons>
          </HideOnDesktopWrapper>
          {renderButton()}
            </>)}
      </Form>
    </Wrapper>
  )
}

export default PageHeroForm
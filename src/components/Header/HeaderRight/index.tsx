import React, { useState } from "react";

// Styles
import {
    Wrapper,
    Item,
    TextSize,
    SearchButton,
    Bars, AgentItem
} from "./styles"

// Scripts
import {
  changeTextSize,
  toggleNav,
  toggleSearch,
  routeLink
} from "../../../static/scripts/global"

// Components
import ToggleButton from "../../Buttons/ToggleButton"
import Navigation from "../../Navigation"
import SearchField from "../../SearchField"

// Images
import PhoneIcon from "../../../static/images/phone-icon.svg"
import SearchIcon from "../../../static/images/search-icon.png"

const HeaderRight = ({ headerData }: { headerData: any }) => {
  const [isNavOpen, setNavOpen] = useState(false);

  // const changeNavOpen = (value) => {
  //   setNavOpen(value);
  // }

  return (
    <Wrapper className="header-right">
      <Item className="hide-at-device" style={{minWidth: '230px'}}>
        <a href="tel:+18178134562">
          <img className="phone icon" src={PhoneIcon} alt="telephone icon" />
          1-817-813-4562, TTY 711
        </a>
      </Item>
      <AgentItem className="hide-at-device">
        <a className="find-agent" href="/local-health-insurance-agent/" onClick={routeLink}>
          Find a licensed insurance agent
        </a>
      </AgentItem>
      <Item className="hide-at-device">
        <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> Text Size <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
      </Item>
      <Item>
        <a className="hide-at-desktop" href="tel:+18178134562">
          <img className="mobile phone icon" src={PhoneIcon} alt="telephone icon" />
          Call us
        </a>
        <SearchButton className="hide-at-device" onClick={toggleSearch}>
          <img className="icon" src={SearchIcon} alt="magnifying glass icon" />
        </SearchButton>
        <ToggleButton className="menu-button" callback={toggleNav}>
          <Bars />
        </ToggleButton>
        <Navigation headerData={headerData} />
        <SearchField />
      </Item>
    </Wrapper>
  )
}

export default HeaderRight

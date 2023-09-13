import React, { FC, useEffect } from "react"

// Styles
import { Wrapper, Logo } from "./styles"

// Scripts
import { routeLink } from '../../static/scripts/global'

// Components
import HeaderRight from "./HeaderRight"
import LPHeader from "./LPHeader"

// Images
import headerLogo from "../../static/images/HMIA_logo2.png"

interface Props {
  headerData?: any
  staticHeader?: boolean,
  color?: String,
  lp?: boolean
}

const Header: FC<Props> = ({ headerData, staticHeader=false, color, lp=false }) => {
  const headerColor = (color) ? color : "dark";
  const staticClass = (staticHeader) ? "is-static" : "";

  const stickyHeader = () => {
    const header = document.getElementsByClassName('site-header')[0]
    const offset = header.offsetHeight / 2

    if (window.pageYOffset > offset) {
      header.classList.add('is-stuck')
    } else {
      header.classList.remove('is-stuck')
    }
  }

  useEffect(() => {
    stickyHeader();

    window.addEventListener("scroll", () => {
      stickyHeader();
    });
  }, [])


  return (
    <div className="header">
    <Wrapper className={`site-header ` + headerColor + ` ` + staticClass + ((lp) ? ` lp-header` : ``)}>
      <a href={process.env.GATSBY_SITE_BASE_URL} title="Go to Healthmarkets.com" onClick={routeLink}>
        <Logo className="site-logo" src={headerLogo} />
      </a>
      {(!lp) ? (
        <HeaderRight headerData={headerData} />
      ) : (
        <LPHeader headerData={headerData} />
      )}
    </Wrapper>
    </div>
  )
}

export default Header

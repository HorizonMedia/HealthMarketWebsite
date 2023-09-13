import React, { FC } from "react";

// Styles
import { Wrapper } from "./styles"

// Scripts
import { routeLink } from '../../../static/scripts/global'

interface Props {
  menu: Object,
  title?: String
}

const FooterMenu: FC<Props> = ({ menu, title }) => (
  <Wrapper>
    {(title) ? (
      <h6>{title}</h6>
    ) : null}
    <ul>
      {menu?.menuItems?.nodes?.map(item =>
        <li key={item.id} className={`item ${item.cssClasses.map(className => className)}`}>
          <a href={item.url} onClick={routeLink}>
            {item.label}
          </a>
        </li>
      ) || null}
      {(title === 'Get to Know Us') ? 
        <li id="doNotTrack" className="item doNotTrack">
          <div>
            <a onClick={() => window.truste.eu.irmClickListener()} href="javascript:void(0)"> 
            Do not Share or Sell My Information
            </a>
          </div>
        </li> : null}
    </ul>
  </Wrapper>
)

export default FooterMenu

import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  position: relative;
`

export const Item = styled.div`
  font-size: 2rem;
  font-weight: bold;
  padding: 0 1.6rem;
  white-space: nowrap;
  position: relative;

  .telephone {
    font-weight: 700;
  }

  .icon {
    display: inline;
    height: 23px;
    position: relative;
    vertical-align: middle;
    margin: -0.3rem 0.3rem 0 0;

    &.phone {
      margin-right: 0.8rem;
      filter: brightness(0) saturate(100%) invert(30%) sepia(7%) saturate(18%) hue-rotate(15deg) brightness(92%) contrast(90%);
    }
  }

  .hide-at-desktop{
display:none;
  }

  @media only screen and (max-width: 788px) {
    font-size: 1.8rem;

    &:last-child {
      padding-right: 0;
    }
    .hide-at-desktop{
      display: inline;
      color: var(--color-primary-dark);
      font-family: Open Sans;
      font-size: 16px;
      font-weight: 600;
      line-height: 22px;
      letter-spacing: 0em;
      text-decoration: underline
        }

    .icon {
      &.phone {
        margin: -0.8rem 0.3rem 0 0;
        filter: brightness(0) saturate(100%) invert(23%) sepia(99%) saturate(1789%) hue-rotate(191deg) brightness(95%) contrast(104%);
      }
    }
  }
  
  &:not(:last-child)::after {
    content: '';
    height: 30px;
    width: 1px;
    background: var(--color-dark);
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

export const AgentItem = styled(Item)`
  white-space: normal;
  text-align: center;
  flex-basis: 190px;
  flex-grow: 1;
`;

export const TextSize = styled.span`
  color: transparent;
  cursor: pointer;
  display: inline-block;
  font-size: 2.5rem;
  font-weight: normal;
  line-height: 100%;
  position: relative;
  width: 2.5rem;
  vertical-align: middle;

  &:before,
  &.increase:after {
    border-bottom: 2px solid var(--color-light);
    content: '';
    display: block;
    height: 0;
    left: 15%;
    position: absolute;
    top: 50%;
    transform: translate(2px,-2px);
    width: 11px;
  }

  &.increase:after {
    transform: rotateZ(90deg) translate(-2px,-2px);
  }

  &.decrease {
    margin-left: 2px;
  }
`

export const SearchButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  height: 34px;
  margin-left: 1.3rem;
  padding: 0;
  width: 34px;
`

export const MenuButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  display: inline;
  height: 34px;
  margin-left: 1.3rem;
  padding: 0;
  width: 34px;
  
  & > div,
  .is-stuck & > div {
    border-color: var(--color-dark);
    &:before, &:after { border-color: var(--color-dark); }
  }

  &.nav-active > div {
    border-color: transparent;
    top: -10px;
    
    &:before, &:after {
      border-color: var(--color-light);
      left: 3px;
    }

    &:before { transform: rotate(45deg) translate(5px, 13px); }
    &:after  { transform: rotate(-45deg) translate(-1px, -8px); }
  }
`

export const Bars = styled.div`
  border-bottom: 2px solid var(--color-dark);
  height: 0px;
  position: relative;
  top: -5px;
  transition: all 0.22s linear;
  width: 28px;

  &:before,
  &:after {
    content: '';
    display: block;
    border-bottom: 2px solid var(--color-dark);
    height: 0px;
    position: relative;
    transition: all 0.22s linear;
    width: 28px;
  }

  &:before {
    top: -9px;
  }

  &:after {
    top: 7px;
  }
`
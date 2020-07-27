import styled from "styled-components"
import { Link } from "gatsby"

export const MenuBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  border-left: 1px solid var(--borders);
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 0.8rem 0;
  width: 3.75rem;
  right: 0;
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;
`

export const MenuBarLink = styled(Link)`
  display: block;
`

export const MenuBarItem = styled.span`
  color: var(--texts);
  cursor: pointer;
  display: block;
  height: 3.75rem;
  padding: 1.1rem;
  width: 3.75rem;
  position: relative;

  &:hover {
    color: var(--highlight);
  }
`

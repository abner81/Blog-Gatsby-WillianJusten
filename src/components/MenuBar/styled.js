import styled from "styled-components"
import media from "styled-media-query"

import AniLink from "gatsby-plugin-transition-link/AniLink"

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
  transition: background 0.5s;

  ${media.lessThan("large")`
    height: auto;
    width: 100%;
    position: fixed;
    padding: 0;
    flex-direction: row;
    bottom: 0;
    border-top: 1px solid var(--borders);
  `}
`

export const MenuBarGroup = styled.div`
  display: flex;
  flex-direction: column;

  ${media.lessThan("large")`
    flex-direction: row;
    align-items: center;
    
  `}
`

export const MenuBarLink = styled(AniLink)`
         display: block;

         &.active {
           span {
             color: var(--highlight);
           }
         }
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

  &.display {
    ${media.lessThan("large")`
      display: none;
    `}
  }

  ${media.greaterThan("large")`
    &:hover {
      color: var(--highlight);
    }
  `}

  ${media.lessThan("large")`
    height: 3.2rem;
    padding: .9rem;
    position: relative;
    width: 3.2rem;
  `}
`

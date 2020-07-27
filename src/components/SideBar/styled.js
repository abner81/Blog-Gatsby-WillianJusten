import styled from "styled-components"
import media from "styled-media-query"

export const SideBarWrapper = styled.aside`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-right: 1px solid var(--borders);
  background: var(--mediumBackground);
  height: 100vh;
  position: fixed;
  padding: 2rem;
  text-align: center;
  width: 20rem;

  ${media.lessThan("large")`
    align-items: flex-start;
    height: auto;
    width: 100%;
    padding: 1rem 1rem;
  `}
`

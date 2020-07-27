import React from "react"
import * as S from "./styled"
import Links from "./content"

const MenuLinks = () => (
  <S.MenuLinksWrapper>
    <S.MenuLinksList>
      {Links.map((link, i) => {
        return (
          <S.MenuLinksItem key={i}>
            <S.MenuLinksLink to={link.url} activeClassName={"active"}>
              {link.label}
            </S.MenuLinksLink>
          </S.MenuLinksItem>
        )
      })}
    </S.MenuLinksList>
  </S.MenuLinksWrapper>
)

export default MenuLinks

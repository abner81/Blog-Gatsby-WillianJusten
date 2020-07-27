import React, { useState, useEffect  } from "react"
import * as S from "./styled"

import { Home } from "@styled-icons/boxicons-solid/Home"
import { SearchAlt2 } from "@styled-icons/boxicons-regular/SearchAlt2"
import { Grid } from "@styled-icons/boxicons-solid/Grid"
import { ListUl } from "@styled-icons/boxicons-regular/ListUl"
import { LightBulb } from "@styled-icons/octicons/LightBulb"
import { UpArrowAlt } from "@styled-icons/boxicons-regular/UpArrowAlt"

import getThemeColor from "../../../utils/getThemeColor"

const MenuBar = () => {

  const [theme, setTheme] = useState(null)
  const [display, setDisplay] = useState(null)

  const isDarkMode = theme === 'dark'
  const isListMode = display === 'list'
  console.log(isListMode)

  useEffect(() => {
    setTheme(window.__theme)
    setDisplay(window.__display)

    window.__onThemeChange = () => setTheme(window.__theme)
    window.__onDisplayChange = () => setDisplay(window.__display)
    
  }, [])

  return (
    <S.MenuBarWrapper>
      <S.MenuBarGroup>
        <S.MenuBarLink
          cover
          direction="down"
          bg={getThemeColor()}
          duration={0.6}
          to="/"
          title="Voltar para Home"
        >
          <S.MenuBarItem>
            <Home />
          </S.MenuBarItem>
        </S.MenuBarLink>

        <S.MenuBarLink
          cover
          direction="up"
          bg={getThemeColor()}
          duration={0.6}
          to="/search/"
          title="Pesquisar"
        >
          <S.MenuBarItem>
            <SearchAlt2 />
          </S.MenuBarItem>
        </S.MenuBarLink>
      </S.MenuBarGroup>
      <S.MenuBarGroup>
        <S.MenuBarItem
          title="Mudar o tema"
          onClick={() => {
            window.__setPreferredTheme(isDarkMode ? "light" : "dark")
          }}
        >
          <LightBulb />
        </S.MenuBarItem>

        <S.MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? "grid" : "list")
          }}
          className="display"
        >
          {isListMode ? <Grid /> : <ListUl />}
        </S.MenuBarItem>

        <S.MenuBarItem title="Ir para o topo">
          <UpArrowAlt />
        </S.MenuBarItem>
      </S.MenuBarGroup>
    </S.MenuBarWrapper>
  )
}

export default MenuBar

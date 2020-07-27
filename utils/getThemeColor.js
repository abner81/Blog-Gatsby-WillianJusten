const getThemeColor = () => {
  const theme = typeof window !== "undefined" && window.__theme

  if (theme === 'dark') return '#16202c'
  if (theme === 'light') return '#fff'
}

export default getThemeColor
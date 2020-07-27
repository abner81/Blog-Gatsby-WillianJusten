import React from 'react'
import { useStaticQuery } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "img-avatar.jpeg" }) {
        childImageSharp {
          fixed(width: 65, height: 65) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed}/>
  )
}

export default Avatar
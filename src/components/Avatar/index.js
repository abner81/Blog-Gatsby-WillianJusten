import React from 'react'
import { useStaticQuery } from 'gatsby'
import * as S from './styled'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "img-avatar.jpeg" }) {
        childImageSharp {
          fluid(maxWidth: 65) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <S.AvatarWrapper fluid={avatarImage.childImageSharp.fluid}/>
  )
}

export default Avatar
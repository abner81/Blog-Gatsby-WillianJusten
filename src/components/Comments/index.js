import React from "react"
import PropTypes from "prop-types"
import ReactDisqusComments from "react-disqus-comments"

import * as S from "./styled"

const Comments = ({ url, title }) => {
  const completeUrl = `https://abnermachado.com${url}`
  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <ReactDisqusComments
        shortname="meublog-4"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.CommentsWrapper>
  )
}

Comments.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Comments



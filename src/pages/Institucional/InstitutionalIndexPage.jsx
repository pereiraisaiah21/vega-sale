import React from 'react'

import PropTypes from 'prop-types'

/**
 *
 * @param {*} param0
 * @returns
 */
function InstitutionalIndexPage({ title, content }) {
  return (
    <div className='institutional-page'>
      <h1>{title}</h1>
      <div className='institutional-content'>{content}</div>
    </div>
  )
}

InstitutionalIndexPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default InstitutionalIndexPage

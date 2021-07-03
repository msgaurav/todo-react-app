import React from 'react'
import PropTypes from 'prop-types'
import styles from './Header.module.scss'

export default function Header({ headerData }) {
  const { heading, description } = headerData

  return (
    <div className={styles.Header_wrapper}>
      <h1>{heading}</h1>
      <p>{description}</p>
    </div>
  )
}

Header.defaultProps = {
  headerData: PropTypes.shape({
    description: '',
  }),
}

Header.propTypes = {
  headerData: PropTypes.shape({
    heading    : PropTypes.string,
    description: PropTypes.string,
  }),
}

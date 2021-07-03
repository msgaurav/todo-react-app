/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.scss'

export default function Button(props) {
  const { title, ...rest } = props

  return (
    <button
      id={styles.Button_wrapper}
      type="button"
      {...rest}
    >
      {title}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
}

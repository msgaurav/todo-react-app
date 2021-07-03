import React from 'react'
import PropTypes from 'prop-types'
import { Header, Footer } from '../components'
import PropsData from '../tools/db'

// Destructuring props data
const { headerData } = PropsData

export default function Layout({ children }) {
  return (
    <>
      <Header headerData={headerData} />
      {children}
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.oneOfType(
    [PropTypes.arrayOf(PropTypes.node), PropTypes.node],
  ).isRequired,
}

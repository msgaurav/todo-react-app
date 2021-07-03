/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropType from 'prop-types'
import { Provider as ReduxProvider } from 'react-redux'
import configureStore from '../redux/configureStore'
import { UserProvider } from '../tools/api'
import Layout from '../layouts'
import '../styles/global.scss'

export default function MyApp({ Component, pageProps }) {
  const store = configureStore()

  return (
    <ReduxProvider store={store}>
      <UserProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserProvider>
    </ReduxProvider>
  )
}

MyApp.propTypes = {
  Component: PropType.elementType.isRequired,
}

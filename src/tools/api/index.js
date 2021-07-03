import React, { createContext } from 'react'
import PropTypes from 'prop-types'

// Create global contextAPI
export const UserContext = createContext()

// This context provider is passed to any component requiring the context
export function UserProvider({ children }) {
  // Context values
  const configValue = {
    showColorPicker: true,
  }

  return (
    <UserContext.Provider value={configValue}>
      {children}
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

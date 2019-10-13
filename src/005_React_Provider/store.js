import React from 'react'
import { useLocalStore } from 'mobx-react';

function createPersonStore() {
  return {
    firstName: 'Nancy',
    lastName: 'Gabriel',
  }
}

const storeContext = React.createContext()

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(createPersonStore)
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>
}

export const useStore = () => {
  const store = React.useContext(storeContext)
  return store
}
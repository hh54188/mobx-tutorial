import React from 'react'
import { observer } from 'mobx-react'
import { useStore, StoreProvider } from './store'

const PersonComponent = observer(() => {
  const store = useStore();
  return (
    <div>
      <span>{store.firstName} {store.lastName}</span>
    </div>
  )
})

export default function Demo() {
  return (
    <div>
      <StoreProvider>
        <PersonComponent></PersonComponent>
      </StoreProvider>
    </div>
  )
}

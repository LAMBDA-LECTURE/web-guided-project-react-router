import React from 'react'
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom'

export default function Home() {
  // 👉 STEP 5 - Build a click handler that will imperatively
  // navigate us to <website base URL>/items-list

  // history works similarly to the native history object
  // instead of pushState it has a push method
  const history = useHistory()

  const routeToShop = () => {
    // use history and its push method to navigate imperatively
    history.push('/')
  }

  return (
    <div className='home-wrapper'>
      <img
        className='home-image'
        src='https://source.unsplash.com/F6-U5fGAOik'
        alt=''
      />
      <button
        onClick={routeToShop}
        className='md-button shop-button'
      >
        Shop now!
      </button>
    </div>
  )
}

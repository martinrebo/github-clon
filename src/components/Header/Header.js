import React, { useContext } from 'react'
import { store } from '../../store/store'
import "./header.css"

function Header() {
  const globalState = useContext(store)

const state = globalState.state.data

  return (
    <header className="App-header">
      <h1>Github repo search</h1>
      <div className="avatar"> 
        <img src={state.avatarUrl} alt={state.name}/>
      </div>
      <div className="profile">
        <p className= "name">{state.name}</p>
        <p>{state.bio}</p>
        <p>{state.email}</p>
        <p>{state.company}</p>
      </div>

    </header>
  );
}

export default Header;
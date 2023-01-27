import React, { createContext, useState, useEffect } from "react"

export const PContext = createContext({
  userDataPresent: false,
  user: null,
  favorites: null,
})

export default function PretiumAppContext(props) {
  let [state, changeState] = useState({
    userDataPresent: false,
    user: null,
    listener: null,
    favorites: null,
  })

  // useEffect(() => {
  //   if (state.listener == null) {
  //     changeState({
  //       ...state,
  //       listener: auth.onAuthStateChanged(user => {
  //         if (user)
  //           changeState(oldState => ({
  //             ...oldState,
  //             userDataPresent: true,
  //             user: user,
  //           }))
  //         else
  //           changeState(oldState => ({
  //             ...oldState,
  //             userDataPresent: true,
  //             user: null,
  //           }))
  //       }),
  //     })
  //   }
  //   return () => {
  //     if (state.listener) state.listener()
  //   }
  // }, [])

  return <PContext.Provider value={state}>{props.children}</PContext.Provider>
}

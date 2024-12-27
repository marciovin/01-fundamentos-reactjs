import React from "react"

import { Header } from "./components/Header"
import { Post } from "./Post"

import "./global.css"

export function App() {
  return (
    <div>
      <Header />

      <Post author="João" content="lorem ispu laalala" />

      <Post author="João" content="lorem ispu laalala" />
    </div>
  )
}

import React from "react"

import { Header } from "./components/Header"
import { Post } from "./Post"

import styles from "./App.module.css"
import "./global.css"
import { SideBar } from "./components/sidebar"

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post author="João" content="lorem ispu laalala" />
          <Post author="João" content="lorem ispu laalala" />
        </main>
      </div>
    </div>
  )
}

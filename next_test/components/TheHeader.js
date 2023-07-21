'use client'

import Link from 'next/link'
import styles from '@/styles/header.module.css'

import { usePathname } from 'next/navigation'

const pages = {
  root: {
    path: "/",
    name: "Home"
  },
  test: {
    path: "/test",
    name: "Test"
  },
  cards: {
    path: "/cards",
    name: "Cards"
  },
}

const TheHeader = () => {
  const pathname = usePathname()

  return (
    <header className="container">
      <nav className={styles.navbar + " navbar-expand"}>
        <div className={"collapse navbar-collapse " + styles.collapse} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {Object.keys(pages).map((page) => (
              <>
                <li className={`nav-item ${styles.button} ${(pathname == pages[page].path ? styles.selected : "")}`}>
                  <Link href={pages[page].path} className={"nav-link"}>{pages[page].name}</Link>
                </li>
              </>
            ))}
          </ul>
        </div>
      </nav>
    </header >
  )
}

export { TheHeader };
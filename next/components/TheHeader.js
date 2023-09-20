'use client'

import Link from 'next/link'
import styles from '@/styles/header.module.scss'

import { usePathname } from 'next/navigation'

const pages = {
  root: {
    path: "/",
    name: "Home"
  },
}

const TheHeader = () => {
  const pathname = usePathname()

  return (
    <header className="">
      <nav className={styles.navbar + " navbar-expand "}>
        <div className={"collapse navbar-collapse container " + styles.collapse} id="navbarSupportedContent">
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
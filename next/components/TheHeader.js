'use client'

import Link from 'next/link'
import Image from 'next/image'

import styles from '@/styles/header.module.scss'

import { usePathname } from 'next/navigation'

const pages = {
  root: {
    path: "/",
    name: 'Home'
  },
}

const TheHeader = () => {
  const pathname = usePathname()

  return (
    <header className="">
      <nav className={styles.navbar + " navbar-expand "}>
        <div className={"collapse navbar-collapse container additional_container_padding hidden-sm"} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">

            <li className={`nav-item ${styles.button}`}>
              <Link href={'/'} className="nav-link"> <Image src="/favicon.ico" width="20" height='20' /> <span>Home</span></Link>
            </li>

            <li className={`nav-item ${styles.button}`}>
              <Link href={'/decks'} className="nav-link"> <i class="fa fa-book" aria-hidden="true" /> Decks</Link>
            </li>

          </ul>
        </div>
      </nav>
    </header >
  )
}

export { TheHeader };
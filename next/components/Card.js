import Link from 'next/link'
import styles from '@/styles/cards.module.scss'

const Card = ({ color }) => {
  return (
    <>
      <Link href={`/cards/${color}`} className={styles.card} style={{ backgroundColor: color, }} />
    </>
  )
}

export { Card };
import Link from 'next/link'
import styles from './deck_box.module.scss'

const User_card = ({ user }) => {
    return (
        <div className='col-sm-6 col-md-4 col-sm-6 push-b'>
            <Link href={`/user/${user.id}`} className={`${styles.container}`}>
                <span className={styles.top} >
                    <strong className={styles.title}>{user.name}</strong>
                    <span className='d-block' >
                        <strong className='text-white'>{user.age}</strong>
                    </span>
                </span>
                <span className={styles.bottom}>
                    <span className={styles.colors}>{user.color}</span>
                    <span className={styles.body}>{user.tag}</span>
                    <span className={styles.info}>
                        <span className={styles.left_part}>{user.id}</span>
                        <span className={styles.right_part}>{user.color}</span>
                    </span>
                </span>
            </Link >
        </div >
    )
}

export { User_card };
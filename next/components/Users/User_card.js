import Link from 'next/link'
import styles from './deck_box.module.scss'
import { ColorIcon } from '../Icons/ColorIcon'

const User_card = ({ user }) => {
    return (
        <div className='col-sm-6 col-md-4 col-sm-6 push-b'>
            <Link href={`/user/${user.id}`} className={`${styles.container}`}>
                <span className={styles.top} >
                    <strong className={styles.title}>{user.title}</strong>
                    <span className='d-block' >
                        <strong className='text-white'>{user.gamemode} deck by {user.author}</strong>
                    </span>
                </span>
                <span className={styles.bottom}>
                    <span className={styles.colors}>{user.color.map(color => <ColorIcon color={color} />)}</span>
                    <span className={styles.body}>{user.game}</span>
                    <span className={styles.info}>
                        <span className={styles.left_part}>{user.id}</span>
                        <span className={styles.right_part}>{user.version}</span>
                    </span>
                    <span className={styles.clearfix}></span>
                </span>
                <span className={styles.clearfix}></span>
            </Link >
        </div >
    )
}

export { User_card };
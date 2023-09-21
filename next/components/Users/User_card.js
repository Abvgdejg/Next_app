import Link from 'next/link'

const User_card = ({ user }) => {
    return (
        <Link href={`/user/${user.id}`}>
            <div style={{ display: "inline-block" }} className='col-3 mx-2'>
                <span style={{ background: '#242424', color: 'white', display: 'block', fontSize: '0.9em', textAlign: 'center', padding: '2px', paddingBottom: '15px' }}>
                    <strong style={{ fontSize: '1.5em' }}>{user.name}</strong>
                    <span style={{ display: 'block' }}>
                        <strong style={{ width: '100%', height: 'auto', color: 'white' }} className=''>{user.tag}</strong>
                    </span>

                </span>
                <div style={{ backgroundColor: '#a69f95', width: '100%', height: '100%' }}></div>
            </div>
        </Link >
    )
}

export { User_card };
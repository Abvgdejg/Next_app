import { API, DOMAIN } from '@/config';

export default async function apiGet(path) {
    const res = await fetch(`http://${DOMAIN}/${API}/${path}`, { cache: 'no-store' })

    if (!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
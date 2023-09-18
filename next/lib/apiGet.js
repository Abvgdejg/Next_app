import { API_DOMAIN } from '@/config';

export default async function apiGet(path) {
    const res = await fetch(`${API_DOMAIN}/${path}`, { cache: 'no-store' })

    if (!res.ok) {
        console.log(res.status)
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
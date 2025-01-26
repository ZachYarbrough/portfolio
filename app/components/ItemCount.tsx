import { twoDigits } from "./general"

const ItemCount = ({ count, message }: { count: number, message: string }) => {
    return <p style={{ color: 'var(--secondary)' }}>{twoDigits(count)} {count === 1 ? 'entry' : 'entries'} {message}</p>
}

export default ItemCount
import { twoDigits } from "./general"

const ItemCount = ({ count, message }: { count: number, message: string }) => {
    return <p>{twoDigits(count)} {count === 1 ? 'entry' : 'entries'} {message}</p>
}

export default ItemCount
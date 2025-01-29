const Image = (props: any) => {

    return (
        <img src={props.src} alt={props.alt} title={props.title} loading="lazy" />
    )
}
export default Image

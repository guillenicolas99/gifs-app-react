
export default function Gifs ( {img, title }) {
    return(
        <article className="card-gifs">
            <img src={img} alt={title} />
            <p>{title}</p>
        </article>
    )
}
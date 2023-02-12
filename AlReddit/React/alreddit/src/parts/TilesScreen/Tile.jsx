export default function Tile({title, text}) {
    return (
        <>
            <article className="tile is-child box">
                <p class="title">{title}</p>
                <p class="subtitle">{text}  </p>
            </article>
        </>
    )
}
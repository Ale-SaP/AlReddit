import { useEffect, useState } from "react"

import Tile from "./Tile"
import pagination from "../../utils/pagination"

export default function TilesDisplay({ posts, limit }) {
    const [pagPosts, setPagPosts] = useState(pagination(posts, limit))

    useEffect(() => {
        setPagPosts(pagination(posts, limit))
    }, [posts, limit])

    return (
        <>
            {
                pagPosts &&
                pagPosts.map(postList => {
                    return (
                        <div className="tile is-ancestor">
                            {postList.map(post => {
                                return (
                                    <div className="tile is-parent">
                                        <Tile title={post.title} text={post.text} />
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
        </>
    )
}

AddAddressComponent.defaultProps = {
    limit: 3
};
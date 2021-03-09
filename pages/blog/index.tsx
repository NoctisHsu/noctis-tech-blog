
type Props = {
    posts: { title: string }[]
}


function Blog({ posts }: Props) {
    return (
        <ul>
            {posts.map((post) => (
                <li>{post.title}</li>
            ))}
        </ul>
    )
}

export default Blog
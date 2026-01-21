import { Link, useParams } from 'react-router-dom';
import { posts } from '../data/posts';
function PostsDetailPage() {
    const params = useParams();
    let post = posts.map((post) => {
        if (post.id == params.id) {
            return (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.content}</p>
                    <Link to={`/posts`}>
                        Volver a la lista de artículos
                    </Link>
                </div>
            )
        }
    });
    if (params.id > posts.length) post = (<h3>No existe el articulo {params.id}</h3>)

    return (
        <ul>
            {post}
        </ul>
    );
}

export default PostsDetailPage;
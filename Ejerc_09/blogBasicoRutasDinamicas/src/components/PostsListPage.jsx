import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
function PostsListPage() {
    const titulos = posts.map((post) => {
        return (
            <>
                <Link key={post.id} to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </>
        )
    });

    return (
        <ul>
            {titulos}
        </ul>
    );
}

export default PostsListPage;
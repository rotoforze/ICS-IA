import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
function PostsListPage() {
    const titulos = posts.map((post) => {
        return (
            <li>
                <Link key={post.id} to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
            </li>
        )
    });

    return (
        <ul>
            {titulos}
        </ul>
    );
}

export default PostsListPage;
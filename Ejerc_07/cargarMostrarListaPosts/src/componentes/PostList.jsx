import { useEffect, useState } from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((resp) => resp.json())
            .then((data) => { setPosts(data) })
            .catch((error) => { console.error(error.message) })
    }, []);

    return (
        <div>
            <h2>Lista</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id} data-userID={post.userId}>
                        <h4>
                            {post.title}
                        </h4>
                        <p>
                            {post.body}
                        </p>
                    </li>
                ))}
            </ul>
        </div>

    );
}

export default PostList
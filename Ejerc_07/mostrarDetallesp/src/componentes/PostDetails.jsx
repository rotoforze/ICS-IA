import { useEffect, useState } from "react";

function PostDetails({ postid }) {
    const [post, setPost] = useState();
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postid}`)
            .then((resp) => resp.json())
            .then((data) => { setPost(data) })
            .catch((error) => { console.error(error.message) })
    }, [postid]);

    let elemento = (<h4>NO HAY POST CON ESE ID</h4>)
    
    if (post) {
        elemento = (
            <li key={post.id} data-userid={post.userId}>
                <h4>
                    {post.title}
                </h4>
                <p>
                    {post.body}
                </p>
            </li>
        )
    }
    
    return (
        <div>
            <h2>Post</h2>
            <ul>

                {elemento}

            </ul>
        </div>

    );
}

export default PostDetails
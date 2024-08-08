import { useEffect, useState } from "react";

export function CommentsList() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then((res) => res.json())
            .then((data) => {
                setComments(data);
            });
    }, []);

    return (
        <div>
            {comments.length === 0 ? <p>Ładuję komentarze...</p> : <></>}
            {comments.map((c) => (
                <div key={c.id}>
                    <p>
                        <i>Autor:</i> <b>{c.name}</b>
                    </p>
                    <p>{c.body}</p>
                </div>
            ))}
        </div>
    );
}

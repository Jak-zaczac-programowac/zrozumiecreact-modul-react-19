export function CommentsList({ comments = [], loading = false }) {
    return (
        <div>
            {loading ? <p>Ładuję komentarze...</p> : <></>}
            {comments.map((c) => (
                <div key={c.id} className="comment">
                    <p className="comment-author">
                        <i>Autor:</i> <b>{c.name}</b>{" "}
                        {c.createdAt &&
                            new Date(c.createdAt).toLocaleDateString()}
                    </p>
                    <p className="comment-body">{c.comment}</p>
                </div>
            ))}
        </div>
    );
}

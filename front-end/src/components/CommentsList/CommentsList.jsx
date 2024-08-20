export function CommentsList({ comments = [], loading = false }) {
    return (
        <div>
            {loading ? <p>Ładuję komentarze...</p> : <></>}
            {comments.map((c) => (
                <div key={c.id}>
                    <p>
                        <i>Autor:</i> <b>{c.name}</b>{" "}
                        {new Date(c.createdAt).toLocaleDateString()}
                    </p>
                    <p>{c.comment}</p>
                </div>
            ))}
        </div>
    );
}

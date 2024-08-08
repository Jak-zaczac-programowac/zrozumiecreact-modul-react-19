import styles from "./NewForm.module.css";
import { SubmitButton } from "./SubmitButton";

function onCommentSave(formData) {
    const name = formData.get("name");
    const comment = formData.get("comment");

    return fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
        method: "POST",
        body: JSON.stringify({
            name: name,
            body: comment,
        }),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    });
}

export function NewForm() {
    return (
        <form action={onCommentSave}>
            <label>
                <p>Imię:</p>
                <input type="text" name="name" />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea name="comment" className={styles.textarea} />
            </label>
            <SubmitButton />
        </form>
    );
}

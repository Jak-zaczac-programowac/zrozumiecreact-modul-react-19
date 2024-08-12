import { useState } from "react";
import styles from "./NewForm.module.css";
import { SubmitButton } from "./SubmitButton";

function createComment(formData) {
    return fetch("http://localhost:3000/comments", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.get("name"),
            comment: formData.get("comment"),
        }),
    });
}

export function NewForm() {
    const [isError, setIsError] = useState("false");

    const action = (formData) => {
        setIsError(false);
        createComment(formData).catch(() => {
            setIsError(true);
        });
    };

    return (
        <form action={action}>
            {isError && <p className={styles.error}>Błąd zapisu</p>}
            <label>
                <p>Imię:</p>
                <input type="text" name="name" />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea className={styles.textarea} name="comment" />
            </label>

            <SubmitButton />
        </form>
    );
}

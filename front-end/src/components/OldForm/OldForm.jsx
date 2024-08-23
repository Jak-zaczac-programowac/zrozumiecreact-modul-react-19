import { useState } from "react";
import styles from "./OldForm.module.css";

export function OldForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("http://localhost:3000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, comment }),
        })
            .then(() => {
                setName("");
                setComment("");
                setIsError(false);
            })
            .catch(() => {
                setIsError(true);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            {isError && <p className={styles.error}>Błąd zapisu</p>}
            <label>
                <p>Imię:</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    disabled={isLoading}
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea
                    className={styles.textarea}
                    name="comment"
                    value={comment}
                    disabled={isLoading}
                    onChange={(e) => {
                        setComment(e.target.value);
                    }}
                />
            </label>

            <button className={styles.submitButton}>
                {isLoading ? "Zapisuję..." : "Zapisz"}
            </button>
        </form>
    );
}

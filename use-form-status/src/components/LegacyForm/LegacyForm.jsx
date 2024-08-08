import { useState } from "react";
import styles from "./LegacyForm.module.css";

export function LegacyForm() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    const [isLoading, setIsLoading] = useState(false);

    function sendComment(name, comment) {
        setIsLoading(true);
        return fetch("https://jsonplaceholder.typicode.com/posts/1/comments", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                body: comment,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
            .then((res) => res.json())
            .then(() => {
                setIsLoading(false);
                setName("");
                setComment("");
            });
    }

    return (
        <form>
            <label>
                <p>Imię:</p>
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea
                    className={styles.textarea}
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    disabled={isLoading}
                />
            </label>

            <button
                className={styles.submitButton}
                onClick={(e) => {
                    e.preventDefault(); // IMPORTANT!
                    sendComment(name, comment);
                }}
                disabled={isLoading}
            >
                {!isLoading ? "Zapisz komentarz!" : "Zapsuję..."}
            </button>
        </form>
    );
}

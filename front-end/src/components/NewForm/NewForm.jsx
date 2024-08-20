import { useState } from "react";
import styles from "./NewForm.module.css";
import { useFormStatus } from "react-dom";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className={styles.submitButton}>
            {pending ? "Zapisuję..." : "Zapisz"}
        </button>
    );
}

export function NewForm() {
    function handleSubmit(formData) {
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

    return (
        <form action={handleSubmit}>
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

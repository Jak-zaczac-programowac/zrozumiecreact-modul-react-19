import { useActionState } from "react";
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
    function handleSubmit(previousState, formData) {
        const state = {
            name: formData.get("name"),
            comment: formData.get("comment"),
        };

        if (formData.get("name").length === 0) {
            state.nameError = true;
        }

        if (formData.get("comment").length === 0) {
            state.commentError = true;
        }

        if (state.nameError || state.commentError) {
            return state;
        } else {
            return createComment(formData).catch(() => {
                state.formError = true;
                return state;
            });
        }
    }

    const [state, formAction] = useActionState(handleSubmit, {});

    return (
        <form action={formAction} className={styles.form}>
            {state.formError && <p className={styles.error}>Błąd zapisu</p>}
            <label>
                <p>Imię:</p>
                <input type="text" name="name" defaultValue={state.name} />
                {state.nameError && (
                    <p className={styles.error}>Imię nie może być puste!</p>
                )}
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea
                    className={styles.textarea}
                    name="comment"
                    defaultValue={state.comment}
                />
                {state.commentError && (
                    <p className={styles.error}>
                        Komentarz nie może być pusty!
                    </p>
                )}
            </label>

            <SubmitButton />
        </form>
    );
}

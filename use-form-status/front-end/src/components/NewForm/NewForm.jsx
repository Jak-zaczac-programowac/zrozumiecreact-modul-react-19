import styles from "./NewForm.module.css";

export function NewForm() {
    return (
        <form>
            <label>
                <p>Imię:</p>
                <input type="text" name="name" />
            </label>
            <label>
                <p>Treść komentarza:</p>
                <textarea className={styles.textarea} name="comment" />
            </label>

            <button className={styles.submitButton}>Zapisz</button>
        </form>
    );
}

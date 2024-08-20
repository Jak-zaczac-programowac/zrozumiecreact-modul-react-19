import styles from "./NewForm.module.css";
import { useFormStatus } from "react-dom";
export function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button className={styles.submitButton}>
            {pending ? "Zapisuję..." : "Zapisz"}
        </button>
    );
}

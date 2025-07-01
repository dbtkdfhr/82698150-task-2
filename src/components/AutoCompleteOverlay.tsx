import styles from "../styles/AutoCompleteOverlay.module.css";

interface AutoCompleteOverlayProps {
  input: string;
  match: string;
}

export function AutoCompleteOverlay({
  input,
  match,
}: AutoCompleteOverlayProps) {
  if (
    !input ||
    !match ||
    !match.toLowerCase().startsWith(input.toLowerCase())
  ) {
    return <div className={styles.overlay} />;
  }
  return (
    <div className={styles.overlay}>
      <span className={styles.transparent}>{input}</span>
      <span className={styles.hint}>{match.slice(input.length)}</span>
    </div>
  );
}

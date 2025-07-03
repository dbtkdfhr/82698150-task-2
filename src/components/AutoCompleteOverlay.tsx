import styles from "../styles/AutoCompleteOverlay.module.css";

interface AutoCompleteOverlayProps {
  input: string;
  match: string;
}

//자동완성을 위한 컴포넌트
export function AutoCompleteOverlay({
  input,
  match,
}: AutoCompleteOverlayProps) {
  // 인풋이 없거나 검색되는 이름이 없을 경우를 분리하여 렌더링
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

import styles from "../styles/ResultsList.module.css";

interface ResultsListProps {
  results: string[];
  query: string;
  onClickName: (name: string) => void;
}

export function ResultsList({ results, query, onClickName }: ResultsListProps) {
  if (!query.trim()) {
    return (
      <ul className={styles.list}>
        <li className={styles.noResults}>검색어를 입력해주세요</li>
      </ul>
    );
  }
  if (results.length === 0) {
    return (
      <ul className={styles.list}>
        <li className={styles.noResults}>검색 결과가 없습니다</li>
      </ul>
    );
  }
  return (
    <ul className={styles.list}>
      {results.map((name, idx) => (
        <li
          className={styles.item}
          key={name + idx}
          onClick={() => onClickName(name)}
          style={{ cursor: "pointer" }}
        >
          {name}
        </li>
      ))}
    </ul>
  );
}

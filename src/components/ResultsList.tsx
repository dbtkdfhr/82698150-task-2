import styles from "../styles/ResultsList.module.css";

interface ResultsListProps {
  results: string[];
  query: string;
  onClickName: (name: string) => void;
}

//결과 리스트를 보여주기 위한 컴포넌트
export function ResultsList({ results, query, onClickName }: ResultsListProps) {
  //검색어가 없을 시 렌더링
  if (!query.trim()) {
    return (
      <ul className={styles.list}>
        <li className={styles.noResults}>검색어를 입력해주세요</li>
      </ul>
    );
  }

  //매칭되는 이름이 없을 시 렌더링
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

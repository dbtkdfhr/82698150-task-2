import { useState, useMemo, useCallback } from "react";
import { AutoCompleteOverlay } from "./AutoCompleteOverlay";
import { ResultsList } from "./ResultsList";
import { NameDetail } from "./NameDetail";
import styles from "../styles/NameSearch.module.css";
import debounce from "lodash.debounce";

interface NameSearchProps {
  names: string[];
}

// 이름 검색창의 컴포넌트
export function NameSearch({ names }: NameSearchProps) {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  // 이름 검색의 성능을 위한 debouncew 구문 (입력을 멈추고 0.25초 후에 검색)
  const debouncedSetQuery = useCallback(
    debounce((value: string) => setQuery(value), 250) as (
      value: string
    ) => void,
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    debouncedSetQuery(e.target.value);
  };

  const results = useMemo(
    () =>
      query.trim()
        ? names
            .filter((n) => n.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 50)
        : [],
    [query, names]
  );

  //자동완성을 위해 검색되는 목록 중 첫번째 데이터 찾는 구문
  const autocomplete = useMemo(
    () =>
      query.trim()
        ? names.find((n) => n.toLowerCase().startsWith(query.toLowerCase())) ||
          ""
        : "",
    [query, names]
  );

  return (
    <div>
      <div className={styles.searchContainer}>
        <AutoCompleteOverlay input={query} match={autocomplete} />
        <input
          type="text"
          className={styles.input}
          placeholder="이름을 입력하세요..."
          autoComplete="off"
          value={input}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.resultsContainer}>
        <div className={styles.resultsTitle}>검색 결과:</div>
        <ResultsList
          results={results}
          query={query}
          onClickName={setSelected}
        />
      </div>
      {selected && (
        <NameDetail name={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
}

import { useState, useMemo } from "react";
import { AutoCompleteOverlay } from "./AutoCompleteOverlay";
import { ResultsList } from "./ResultsList";
import { NameDetail } from "./NameDetail";
import styles from "../styles/NameSearch.module.css";

interface NameSearchProps {
  names: string[];
}

export function NameSearch({ names }: NameSearchProps) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const results = useMemo(
    () =>
      query.trim()
        ? names
            .filter((n) => n.toLowerCase().includes(query.toLowerCase()))
            .slice(0, 50)
        : [],
    [query, names]
  );

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
          value={query}
          onChange={(e) => setQuery(e.target.value)}
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

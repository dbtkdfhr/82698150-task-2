import { useEffect, useState } from "react";
import styles from "./styles/App.module.css";

function App() {
  const [names, setNames] = useState<string[]>([]);

  useEffect(() => {
    fetch("/names.csv")
      .then((res) => res.text())
      .then((text) => {
        const parsed = text
          .split(/\r?\n/)
          .map((n) => n.trim())
          .filter(Boolean);
        setNames(parsed);
      });
  }, []);

  return (
    <div className={styles.container}>
      <h1>이름 검색 시스템</h1>
      <div className={styles.info}>
        💡 이름을 입력하면 자동완성과 관련 결과를 확인할 수 있습니다.
      </div>
    </div>
  );
}

export default App;

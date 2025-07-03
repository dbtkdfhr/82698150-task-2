import { useEffect, useState } from "react";
import { NameSearch } from "./components/NameSearch";
import styles from "./styles/App.module.css";

function App() {
  const [names, setNames] = useState<string[]>([]);

  //이름이 들어있는 csv 파일을 파싱하여 names에 저장
  //첫 렌더링 시에만 가져오기 위한 useEffect 사용
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
      <NameSearch names={names} />
    </div>
  );
}

export default App;

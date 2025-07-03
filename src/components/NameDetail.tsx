import { useEffect, useState } from "react";
import { fetchPersonDetail, PersonDetail } from "../api/personAPI";
import styles from "../styles/NameDetail.module.css";

interface NameDetailProps {
  name: string | null;
  onClose: () => void;
}

interface RenderDataStateProps {
  loading: boolean;
  info: PersonDetail | null;
}

//선택한 인원의 자세한 정보를 알려주기 위한 컴포넌트
export function NameDetail({ name, onClose }: NameDetailProps) {
  const [info, setInfo] = useState<PersonDetail | null>(null);
  const [loading, setLoading] = useState(false);

  //name의 변화에 맞춰 렌더링 해주기 위한 useEffect 구문
  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchPersonDetail(name).then((detail) => {
        setInfo(detail);
        setLoading(false);
      });
    }
  }, [name]);

  //이름이 선택되지 않았을 시 null 리턴
  if (!name) return null;

  return (
    <div className={styles.detailPanel}>
      <button className={styles.closeBtn} onClick={onClose}>
        닫기
      </button>
      <RenderDataState loading={loading} info={info} />
    </div>
  );
}

//정보 없음, 로딩 중, 상세 정보를 나누어 렌더링 하기 위한 컴포넌트
function RenderDataState({ loading, info }: RenderDataStateProps) {
  //로딩 중 일 대
  if (loading) return <div className={styles.loading}>로딩 중...</div>;

  //정보가 null일 때
  if (!info) return <div>정보 없음</div>;

  return (
    <>
      <div className={styles.title}>{info.name}님의 상세 정보</div>
      <div className={styles.row}>
        <span>성별:</span> {info.gender}
      </div>
      <div className={styles.row}>
        <span>출생연도:</span> {info.birthYear}
      </div>
      <div className={styles.row}>
        <span>소개:</span> {info.bio}
      </div>
    </>
  );
}

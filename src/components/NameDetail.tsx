import { useEffect, useState } from "react";
import { fetchPersonDetail, PersonDetail } from "../api/personAPI";
import styles from "../styles/NameDetail.module.css";

interface NameDetailProps {
  name: string | null;
  onClose: () => void;
}

interface SplitDataProps {
  loading: boolean;
  info: PersonDetail | null;
}

export function NameDetail({ name, onClose }: NameDetailProps) {
  const [info, setInfo] = useState<PersonDetail | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (name) {
      setLoading(true);
      fetchPersonDetail(name).then((detail) => {
        setInfo(detail);
        setLoading(false);
      });
    }
  }, [name]);

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

function RenderDataState({ loading, info }: SplitDataProps) {
  if (loading) return <div className={styles.loading}>로딩 중...</div>;

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

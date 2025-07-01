export interface PersonDetail {
  name: string;
  gender: "남" | "여";
  birthYear: number;
  bio: string;
}

const sampleBio = [
  "밝고 긍정적인 성격을 가지고 있습니다.",
  "여러 프로젝트 경험이 풍부합니다.",
  "IT와 음악을 모두 좋아합니다.",
  "여행을 즐기며, 도전을 두려워하지 않습니다.",
  "책 읽기와 산책이 취미입니다.",
  "새로운 것을 배우는 걸 좋아합니다.",
];

export function fetchPersonDetail(name: string): Promise<PersonDetail> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const gender = Math.random() < 0.5 ? "남" : "여";
      const birthYear = 1970 + Math.floor(Math.random() * 30); // 1970~1999
      const bio = sampleBio[Math.floor(Math.random() * sampleBio.length)];
      resolve({ name, gender, birthYear, bio });
    }, 500);
  });
}

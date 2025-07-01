export async function fetchNameDetail(name: string) {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        gender: Math.random() > 0.5 ? "남" : "여",
        birthYear: 1980 + Math.floor(Math.random() * 30),
        info: `${name}의 임시 상세정보입니다.`,
      });
    }, 400)
  );
}

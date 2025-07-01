# 이름 검색 시스템 (React + TypeScript)

## 👤 내 정보

- **이름:** 유상록
- **나이:** 26세
- **전화번호:** 010-8269-8150
- **이메일:** dbtkdfhr2000@naver.com

---

## 🚀 프로젝트 실행 방법

1. 저장소 클론/다운로드 후,  
   `public/names.csv` 파일에 이름 데이터가 들어있는지 확인합니다. (예시 파일 제공됨)
2. 프로젝트 루트에서 의존성 설치
   ```
   npm install
   ```
3. 개발 서버 실행
   ```
   npm start
   ```
4. 브라우저에서 [http://localhost:3000](http://localhost:3000) 접속

---

## 📝 결과물 설명

### 1. 기존 문제점

기존 HTML(Javascript) 버전은 다음과 같은 문제점이 있었습니다.

- **데이터 하드코딩:** 이름 목록이 코드 내에 하드코딩되어 데이터 추가·관리 및 대용량 데이터 처리에 한계가 있었음
- **포커싱 문제:** 기존에는 키보드 입력 시 포커싱이 텍스트필드를 벗어나면서 정상적인 입력이 불가능했음
- **DOM 직접 조작:** 검색, 자동완성, 리스트 갱신 시 직접 DOM을 remove/append하는 방식으로 성능 저하 및 버그 위험이 있었음
- **컴포넌트/로직 분리 부족:** 유지보수 및 기능 확장(예: API 연동, 상세정보 등)이 매우 어려움
- **검색 성능:** 입력마다 전체 배열을 탐색하여 대용량에서 성능 저하가 발생할 수 있었음

### 2. 개선 내용

본 프로젝트에서는 다음과 같이 개선하였습니다.

- **데이터 외부화:** 이름 목록을 `names.csv`로 분리하여 데이터 관리 및 대용량 지원을 강화
- **React + TypeScript 컴포넌트 분리:** 검색창, 자동완성, 결과리스트, 상세정보 패널을 별도 컴포넌트로 구현하여 유지보수성과 확장성 강화
- **상태 기반 UI 자동 갱신:** React의 상태(state) 관리로 화면이 일관되게 갱신되어 UX 및 신뢰성 향상
- **Debounce 적용:** lodash.debounce를 사용해 입력이 멈춘 뒤 일정 시간 후에만 검색이 이뤄져 불필요한 연산을 줄이고, 대용량에서도 부드러운 검색 지원
- **더미 Public API 연동:** 이름 클릭 시 외부 API 호출처럼 더미 상세 정보를 비동기로 보여주도록 구현
- **스타일/컴포넌트 분리:** 각 컴포넌트별 CSS module 분리

---

## 📁 프로젝트 구조

```
프로젝트 루트/
├─ public/
│   └─ names.csv           # 이름 데이터 (CSV, 한 줄 한 명)
├─ src/
│   ├─ components/         # 컴포넌트 폴더 분리
│   │   ├─ AutocompleteOverlay.tsx
│   │   ├─ NameSearch.tsx
│   │   ├─ ResultsList.tsx
│   │   └─ NameDetail.tsx
│   ├─ api/
│   │   └─ personApi.ts    # 더미 상세정보 fetch 함수
│   ├─ styles/             # css 스타일 폴더 분리
│   │   ├─ AutocompleteOverlay.module.css
│   │   ├─ NameSearch.module.css
│   │   ├─ ResultsList.module.css
│   │   ├─ NameDetail.module.css
│   │   └─ App.module.css
│   ├─ App.tsx
│   └─ index.tsx
├─ package.json
└─ README.md
```

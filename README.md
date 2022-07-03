## 트리플 사전과제
### 폴더 구조
```
triple_prework
├─ src
│  ├─ App.tsx
│  ├─ assets              - Image 관리
│  │  ├─ images
│  │  └─ index.ts
│  ├─ components          - Components
│  │  ├─ LogoImage.tsx
│  │  ├─ RewardAppItems.tsx
│  │  └─ StatisticSection.tsx
│  ├─ hooks               - Custom Hooks
│  │  ├─ useCounter.ts
│  │  ├─ useInterval.ts
│  │  └─ useIsomorphicLayoutEffect.ts
│  ├─ index.css
│  ├─ index.tsx
│  └─ styles              - 공통 Style 관리
│     ├─ GlobalStyle.tsx
│     ├─ constants
│     │  └─ colors.ts
│     └─ mixins           - Mixin 관리(Animation, easing)
│        ├─ animations.ts
│        └─ easings.ts
└─ tsconfig.json

```
### 기술 스택

- TypeScript
- React
- StyledComponent
- eslint-config-triple

### 배포
[![Netlify Status](https://api.netlify.com/api/v1/badges/290aa46c-a415-41cc-875d-a1aa1daa39b3/deploy-status)](https://app.netlify.com/sites/tripleprework-leejoonhyuk/deploys)
> https://tripleprework-leejoonhyuk.netlify.app/

### 프로젝트 실행 방법

1. git clone

``bash
  git clone https://github.com/anshqhsh/triple_prework.git 
``

2. dependencies install

``bash
  npm install
``

3. 실행

``bash
  npm start
``
### 사용한 기술과 선택 이유

#### Styled component

> CSS-in-JS인 Styled component를 이용하여 CSS를 구현하였습니다.
자유로운 CSS 커스텀 컴포넌트를 통해 애니메이션을 쉽게 구현할 수 있어 적용하였습니다.

#### Typscript

> 정적 타입을 지원하여 컴파일 시에 에러나 버그를 줄이고 코드를 개발자의 명확한 의도에 따라 기술하여 가독성을 높일 수 있어 적용하였습니다.

#### eslint-config-triple

> 정해진 규칙 안에서 개발자가 코딩애 집중할 수 있게 해주고, 일관성 있는 코드와 읽기 좋은 코드를 생산할 수 있게 도와주어 코드의 품질을 높일 수 있어 적용하였습니다.

### 구현 방법

같은 동작을 하는 key Frames는 공통 style을 관리하는 폴더의 mixins에서 관리하여 같은 애니메이션을 일관성 있게 사용할 수 있게 하였습니다.

각 컴포넌트의 구조를 오른쪽 왼쪽 두 부분으로 나누고 오른쪽 section에서 text 부분과 RewardAppItems를 나누었습니다. 각 컴포넌트를 등장 순서별로 100ms 간격으로 떠오르는 애니메이션이 추가된 Fade-In을 적용하였습니다.

숫자 올라가는 애니메이션은 custom hook을 만들었습니다.
처음에는 setInterval을 이용하여 카운터를 만들었을 때 타이머가 의도한 대로 동작지 않는 경우가 있어 검색하여 문제점을 찾았고, 참고자료 속에 있는 useInterval custom hook을 이용하여 useCounter를 만들어 사용하였습니다.
useCounter는 재사용이 가능하도록 duration과 targetValue를 받을 수 있게 구현하였고
현재는 증가 속도가 느려지는 easing 함수는 easeOutQuart를 이용하여 구현되어 있으며 추후에 쉽게 추가 할 수 있도록 mixins폴더의 easing에서 관리하여 사용할 수 있습니다.

### 참고자료
> https://overreacted.io/making-setinterval-declarative-with-react-hooks/
>https://easings.net/ko#

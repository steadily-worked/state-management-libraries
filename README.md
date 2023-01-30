# state-management-libraries

exploring state management libraries in React with Next.js 13

Next.js 13

1. @next/font가 구글 폰트를 지원하여 더이상 브라우저에서 요청할 필요가 없어졌으며 layout shift를 방지한다 (<a href="https://www.lydiahallie.io/blog/optimizing-webfonts-in-nextjs-13">링크</a>).

- FOUT(Flash Of Unstyled Text): layout shift가 발생하여 웹사이트가 폰트를 요청해서 받아오기 전까지 기본 폰트로 제공되는 현상
- FOIT(Flash Of Invisible Text): 웹사이트가 폰트를 요청해서 받아오기 전까지 텍스트 자체를 볼 수 없는 현상
- font-face에 `rel=preconnect`를 추가하여 해결할 수 있지만, 하나하나 다 추가해주는 것이 과연 좋은 방법일까? 이에 대한 해결책을 `@next/font`가 제공함
- `@next/font`는 빌드 타임에 `fonts.googleapis.com`에서 폰트 스타일시트를, 동시에 `@font-face`의 `src`로 지정된 폰트들을 다운로드한다.

2. next/image의 성능이 향상됨. alt를 required로 지정하였으며, 이전 버전의 `next/image` 컴포넌트는 `next/legacy/images`로 변경됨
3. `next/link`가 더이상 `<a>` 태그를 필요로 하지 않음

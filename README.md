# WebFramework1 A반 8팀_NULL좋아해

## ShoppingMall : Exception;

### 실행 환경 설명
- 상품 정보는 '/public/products/products.json'에 저장
  - 리액트의 axios 라이브러리를 사용하여 정보를 가져온다.
- App.js에서 `react-router-dom`을 사용하여 각 페이지를 라우팅함.
- 프로젝트의 시작페이지는 '/'에 해당하는 'start.js'이며, 특별한 기능 없이 'shop now'버튼을 클릭하여 '/main'으로 라우팅 된다.
- '/main'에서는 각 상품들을 보여주며 네비게이션 바의 경우 'header.js'을 이용하여 카테고리 분류 및 '/cart'페이지로 이동할 수 있는 기능을 가진다.
- 각 상품의 카테고리별 분류의 경우, 'products.json'을 가져와 구조분해 할당을 거쳐 컴포넌트에 전달된다.



### 실행 방법
1. 최상위 프로젝트에서 터미널로 "shoppingmall" 폴더로 이동 (`cd shoppingmall` 명령어 입력)
2. `npm install`
3. `npm install react-router-dom`
4. `npm install axios`
5. `npm start`



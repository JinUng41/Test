# WebFramework1 A반 8팀_NULL좋아해

## ShoppingMall : Exception;

### 실행 환경 설명
- 상품 정보는 '/public/products/products.json'에 저장
  - 리액트의 axios 라이브러리를 사용하여 정보를 가져온다.
- App.js에서 `react-router-dom`을 사용하여 각 페이지를 라우팅함.
- 각 상품의 카테고리별 분류의 경우, 'products.json'을 가져와 구조분해 할당을 거쳐 컴포넌트에 전달된다.
  - 전달된 상품들은 `filter()`함수를 거쳐 해당되는 카테고리의 상품들만 페이지에 보여진다.
- `useEffect()`를 이용하여 상품에 대한 변경사항을 관리한다.


<br>


### 실행 방법
1. 최상위 프로젝트에서 터미널로 "shoppingmall" 폴더로 이동 (`cd shoppingmall` 명령어 입력)
2. `npm install`
3. `npm install react-router-dom`
4. `npm install axios`
5. `npm start`



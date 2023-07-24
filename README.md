<div align="center">
  
# 💰파이낸스 세븐  
**테스트 기반으로 회원에게 맞춤형 금융상품 정보 제공**  

2023.2.13 ~ 2023.2.24(2주)

![React](https://img.shields.io/badge/react-v18+-blue?logo=react)  

서비스 링크 : ~~https://finance-seven.netlify.app/~~

</div>

<br/>

## 1. 기능 목록

### 1.1 검색 페이지

<img src='https://user-images.githubusercontent.com/90189513/221526964-0fcf46b5-3bce-43b5-831d-fa1118a9a37c.gif' alt='검색페이지 검색바, 최근본상품' width='400px'/>

#### 검색바, 최근 본 상품
- 상품명으로 검색이 가능하며, 입력된 글자가 있을 시 `우측 삭제 버튼` 등장합니다.
- 검색어가 없으면 `confirm('검색어를 입력해주세요') 확인창`이 뜨고, Submit 시에 검색결과 페이지로 이동합니다.
- 최근 본 상품을 볼 수 있으며, 클릭 시 해당 상품의 상세페이지로 이동합니다.

<br/>

<img src='https://user-images.githubusercontent.com/90189513/221526969-51e014e8-d984-4f83-9640-6faa9567c9eb.gif' alt='검색페이지 최근검색어' width='400px'/>

#### 최근 검색어
- 최근 검색어는 최대 10개까지 제공되며, 최신순으로 정렬됩니다.
- 전체 삭제 완료시, 삭제 개수 `토스트 메시지(ex. 00개가 삭제됐어요)`가 뜹니다.
- 최근 검색어 없을 시, `문구(최근 찾아봤던 내역이 없습니다.)`가 출력됩니다.

<br/>

<img src='https://user-images.githubusercontent.com/90189513/221526953-febbd1d6-9a9e-4bb3-b3f1-ecf3ca162bad.gif' alt='검색페이지 자동저장' width='400px'/>

#### 검색어 자동저장 끄기/켜기
- 켜져있을 때만 검색한 것이 최근 검색어 목록에 저장되며, 꺼져있을 때는 `문구(검색어 저장 기능이 꺼져있습니다.)`가 출력됩니다.
- 켜기/끄기 상태에 따라 `confirm(최근 검색어 저장 기능을 사용(사용중지)하시겠습니까?)`가 출력됩니다.

<br/>

### 1.2 검색결과 페이지

<img src='https://user-images.githubusercontent.com/90189513/221529636-b9c5ee69-6053-49ef-9233-58241ce425eb.gif' alt='검색결과 페이지' width='400px'/>

- 탭 전환(통합, 카드, 대출, 예적금, 청약)을 제공합니다.
- 통합에서는 카테고리별로 최대 3개까지 결과를 제공하고, 모두보기 버튼 클릭 시 해당 카테고리 탭으로 이동합니다.
- 각 탭은 정렬 버튼에 따라 상품 목록 순서를 변경할 수 있습니다.
- 검색결과가 없을 시 `메시지(ex. '00'의 검색결과가 없어요 등등)와 최근 검색어 목록`을 출력합니다.
- 목록에 있는 상품 클릭시 해당상품 상세페이지로 이동합니다.

### 1.3 공통 레이아웃

![헤더, 탭바](https://user-images.githubusercontent.com/90189513/221530524-01ef1292-6982-4e4a-908b-40179f2b0741.gif)

- 헤더와 탭바 내비게이션을 구현했습니다.

<br><br>

## 2. 개발 환경 세팅
```
cd frontend
npm install
npm start
```

<br>

## 3. 기술 스택

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Reduxtoolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"> <br> <img src="https://img.shields.io/badge/reacticons-e91e63?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/Axios-671ddf?style=for-the-badge&logo=Axios&logoColor=white"> <img src="https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white">  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=Vite&logoColor=white">

<br>

## 4. 회고
- [프론트엔드가 백엔드와 협업하는 협업과정](https://velog.io/@eun0leee/프론트엔드백엔드-팀프로젝트금융상품-추천사이트-만들기)  
- [금융상품 추천 사이트 프로젝트 전체회고](https://velog.io/@eun0leee/금융상품-추천-사이트-전체회고)  
- [최근본상품, 최근검색어, 자동저장 기능 구현하기](https://velog.io/@eun0leee/React-최근본상품-최근검색어-자동저장-기능-구현하기)  
- [레이아웃 설정 중 App.tsx routes 에러](https://velog.io/@eun0leee/React-App.tsx-routes-에러)  

<br>

## 5. 팀원

|<a href="https://github.com/0nesan">한수산(팀장)</a>|<a href="https://github.com/ghgt1">노준영</a>|<a href="https://github.com/eun0leee">이은영</a>|<a href="https://github.com/Hyojina">김효진</a>|
|:---:|:---:|:---:|:---:|
|<a href="https://github.com/0nesan"><img src="https://avatars.githubusercontent.com/u/76930602?v=4" width=160/></a>|<a href="https://github.com/ghgt1"><img src="https://avatars.githubusercontent.com/u/35508595?v=4" width=160/></a>|<a href="https://github.com/eun0leee"><img src="https://avatars.githubusercontent.com/u/90189513?v=4" width=160/></a>|<a href="https://github.com/Hyojina"><img src="https://avatars.githubusercontent.com/u/107975281?v=4" width=160/></a>|

<a href="https://github.com/KDT3MiniProjectTeam-7/Mini_Project_FE">
  <img src="https://img.shields.io/badge/팀레포-181717?style=for-the-badge&logo=github&logoColor=white" />
</a>&nbsp;&nbsp;
<a href="https://www.notion.so/7-00708e93757c4cbbaf91868a9873c92f">
  <img src="https://img.shields.io/badge/팀노션-fc9847?style=for-the-badge&logo=notion&logoColor=white" />
</a>

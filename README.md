# busking

## 기획의도 
평소 버스킹에 관한 정보를 각각의 버스킹 그룹의 sns등을 찾아봐야하는 불편함을 해소함과 동시에 의사소통도 원활하게 하는 것.
각각 찾아봐야했던 정보를 한곳에 취합함으로써, 버스커들은 홍보, 정보제공, sns공유, 팬들과의 의사소통 등이 편해지게 됩니다.
또한 일반사용자들은 다양한 버스커들에 대한 정보를 얻을 수 있고, 버스커와의 의사소통이 가능한 게시판등을 통해 흥미를 느끼게 됩니다.
이를 통하여 버스킹 문화를 활성화시키는 것이 프로젝트의 목적입니다.

## 프로젝트 기간
`약 7주간 진행(2주: 데이터 모델링, 기획 등, 4주: 개발기간, 1주: 발표준비 및 코드 리팩토링)
팀원별로 풀스텍으로 프로젝트를 진행함.`

## 프로젝트 영상
[![Video Label](https://img.youtube.com/vi/sqvoI1b5tx0/0.jpg)](https://www.youtube.com/watch?v=sqvoI1b5tx0)
```
이미지를 클릭하시면 영상을 볼 수 있습니다.
(https://www.youtube.com/watch?v=sqvoI1b5tx0)
```
[![Video Label](https://img.youtube.com/vi/40c5HzLNzO8&feature=youtu.be&t=0s/0.jpg)](https://www.youtube.com/watch?v=40c5HzLNzO8&feature=youtu.be&t=0s)
```
이미지를 클릭하시면 영상을 볼 수 있습니다.
(https://www.youtube.com/watch?v=40c5HzLNzO8&feature=youtu.be&t=0s)
```
## 사용 기술
- backend(spring, node.js, mybatis, mysql)
- frontend(jsp, jQuery, html/css/javascript, d3.js, daum map, openweathermap 등 여러 api)
- 협업도구(sourcetree, trello, google drive, google hangout)

## 주요 기능
- 여러 버스커들을 회원들에게 자연스럽게 보여지게 함으로써 버스커와 회원간에 접근성을 높힘. 자연스러운 홍보효과도 제공.

1. 지도
  - 버스커들의 공연일정을 한눈에 알아보기 쉽게 하였습니다. 지역, 날짜별로 조회가능.

2. 피드
  - 최근에 버스커들이 올린 영상, 이미지, 공연일정 등을 살펴볼 수 있으며, 팔로우한 버스커들의 공연일정, 영상, 이미지 또한 볼 수 있음.

3. 버스커 소개
  - 버스커와 버스커들의 영상이 랜덤으로 보여지며, 버스커들이 최근에 올린 음악을 뮤직플레이어를 통해 자동으로 들을 수 있음.

4. 알람, 쪽지
  - 자신이 팔로우한 버스커의 공연일정을 실시간으로 받아볼 수 있으며, 다른 사용자가 보낸 쪽지도 실시간으로 받아볼 수 있음. ( 업체가 보낸 쪽지의 경우 쪽지에 업체정보가 들어있음. )

5. 뮤직플레이어
  - 버스커 소개 페이지, 버스커 개인 페이지에 들어가면 뮤직플레이어를 통해 버스커의 음악을 들을 수 있음. 버스커의 이미지를 클릭하면 해당 버스커의 영상들을 볼 수 있음.

6. 소셜 로그인
  - 카카오, 구글, 네이버 소셜로그인을 구현

7. 채팅
  - 버스커 채널 별로 버스커, 회원들이 서로 채팅을 할 수 있음. 편리한 귓속말 기능 제공. 의사소통 공간 제공

8. 공연일정
  - 다음지도 api, openweathermap api 를 이용하여, 해당 지역에 대한 날씨를 볼 수 있음. 

9. 버스커 음악등록
  - 버스커는 자신의 음악, 이미지를 등록할 수 있음.

10. 자유게시판, qna 게시판, 공지게시판
  - 좋아요, 댓글, 대댓글 ( @사용자이름을 자동으로 생성),추천, 정렬, 무한스크롤 기능 제공. 

### 내가 맡은 부분
```
로그인,소셜 로그인, 로그아웃, 비밀번호 암호화(스프링 시큐리티), 타일즈 헤더파트 퍼블리싱,
아이디찾기, 비밀번호찾기(이메일로 임시번호 발송), 회원가입, 회원정보 수정,
버스커 등록, 버스커 정보수정, 개인설정 페이지, 팔로우 팔로워 관리, 프로필변경, 그 외 부분적인 퍼블리싱

```

### 소감
```
이 프로젝트는 내가 spring을 배우고 이용한 첫 프로젝트이면서, 제대로 된 웹사이트를 만들게되는 규모가 큰 프로젝트였다.
처음엔 '이 이원수의 팀원으로 한달안에 개발이 가능할까?' 라는 막연한 두려움도 있었다. 지금생각해보면 다른팀원에 비해 약간 부족한 내 역량때문인거 같았다.
하지만 프로젝트 회의에 들어가면서 서로가 의견을 제시하고 조율하고 맞춰가는 과정에서 
'우리가 이대로만 만들수있다면 정말 좋은 결과물이 나오겠다' 라고 생각하게되면서 자신감과 하고자하는 의욕이 붙타올랐다.
처음써보는 api, 하나둘씩 완성되가는 퍼블리싱과 백엔드 기능들, 서로가 만든 기능들을 합쳐보면서 생기는 변수를 해결하고, 결과물을완성해 나갔다.
프로젝트를 완성한후의 성취감은 말로 표현할수없을만큼 기뻣고 후련했다. 이번 경험을 토대로 느낀건 '나도 할 수 있다' 라는 자신감.
개발을 하면서 재미를 느꼈다. 다음 개발에는 무엇을 사용할지 기대가 되기도한다.
```


### 메인페이지


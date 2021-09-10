// 헤더 
<template>
  <header>
      <!-- 헤더의 맨 위 nav바(bar_up)-->
      <nav id= "bar_up">
        <ul>
            <li id='help'>HELP</li>
            <li id='bundle_up'>
                <div id='login_join'>
                    <div id='login'>LOGIN</div>
                    <div id='join'>JOIN</div>
                    </div>
                <div id='mypage'><img src='../assets/Vector.png'>My Page</div>
                <div id='bag'><img src='../assets/bag.png'></div>
            </li>
        </ul>
      </nav>
      <!-- 헤더의 로고부분(center) -->
      <div id= "center">
          <router-link to='/'><img src='../assets/letter.png' id='letter'><img src='../assets/logo1.png' id='logo1'></router-link>
      </div>
      <!-- 헤더의 가장 아래 nav바 (bar_down)-->
      <nav class="bar_down" v-bind:class="{scroll: header_props>200}">
          <ul>
              <li><button id= 'button' v-on:click="show = !show"><img src='../assets/menu.png'><img src='../assets/letter2.png'></button></li>
              <li id='bundle_down'>
                  <div>캠핑 스타트업 키트</div>
                  <div>캠핑 튜토리얼</div>
                  <div>캠핑력 진단</div>
                  <div><router-link to='/events'>이벤트</router-link></div>
              </li>
              <!-- 물품검색창(결과값 = message) -->
              <li><input v-on:keydown.enter="updateInput" placeholder="검색어를 입력하세요"><img src='../assets/search.png' id='search'></li>
          </ul>
      </nav>
      <!-- 드롭다운,캠핑용품 전체 카테고리(dropdown) -->
      <nav class='dropdown' v-bind:class="{scroll: header_props>200}" v-show="show">
          <transition name="fade">
            <ul>
                <li>fuck</li>
                <li>주방 용품</li>
                <li>랜턴</li>
                <li>타프</li>
                <li>버너/화로/스토브</li>
                <li>난로/히터</li>
                <li>테이블</li>
                <li>매트</li>
                <li>정리용품</li>
                <li>체어</li>
                <li>침낭</li>
                <li>기타용품</li>
            </ul>
          </transition>
      </nav>
  </header>
</template>

<script>
export default {
    props: ['header_props'],
    methods: {
        updateInput: function(event){
            this.message=event.target.value;
        }
    },
    data (){
        return {
            show: false,
            message:''
        }
    }
}
</script>

<style scoped>
header{
    height: 230px;
    width: 100%;
}
/* ..............................................{BAR_UP}.................... */
#bar_up{
    height: 40px;
    width: 100%;

    position:fixed;

    background: #213063;
}

#bar_up ul{
    height: 100%;
    width:100%;

    display:flex;
    justify-content: space-around;
    align-items: center;

    margin:0px;

    color: #FFFFFF;
    font-family:'Baloo_Bhaijaan';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    list-style:none;
}
#bundle_up{
    height: 27px;
    width: 307px;

    display:flex;
    justify-content: space-around; 
}
#help{
    height: 21px;
    width: 50px;   
}
#login_join{
    height: 21px;
    width: 90px;

    display:flex;
    justify-content: space-between;
}
#login{
    height: 21px;
    width: 40px;
}
#join{
    height: 23px;
    width: 30px;
}
#mypage{
    height: 27px;
    width: 107px;

    display:flex;
    justify-content: space-between;
    align-items: center;

    font-size: 18px;
    line-height: 27px;
}
#mypage img{
    height: 27px;
    width: 28px;
}
#bag {
    height: 17px;
    width: 20px;
}
/* .....................................................{CENTER}................ */
#center{
    height: 150px;
    width: 100%;

    position: absolute;
    top: 40px;

    display:flex;
    justify-content: center;
    align-items: flex-end;

    background: #FFFFFF;
}
#letter{
    height: 77px;
    width: 166px;
}
#logo1{
    height: 131px;
    width: 287px;
}
/* ........................................................{BAR_DOWN}............ */
.bar_down{
    height: 40px;
    width: 100%;

    position: fixed;
    top: 190px;

    background:#A2D1E5;
}
.bar_down ul{ 
    height: 100%;
    width:100%;

    display:flex;
    justify-content: space-around;
    align-items: center;

    margin:0px;
    padding: 0px;

    color: #213063;
    font-family:'Baloo_Bhaijaan';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;

    list-style:none;
}
#bundle_down{
    height: 23px;
    width: 477px;

    display:flex;
    justify-content: space-between; 
    align-items: center;
}
input{
    height: 34px;
    width: 154px;
    padding: 0px;

    border: 2px solid #213063;
    box-sizing: border-box;
    border-radius: 3px;

    font-size: 11px;
    color: #213063;
}
input::placeholder {
    color: #213063;

    font-family: Baloo Bhaijaan;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 17px;
}
input:focus{
    background-color: #FFFFFF;
    color:#213063;
}
#search{
    width: 24px;
    height: 23px;

    position:relative;
    right:24px;
    top:12px;
}
#button{
    border:0px;
    padding:0px;
}
.bar_down.scroll{
    height: 40px;
    width: 100%;

    position: fixed;
    top: 40px;

    background:#A2D1E5;
}
/* .............................................................{DROPDOWN}............ */
.dropdown{
    height: 254px;
    width: 629px;

    position: fixed;
    top: 230px;

    background:#A2D1E5;

    z-index: 10;
}
.dropdown ul{
    height: 100%;
    width: 100%;

    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;

    color: #000000;
    font-family: 'Baloo Bhaina 2';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 36px;
    display: flex;
    align-items: center;   

    list-style:none;
}
.dropdown li{
    flex-basis: 160px;
}
.dropdown.scroll{
    height: 254px;
    width: 629px;

    position: fixed;
    top: 80px;

    background:#A2D1E5;

    z-index: 10;
}
</style>
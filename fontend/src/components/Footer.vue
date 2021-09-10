<template>
	<footer>
      <div id="e1">
		<router-link to="/informaion" id="ds1">이용안내</router-link>
      <router-link to="/personalData" id="ds2">개인정보처리방침</router-link>
      <router-link to="/partnership" id="ds3">입점/제휴 문의</router-link>
      </div>
      <div id="footer_name">CAMPIRIT</div> 
      <div id="line">_</div>
      <div id="e2">
      <a id="position">서울특별시 동작구 상도동 369</a>
      <a id="center_num">고객센터:010-9008-4847</a>
      <a id="email">campirithq@campirit.com</a>
      <a id="real_name">김서윤</a>
      </div>
      <div id="e3">
      <a id="callnum">통신판매업신고: 제 101010101</a>
      <a id="check">서비스업 가입 사실 확인</a>
      <a id="trump">개인정보보호책임자:김서윤</a>
      <a id="business_num">사업자 번호:1002-서울시-216654</a>
      </div>
	</footer>
</template>

<script>
export default {
	
}
</script>

<style>
footer{
   position: relative;
   width: full;
   height: 167px;
   bottom: 0px;
   background: #1D2E65;}

#ds1{
   /* 이용안내 */
   position: absolute;
   width: 75px;
   height: 27px;
   left: 275px;
   top: 15px;
   font-family: Baloo Bhaijaan;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 27px;
   display: flex;
   text-align: left;
   color: #EBDBCE;
   text-decoration-line: none;
}
#ds2{
   /* 개인정보처리방침 */
   position: absolute;
   width: 145px;
   height: 27px;
   left: 480px;
   top: 15px;
   font-family: Baloo Bhaijaan;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 27px;
   display: flex;
   align-items: center;
   text-align: left;
   color: #EBDBCE;
   text-decoration-line: none;
}
#ds3{
   /* 입점/제휴 문의 */
   position: absolute;
   width: 130px;
   height: 27px;
   left: 750px;
   top: 15px;
   font-family: Baloo Bhaijaan;
   font-style: normal;
   font-weight: normal;
   font-size: 18px;
   line-height: 27px;
   display: flex;
   text-align: left;
   color: #EBDBCE;
   text-decoration-line: none;
}
#footer_name{  /* CAMPIRIT */
position: absolute;
left: 275px;
width:100px;
bottom: 74.5px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 36px;
display: flex;
text-align: left;
color: #EBDBCE;
}
#line{ /* Line 6 */
position: absolute;
left: 275px;
right: 59.44%;
top: 57.25%;
bottom: 42.75%;
border: 1px solid #EBDBCE;
transform: matrix(1, 0, 0, 1, 0, 0);
}
#position{ /* 서울특벽시 동작구 상도동 369 */
position: absolute;
left: 275px;
width:200px;
bottom: 43px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
display: flex;
color: #EBDBCE;
}
#center_num{ /* 고객센터: 010-2751-6116 */
position: absolute;
left: 480px;
width: 200px;
bottom: 43px;
font-family: Baloo Bhai 2;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* or 100% */
display: flex;
text-align: left;
color: #EBDBCE;
}
#email{ /* campirithq@campirit.com */
position: absolute;
left: 670px;
width:200px;
bottom: 43px;
font-family: Baloo Bhai 2;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 19px;
display: flex;
text-align: left;
color: #EBDBCE;
}
#real_name{  /* 김서윤 */
position: absolute;
left: 850px;
width:200px;
bottom: 43px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 18px;
display: flex;
text-align: left;
color: #EBDBCE;
}
#callnum{ /* 통신판매업신고: 제 101010101 */
position: absolute;
left: 275px;
width:200px;
bottom: 19px;
font-family: Baloo Bhai 2;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* or 100% */
display: flex;
text-align: left;
color: #EBDBCE;
}
#check{ /* 서비스업 가입 사실 확인 */
position: absolute;
left: 480px;
width:200px;
bottom: 19px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* or 100% */
display: flex;
text-align: left;
color: #EBDBCE;
}
#trump{ /* 개인정보보호책임자: 김서윤 */
position: absolute;
left: 670px;
width:200px;
bottom: 19px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* or 100% */
display: flex;
text-align: left;
color: #EBDBCE;
}
#business_num{   /* 사업자 번호 몰라용 */
position: absolute;
left: 850px;
width:200px;
bottom: 19px;
font-family: Baloo Bhaijaan;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 12px;
/* or 100% */
display: flex;
text-align: left;
color: #EBDBCE;
}
</style>
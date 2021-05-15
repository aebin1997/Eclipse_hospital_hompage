<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" errorPage="./views/common/error.jsp" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>직산 가정의학과 의원</title>
<style type = "text/css">
   body img {max-width: 660px;}
</style>
<script type = "text/javascript" src = "/jiksan/resources/js/jquery-3.5.1.min.js"></script>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, target-densitydpi=medium-dpi">

<link rel="stylesheet" type="text/css" href="/jiksan/resources/css/main_slick.css"/>      <%-- main_slick.css = //cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css --%>
<%-- <link rel="stylesheet" href="/jiksan/resources/css/main_xeicon.min.css"/>      main_xeicon.min.css = //cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css --%>
<link rel="stylesheet" href="/jiksan/resources/css/main_bootstrap.min.css"/>      <%-- main_bootstrap.min.css = source/bootstrap/css/bootstrap.min.css --%>
<link href="/jiksan/resources/css/main_reset.css" rel="stylesheet" type="text/css" />      <%-- main_reset.css = source/css/reset.css?v=2012260915 --%>
<link href="/jiksan/resources/css/main_common.css" rel="stylesheet" type="text/css" />      <%-- main_common.css = source/css/common.css?v=2012260915 --%>
<link href="/jiksan/resources/css/main_main.css" rel="stylesheet" type="text/css" />      <%-- main_main.css = source/css/main.css?v=2012260915 --%>

<script language="JavaScript" type="text/JavaScript" src="/jiksan/resources/js/slick.js"></script>
<script language="JavaScript" type="text/JavaScript" src="/jiksan/resources/js/script.js"></script>
 <script type="text/javascript" src="/jiksan/resources/js/link.js"></script>
<script language="javascript" src="/jiksan/resources/js/script-functions.js"></script>
<script type="text/javascript" language="javascript" src="/jiksan/resources/js/EmbedFlash.js"></script>


</head>
<body>
<%@ include file="./views/common/header.jsp" %>
<%-- 
<%@ include file="./views/common/sidebar.jsp" %>
<%@ include file="./views/common/menubar.jsp" %>
 --%>
   <div id="container">
      <section class="main-con01 mw">
         <div class="inner mw cf">
            <article class="con01-left">
                  <div class="con01-visual">
                  <%-- 배너 이미지 --%>
                     <div>
                        <a href="#"><img src="/jiksan/resources/main_images/main_banner_01.jpg"    alt="코로나-19"></a>
                     </div>
                     <!-- <div>  
                        <a href="#"><img src="/jiksan/resources/main_images/main_banner_02.jpg" alt="가정의학과"></a>
                     </div>  -->
                  </div>
               <div class="con01-news cf">

                  <h2>건강정보 검색</h2>

                  <div class="cf">
                      <form name="search_disease" method="post" onSubmit=""><%--검색 함수 만들기 --%>
                        <select name="key" class="form-control w25 vm search">
                           <option selected>선택</option>   
                           <option value="all">전체</option>
                           <option value="title">질환 및 질병</option>
                           <option value="author">검사 및 치료</option>
                        </select>

                        <input type="text" name="key_word" class="form-control w60 vm search" placeholder="검색어 입력">
                        <button type="submit" onClick="" class="btn btn-default vm search">
                        <image src ="/jiksan/resources/main_images/main-search-icon.png" alt="검색하기" width="30px" style="align:center">
                        </button><%--검색 함수 만들기 --%>
                     </form>
                  </div>
               </div>


<%-- --------------------------- 공시사항을 ajax사용해서 <article> " .con01-left " 안에 넣기 ------------------------ --%>
               <ul class="con01-box cf">
                  <li>
                     <h3>공지사항</h3>
                     <ol>
                        <li><a href="#" target="_blank"> 최근 공지사항 </a></li>
                        <li><a href="#" target="_blank">한 4개 정도 자리 잡아놓기</a></li>
                     </ol>
                  </li>
               </ul>
               
            </article>
            
            <article class="con01-right">
               <ul class="cf">
                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol class="linehight-smoll">
                              <li><a href="javascript:notice5()">❂ 병원안내</a></li>
                              <li><a href="javascript:training1()">❂  진료안내</a></li>
                                        <li><a href="javascript:notice6()">❂ 의료진 소개</a></li>
                                        <li><a href="/jiksan/contact-us">❂ 오시는길</a></li>                      
                           </ol>
                        </div>
                     </div>

                     <div class="con01-inner">
                        <h3>병원안내</h3>
                        <span>Welcome to our clinic!</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>

                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol>                                  
                                      <li><a href="javascript:conference1()">❂ 당뇨병이란?</a></li>
                                      <li><a href="javascript:conference2()">❂ 당뇨병 검사</a></li>
                                      <li><a href="javascript:conference3()">❂ 당뇨병과 식생활</a></li>
                                      <li><a href="javascript:conference4()">❂ 당뇨병과 운동</a></li>      
                                      <li><a href="javascript:conference5()">❂ 당뇨병 합병증</a></li>                     
                           </ol>
                        </div>
                     </div>
                     <div class="con01-inner">
                        <h3>당뇨클리닉</h3>
                        <span>Diabetes Clinic</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>
                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol>
                              <li><a href="/jiksan/diseaseList">❂ 질환백과</a></li>
                              <li><a href="/p_system/" target="_blank">❂  최근 환자 분석</a></li> <%-- 시간 없으면 생략가능 --%>
                           </ol>
                        </div>
                     </div>
                     <div class="con01-inner">
                        <h3>건강정보</h3>
                        <span>Health Information</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>
                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol>
                              <li><a href="javascript:training2()">❂  예약안내</a></li>
                              <li><a href="javascript:training3()">❂  진료 예약하기</a></li>
                           </ol>
                        </div>
                     </div>
                     <div class="con01-inner">
                        <h3>진료 예약</h3>
                        <span>Medical Appointment</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>
                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol>
                              <li><a href="/jiksan/views/notice/noticeListView.jsp">❂  공지사항</a></li>
                              <li><a href="/jiksan/views/faq/faqListView.jsp">❂  자주묻는 질문</a></li>
                              <li><a href="javascript:online3()">❂  Q&A 게시판</a></li>
                              <%-- <li><a href="javascript:online4()">❂   방문 리뷰</a></li>시간 없으면 생략가능 --%><%-- 네이버 방문기록, 블로그 등 자동 불러오기 또는 몇개만 가져오기 --%>
                           </ol>
                        </div>
                     </div>
                     <div class="con01-inner">
                        <h3>커뮤니티</h3>
                        <span>Community</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>
                  <li>
                     <div class="con01-hover">
                        <div>
                           <ol>
                                        <li><a href="javascript:material1()">- 환자교육자료</a></li>
                                        <li><a href="javascript:material5();">- 보험심사기준</a> </li>
                                        <li><a href="javascript:material4()">- 동영상 자료</a></li>
                                    </ol>
                        </div>
                     </div>
                     <div class="con01-inner">
                        <h3>자료실</h3>
                        <span>Reference</span>
                        <i class="xi-plus-thin"></i>   
                     </div>
                  </li>
               </ul>
            </article>
         </div>
      </section>
   </div>
 </div>
 <%@ include file="./views/common/footer.jsp" %>

</body>
</html>
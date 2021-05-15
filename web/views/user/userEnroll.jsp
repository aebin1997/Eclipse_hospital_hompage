<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>직산 가정의학 의원</title>
<script type="text/javascript" src="/jiksan/resources/js/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
function validate(){
	//유효성 검사 코드 작성함
	//서버 컨트롤러로 전송할 값들이 요구한 조건을 모두 만족하였는지 검사하는 것

	//암호와 암호확인이 일치하지 않는지 확인함
	var pwValue1 = document.getElementById("user_pw1").value;
	var pwValue2 = document.getElementById("user_pw2").value;
	if(pwValue1 !== pwValue2){
		alert("암호와 암호확인이 일치하지 않습니다. 다시 입력해 주세요.");
		document.getElementById("user_pw1").select();
		return false;  //전송 취소함
	} //if
	
	return true;  //전송처리됨
}  //validate()

//아이디 중복 체크 확인을 위한 ajax 실행 처리용 함수
function dupIdCheck(){
	$.ajax({
		url: "/jiksan/idchk",
		type: "post",
		data: {user_id : $("#user_id").val() },
		success: function(data){
			//처리결과를 문자열로 받음
			console.log("success : " + data);
			if(data == "ok"){
				alert("사용 가능한 아이디입니다.");
				$("#user_pw1").focus();
			}else{
				alert("이미 사용중인 아이디입니다.\n다시 입력하세요.");
				$("#user_id").select();
			}
		},
		error: function(jqXHR, textstatus, errorthrown){
			//에러 발생시 구동되는 콜백함수임
			console.log("error : " + jqXHR + ", " + textstatus 
					+ ", " + errorthrown);
		}
	});
}

//닉네임 중복 체크 확인을 위한 ajax 실행 처리용 함수
function dupNnmCheck(){
	$.ajax({
		url: "/jiksan/nnmchk",
		type: "post",
		data: {nick_nm : $("#nick_nm").val() },
		success: function(data){
			//처리결과를 문자열로 받음
			console.log("success : " + data);
			if(data == "ok"){
				alert("사용 가능한 닉네임입니다.");
				$("#birthday").focus();
			}else{
				alert("이미 사용중인 닉네임입니다.\n다시 입력하세요.");
				$("#nick_nm").select();
			}
		},
		error: function(jqXHR, textstatus, errorthrown){
			//에러 발생시 구동되는 콜백함수임
			console.log("error : " + jqXHR + ", " + textstatus 
					+ ", " + errorthrown);
		}
	});
}

//회원가입 취소 버튼 - 취소 시 모든 데이터가 사라집니다.
function btn(){ 
	alert('회원가입을 종료하시겠습니까?');
	}
</script>

<script src="http://dmaps.daum.net/map_js_init/postcode.v2.js"></script>
<script>
	//본 예제에서는 도로명 주소 표기 방식에 대한 법령에 따라, 내려오는 데이터를 조합하여 올바른 주소를 구성하는 방법을 설명합니다.
	function sample4_execDaumPostcode() {
		new daum.Postcode(
				{
					oncomplete : function(data) {
						// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

						// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
						// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
						var roadAddr = data.roadAddress; // 도로명 주소 변수
						var extraRoadAddr = ''; // 참고 항목 변수

						// 법정동명이 있을 경우 추가한다. (법정리는 제외)
						// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
						if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
							extraRoadAddr += data.bname;
						}
						// 건물명이 있고, 공동주택일 경우 추가한다.
						if (data.buildingName !== '' && data.apartment === 'Y') {
							extraRoadAddr += (extraRoadAddr !== '' ? ', '
									+ data.buildingName : data.buildingName);
						}
						// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
						if (extraRoadAddr !== '') {
							extraRoadAddr = ' (' + extraRoadAddr + ')';
						}

						// 우편번호와 주소 정보를 해당 필드에 넣는다.
						document.getElementById('sample4_postcode').value = data.zonecode;
						document.getElementById("sample4_roadAddress").value = roadAddr;
						document.getElementById("sample4_jibunAddress").value = data.jibunAddress;

						document.getElementById("sample4_engAddress").value = data.addressEnglish;

						// 참고항목 문자열이 있을 경우 해당 필드에 넣는다.
						if (roadAddr !== '') {
							document.getElementById("sample4_extraAddress").value = extraRoadAddr;
						} else {
							document.getElementById("sample4_extraAddress").value = '';
						}

						var guideTextBox = document.getElementById("guide");
						// 사용자가 '선택 안함'을 클릭한 경우, 예상 주소라는 표시를 해준다.
						if (data.autoRoadAddress) {
							var expRoadAddr = data.autoRoadAddress
									+ extraRoadAddr;
							guideTextBox.innerHTML = '(예상 도로명 주소 : '
									+ expRoadAddr + ')';
							guideTextBox.style.display = 'block';

						} else if (data.autoJibunAddress) {
							var expJibunAddr = data.autoJibunAddress;
							guideTextBox.innerHTML = '(예상 지번 주소 : '
									+ expJibunAddr + ')';
							guideTextBox.style.display = 'block';
						} else {
							guideTextBox.innerHTML = '';
							guideTextBox.style.display = 'none';
						}
					}
				}).open();
	}
</script>
<style type="text/css">
section table#loginTbl {
	float: center;
	border: 1px solid black;
	width: 500px;
}
</style>
</head>
<body>
<header>
<div><h1><a href="/jiksan/index.jsp"><img src="/jiksan/resources/main_images/jiksan_logo.png" alt="직산 가정의학과 의원"></a></h1></div>
</header>
<section>
<%-- <% if(loginUser == null){ //회원가입 중 이라면 %> --%>
<form action="/jiksan/enroll.cp" method="post">
<table id="userEnroll">
	<caption>회원가입</caption>
	
	<tr><th width="120">회원구분</th>
		<td><input type="radio" name="user_lv" value="1" checked>일반</td>
	</tr>
	<tr><th width="120">본인인증</th></tr>
	
	<tr><th width="120">이름</th>
	<td><input type="text" name="user_nm" id="user_nm" placeholder="본인인증 시 자동입력" required></td></tr>
	
	<tr><th width="120">휴대폰</th>
	<td ><input type="tel" name="phone" placeholder="휴대폰인증 시 자동입력" required></td></tr>
	
	<tr><th width="120">아이디</th>
	<td><input type="text" name="user_id" id="user_id" placeholder="영문소문자/숫자, 4~16자" required> &nbsp; 
	<input required id="checkId" type="button" value="중복확인" onclick="dupIdCheck();"></td></tr>
	
	<tr>	<th width="120">비밀번호</th>
	<td><input type="password" name="user_pw" id="user_pw1" placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~20자" required></td></tr>
	<tr><th width="120">비밀번호 확인</th>
	<td><input type="password" id="user_pw2"></td></tr>
	
	<tr>
	<th width="120">주소</th>
	<td><input type="text" id="sample4_postcode" name="address" placeholder="우편번호"> 
	<input type="button" onclick="sample4_execDaumPostcode()" value="우편번호 찾기"> 
	<br>
	<input type="text" id="sample4_roadAddress" name="address" placeholder="도로명주소" size="60">
	<br> <input type="hidden" id="sample4_jibunAddress" name="address" placeholder="지번주소" size="60"> 
	<span id="guide" style="color: #999; display: none"></span> 
	<input type="text" id="sample4_detailAddress" name="address" placeholder="상세주소" size="60"> <br>
	<input type="hidden" id="sample4_extraAddress" name="address" placeholder="참고항목" size="60">
    <input type="hidden" id="sample4_engAddress" name="address" placeholder="영문주소"></td>
	</tr>

	<tr><th width="120">닉네임</th>
	<td><input type="text" name="nick_nm" id="nick_nm" required> &nbsp;
	<input type="checkbox" name="nick_nm" value="nick_nm">아이디와 동일 &nbsp;
	<input required id="checkNnm" type="button" value="중복확인" onclick="dupNnmCheck();"></td></tr>
	
	<tr><th width="120">생년월일</th>
	<td><input style="width:40px;" type="text" name="birthday" placeholder="yyyy" id="birthday" required>&nbsp;
		<input type="text" placeholder="mm" name="birthday" list="month" style="width:40px;">
<datalist id="month">
	<option value="01">
	<option value="02">
	<option value="03">
	<option value="04">
	<option value="05">
	<option value="06">
	<option value="07">
	<option value="08">
	<option value="09">
	<option value="10">
	<option value="11">
	<option value="12">
</datalist> &nbsp;
<input type="text" placeholder="dd" name="birthday" list="day" style="width:40px;">
<datalist id="day">
	<option value="01">
	<option value="02">
	<option value="03">
	<option value="04">
	<option value="05">
	<option value="06">
	<option value="07">
	<option value="08">
	<option value="09">
	<option value="10">
	<option value="11">
	<option value="12">
	<option value="13">
	<option value="14">
	<option value="15">
	<option value="16">
	<option value="17">
	<option value="18">
	<option value="19">
	<option value="20">
	<option value="21">
	<option value="22">
	<option value="23">
	<option value="24">
	<option value="25">
	<option value="26">
	<option value="27">
	<option value="28">
	<option value="29">
	<option value="30">
	<option value="31">
</datalist>
	</td></tr>
	
	<tr><th width="120">성 별</th>
	<td>	
		<input type="radio" name="gender" value="M" checked> 남자 &nbsp; 
		<input type="radio" name="gender" value="F"> 여자	
	</td></tr>
	
</table>
<!-- 
<div class="agreement">
    <h3>AGREEMENT</h3>
    <div style="overflow-y:scroll; width:300px; height:150px; padding:10px; border:1px solid black;">
            <p><span style="font-family: 돋움,dotum;">제1조 ...<br>
            테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br>테스트<br></span></div>
        <p class="check"><span>이용약관에 동의하십니까?</span> <input id="agree1" name="agree_service_check[]" fw-filter="/1/" fw-label="이용약관 동의" fw-msg="이용약관에 동의 하세요" class="ec-base-chk" value="1" type="checkbox" rquired /><label for="agree_service_check0" >동의함</label></p>
    </div>

<div class="pircacyPolicy">
    <h3>PRIVACY POLICY</h3>
    <div style="overflow-y:scroll; width:300px; height:150px; padding:10px; border:1px solid black;">
            <p><span style="font-family: 돋움,dotum;">제1조 ...</span>        </div>
        <p class="check"><span>개인정보 수집 및 이용에 동의하십니까?</span><input id="agree2" name="agree_privacy_check[]" fw-filter="/1/" fw-label="개인정보 수집 및 이용 방침" fw-msg="개인정보 수집 및 이용 방침에 동의하세요" class="ec-base-chk" value="1" type="checkbox" requried /><label for="agree_privacy_check0" >동의함</label></p>
    </div>
-->
<table id="enrollFinish">
<tr><th><input type="button" value="회원가입 취소" onclick=""> &nbsp; <input type="submit" value="회원가입"></th></tr>
</table>
</form>
<%-- <% }else{ //회원가입이 완료됐다면%>
<table id="userEnroll">
	<tr><th>반갑습니다. <%= loginUser.getUserNm() %> 님.</th>
</table>
<% } %> --%>

</section>

<%@ include file="../../views/common/footer.jsp" %>
</body>
</html>
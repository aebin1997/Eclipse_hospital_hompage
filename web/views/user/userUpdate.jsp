<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="user.model.vo.User" %>
<%
	User user = (User)request.getAttribute("user");

	//주소(address)를 값을 각각의 문자열로 분리 처리
	String[] Address = user.getAddress().split(",");
%>    
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>직산 가정의학 의원</title>
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
</head>
<body>
<%@ include file="../common/header.jsp" %>
<hr>
<h1 align="center">회원 정보 수정 페이지</h1>
<br>
<form action="/jiksan/uupdate" method="post">
<table id="outer" align="center" cellspacing="5" cellpadding="0">
<%-- <input type="hidden" name="user_lv" value="<%= user.getUserLv() %>" checked>
<input type="hidden" name="user_no" value="<%= user.getUserNo() %>"> 서블릿에서 안씀--%>
<tr><th width="120">이 름</th>
	<td><input type="text" name="user_nm" value="<%= user.getUserNm() %>" readonly></td>
</tr>
<tr><th width="120">아이디</th>
	<td><input type="text" name="user_id" value="<%= user.getUserId() %>" readonly></td></tr>
<tr>	<th width="120">비밀번호</th>
	<td><input type="password" name="user_pw" id="user_pw1" placeholder="영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~20자">&nbsp;
	</td></tr>
	<tr><th width="120">비밀번호 확인</th>
	<td><input type="password" id="user_pw2"></td></tr>
<tr><th width="120">휴대폰</th>
	<td><input type="tel" name="phone" value="<%= user.getPhone() %>"></td></tr>

<tr><th width="120">주소</th>
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
	<td><input type="text" name="nick_nm" value="<%= user.getNickNm() %>" readonly></td>
	
<tr><th width="120">생년월일</th>
	<td><input type="text" name="birthday" value="<%= user.getBirthday() %>" readonly></td>


<tr><th width="120">성 별</th>
	<td>
	<% if(user.getGender().equals("M")){ %>
		<input type="radio" name="gender" value="M" checked readonly> 남자 &nbsp; 
		<input type="radio" name="gender" value="F" readonly> 여자
	<% }else{ %>
		<input type="radio" name="gender" value="M" readonly> 남자 &nbsp; 
		<input type="radio" name="gender" value="F" checked readonly> 여자
	<% } %>
	</td></tr>


<tr><th width="120" colspan="2">
	<input type="submit" value="수정하기">
</th></tr>
</table>
</form>



<hr>
<%@ include file="../common/footer.jsp" %>
</body>
</html>
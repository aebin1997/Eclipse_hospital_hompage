<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>직산 가정의학 의원</title>
</head>
<body>
<%@ include file="../common/header.jsp" %>
<section>
<table border="1">
	<caption>회원정보</caption>
	<tr><th>아이디</th><td><%= loginUser.getUserNm() %></td><th>닉네임</th><td><%= loginUser.getNickNm() %></td></tr>
	<tr><th>휴대폰</th><td><%= loginUser.getPhone() %></td><th>생년월일</th><td><%= loginUser.getBirthday() %></td></tr>
	<tr><th>주소</th><td colspan="3"><%= loginUser.getAddress() %></td></tr>
	<tr><td colspan="4"><input type="button" value="정보수정" onclick="location.href='/jiksan/views/user/userDetailView.jsp'"></td></tr>
</table>
</section>

<section>
<table width="500">
<caption>예약 내역</caption>
<tr><th>1</th><td><a href="#">링크</a></td></tr>
</table>
</section>

<section>
<table width="500">
<caption>좋아요 누른 게시물</caption>
<tr><th>1</th><td><a href="#">링크</a></td></tr>
</table>
</section>

</body>
</html>
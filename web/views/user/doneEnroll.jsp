<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="user.model.vo.User" %>
<%
	String nm = (String)request.getAttribute("nm");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%= nm %>님의 회원가입이 완료되었습니다.<br>
<button onclick="location.href='/jiksan/index.jsp'">홈으로</button> &nbsp; <button onclick="location.href='/jiksan/views/user/userLogin.jsp'">로그인하러 가기</button>

</body>
</html>
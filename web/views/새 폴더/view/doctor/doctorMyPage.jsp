<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  import="doctor.model.vo.Doctor" %>
    
<%
	Doctor doctor = (Doctor)request.getAttribute("doctor");
%>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>의사 마이페이지</h1>
<table>
<tr><td><%= doctor.getProfilePic() %></td><th>ID번호:</th><td><%= doctor.getDocNo() %></td><tr>
<tr><th>이름:</th><td><%= doctor.getDocNm() %></td><th>ID번호:</th><td><%= doctor.getDocNo() %></td><tr>
<tr><th>진료과 코드:</th><td><%= doctor.getDeptNo() %></td><tr>
<tr><th>전공:</th><td><%= doctor.getMajor() %></td><tr>
<tr><th>학력:</th><td><%= doctor.getAcademicCareer() %></td><tr>
<tr><th>경력:</th><td><%= doctor.getCareer() %></td><tr>
<tr><th>수상내역:</th><td><%= doctor.getAcademicActivity() %></td><tr>
<tr><th>학회활동:</th><td><%= doctor.getDomesticActivity() %></td><tr>
<tr><th>국내활동:</th><td><%= doctor.getInternationalActivity() %></td><tr>
<tr><th>국외활동:</th><td><%= doctor.getResearch() %></td><tr>
<tr><th>논문:</th><td><%= doctor.getJournal() %></td><tr>
<tr><th>기타:</th><td><%= doctor.getEtc() %></td><tr>

<button>수정하기</button>
</table>

</body>
</html>
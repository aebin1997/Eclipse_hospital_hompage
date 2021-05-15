<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>직산 가정의학 의원</title>
</head>
<body>
<h1 align="center">아이디 찾기</h1>
<h3>아이디를 잊으셨나요?</h3>
아이디 찾기 방법을 선택해주세요. 
<br><br>
<ul>
<li>내 명의(이름)로 가입된 휴대폰 인증 (현재 돈내야해서 보류)<br>
내 명의(이름)로 가입한 아이디와, 이름/휴대폰 번호가 일치한 아이디를 찾습니다.<input type="button" value="본인인증">
</li>
<br>
<li>이름 / 생년월일 / 성별로 찾기 
<br>
<form = action="/jiksan/findid" method="post">
<input type="text" placeholder="이름을 입력해 주세요." name="fIdNm"> &nbsp;
<select name="gender">
	<option value="M">남자</option>
	<option value="F">여자</option>
</select>
<br>
<input type="text" placeholder="yyyy" name="birthday"> &nbsp;
<input type="text" placeholder="mm" name="birthday" list="month">
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
<input type="text" placeholder="dd" name="birthday" list="day">
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
</datalist> &nbsp; <input type="submit" name="submit" value="다음 단계"></li>
</ul>
</form>
<br>비빌번호를 찾으시나요? <a href="/jiksan/views/user/findPw.jsp">비밀번호 찾기 ▸
</div>
</body>
</html>
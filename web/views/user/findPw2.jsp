<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<h1>비밀번호 찾기</h1>
aebin.park 님, 인증 가능한 연락처를 선택한 후, 연락처 전체를 입력해 주세요.<br>
개인정보보호를 위해 연락처는 일부분만 보여드리며, * 가 무작위로 표기됩니다.
<input type="radio" value="내 명의(이름)로 가입된 휴대폰 인증"><br>
다음단계를 클릭하면 휴대폰 본인확인 팝업이 뜹니다.<br>
<input type="button" onclick="location.href='javascript:history.go(-1);" value="이전으로">
<input type="button" onclick="location.href='본인인증 팝업';" value="다음단계">

</body>
</html>
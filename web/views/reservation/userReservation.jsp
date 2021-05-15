<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ 
	page import="java.util.ArrayList, disease.model.vo.Disease"%>
<%
	ArrayList<Disease> list = (ArrayList<Disease>) request.getAttribute("list");
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<script type="text/javascript" src="/jiksan/resources/js/jquery-3.5.1.min.js"></script>
<script type="text/javascript">

//병명 -> 진료과 
function disease2dept(atag){ //this가 클릭한 a 태그
	var diseaseNm0 = atag.innerHTML;
	console.log("diseaseNm0" + diseaseNm0);
	$.ajax({
		url: "/jiksan/d2dept",
		type: "post",
		data: { "diseaseNm1" : diseaseNm0 }, //이름&값
		success: function(data){ //진료과명 = 데이터
			//처리결과를 문자열로 받음
			console.log("success : " + data);
			$("#dept_sel_list").html("<li>" + data + "</li>");			
		},
		error: function(jqXHR, textstatus, errorthrown){
			//에러 발생시 구동되는 콜백함수임
			console.log("error : " + jqXHR + ", " + textstatus 
					+ ", " + errorthrown);
		}
	});
}

//진료과 -> 의사 정보
function dept2doctor(atag){ //this가 클릭한 a 태그
	var diseaseNm0 = atag.innerHTML;
	$.ajax({
		url: "/jiksan/d2doctor",
		type: "post",
		data: { "diseaseNm1" : diseaseNm0 }, //이름&값
		success: function(data){ //진료과명 = 데이터
			//처리결과를 문자열로 받음
			console.log("success : " + data);
			$("#dept_sel_list").html("<li>" + data + "</li>");
			
			$("#doctor_sel_list").html("<li>" + data + "</li>");		
		},
		error: function(jqXHR, textstatus, errorthrown){
			//에러 발생시 구동되는 콜백함수임
			console.log("error : " + jqXHR + ", " + textstatus 
					+ ", " + errorthrown);
		}
	});
}

/* function dept2doctor(){
	$.ajax({
		url: "/jiksan/d2doctor",
		type: "post",
		data: {diseaseNm : $("#diseaseNm").val() },
		success: function(data){
			//처리결과를 문자열로 받음
			console.log("success : " + data);
			if(data == "ok"){
				show()
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
} */
</script>

</head>
<body>
<div id="disease">	
		
		<%
			for (Disease d : list) {
		%>
		<ul class="list clfix scroll_list" id="ds_sel_list">
			<li>
			<a onclick="disease2dept(this);" id="diseaseNm" style="color: rgb(38, 82, 119); font-weight: 500;"><%=d.getDiseaseNm()%></a>
			</li>
		</ul>
		<%
			}
		%>
	</div>

<div id="dept"> 
		<ul class="list clfix scroll_list" id="dept_sel_list"></ul>
</div>

<div id="doctor"> 
		<ul class="list clfix scroll_list" id="doctor_sel_list"></ul>
</div>
	
</body>
</html>
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
</head>
<body>
<% 	for (Disease d : list) {	%>
								<ul class="list clfix scroll_list" id="ds_sel_list">
									<li id="dsList0" onmouseover="dsli('0','over','D0002484');" onmouseout="dsli('0','over','D0002484');" style="background: rgb(241, 241, 241); border-radius: 15px;">
										<a href="#;" id="dsList0_a" onclick="chk_disease('0');" style="color: rgb(38, 82, 119); font-weight: 500;"><%=d.getDiseaseNm()%></a>
									</li>
								</ul>
								<% } %>			
</body>
</html>
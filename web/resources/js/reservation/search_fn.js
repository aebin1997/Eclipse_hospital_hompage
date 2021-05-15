$(function(){

});
//검색 
function search_dp_fn(){
	var f = document.search_form1;
	var search_text = document.getElementById("dp_search").value;
	if(search_text=="" || search_text=="진료과를 입력하세요."){
		alert("검색할 진료과를 입력해 주세요.");
		return;
	}
	f.sv.value = search_text;
	document.getElementById("tmp_list_num").value = "";
	document.getElementById("recently_data").value = "";
	getAjaxDeptList(f.hpCd.value,f.sv.value,f.dpCode.value,f.dsCode.value);
}
function search_ds_fn(){
	var f = document.search_form2;
	var search_text = document.getElementById("ds_search").value;
	if(search_text=="" || search_text=="병명(질환명)을 입력하세요."){
		alert("검색할 병명(질환명)을 입력해 주세요.");
		return;
	}
	f.sv.value = search_text;
	document.getElementById("tmp_list_num2").value = "";
	document.getElementById("recently_data").value = "";
	getAjaxDsList(f.dpCode.value,f.drNo.value,f.sv.value,f.dsCode.value);
}
function search_doct_fn(){
	var f = document.search_form3;
	var search_text = document.getElementById("dr_search").value;
	if(dr_search=="" || dr_search=="담당의사를 입력하세요."){
		alert("검색할 담당의사를 입력해 주세요.");
		return;
	}
	f.sv.value = search_text;
	document.getElementById("recently_data").value = "";
	getAjaxDoctList(f.dsCode.value);
}

//전체보기
function search_dp_all(){
	var f = document.search_form1;
	f.dpCode.value = "";
	f.dsCode.value = "";
	document.getElementById("dp_search").value = "진료과를 입력하세요.";
	document.getElementById("recently_data").value = "";
	getAjaxDeptList(f.hpCd.value,'',f.dpCode.value,f.dsCode.value);
}
function search_ds_all(){
	var f = document.search_form2;
	f.dpCode.value = "";
	f.drNo.value = "";
	f.dsCode.value = "";
	document.getElementById("ds_search").value = "병명(질환명)을 입력하세요.";
	document.getElementById("recently_data").value = "";
	getAjaxDsList(f.dpCode.value,f.drNo.value,'',f.dsCode.value);
}
function search_doct_all(){
	var f = document.search_form3;
	f.dsCode.value = "";
	document.getElementById("dr_search").value = "담당의사를 입력하세요.";
	f.sv.value = "";
	document.getElementById("recently_data").value = "";
	getAjaxDoctList(f.dsCode.value);
}



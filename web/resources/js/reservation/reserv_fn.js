
$(function(){
 	$(".bgLayer").css("height", $(document).height() + "px");
 	showMenu(1); //전체틀 보이기
 	
 	/*
 	 if(document.getElementById("rsrv_type").value=="G"){
 		tabChg('tab01',1);
		//init_items('G');	
			rsrv_type_ch("G",1);
 	}else{
 		tabChg('tab01',3);
 		//init_items('S');
 	}
 	*/
 	if(document.getElementById("realname_chk").value=="T"){
 	 	if(document.getElementById("rsrv_user_chk").value=="RSRV_USER_CHK"){
 	 		document.realname_chk_form.ssn.value = document.rsrvType1.RESNO1.value+document.rsrvType1.RESNO2.value;
 	 		document.realname_chk_form.name.value = document.rsrvType1.name.value;
 	 		document.realname_chk_form.jumin1.value = document.rsrvType1.RESNO1.value;
 	 		document.realname_chk_form.jumin2.value = document.rsrvType1.RESNO2.value;
 	 		checkForm(document.realname_chk_form);
 	 	}else{
 	 		if(!document.getElementById("rsrv_utel1").value && document.rsrvType1.userName.value){
	 	 		$("#popupConfirm").show();
	 	 	 	document.getElementById("jumin1").focus();
 	 		}else{
 	 			$('#bgLayer').hide();
 	 		}
 	 	}
 		
 	}else{
 		var f = "";
 		var tel_array = "";
 		if(document.getElementById("rsrv_type").value=="G"){
 			f = document.rsrvType1;
 		}else{
 			f = document.rsrvType2;
 		}
 		tel_array = f.tel.value.split("-");
 		document.getElementById("jumin_n1").innerHTML = f.RESNO1.value;
		document.getElementById("rsrv_utel1").value = tel_array[0];
		document.getElementById("rsrv_utel2").value = tel_array[1];
		document.getElementById("rsrv_utel3").value = tel_array[2];
		document.getElementById("jumin2_n1").innerHTML = f.RESNO1.value;
		document.getElementById("rsrv2_utel1").value = tel_array[0];
		document.getElementById("rsrv2_utel2").value = tel_array[1];
		document.getElementById("rsrv2_utel3").value = tel_array[2];
		
		$('#bgLayer').hide();
 	}
 	if(document.getElementById("rsrv_hpcd").value=="AA"){
 		document.getElementById("rsrv_hnm").innerHTML = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm_").innerHTML = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2").innerHTML = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2_").innerHTML = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
 	}else if(document.getElementById("rsrv_hpcd").value=="GR"){
 		document.getElementById("rsrv_hnm").innerHTML = "구로병원 <a href=\"http://guro.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm_").innerHTML = "구로병원 <a href=\"http://guro.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2").innerHTML = "구로병원 <a href=\"http://guro.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2_").innerHTML = "구로병원 <a href=\"http://guro.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 	}else{
 		document.getElementById("rsrv_hnm").innerHTML = "안산병원 <a href=\"http://ansan.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm_").innerHTML = "안산병원 <a href=\"http://ansan.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2").innerHTML = "안산병원 <a href=\"http://ansan.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		document.getElementById("rsrv_hnm2_").innerHTML = "안산병원 <a href=\"http://ansan.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 	}
 	
 	if(document.rsrvType1.mode.value=="MOD"){
 		document.getElementById("recently_data").value = "T";
 		var tmp_tel = document.rsrvType1.tel.value;
 		var tmp_tel_arr = tmp_tel.split("-"); 
 		var rsrvDt = document.rsrvType1.rsrvDt.value;
 		var hpNm = "";
 		var drNm_sub = "";
 		var tmp_tel_arr1 = tmp_tel_arr[0];
 		var tmp_tel_arr2 = tmp_tel_arr[1];
 		var tmp_tel_arr3 = tmp_tel_arr[2];
 		if(document.rsrvType1.proxynm.value!=""){
 			if(tmp_tel_arr[1]==null){
 				tmp_tel_arr1 = tmp_tel.substring(0,3);
 	 			tmp_tel_arr2 = tmp_tel.substring(3,7);
 	 			tmp_tel_arr3 = tmp_tel.substring(7,11);
 			}else{
 				tmp_tel_arr1 = tmp_tel_arr[0];
 	 			tmp_tel_arr2 = tmp_tel_arr[1];
 	 			tmp_tel_arr3 = tmp_tel_arr[2];
 			}
 			
 		}
 		document.rsrvType1.TELNO1.value = tmp_tel_arr1;
 		document.rsrvType1.TELNO2.value = tmp_tel_arr2;
 		document.rsrvType1.TELNO3.value = tmp_tel_arr3;
 		if(document.rsrvType1.hpCd.value=="AA"){
 			hpNm = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
 		}else if(document.rsrvType1.hpCd.value=="GR"){
 			hpNm = "구로병원 <a href=\"http://guro.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		}else if(document.rsrvType1.hpCd.value=="AS"){
 			hpNm = "안산병원 <a href=\"http://ansan.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
 		}
 		if(document.rsrvType1.spcdryn.value=="Y"){
 			document.rsrvType1.exmTp.value="S";
 		}else{
 			document.rsrvType1.exmTp.value="G";
 		}
 		if(document.rsrvType1.exmTp.value=="S"){
			//drNm_sub = "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
		}
 		document.rsrvType1.oldDpCode.value = document.rsrvType1.dpCode.value;
 		document.rsrvType1.oldDrNo.value = document.rsrvType1.drNo.value;
 		document.rsrvType1.oldExmTp.value = document.rsrvType1.exmTp.value;
 		document.rsrvType1.oldRsrvDt.value = document.rsrvType1.rsrvDt.value;
 		document.rsrvType1.oldRsrvTm.value = document.rsrvType1.rsrvTm.value;
 		document.rsrvType1.mode.value = "U";
 		document.search_form1.hpCd.value = document.rsrvType1.hpCd.value;
		document.search_form1.dpCode.value = document.rsrvType1.dpCode.value;
		document.search_form1.dsCode.value = "";
		document.search_form2.dpCode.value = document.rsrvType1.dpCode.value;
		document.search_form2.drNo.value = document.rsrvType1.drNo.value;
		document.search_form2.dsCode.value = "";
		document.search_form3.hpCd.value = document.rsrvType1.hpCd.value;
		document.search_form3.dpCode.value = document.rsrvType1.dpCode.value;
		document.search_form3.drNo.value = document.rsrvType1.drNo.value;
		document.search_form3.dsCode.value = "";
		document.search_form3.smtNo.value = "";
		document.search_form4.hpCd.value = document.rsrvType1.hpCd.value;
		document.search_form4.bodyCode.value = "";
		document.search_form4.sex.value = "";
		document.search_form4.sv.value = "";
		document.search_form5.hpCd.value = document.rsrvType1.hpCd.value;
		document.search_form5.dpCode.value = document.rsrvType1.dpCode.value;
		document.search_form5.drNo.value = document.rsrvType1.drNo.value;
		document.search_form5.dsCode.value = "";
		document.search_form5.smtNo.value = "";
		document.search_form5.sv.value = "";
 		getAjaxDeptList(document.search_form1.hpCd.value,document.rsrvType1.dpNm.value,document.search_form1.dpCode.value,'');
		getAjaxDsList(document.search_form2.dpCode.value,document.search_form2.drNo.value,'','',document.rsrvType1.dpNm.value);
		getAjaxDoctList('');
		
		tm_am_pm = chk_tm_gbn(document.rsrvType1.rsrvTm.value);
		document.getElementById("pat_nm").innerHTML = document.rsrvType1.patNm.value;
		document.getElementById("jumin_n1").innerHTML = document.rsrvType1.RESNO1.value;
		document.getElementById("rsrv_utel1").value = tmp_tel_arr1;
		document.getElementById("rsrv_utel2").value = tmp_tel_arr2;
		document.getElementById("rsrv_utel3").value = tmp_tel_arr3;
		document.getElementById("rsrv_hnm").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm").innerHTML = document.rsrvType1.dpNm.value+"<a href=\"/introduction/grandTour.do?dpCode="+document.rsrvType1.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm").innerHTML = document.rsrvType1.drNm.value+drNm_sub;
		document.getElementById("rsrv_ymd").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm").innerHTML = tm_am_pm+document.rsrvType1.rsrvTm.value;
		document.getElementById("pat_nm_").value = document.rsrvType1.patNm.value;
		document.getElementById("jumin_n1_").value = document.rsrvType1.RESNO1.value;
		document.getElementById("jumin_n2_").value = document.rsrvType1.RESNO2.value;
		document.getElementById("pat_relation").value = document.rsrvType1.proxyrlt.value;
		document.getElementById("tel_num1").value = tmp_tel_arr1;
		document.getElementById("tel_num2").value = tmp_tel_arr2;
		document.getElementById("tel_num3").value = tmp_tel_arr3;
		document.getElementById("rsrv_hnm_").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm_").innerHTML = document.rsrvType1.dpNm.value+"<a href=\"/introduction/grandTour.do?dpCode="+document.rsrvType1.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm_").innerHTML = document.rsrvType1.drNm.value+drNm_sub;
		document.getElementById("rsrv_ymd_").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm_").innerHTML = tm_am_pm+document.rsrvType1.rsrvTm.value;
		
		if(document.rsrvType1.proxynm.value==""){
			//document.getElementById("agRsrvYn_y").style.display = "none";
			tabChg('tab03',1);
			agRsrvYn_ch('1');
			document.getElementById("rsrv_btn1").src = "/reservation/reserv_script/images/layer/btn_reserve_save.gif";
		}else{
			document.getElementById("agRsrvYn_n").style.display = "none";
			tabChg('tab03',2);
			agRsrvYn_ch('2');
			document.getElementById("rsrv_btn2").src = "/reservation/reserv_script/images/layer/btn_reserve_save.gif";
		}
		
 	}
 	if($("#rsrv_reserve_info").val()!="rsrv_reserve_info" && $("#rsrv_reserve_info").val()!="||||||||||" && $("#rsrv_reserve_info").val()){
 		var rsrvReserveInfo = $("#rsrv_reserve_info").val();
 		var rsrvReserveInfoArr = rsrvReserveInfo.split("||");
 		//reserveInfoSum = dpCode+"||"+dpNm+"||"+drNo+"||"+drNm+"||"+rsrvDt+"||"+rsrvTm;
 		getAjaxDsList(rsrvReserveInfoArr[0],'','','',rsrvReserveInfoArr[1],'');
 	}
});
function showMenu(idx){
 	$('.popLayer'+idx).css("visibility", "visible");
 	$('.bgLayer').show();
	$('#wrapper').css("height", "100%");
	$('#wrapper').css("overflow", "hidden");

}
//예약프로그램 종료  
function hideMenu(){
	$('#bgLayer').show();
	$('#popupConfirm13').show();
	
}

//
function closeflashReserve(){
	document.location.href = "/mypage/mypageMain.do";
	
}
//
function getAjaxDeptList(hp_cd,dp_nm,dp_code,ds_code){
	var dp_type = "";
	$('#doct_sel_list').html("");
	document.rsrvType1.dsCode.value = ds_code;
	pcnAjax.run("/reserveSC/deptList.do", "POST", "hpCd="+hp_cd+"&dpCode="+dp_code+"&sv="+encodeURIComponent(encodeURIComponent(dp_nm))+"&dsCode="+ds_code+"&dp_type="+dp_type, "handlerDpList");
	
}
function handlerDpList(req, xml, txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var deptList = json['deptList'];
	var deptInfo = "";
	
	if(deptList.length<=0){
		deptInfo = "<li>진료과가 없습니다.</li>";
	}
	
	for(var i=0; i<deptList.length; i++){
		var o = deptList[i];
		if($("#diseaseListDiv").css("display") == "block"){
			deptInfo = deptInfo + '<li id="dpList'+i+'"><a href="#" onclick="javascript:getAjaxDoctList(\''+document.rsrvType1.dsCode.value+'\',\''+o.dpCode+'\');chk_dept(\''+i+'\');" id="dpList'+i+'_a">'+o.dpNm+'</a>';
		}else{
			deptInfo = deptInfo + '<li id="dpList'+i+'"><a href="#" onclick="javascript:getAjaxDsList(\''+o.dpCode+'\',\'\',\'\',\'\',\''+o.dpNm+'\');chk_dept(\''+i+'\');" id="dpList'+i+'_a">'+o.dpNm+'</a>';
		}
	}
	
	$('#dept_sel_list').html(deptInfo);
}
function getAjaxDsList(dpCode,drNo,sv,dsCode,dpNm){
	var hpCd = document.rsrvType1.hpCd.value;
	if(dpCode!=""){
		document.search_form2.dpCode.value = dpCode;
		document.search_form3.dpCode.value = dpCode;
	}else{
		dpCode = document.search_form2.dpCode.value;
	}
	if(document.getElementById("recently_data").value!="T"){
		document.rsrvType1.dpCode.value = dpCode;
		document.rsrvType1.dpNm.value = dpNm;
		document.rsrvType1.drNo.value = "";
		document.rsrvType1.drNm.value = "";
		document.rsrvType1.rsrvDt.value = "";
		document.rsrvType1.rsrvTm.value = "";
	}
	document.getElementById("tmp_list_num2").value = "";
	var fc = document.cal_form;		
	fc.year.value = document.getElementById("standard_date1").value;
	fc.month.value = document.getElementById("standard_date2").value;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	$('#doct_sel_list').html("");
	arr_cal_day = "";
	arr_cal_gbn = "";
	arr_cal_tm = "";
	arr_cal_len = "";
	if(document.getElementById("recently_data").value!="T"){
		document.getElementById("rsrv_dpnm").innerHTML = "";
		document.getElementById("rsrv_dpnm_").innerHTML = "";
		document.getElementById("rsrv_drnm").innerHTML = "";
		document.getElementById("rsrv_drnm_").innerHTML = "";
		document.getElementById("rsrv_ymd").innerHTML = "";
	    document.getElementById("rsrv_tm").innerHTML = "";
	  	document.getElementById("rsrv_ymd_").innerHTML = "";
	    document.getElementById("rsrv_tm_").innerHTML = "";
	    document.getElementById("rsrv_cal1").style.display = "";
		document.getElementById("rsrv_cal2").style.display = "none";
	}
	
	pcnAjax.run("/reserveSC/diseaseList.do", "POST", "hpCd="+hpCd+"&dpCode="+dpCode+"&drNo="+drNo+"&sv="+encodeURIComponent(encodeURIComponent(sv))+"&dsCode="+dsCode, "handlerDsList");
	
}
function handlerDsList(req, xml, txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var dsList = json['dsList'];
	var dsInfo = "";
	var hpCd = document.rsrvType1.hpCd.value;
	
	if(dsList.length<=0){
		dsInfo = "<li>병명(질환명)이 없습니다.</li>";
	}
	for(var i=0; i<dsList.length; i++){
		var o = dsList[i];
		if($("#diseaseListDiv").css("display") == "block"){
			dsInfo = dsInfo + '<li id="dsList'+i+'" onmouseover="dsli(\''+i+'\',\'over\',\''+o.dsCode+'\');" onmouseout="dsli(\''+i+'\',\'out\',\''+o.dsCode+'\');"><a href="javascript:getAjaxDeptList(\''+hpCd+'\',\'\',\'\',\''+o.dsCode+'\');dsli(\''+i+'\',\'sel\',\''+o.dsCode+'\');" id="dsList'+i+'_a" onclick="chk_disease(\''+i+'\');">'+o.dsNm+'</a></li>';
		}else{
			dsInfo = dsInfo + '<li id="dsList'+i+'" onmouseover="dsli(\''+i+'\',\'over\',\''+o.dsCode+'\');" onmouseout="dsli(\''+i+'\',\'out\',\''+o.dsCode+'\');"><a href="javascript:getAjaxDoctList(\''+o.dsCode+'\');" id="dsList'+i+'_a" onclick="chk_disease(\''+i+'\');">'+o.dsNm+'</a></li>';
		}
	}
	
	$('#ds_sel_list').html(dsInfo);
	$('#active_layer1').hide();
	$('#active_layer2').show();
	$('#active_layer3').show();
	if($("#diseaseListDiv").css("display") == "none"){
		getAjaxDoctList('');
	}
}
function getAjaxDoctList(dsCode,dpCd){
	var f = document.search_form3;
	var hpCd = f.hpCd.value; 
	if(dpCd){
		f.dpCode.value = dpCd;
	}
	var dpCode = f.dpCode.value;
	f.dsCode.value = dsCode;
	var drNo = "";
	var smtNo = "";
	var sv = f.sv.value;
	if(sv=="담당의사를 입력하세요."){
		sv="";
	}
	
	var fc = document.cal_form;		
	fc.year.value = document.getElementById("standard_date1").value;
	fc.month.value = document.getElementById("standard_date2").value;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	arr_cal_day = "";
	arr_cal_gbn = "";
	arr_cal_tm = "";
	arr_cal_len = "";
	if(dsCode != undefined && dsCode != 'undefined'){
		document.rsrvType1.dsCode.value = dsCode;
	}
	dsCode = document.rsrvType1.dsCode.value;
	if(document.getElementById("recently_data").value!="T"){
		drNo = "";
		smtNo = "";
		document.rsrvType1.drNo.value = "";
		document.rsrvType1.drNm.value = "";
		document.rsrvType1.rsrvDt.value = "";
		document.rsrvType1.rsrvTm.value = "";
		document.getElementById("rsrv_dpnm").innerHTML = "";
		document.getElementById("rsrv_dpnm_").innerHTML = "";
		document.getElementById("rsrv_drnm").innerHTML = "";
		document.getElementById("rsrv_drnm_").innerHTML = "";
		document.getElementById("rsrv_ymd").innerHTML = "";
	    document.getElementById("rsrv_tm").innerHTML = "";
	  	document.getElementById("rsrv_ymd_").innerHTML = "";
	    document.getElementById("rsrv_tm_").innerHTML = "";
	    document.getElementById("rsrv_cal1").style.display = "";
		document.getElementById("rsrv_cal2").style.display = "none";
	}else{
		drNo = f.drNo.value;
		smtNo = f.smtNo.value;
	}
	
	pcnAjax.run("/reserveSC/doctorList.do", "POST", "hpCd="+hpCd+"&dpCode="+dpCode+"&drNo="+drNo+"&dsCode="+dsCode+"&smtNo="+smtNo+"&sv="+encodeURIComponent(encodeURIComponent(sv)), "handlerDoctList");
	
}
function handlerDoctList(req,xml,txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var doctList = json['doctList'];
	var doctInfo = "";
	
	if(doctList.length<=0){
		doctInfo = "<li style=\"padding-top: 10%; text-align: center\">담당의사가 없습니다.</li>";
	}
	for(var i=0; i<doctList.length; i++){
		var o = doctList[i];
		doctInfo = doctInfo + '<li onmouseover="chk_doct(\''+i+'\',\'over\');" onmouseout="chk_doct(\''+i+'\',\'out\');" id="doctList'+i+'">';
		if(o.photo!=""){
			doctInfo = doctInfo + '<a href="javascript:popup_dr_introduction(\''+o.drNo+'\');"><img alt="" src="'+o.photo+'" class="img_doctor" onerror="javascript:this.src=\'/reservation/reserv_script/images/layer/kumc_11.jpg\';"/></a>';
		}else{
			doctInfo = doctInfo + '<a href="javascript:popup_dr_introduction(\''+o.drNo+'\');"><img alt="" src="/reservation/reserv_script/images/layer/kumc_11.jpg" class="img_doctor"/></a>';
		}
		doctInfo = doctInfo + '<div class="doctor_info">';
		doctInfo = doctInfo + '<p class="txt_info01"><strong>'+o.drNm+'</strong> ';
		if(o.exmTp=="S"){
			//doctInfo = doctInfo + '(선택진료)';
		}
		doctInfo = doctInfo + '</p>';
		doctInfo = doctInfo + '<p class="txt_info02"><strong class="p-pink">진료과</strong><strong>'+o.dpNm+'&nbsp;</strong></p>';
		doctInfo = doctInfo + '<div style="overflow:hidden;width:240px;"><p class="txt_info02"><strong class="p-pink">세부전공</strong><strong>';		
		for(var j=0;j<o.dsList.length;j++){
			var o2 = o.dsList[j];
			doctInfo = doctInfo + o2.dsNm +",";
		}	
		doctInfo = doctInfo + '</strong></p></div>';
		doctInfo = doctInfo + '<div class="btn_select">';
		doctInfo = doctInfo + '	<a href="javascript:popup_dr_introduction(\''+o.drNo+'\');">상세정보</a>';
		doctInfo = doctInfo + '	<a href="javascript:getAjaxCal(\''+o.dpCode+'\',\''+o.drNo+'\',\''+o.dpNm+'\',\''+o.drNm+'\',\''+o.exmTp+'\',\'\');">진료선택</a>';
		doctInfo = doctInfo + '</div>';
		doctInfo = doctInfo + '</div></li>';
		
	}
	
	$('#doct_sel_list').html(doctInfo);
	$('#active_layer2').hide();
	$('#active_layer3').show();
	var f = document.cal_form;		
	//f.year.value = "2018";
	//f.month.value = "11";
	//alert(f.month.value);
	getCalendar(f.year.value,f.month.value,'');
    /*if (!y) y=""; 
    if (!m) m=""; 
    if (!date) date=""; 

   	var f = document.cal_form;
	f.rsrv_type.value = document.getElementById("rsrv_type").value;
	f.year.value = y;
	f.month.value = m;
	f.action = "/reserveSC/reserveCal.do";
	f.target = "hd_frm";
	f.submit();
 	getAjaxCal('AAOL','0000','이비인후과','000','G','');*/
	
	if($("#rsrv_reserve_info").val()!="rsrv_reserve_info" && $("#rsrv_reserve_info").val()!="||||||||||" && $("#rsrv_reserve_info").val()){
 		var rsrvReserveInfo = $("#rsrv_reserve_info").val();
 		var rsrvReserveInfoArr = rsrvReserveInfo.split("||");
 		//reserveInfoSum = dpCode+"||"+dpNm+"||"+drNo+"||"+drNm+"||"+rsrvDt+"||"+rsrvTm;
 		setTimeout("getAjaxCal('"+rsrvReserveInfoArr[0]+"','"+rsrvReserveInfoArr[2]+"','"+rsrvReserveInfoArr[1]+"','"+rsrvReserveInfoArr[3]+"','G','"+rsrvReserveInfoArr[4].substr(0,6)+"')",500);
 	}
	
	//getAjaxCal('AAOL','0000','이비인후과','000','G','');

}
function getAjaxCal(dpCode,drNo,dpNm,drNm,exmTp,selDt){
	var f2 = document.rsrvType1;
	//var selDt = "";
	/*var f = document.cal_form;
	var m = f.month.value;
	m = parseInt(m)+1;
	if(m<10){
		m = "0"+m;
	}
	selDt = "";//f.year.value + m;*/
//alert();
	f2.dpCode.value = dpCode;
	f2.drNo.value = drNo;
	f2.drNm.value = drNm;
	f2.dpNm.value = dpNm;
	f2.exmTp.value = exmTp;
	arr_cal_day = "";
	arr_cal_gbn = "";
	arr_cal_tm = "";
	arr_cal_len = "";
	document.getElementById("rsrv_dpnm").innerHTML = "";
	document.getElementById("rsrv_dpnm_").innerHTML = "";
	document.getElementById("rsrv_drnm").innerHTML = "";
	document.getElementById("rsrv_drnm_").innerHTML = "";
	document.getElementById("rsrv_ymd").innerHTML = "";
    document.getElementById("rsrv_tm").innerHTML = "";
  	document.getElementById("rsrv_ymd_").innerHTML = "";
    document.getElementById("rsrv_tm_").innerHTML = "";
	
	var hpCd = f2.hpCd.value;	
	pcnAjax.run("/reserveSC/dateTime.do", "POST", "hpCd="+hpCd+"&dpCode="+dpCode+"&drNo="+drNo+"&selDt="+selDt, "handlerCalendar");
	
}
var arr_cal_day = "";
var arr_cal_gbn = "";
var arr_cal_tm = "";
var arr_cal_len = "";
var month_lday = "";
function handlerCalendar(req,xml,txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var selDt = json['selDt']+"";
	//var selDt_y = "2018";
	//var selDt_m = "11";
	var selDt_y = selDt.substr(0,4);
	var selDt_m = selDt.substr(4,2);
	//selDt_m = parseInt(selDt_m);
	selDt_m = selDt_m-1;
	var fc = document.cal_form;		
	fc.year.value = selDt_y;
	fc.month.value = selDt_m;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	
	var dayList = json['dayList'];
	var f = document.cal_form;
	var tday = f.lday.value;
	month_lday = f.lday.value;	
	arr_cal_day = new Array(dayList.length);
	arr_cal_gbn = new Array(dayList.length);
	arr_cal_tm = new Array(dayList.length);
	arr_cal_len = dayList.length;
	var f2 = document.rsrvType1;
	for(var j=0; j<dayList.length; j++){
		var o = dayList[j];
		arr_cal_day[j] = "";
		arr_cal_gbn[j] = "";
		arr_cal_tm[j] = "";
	}
	for(var i=1;i<=tday;i++){
		document.getElementById("cal_day"+i).style.background = "#ffffff";
	}
	
	document.getElementById("rsrv_cal1").style.display = "";
	document.getElementById("rsrv_cal2").style.display = "none";
	document.getElementById("rsrv_dpnm").innerHTML = f2.dpNm.value + "<a href=\"/introduction/grandTour.do?dpCode="+f2.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	document.getElementById("rsrv_dpnm_").innerHTML = f2.dpNm.value + "<a href=\"/introduction/grandTour.do?dpCode="+f2.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	if(f2.exmTp.value=="S____"){	
		if(document.getElementById("tmp_list_num3").value!=f2.drNo.value){
			$("#bgLayer").show();
			document.getElementById("drNm_pop").innerHTML = f2.drNm.value;
			if(document.rsrvType1.hpCd.value=="AA"){
				document.getElementById("popup_hp_tel").innerHTML = "1577-0083";
			}else if(document.rsrvType1.hpCd.value=="GR"){
				document.getElementById("popup_hp_tel").innerHTML = "1577-9966";
			}else if(document.rsrvType1.hpCd.value=="AS"){
				document.getElementById("popup_hp_tel").innerHTML = "1577-7516";
			}
			$("#popupConfirm6").show();
		}else{
			document.getElementById("rsrv_drnm").innerHTML = f2.drNm.value //+ "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
			document.getElementById("rsrv_drnm_").innerHTML = f2.drNm.value //+ "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
		}
		
	}else{
		document.getElementById("tmp_list_num3").value = f2.drNo.value;
		document.getElementById("rsrv_drnm").innerHTML = f2.drNm.value;
		document.getElementById("rsrv_drnm_").innerHTML = f2.drNm.value;
	}
	
	if(dayList.length<=0){
		if(document.rsrvType1.exmTp.value!="S"){
			$("#popupConfirm9").show();
			$("#bgLayer").show();
		}
		document.getElementById("cal_tmp1").value = "0";
	}else{
		document.getElementById("cal_tmp1").value = "";
	}
	for(var j=0; j<dayList.length; j++){
		var o = dayList[j];
		arr_cal_day[j] = o.day;
		arr_cal_gbn[j] = o.gbn;		
		arr_cal_tm[j] = o.tm;
	}	
	
	var param = {
			rsrv_type: document.getElementById("rsrv_type").value,
			year: fc.year.value,
			month: fc.month.value
	};

	setTimeout("handlerCalendar_()",500);
 	$('#active_layer3').hide();
	
}
function handlerCalendar_(){
	for(var i=1;i<=parseInt(month_lday)+1;i++){
		for(var j=0; j<arr_cal_len; j++){
			
			if(i==arr_cal_day[j]){
				if(arr_cal_gbn[j]=="A"){
					//document.getElementById("cal_day"+i).style.background = "#f1b123";
					document.getElementById("cal_day"+i).style.backgroundImage = "url(/images/reservation/bg_cal_date2.png)";
					document.getElementById("cal_day_detail"+i).style.color = "#fff";
				}else if(arr_cal_gbn[j]=="P"){
					//document.getElementById("cal_day"+i).style.background = "#47b9e7";
					document.getElementById("cal_day"+i).style.backgroundImage = "url(/images/reservation/bg_cal_date3.png)";
					document.getElementById("cal_day_detail"+i).style.color = "#fff";
				}else if(arr_cal_gbn[j]=="F"){
					//document.getElementById("cal_day"+i).style.background = "#d41b7c";
					document.getElementById("cal_day"+i).style.backgroundImage = "url(/images/reservation/bg_cal_date1.png)";
					document.getElementById("cal_day_detail"+i).style.color = "#fff";
				}
			}
		}
		
	}
	if($("#rsrv_reserve_info").val()!="rsrv_reserve_info" && $("#rsrv_reserve_info").val()!="||||||||||" && $("#rsrv_reserve_info").val()){
 		var rsrvReserveInfo = $("#rsrv_reserve_info").val();
 		var rsrvReserveInfoArr = rsrvReserveInfo.split("||");
 		//reserveInfoSum = dpCode+"||"+dpNm+"||"+drNo+"||"+drNm+"||"+rsrvDt+"||"+rsrvTm;
 		sel_cal(parseInt(rsrvReserveInfoArr[4].substr(6,2)));
 		$("#rsrv_reserve_info").val("");
 	}
}

function sel_cal2(){
	document.getElementById("rsrv_cal1").style.display = "";
	document.getElementById("rsrv_cal2").style.display = "none";
}
function td_txt_hover(type,num){
	if(document.getElementById("rsrv_type").value=="G"){
		if(type=="over"){		
			document.getElementById("td_txt"+num).style.background = "#e9e9e9";
			document.getElementById("td_txt"+num+"_a").style.color = "#a41d45";
			document.getElementById("td_txt"+num+"_a").style.fontWeight = "bold";
		}else{
			document.getElementById("td_txt"+num).style.background = "#ffffff";
			document.getElementById("td_txt"+num+"_a").style.color = "#6c6c6c";
			document.getElementById("td_txt"+num+"_a").style.fontWeight = "normal";
		}
	}else{
		if(type=="over"){		
			document.getElementById("td2_txt"+num).style.background = "#e9e9e9";
			document.getElementById("td2_txt"+num+"_a").style.color = "#a41d45";
			document.getElementById("td2_txt"+num+"_a").style.fontWeight = "bold";
		}else{
			document.getElementById("td2_txt"+num).style.background = "#ffffff";
			document.getElementById("td2_txt"+num+"_a").style.color = "#6c6c6c";
			document.getElementById("td2_txt"+num+"_a").style.fontWeight = "normal";
		}
	}	
}
function li_txt_hover(type,num){
	if(document.getElementById("rsrv_type").value=="G"){
		if(type=="over"){
			document.getElementById("li_txt"+num).style.background = "#fff";
			document.getElementById("li_txt"+num+"_a").style.color = "#a41d45";
			document.getElementById("li_txt"+num+"_a").style.fontWeight = "400";
		}else{
			document.getElementById("li_txt"+num).style.background = "#ffffff";
			document.getElementById("li_txt"+num+"_a").style.color = "#555";
			document.getElementById("li_txt"+num+"_a").style.fontWeight = "300";
		}
	}else{
		if(type=="over"){
			document.getElementById("li2_txt"+num).style.background = "#fff";
			document.getElementById("li2_txt"+num+"_a").style.color = "#a41d45";
			document.getElementById("li2_txt"+num+"_a").style.fontWeight = "400";
		}else{
			document.getElementById("li2_txt"+num).style.background = "#ffffff";
			document.getElementById("li2_txt"+num+"_a").style.color = "#555";
			document.getElementById("li2_txt"+num+"_a").style.fontWeight = "300";
		}
	}
}

function sel_cal(d){
	//alert(d+" / "+arr_cal_len);
	if(document.getElementById("cal_day"+d).style.backgroundImage==""){
		return;
	}
	if(arr_cal_len<=0){
		return;
	}
	var arr_tm = "";
	var str_html_am = "";
	var str_html_pm = "";
	var tmp_num = 1;
	var f = document.cal_form;
	var tmp_m = parseInt(f.month.value)+1;
	var tmp_d = d;
	document.getElementById("rsrv_ymd").innerHTML = f.year.value + "년 " + tmp_m + "월" + d + "일";
	document.getElementById("rsrv_ymd_").innerHTML = f.year.value + "년 " + tmp_m + "월" + d + "일";
	
	if(tmp_m<10){
		tmp_m = "0"+tmp_m;
	}
	if(tmp_d<10){
		tmp_d = "0"+tmp_d;
	}
	document.rsrvType1.rsrvDt.value = f.year.value + tmp_m + tmp_d;
	for(var i=0;i<arr_cal_len;i++){		
		if(arr_cal_day[i]==tmp_d){
			document.getElementById("rsrv_cal1").style.display = "none";
			document.getElementById("rsrv_cal2").style.display = "";
			//alert(arr_cal_gbn[i]+" / "+arr_cal_tm[i]);
			arr_tm = arr_cal_tm[i].split("|");
			
			str_html_am = "<ul class=\"triple\"> ";
			str_html_pm = "<ul class=\"triple\"> ";			
			for(var j=0;j<arr_tm.length;j++){				
				if(chk_tm_gbn(arr_tm[j])=="오전"){					
					str_html_am += "<li class=\"triple_li\" id=\"li_txt"+j+"\" onmouseover=li_txt_hover(\"over\",\""+j+"\"); onmouseout=li_txt_hover(\"out\",\""+j+"\");><a href=javascript:sel_time(\""+arr_tm[j]+"\"); id=\"li_txt"+j+"_a\">"+arr_tm[j]+"</a></li>";
				}else if(chk_tm_gbn(arr_tm[j])=="오후"){
					str_html_pm += "<li class=\"triple_li\" id=\"li_txt"+j+"\" onmouseover=li_txt_hover(\"over\",\""+j+"\"); onmouseout=li_txt_hover(\"out\",\""+j+"\");><a href=javascript:sel_time(\""+arr_tm[j]+"\"); id=\"li_txt"+j+"_a\">"+arr_tm[j]+"</a></li>";
				}
			}
			str_html_am += "</ul>";
			str_html_pm += "</ul>";
			
			if(arr_cal_gbn[i]=="A"){				
				$('#cal_t1').html(str_html_am);
				$('#cal_t2').html(str_html_pm);
				document.getElementById("li_t1").style.display = "";
				document.getElementById("li_t2").style.display = "none";
				document.getElementById("li_t3").style.width = "75%";
				tabChg('tab04',1);
			}else if(arr_cal_gbn[i]=="P"){
				$('#cal_t1').html(str_html_am);
				$('#cal_t2').html(str_html_pm);
				document.getElementById("li_t1").style.display = "none";
				document.getElementById("li_t2").style.display = "";
				document.getElementById("li_t3").style.width = "75%";
				tabChg('tab04',2);
			}else if(arr_cal_gbn[i]=="F"){
				$('#cal_t1').html(str_html_am);
				$('#cal_t2').html(str_html_pm);
				document.getElementById("li_t1").style.display = "";
				document.getElementById("li_t2").style.display = "";
				document.getElementById("li_t3").style.width = "55%";
				tabChg('tab04',1);
				//document.getElementById("cal_tm").innerHTML = str_html;
				//document.getElementById("rsrv_cal2").innerHTML = str_html;
			}			
		}
	}
	
 	if($("#rsrv_reserve_info").val()!="rsrv_reserve_info" && $("#rsrv_reserve_info").val()){
 		var rsrvReserveInfo = $("#rsrv_reserve_info").val();
 		var rsrvReserveInfoArr = rsrvReserveInfo.split("||");
 		//reserveInfoSum = dpCode+"||"+dpNm+"||"+drNo+"||"+drNm+"||"+rsrvDt+"||"+rsrvTm;
 		sel_time(rsrvReserveInfoArr[5]);
 	}
}
//증상별 예약 
function sexual(type){
	var f = document.rsrvType2;
	if(type=="A"){
		document.getElementById("serv23").style.display = "none";
		document.getElementById("serv24").style.display = "";
	}else{
		if(type=="M"){
			//document.getElementById("sexual_m").src = "/reservation/reserv_script/images/layer/btn_male_on.gif";
			//document.getElementById("sexual_f").src = "/reservation/reserv_script/images/layer/btn_female_off.gif";
		}else if(type=="F"){
			//document.getElementById("sexual_m").src = "/reservation/reserv_script/images/layer/btn_male_off.gif";
			//document.getElementById("sexual_f").src = "/reservation/reserv_script/images/layer/btn_female_on.gif";
		}
		f.sex.value = type;
		document.getElementById("serv23").style.display = "";
		document.getElementById("serv24").style.display = "none";
	}
}
function body_sel(body_id){
	var f = document.search_form4;
	f.bodyCode.value = body_id;
	f.sv.value = "";
	document.getElementById("sympt_search").value = "증상을 입력하세요.";
	
	arr_cal_day2 = "";
	arr_cal_gbn2 = "";
	arr_cal_tm2 = "";
	arr_cal_len2 = "";
	document.rsrvType2.dpCode.value = "";
	document.rsrvType2.dpNm.value = "";
	document.rsrvType2.drNo.value = "";
	document.rsrvType2.drNm.value = "";
	document.rsrvType2.dsCode.value = "";
	document.rsrvType2.rsrvDt.value = "";
	document.rsrvType2.rsrvTm.value = "";
	$('#doct_sel_list2').html("");
	document.getElementById("rsrv_dpnm2").innerHTML = "";
	document.getElementById("rsrv_dpnm2_").innerHTML = "";
	document.getElementById("rsrv_drnm2").innerHTML = "";
	document.getElementById("rsrv_drnm2_").innerHTML = "";
	document.getElementById("rsrv_ymd2").innerHTML = "";
    document.getElementById("rsrv_tm2").innerHTML = "";
  	document.getElementById("rsrv_ymd2_").innerHTML = "";
    document.getElementById("rsrv_tm2_").innerHTML = "";
	var fc = document.cal_form;		
	fc.year.value = document.getElementById("standard_date1").value;
	fc.month.value = document.getElementById("standard_date2").value;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str2").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	document.getElementById("rsrv_cal3").style.display = "";
	document.getElementById("rsrv_cal4").style.display = "none";
	
	
	getAjaxSymptom(body_id);
	
}
function getAjaxSymptom(bodyCode){
	var f = document.rsrvType2;
	if(f.sex.value!=""){
		alert("성별을 선택해 주셔야 합니다.");
		return;
	}
	var f2 = document.search_form4;
	var sv = f2.sv.value;
	pcnAjax.run("/reserveSC/symptomList.do", "POST", "hpCd="+f.hpCd.value+"&bodyCode="+bodyCode+"&sex="+f.sex.value+"&sv="+encodeURIComponent(encodeURIComponent(sv)), "handlerSymptom");
}
function handlerSymptom(req,xml,txt){
	//alert(txt);
	//$('#sympt_list').html(txt);
	//return;
	txt = txt.replace(/\n/g, "");//행바꿈제거
	txt = txt.replace(/\r/g, "");//엔터제거
	var json = eval("("+txt+")");
	var dataList = json['dataList'];
	var str_html = "";
	var tmp_dsCode = 0;
	var tmp_num = 1;
	//str_html += "<ul id=\"faq-list\" class=\"plus-list\">";
	if(dataList.length<=0){
		str_html = "<li class=\"first\">해당 증상이 없습니다.</li>";
		$('#faq-list').html(str_html);
	}else{
		for(var i=0; i<dataList.length; i++){
			var o = dataList[i];
			if(tmp_dsCode!=o.dsCode && i>0){
				str_html += "			</dl> ";
				str_html += "		</div> ";
				str_html += "	</div> ";
				str_html += "</li>";
			}
			if(tmp_dsCode!=o.dsCode){
				if(i==0){
					str_html += "<li class=\"first\"> ";
				}else{
					str_html += "<li> ";
				}
				str_html += "	<div class=\"plus-tit\">";
				str_html += "	<a href=\"#\">"+o.dsNm+"</a> ";
				str_html += "	</div> ";
				str_html += "	<div class=\"faq-a plus-cont\" style=\"display:none;\" id=\"li_faq"+tmp_num+"\"> ";
				str_html += "		<div class=\"conts2\"> ";
				str_html += "			<dl class=\"\">";
				str_html += "				<dt class=\"hidden\"></dt> ";
				
				tmp_num++;
			}	
				str_html += "				<dd><a href=\"javascript:getAjaxDoctList2('"+o.smtNo+"');\">- "+o.smtDesc+"</a></dd> ";
				
			tmp_dsCode = o.dsCode;
			
		}
		str_html += "			</dl> ";
		str_html += "		</div> ";
		str_html += "	</div> ";
		str_html += "</li>";
		//str_html += "</ul>";
		document.getElementById("sympt_num").value = tmp_num;
		//$('#sympt_list').html(str_html);
		$('#faq-list').html(str_html);
		openClose();
	}
	$('#active_layer4').hide();
	$('#active_layer5').show();
	$('#active_layer6').show();
	
}
function symptom_all(type){
	var sn = document.getElementById("sympt_num").value;
	if(type=="open"){
		for(var i=1;i<sn;i++){
			document.getElementById("li_faq"+i).style.display = "block";
		}
	}else{
		for(var i=1;i<sn;i++){
			document.getElementById("li_faq"+i).style.display = "none";
		}
	}
}
function getAjaxDoctList2(smtNo){
	var f = document.search_form5;
	var hpCd = f.hpCd.value; 
	var dpCode = "";
	var dsCode = "";
	f.smtNo.value = smtNo;
	var drNo = "";
	var sv = f.sv.value;
	if(sv=="담당의사를 입력하세요."){
		sv="";
	}
	document.rsrvType2.dsCode.value = dsCode;
	document.rsrvType2.dpCode.value = "";
	document.rsrvType2.dpNm.value = "";
	document.rsrvType2.drNo.value = "";
	document.rsrvType2.drNm.value = "";
	document.rsrvType2.rsrvDt.value = "";
	document.rsrvType2.rsrvTm.value = "";
	document.getElementById("rsrv_dpnm2").innerHTML = "";
	document.getElementById("rsrv_dpnm2_").innerHTML = "";
	document.getElementById("rsrv_drnm2").innerHTML = "";
	document.getElementById("rsrv_drnm2_").innerHTML = "";
	document.getElementById("rsrv_ymd2").innerHTML = "";
    document.getElementById("rsrv_tm2").innerHTML = "";
  	document.getElementById("rsrv_ymd2_").innerHTML = "";
    document.getElementById("rsrv_tm2_").innerHTML = "";
    var fc = document.cal_form;		
	fc.year.value = document.getElementById("standard_date1").value;
	fc.month.value = document.getElementById("standard_date2").value;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str2").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	document.getElementById("rsrv_cal3").style.display = "";
	document.getElementById("rsrv_cal4").style.display = "none";
	
	
	pcnAjax.run("/reserveSC/doctorList.do", "POST", "hpCd="+hpCd+"&dpCode="+dpCode+"&drNo="+drNo+"&dsCode="+dsCode+"&smtNo="+smtNo+"&sv="+encodeURIComponent(encodeURIComponent(sv)), "handlerDoctList2");
}
function handlerDoctList2(req,xml,txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var doctList = json['doctList'];
	var doctInfo = "";
	
	if(doctList.length<=0){
		doctInfo = "<li>담당의사가 없습니다.</li>";
	}
	for(var i=0; i<doctList.length; i++){
		var o = doctList[i];
		doctInfo = doctInfo + '<li onmouseover="chk_doct(\''+i+'\',\'over\');" onmouseout="chk_doct(\''+i+'\',\'out\');" id="doctList'+i+'">';
		if(o.photo!=""){
			doctInfo = doctInfo + '<img alt="" src="'+o.photo+'" class="img_doctor" onerror="javascript:this.src=\'/reservation/reserv_script/images/layer/kumc_11.jpg\';"/>';
		}else{
			doctInfo = doctInfo + '<img alt="" src="/reservation/reserv_script/images/layer/kumc_11.jpg" class="img_doctor"/>';
		}
		doctInfo = doctInfo + '<div class="doctor_info2">';
		doctInfo = doctInfo + '<p class="txt_info01"><strong>'+o.drNm+'</strong> ';
		if(o.exmTp=="S"){
			//doctInfo = doctInfo + '(선택진료)';
		}
		doctInfo = doctInfo + '</p>';
		doctInfo = doctInfo + '<p class="txt_info02"><strong class="p-pink">진료과</strong><strong>'+o.dpNm+'&nbsp;</strong></p>';
		doctInfo = doctInfo + '<div style="overflow:hidden;width:160px;height:40px;"><p class="txt_info02"><strong class="p-pink">세부전공</strong><strong>';
		for(var j=0;j<o.dsList.length;j++){
			var o2 = o.dsList[j];
			doctInfo = doctInfo + o2.dsNm +",";
		}
		doctInfo = doctInfo + '</strong></p></div>';
		doctInfo = doctInfo + '<div class="btn_select">';
		doctInfo = doctInfo + '	<a href="javascript:popup_dr_introduction(\''+o.drNo+'\');"><img alt="상세정보" src="/reservation/reserv_script/images/layer/btn_info.gif" class=""/></a>';
		doctInfo = doctInfo + '	<a href="javascript:getAjaxCal2(\''+o.dpCode+'\',\''+o.drNo+'\',\''+o.dpNm+'\',\''+o.drNm+'\',\''+o.exmTp+'\',\'\');"><img alt="진료선택" src="/reservation/reserv_script/images/layer/btn_select.gif" class=""/></a>';
		doctInfo = doctInfo + '</div>';
		doctInfo = doctInfo + '</div></li>';
		
	}
	$('#doct_sel_list2').html(doctInfo);
	
	$('#active_layer5').hide();
	$('#active_layer6').show();
}
function getAjaxCal2(dpCode,drNo,dpNm,drNm,exmTp,selDt){
	var f2 = document.rsrvType2;
	f2.dpCode.value = dpCode;
	f2.drNo.value = drNo;
	f2.drNm.value = drNm;
	f2.dpNm.value = dpNm;
	f2.exmTp.value = exmTp;
	document.rsrvType2.rsrvDt.value = "";
	document.rsrvType2.rsrvTm.value = "";
	document.getElementById("rsrv_dpnm2").innerHTML = "";
	document.getElementById("rsrv_dpnm2_").innerHTML = "";
	document.getElementById("rsrv_drnm2").innerHTML = "";
	document.getElementById("rsrv_drnm2_").innerHTML = "";
	document.getElementById("rsrv_ymd2").innerHTML = "";
    document.getElementById("rsrv_tm2").innerHTML = "";
  	document.getElementById("rsrv_ymd2_").innerHTML = "";
    document.getElementById("rsrv_tm2_").innerHTML = "";
	var hpCd = f2.hpCd.value;
	document.getElementById("rsrv_dpnm2").innerHTML = dpNm+" <a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	document.getElementById("rsrv_dpnm2_").innerHTML = dpNm+" <a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	if(exmTp=="S"){
		document.getElementById("rsrv_drnm2").innerHTML = drNm//+"(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
		document.getElementById("rsrv_drnm2_").innerHTML = drNm//+"(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";		
	}else{
		document.getElementById("rsrv_drnm2").innerHTML = drNm;
		document.getElementById("rsrv_drnm2_").innerHTML = drNm;
	}
	
	pcnAjax.run("/reserveSC/dateTime.do", "POST", "hpCd="+hpCd+"&dpCode="+dpCode+"&drNo="+drNo+"&selDt="+selDt+"&", "handlerCalendar2");
	
}
var arr_cal_day2 = "";
var arr_cal_gbn2 = "";
var arr_cal_tm2 = "";
var arr_cal_len2 = "";
var month_lday2 = "";
function handlerCalendar2(req,xml,txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var selDt = json['selDt']+"";
	var selDt_y = selDt.substr(0,4);
	var selDt_m = selDt.substr(4,2);
	//selDt_m = parseInt(selDt_m);
	selDt_m = selDt_m-1;
	var fc = document.cal_form;		
	fc.year.value = selDt_y;
	fc.month.value = selDt_m;
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str2").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	
	var dayList = json['dayList'];
	var f = document.cal_form;
	var tday = f.lday.value;
	month_lday2 = f.lday.value;	
	arr_cal_day2 = new Array(dayList.length);
	arr_cal_gbn2 = new Array(dayList.length);
	arr_cal_tm2 = new Array(dayList.length);
	arr_cal_len2 = dayList.length;
	var f2 = document.rsrvType2;
	for(var j=0; j<dayList.length; j++){
		var o = dayList[j];
		arr_cal_day2[j] = "";
		arr_cal_gbn2[j] = "";
		arr_cal_tm2[j] = "";
	}
	for(var i=1;i<=tday;i++){
		document.getElementById("cal2_day"+i).style.background = "#ffffff";
	}
	
	document.getElementById("rsrv_cal3").style.display = "";
	document.getElementById("rsrv_cal4").style.display = "none";
	document.getElementById("rsrv_dpnm2").innerHTML = f2.dpNm.value + "<a href=\"/introduction/grandTour.do?dpCode="+f2.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	document.getElementById("rsrv_dpnm2_").innerHTML = f2.dpNm.value + "<a href=\"/introduction/grandTour.do?dpCode="+f2.dpCode.value+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
	if(f2.exmTp.value=="S_____"){
		if(document.getElementById("tmp_list_num3").value==""){
			$("#bgLayer").show();
			document.getElementById("drNm_pop").innerHTML = f2.drNm.value;					
			$("#popupConfirm6").show();
		}else{
			document.getElementById("rsrv_drnm").innerHTML = f2.drNm.value //+ "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
			document.getElementById("rsrv_drnm_").innerHTML = f2.drNm.value //+ "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
		}
		
	}else{
		document.getElementById("rsrv_drnm2").innerHTML = f2.drNm.value;
		document.getElementById("rsrv_drnm2_").innerHTML = f2.drNm.value;
	}
	if(dayList.length<=0){
		if(document.rsrvType2.exmTp.value!="S"){
			$("#popupConfirm9").show();
			$("#bgLayer").show();
		}
		document.getElementById("cal_tmp1").value = "0";
	}else{
		document.getElementById("cal_tmp1").value = "";
	}
	for(var j=0; j<dayList.length; j++){
		var o = dayList[j];
		arr_cal_day2[j] = o.day;
		arr_cal_gbn2[j] = o.gbn;
		arr_cal_tm2[j] = o.tm;
	}
	
	setTimeout("handlerCalendar2_()",500);
	
	$('#active_layer6').hide();
	
}
function handlerCalendar2_(){
	for(var i=1;i<=month_lday2;i++){
		for(var j=0; j<arr_cal_len2; j++){			
			if(i==arr_cal_day2[j]){
				if(arr_cal_gbn2[j]=="A"){
					//document.getElementById("cal2_day"+i).style.background = "#f1b123";
					document.getElementById("cal2_day"+i).style.backgroundImage = "url(/images/reservation/bg_date2.png)";
				}else if(arr_cal_gbn2[j]=="P"){
					//document.getElementById("cal2_day"+i).style.background = "#47b9e7";
					document.getElementById("cal2_day"+i).style.backgroundImage = "url(/images/reservation/bg_date3.png)";
				}else if(arr_cal_gbn2[j]=="F"){
					//document.getElementById("cal2_day"+i).style.background = "#d41b7c";
					document.getElementById("cal2_day"+i).style.backgroundImage = "url(/images/reservation/bg_date1.png)";
				}
			}
		}
		
	}
}
function sel_cal3(d){
	//alert(d+" / "+arr_cal_len);
	if(document.getElementById("cal2_day"+d).style.backgroundImage==""){
		return;
	}
	if(arr_cal_len2<=0){
		return;
	}
	var arr_tm = "";
	var str_html_am = "";
	var str_html_pm = "";
	var tmp_num = 1;
	var f = document.cal_form;
	var tmp_month = parseInt(f.month.value) + 1;
	var tmp_d = d;
	document.getElementById("rsrv_ymd2").innerHTML = f.year.value + "년 " + tmp_month + "월" + d + "일";
	document.getElementById("rsrv_ymd2_").innerHTML = f.year.value + "년 " + tmp_month + "월" + d + "일";
	if(tmp_month<10){
		tmp_month = "0"+tmp_month;
	}
	if(tmp_d<10){
		tmp_d = "0"+tmp_d;
	}
	document.rsrvType2.rsrvDt.value = f.year.value + tmp_month + tmp_d;
	for(var i=0;i<arr_cal_len2;i++){
		if(arr_cal_day2[i]==tmp_d){			
			document.getElementById("rsrv_cal3").style.display = "none";
			document.getElementById("rsrv_cal4").style.display = "";
			//alert(arr_cal_gbn[i]+" / "+arr_cal_tm[i]);
			arr_tm = arr_cal_tm2[i].split("|");
			
			str_html_am = "<ul class=\"triple\" style=\"margin-top:10px;\"> ";
			str_html_pm = "<ul class=\"triple\" style=\"margin-top:10px;\"> ";
			for(var j=0;j<arr_tm.length;j++){				
				if(chk_tm_gbn(arr_tm[j])=="오전"){
					str_html_am += "<li class=\"triple_li\" id=\"li2_txt"+j+"\" onmouseover=li_txt_hover(\"over\",\""+j+"\"); onmouseout=li_txt_hover(\"out\",\""+j+"\");><a href=javascript:sel_time(\""+arr_tm[j]+"\"); id=\"li2_txt"+j+"_a\">"+arr_tm[j]+"</a></li>";
				}else if(chk_tm_gbn(arr_tm[j])=="오후"){
					str_html_pm += "<li class=\"triple_li\" id=\"li2_txt"+j+"\" onmouseover=li_txt_hover(\"over\",\""+j+"\"); onmouseout=li_txt_hover(\"out\",\""+j+"\");><a href=javascript:sel_time(\""+arr_tm[j]+"\"); id=\"li2_txt"+j+"_a\">"+arr_tm[j]+"</a></li>";
				}
			}
			str_html_am += "</ul>";
			str_html_pm += "</ul>";
			
			
			if(arr_cal_gbn2[i]=="A"){
				$('#cal_t4').html(str_html_am);
				$('#cal_t5').html(str_html_pm);
				document.getElementById("li_t4").style.display = "";
				document.getElementById("li_t5").style.display = "none";
				document.getElementById("li_t6").style.width = "80%";
				tabChg('tab05',1);
				
			}else if(arr_cal_gbn2[i]=="P"){
				$('#cal_t4').html(str_html_am);
				$('#cal_t5').html(str_html_pm);
				document.getElementById("li_t4").style.display = "none";
				document.getElementById("li_t5").style.display = "";
				document.getElementById("li_t6").style.width = "80%";
				tabChg('tab05',2);				
			}else if(arr_cal_gbn2[i]=="F"){
				$('#cal_t4').html(str_html_am);
				$('#cal_t5').html(str_html_pm);
				document.getElementById("li_t4").style.display = "";
				document.getElementById("li_t5").style.display = "";
				document.getElementById("li_t6").style.width = "60%";
			}
			
		}
	}
	
}
function sel_cal4(){
	document.getElementById("rsrv_cal3").style.display = "";
	document.getElementById("rsrv_cal4").style.display = "none";
}

//의사 상세정보 팝업창 
function popup_dr_introduction(dr_no){
	window.open("/popup/popDoctorInfo.do?DR_NO="+dr_no,"kumc_popup","width=700,height=600,scrollbars=yes");
}
function chk_dept(num){
	var tmp_list_num = document.getElementById("tmp_list_num").value;
	if(tmp_list_num!=""){
		document.getElementById("dpList"+tmp_list_num).style.background = "#ffffff";
		document.getElementById("dpList"+tmp_list_num+"_a").style.color = "#6c6c6c";
		document.getElementById("dpList"+tmp_list_num+"_a").style.fontWeight = "300";
	}
	document.getElementById("tmp_list_num").value = num;
	document.getElementById("dpList"+num).style.background = "#f1f1f1";
	document.getElementById("dpList"+num).style.borderRadius = "15px";
	document.getElementById("dpList"+num+"_a").style.color = "#a41d45";
	document.getElementById("dpList"+num+"_a").style.fontWeight = "500";
	
}
function dsli(num,type,ds){
	if(type=="over" || type=="sel"){
		//document.getElementById("dsList"+num).style.background = "#e9e9e9";
		document.getElementById("dsList"+num+"_a").style.color = "#a41d45";
		document.getElementById("dsList"+num+"_a").style.fontWeight = "500";
	}else if(type=="out" && document.rsrvType1.dsCode.value!=ds){
		//document.getElementById("dsList"+num).style.background = "#ffffff";
		document.getElementById("dsList"+num+"_a").style.color = "#6c6c6c";
		document.getElementById("dsList"+num+"_a").style.fontWeight = "300";
	}
}
function chk_disease(num){
	var tmp_list_num = document.getElementById("tmp_list_num2").value;
	if(tmp_list_num!=""){
		document.getElementById("dsList"+tmp_list_num).style.background = "#ffffff";
		document.getElementById("dsList"+tmp_list_num+"_a").style.color = "#6c6c6c";
		document.getElementById("dsList"+tmp_list_num+"_a").style.fontWeight = "300";
	}
	document.getElementById("tmp_list_num2").value = num;
	document.getElementById("dsList"+num).style.background = "#f1f1f1";
	document.getElementById("dsList"+num).style.borderRadius = "15px";
	document.getElementById("dsList"+num+"_a").style.color = "#a41d45";
	document.getElementById("dsList"+num+"_a").style.fontWeight = "500";
}
function chk_doct(num,type){
	if(type=="over"){
		document.getElementById("doctList"+num).style.background = "#f8f8f8";
	}else{
		document.getElementById("doctList"+num).style.background = "#fff";
	}
}
function cal_sel(obj,type){
	return
	if(type=="over"){
		obj.style.border = "1px solid #aa0000";
	}else{
		obj.style.border = "none";
	}
}


//최근 예약정보 불러오기 
function recently_reserv_pre(){
	$("#bgLayer").show();
	$("#popupConfirm11").show();
}
function recently_reserv(){
	var f = "";
	var hpCd = "";
	var patNo = "";
	var type = document.getElementById("rsrv_type").value;
	if(type=="G"){
		f = document.rsrvType1;
		hpCd = f.hpCd.value;
		patNo = f.patNo.value;
	}else{
		f = document.rsrvType2;
		hpCd = f.hpCd.value;
		patNo = f.patNo.value;
	}
	pcnAjax.run("/reserveSC/recentReserveInfo.do", "POST", "hpCd="+hpCd+"&patNo="+patNo, "handlerRecentReserveInfo");
}
function handlerRecentReserveInfo(req, xml, txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var dpCode = json['dpCode'];
	var drNo = json['drNo'];
	var rsrvDt = json['rsrvDt'];
	var rsrvTm = json['rsrvTm'];
	var patNo = json['patNo'];
	var patNm = json['patNm'];
	var drNm = json['drNm'];
	var drNm_sub = "";
	var dpNm = json['dpNm'];
	var tel = json['tel'];
	var arr_tel = tel.split("-");
	var ssn = json['ssn'];
	var jnum1 = json['jumin1'];
	var jnum2 = json['jumin2'];
	var hpCd = json['hpCd'];
	var hpNm = "";
	if(hpCd=="AA"){
		hpNm = "직산병원 <a href=\"http://anam.kumc.or.kr/introduction/trafficCar.do\" class=\"btn_location\" target=\"_blank\"><img src=\"/jiksan/resources/reservation/btn_location.gif\" alt=\"위치보기\"/></a>";
	}
	var proxyid = json['proxyid'];
	var proxynm = json['proxynm'];
	var proxyrlt = json['proxyrlt'];	
	var resCode = json['resCode'];
	var exmTp = json['exmTp'];
	var f = "";
	var tm_am_pm = "";
	if(resCode=="I"){
		document.getElementById("recently_data").value = "T";		
		sel_time(rsrvTm);
		//alert(exmTp+" / "+dpCode+" / "+drNo+" / "+rsrvDt+" / "+rsrvTm+" / "+patNo+" / "+patNm+" / "+drNm+" / "+dpNm+" / "+tel+" / "+ssn+" / "+jnum1+" / "+jnum2+" / "+hpCd+" / "+proxyid+" / "+proxynm+" / "+proxyrlt);
		//return;
		
		if(exmTp=="S"){
			//drNm_sub = "(선택진료) <a href=\"/guide/faqView.do?bno=153&cPage=1&HP_CD=AS&board_id=B019\" target=\"_blank\"><strong class=\"p-red\">[?]</strong></a>";
		}
		
		document.search_form1.hpCd.value = hpCd;
		document.search_form1.dsCode.value = "";
		document.search_form1.dpCode.value = dpCode;
		document.search_form2.dpCode.value = dpCode;
		document.search_form2.drNo.value = drNo;
		document.search_form2.dsCode.value = "";
		document.search_form3.hpCd.value = hpCd;
		document.search_form3.dpCode.value = dpCode;
		document.search_form3.dsCode.value = "";
		document.search_form3.drNo.value = drNo;
		document.search_form3.smtNo.value = "";
		document.search_form4.hpCd.value = hpCd;
		document.search_form4.bodyCode.value = "";
		document.search_form4.sex.value = "";
		document.search_form4.sv.value = "";
		document.search_form5.hpCd.value = hpCd;
		document.search_form5.dpCode.value = dpCode;
		document.search_form5.dsCode.value = "";
		document.search_form5.drNo.value = drNo;
		document.search_form5.smtNo.value = "";
		document.search_form5.sv.value = "";		
		getAjaxDeptList(document.search_form1.hpCd.value,dpNm,document.search_form1.dpCode.value,'');
		getAjaxDsList(document.search_form2.dpCode.value,document.search_form2.drNo.value,'','',dpNm);
		getAjaxDoctList('');
		
		f = document.rsrvType1;	
		f.mode.value = "U";
		f.dpCode.value = dpCode;
		f.drNo.value = drNo;
		f.rsrvDt.value = rsrvDt;
		f.rsrvTm.value = rsrvTm;
		f.patNo.value = patNo;
		f.patNm.value = patNm;
		f.drNm.value = drNm;
		f.dpNm.value = dpNm;
		f.tel.value = tel;
		f.ssn.value = ssn;
		f.RESNO1.value = jnum1;
		f.RESNO2.value = jnum2;
		f.hpCd.value = hpCd;
		f.proxyid.value = proxyid;
		f.proxynm.value = proxynm;
		f.proxyrlt.value = proxyrlt;
		f.oldDpCode.value = dpCode;
		f.oldDrNo.value = drNo;
		f.oldExmTp.value = exmTp;
		f.oldRsrvDt.value = rsrvDt;
		f.oldRsrvTm.value = rsrvTm;
		tm_am_pm = chk_tm_gbn(rsrvTm);
		document.getElementById("pat_nm").innerHTML = patNm;
		document.getElementById("jumin_n1").innerHTML = jnum1;
		document.getElementById("rsrv_utel1").value = arr_tel[0];
		document.getElementById("rsrv_utel2").value = arr_tel[1];
		document.getElementById("rsrv_utel3").value = arr_tel[2];
		document.getElementById("rsrv_hnm").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm").innerHTML = dpNm+"<a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm").innerHTML = drNm+drNm_sub;
		document.getElementById("rsrv_ymd").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm").innerHTML = tm_am_pm+rsrvTm;
		document.getElementById("pat_nm_").value = patNm;
		document.getElementById("jumin_n1_").value = jnum1;
		document.getElementById("jumin_n2_").value = jnum2;
		document.getElementById("pat_relation").value = proxyrlt;
		document.getElementById("tel_num1").value = arr_tel[0];
		document.getElementById("tel_num2").value = arr_tel[1];
		document.getElementById("tel_num3").value = arr_tel[2];
		document.getElementById("rsrv_hnm_").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm_").innerHTML = dpNm+"<a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm_").innerHTML = drNm+drNm_sub;
		document.getElementById("rsrv_ymd_").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm_").innerHTML = tm_am_pm+rsrvTm;
		
		if(proxynm==""){
			//document.getElementById("agRsrvYn_y").style.display = "none";
			tabChg('tab03',1);
			agRsrvYn_ch('1');
			document.getElementById("rsrv_btn1").src = "/reservation/reserv_script/images/layer/btn_reserve_save.gif";
		}else{
			document.getElementById("agRsrvYn_n").style.display = "none";
			tabChg('tab03',2);
			agRsrvYn_ch('2');
			document.getElementById("rsrv_btn2").src = "/reservation/reserv_script/images/layer/btn_reserve_save.gif";
		}
		
		
		f2 = document.rsrvType2;
		f2.mode.value = "U";
		f2.dpCode.value = dpCode;
		f2.drNo.value = drNo;
		f2.rsrvDt.value = rsrvDt;
		f2.rsrvTm.value = rsrvTm;
		f2.patNo.value = patNo;
		f2.patNm.value = patNm;
		f2.drNm.value = drNm;
		f2.dpNm.value = dpNm;
		f2.tel.value = tel;
		f2.ssn.value = ssn;
		f2.RESNO1.value = jnum1;
		f2.RESNO2.value = jnum2;
		f2.hpCd.value = hpCd;
		f2.proxyid.value = proxyid;
		f2.proxynm.value = proxynm;
		f2.proxyrlt.value = proxyrlt;
		f2.oldDpCode.value = dpCode;
		f2.oldDrNo.value = drNo;
		f2.oldExmTp.value = exmTp;
		f2.oldRsrvDt.value = rsrvDt;
		f2.oldRsrvTm.value = rsrvTm;
		document.getElementById("pat_nm2").innerHTML = patNm;
		document.getElementById("jumin2_n1").innerHTML = jnum1;		
		document.getElementById("rsrv2_utel1").Value = arr_tel[0];
		document.getElementById("rsrv2_utel2").Value = arr_tel[1];
		document.getElementById("rsrv2_utel3").Value = arr_tel[2];
		document.getElementById("rsrv_hnm2").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm2").innerHTML = dpNm+"<a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm2").innerHTML = drNm+drNm_sub;
		document.getElementById("rsrv_ymd2").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm2").innerHTML = tm_am_pm+rsrvTm;
		document.getElementById("pat_nm2_").value = patNm;
		document.getElementById("jumin2_n1_").value = jnum1;
		document.getElementById("jumin2_n2_").value = jnum2;
		document.getElementById("pat_relation2").value = proxyrlt;
		document.getElementById("tel2_num1").value = arr_tel[0];
		document.getElementById("tel2_num2").value = arr_tel[1];
		document.getElementById("tel2_num3").value = arr_tel[2];
		document.getElementById("rsrv_hnm2_").innerHTML = hpNm;
		document.getElementById("rsrv_dpnm2_").innerHTML = dpNm+"<a href=\"/introduction/grandTour.do?dpCode="+dpCode+"\" class=\"btn_location\" target=\"_blank\"><img src=\"/reservation/reserv_script/images/layer/btn_location.gif\" alt=\"위치보기\"/></a>";
		document.getElementById("rsrv_drnm2_").innerHTML = drNm+drNm_sub;
		document.getElementById("rsrv_ymd2_").innerHTML = rsrvDt.substr(0,4)+"년"+rsrvDt.substr(4,2)+"월"+rsrvDt.substr(6,2)+"일";
		document.getElementById("rsrv_tm2_").innerHTML = tm_am_pm+rsrvTm;
				
		if(proxynm==""){
			//document.getElementById("agRsrvYn2_y").style.display = "none";
			tabChg('tab23',1);
			agRsrvYn_ch('1');
			document.getElementById("rsrv_btn3").src = "/reservation/reserv_script/images/layer/btn_reserve_save02.gif";
		}else{
			document.getElementById("agRsrvYn2_n").style.display = "none";
			tabChg('tab23',2);
			agRsrvYn_ch('2');
			document.getElementById("rsrv_btn4").src = "/reservation/reserv_script/images/layer/btn_reserve_save02.gif";
		}
		
		
		
	}else{
		alert("최근예약 정보가 없습니다.");
	}
}
//본인예약, 대리예약 구분값 저장 
function agRsrvYn_ch(type){
	var f = "";
	if(document.getElementById("rsrv_type").value=="G"){
		f = document.rsrvType1;
	}else{
		f = document.rsrvType2;
		
	}
	if(type=="1"){
		f.agRsrvYn.value = "N";
	}else{
		f.agRsrvYn.value = "Y";		//대리예약 
	}
}
//담당의사 예약 중복 체크 
function dupChk(){
	var f = "";
	var agRsrvYn = "";
	var ssn = "";
	var dpCode = "";
	var drNo = "";
	var rsrv_date = "";
	if(document.getElementById("rsrv_type").value=="G"){
		f = document.rsrvType1;
	}else{
		f = document.rsrvType2;
		
	}
	agRsrvYn = f.agRsrvYn.value;
	ssn = f.RESNO1.value+f.RESNO2.value;
	dpCode = f.dpCode.value;
	drNo = f.drNo.value;
	rsrv_date = f.rsrvDt.value + f.rsrvTm.value; 
	pcnAjax.run("/reserveSC/doctorReserveDupCheck.do", "POST", "agRsrvYn="+agRsrvYn+"&ssn="+ssn+"&dpCode="+dpCode+"&drNo="+drNo+"&rsrv_date="+rsrv_date, "handlerRsrvDupChk");
}
function handlerRsrvDupChk(req, xml, txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var resCode = json['resCode'];
	if(resCode=="I" || (resCode=="D" && document.rsrvType1.mode.value=="U")){
		rsrv_save();
	}else{
		//alert("이미 예약한 건이 있습니다.");
		alert(json.resMsg);
	}
}
function rsrv_save(){
	var f = "";
	if(document.getElementById("rsrv_type").value=="G"){
		f = document.rsrvType1;
		if(f.agRsrvYn.value=="Y"){
			f.patNm.value = f.PROXY_patNm.value;
			f.RESNO1.value = f.PROXY_RESNO1.value;
			f.RESNO2.value = f.PROXY_RESNO2.value;
			f.ssn.value = f.PROXY_ssn.value;
		}
	}else{
		f = document.rsrvType2;
		if(f.agRsrvYn.value=="Y"){
			f.patNm.value = f.PROXY_patNm.value;
			f.RESNO1.value = f.PROXY_RESNO1.value;
			f.RESNO2.value = f.PROXY_RESNO2.value;
			f.ssn.value = f.PROXY_ssn.value;
		}
	}
	var mode = f.mode.value;
	if(mode=="INIT"){
		mode = "S";
	}
	if(mode=="MOD"){
		mode = "U";
	}
	var patNo = f.patNo.value;
	var dpCode = f.dpCode.value;
	var drNo = f.drNo.value;
	var exmTp = f.exmTp.value;
	var rsrvDt = f.rsrvDt.value;
	var rsrvTm = f.rsrvTm.value;
	var tel = f.tel.value;
	var ssn = f.RESNO1.value+f.RESNO2.value;
	var hpCd = f.hpCd.value;
	var agRsrvYn = f.agRsrvYn.value;
	var patNm = f.patNm.value;
	f.msg.value = document.getElementById("rsrv_memo").value;
	var msg = f.msg.value;
	if(f.proxyid.value==""){
		f.proxyid.value = f.userid.value;
	}
	var proxyid = f.proxyid.value;
	if(f.proxynm.value==""){
		f.proxynm.value = f.name.value;
	}
	var proxynm = f.proxynm.value;		
	var proxyrlt = f.proxyrlt.value;
	var oldDpCode = f.oldDpCode.value;
	var oldDrNo = f.oldDrNo.value;
	var oldExmTp = f.oldExmTp.value;
	var oldRsrvDt = f.oldRsrvDt.value;
	var oldRsrvTm = f.oldRsrvTm.value;
	if(agRsrvYn=="Y" && f.mode.value!="U"){		//대리예약이면
		patNo = "";
	}
	//alert("mode="+mode+"&patNo="+patNo+"&dpCode="+dpCode+"&drNo="+drNo+"&exmTp="+exmTp+"&rsrvDt="+rsrvDt+"&rsrvTm="+rsrvTm+"&tel="+tel+"&ssn="+ssn+"&hpCd="+hpCd+"&agRsrvYn="+agRsrvYn+"&patNm="+patNm+"&msg="+msg+"&proxyid="+proxyid+"&proxynm="+proxynm+"&proxyrlt="+proxyrlt);	
	pcnAjax.run("/reserveSC/reserve.do", "POST", "mode="+mode+"&patNo="+patNo+"&dpCode="+dpCode+"&drNo="+drNo+"&exmTp="+exmTp+"&rsrvDt="+rsrvDt+"&rsrvTm="+rsrvTm+"&tel="+tel+"&ssn="+ssn+"&hpCd="+hpCd+"&agRsrvYn="+agRsrvYn+"&patNm="+encodeURIComponent(encodeURIComponent(patNm))+"&msg="+encodeURIComponent(encodeURIComponent(msg))+"&proxyid="+proxyid+"&proxynm="+encodeURIComponent(encodeURIComponent(proxynm))+"&proxyrlt="+encodeURIComponent(encodeURIComponent(proxyrlt))+"&oldDpCode="+oldDpCode+"&oldDrNo="+oldDrNo+"&oldExmTp="+oldExmTp+"&oldRsrvDt="+oldRsrvDt+"&oldRsrvTm="+oldRsrvTm, "handlerRsrv");
	
}
function handlerRsrv(req, xml, txt){
	//alert(txt);
	var json = eval("("+txt+")");
	var resCode = json['resCode'];
	var resMsg = json['resMsg'];
	if(resCode=="I"){		
		var f = "";
		var hpNm = "";
		if(document.getElementById("rsrv_type").value=="G"){
			f = document.rsrvType1;
			if(f.hpCd.value=="AA"){
				hpNm = "안암";
			}else if(f.hpCd.value=="GR"){
				hpNm = "구로";
			}else if(f.hpCd.value=="AS"){
				hpNm = "안산";
			}
			$("#bgLayer").show();
			if(f.agRsrvYn.value=="N"){
				document.getElementById("cf_patNm").innerHTML 	= f.patNm.value;
				document.getElementById("cf_tel").innerHTML 	= f.tel.value;
				document.getElementById("cf_hpNm").innerHTML 	= hpNm;
				document.getElementById("cf_dpNm").innerHTML 	= f.dpNm.value;
				document.getElementById("cf_drNm").innerHTML 	= f.drNm.value;
				document.getElementById("cf_rsrvDt").innerHTML	= f.rsrvDt.value;
				document.getElementById("cf_rsrvTm").innerHTML 	= f.rsrvTm.value;	
				document.getElementById("popupConfirm7").style.display = "";
			}else{
				document.getElementById("cf_patNm2").innerHTML 	= f.patNm.value;
				document.getElementById("cf_patNm3").innerHTML 	= f.proxynm.value;
				document.getElementById("cf_tel2").innerHTML 	= f.tel.value;
				document.getElementById("cf_tel3").innerHTML 	= f.tel_.value;
				document.getElementById("cf_hpNm2").innerHTML 	= hpNm;
				document.getElementById("cf_dpNm2").innerHTML 	= f.dpNm.value;
				document.getElementById("cf_drNm2").innerHTML 	= f.drNm.value;
				document.getElementById("cf_rsrvDt2").innerHTML	= f.rsrvDt.value;
				document.getElementById("cf_rsrvTm2").innerHTML 	= f.rsrvTm.value;	
				document.getElementById("popupConfirm8").style.display = "";
			}
		}else{
			f = document.rsrvType2;
			if(f.hpCd.value=="AA"){
				hpNm = "안암";
			}else if(f.hpCd.value=="GR"){
				hpNm = "구로";
			}else if(f.hpCd.value=="AS"){
				hpNm = "안산";
			}
			$("#bgLayer").show();
			if(f.agRsrvYn.value=="N"){
				document.getElementById("cf_patNm").innerHTML 	= f.patNm.value;
				document.getElementById("cf_tel").innerHTML 	= f.tel.value;
				document.getElementById("cf_hpNm").innerHTML 	= hpNm;
				document.getElementById("cf_dpNm").innerHTML 	= f.dpNm.value;
				document.getElementById("cf_drNm").innerHTML 	= f.drNm.value;
				document.getElementById("cf_rsrvDt").innerHTML	= f.rsrvDt.value;
				document.getElementById("cf_rsrvTm").innerHTML 	= f.rsrvTm.value;	
				document.getElementById("popupConfirm7").style.display = "";
			}else{
				document.getElementById("cf_patNm2").innerHTML 	= f.patNm.value;
				document.getElementById("cf_patNm3").innerHTML 	= f.proxynm.value;
				document.getElementById("cf_tel2").innerHTML 	= f.tel.value;
				document.getElementById("cf_tel3").innerHTML 	= f.tel_.value;
				document.getElementById("cf_hpNm2").innerHTML 	= hpNm;
				document.getElementById("cf_dpNm2").innerHTML 	= f.dpNm.value;
				document.getElementById("cf_drNm2").innerHTML 	= f.drNm.value;
				document.getElementById("cf_rsrvDt2").innerHTML	= f.rsrvDt.value;
				document.getElementById("cf_rsrvTm2").innerHTML 	= f.rsrvTm.value;	
				document.getElementById("popupConfirm8").style.display = "";
			}
		}	
	}else{
		$("#bgLayer").show();
		$("#popupConfirm3").hide();
		document.getElementById("pc10_txt").innerHTML = resMsg;
		$("#popupConfirm10").show();
	}
}
function rsrv_info(){
	//pcnAjax.run("/reserveSC/reserveInfo.do", "POST", "hpCd="+hpCd+"&patNo="+patNo, "handlerRsrvInfo");
}
function handlerRsrvInfo(req, xml, txt){
	alert(txt);
	
}
//진료예약 신청하기 
function rsrv_application_pre(){
	if(document.getElementById("rsrv_type").value=="G"){
		var f = document.rsrvType1;
		if(f.agRsrvYn.value!="Y"){
			var chk_rsrv_hnm = document.getElementById('rsrv_hnm').innerHTML;
			var chk_rsrv_dpnm = document.getElementById('rsrv_dpnm').innerHTML;
			var chk_rsrv_drnm = document.getElementById('rsrv_drnm').innerHTML;
			var chk_rsrv_ymd = document.getElementById('rsrv_ymd').innerHTML;
			var chk_rsrv_tm = document.getElementById('rsrv_tm').innerHTML;
			
			if(chk_rsrv_hnm == ""){
				return;
			}else if(chk_rsrv_dpnm == ""){
				return;
			}else if(chk_rsrv_drnm == ""){
				return;
			}else if(chk_rsrv_ymd == ""){
				return;
			}else if(chk_rsrv_tm == ""){
				return;
			}
		}else{
			var chk_rsrv_hnm_ = document.getElementById('rsrv_hnm_').innerHTML;
			var chk_rsrv_dpnm_ = document.getElementById('rsrv_dpnm_').innerHTML;
			var chk_rsrv_drnm_ = document.getElementById('rsrv_drnm_').innerHTML;
			var chk_rsrv_ymd_ = document.getElementById('rsrv_ymd_').innerHTML; 
			var chk_rsrv_tm_ = document.getElementById('rsrv_tm_').innerHTML;
			
			if(document.getElementById('pat_nm_').value == ""){
				return;
			}else if(document.getElementById('jumin_n1_').value == ""){
				return;
			}else if(document.getElementById('jumin_n2_').value == ""){
				return;
			}else if(document.getElementById('pat_relation').value == ""){
				return;
			}else if(document.getElementById('tel_num1').value == ""){
				return;
			}else if(document.getElementById('tel_num2').value == ""){
				return;
			}else if(document.getElementById('tel_num3').value == ""){
				return;
			}
			if(chk_rsrv_hnm_ == ""){
				return;
			}else if(chk_rsrv_dpnm_ == ""){
				return;
			}else if(chk_rsrv_drnm_ == ""){
				return;
			}else if(chk_rsrv_ymd_ == ""){
				return;
			}else if(chk_rsrv_tm_ == ""){
				return;
			}
		}
	}else{
		var f = document.rsrvType2;
		if(f.agRsrvYn.value!="Y"){
			var chk_rsrv_hnm2 = document.getElementById('rsrv_hnm2').innerHTML;
			var chk_rsrv_dpnm2 = document.getElementById('rsrv_dpnm2').innerHTML;
			var chk_rsrv_drnm2 = document.getElementById('rsrv_drnm2').innerHTML;
			var chk_rsrv_ymd2 = document.getElementById('rsrv_ymd2').innerHTML;
			var chk_rsrv_tm2 = document.getElementById('rsrv_tm2').innerHTML;
			
			if(chk_rsrv_hnm2 == ""){
				return;
			}else if(chk_rsrv_dpnm2 == ""){
				return;
			}else if(chk_rsrv_drnm2 == ""){
				return;
			}else if(chk_rsrv_ymd2 == ""){
				return;
			}else if(chk_rsrv_tm2 == ""){
				return;
			}
		}else{
			var chk_rsrv_hnm2_ = document.getElementById('rsrv_hnm2_').innerHTML;
			var chk_rsrv_dpnm2_ = document.getElementById('rsrv_dpnm2_').innerHTML;
			var chk_rsrv_drnm2_ = document.getElementById('rsrv_drnm2_').innerHTML;
			var chk_rsrv_ymd2_ = document.getElementById('rsrv_ymd2_').innerHTML;
			var chk_rsrv_tm2_ = document.getElementById('rsrv_tm2_').innerHTML;
			
			if(document.getElementById('pat_nm2_').value == ""){
				return;
			}else if(document.getElementById('jumin2_n1_').value == ""){
				return;
			}else if(document.getElementById('jumin2_n2_').value == ""){
				return;
			}else if(document.getElementById('pat_relation2').value == ""){
				return;
			}else if(document.getElementById('tel2_num1').value == ""){
				return;
			}else if(document.getElementById('tel2_num2').value == ""){
				return;
			}else if(document.getElementById('tel2_num3').value == ""){
				return;
			}
			if(chk_rsrv_hnm2_ == ""){
				return;
			}else if(chk_rsrv_dpnm2_ == ""){
				return;
			}else if(chk_rsrv_drnm2_ == ""){
				return;
			}else if(chk_rsrv_ymd2_ == ""){
				return;
			}else if(chk_rsrv_tm2_ == ""){
				return;
			}
		}
	}
	
	$("#bgLayer").show();
	$("#popupConfirm3").show();
}
function rsrv_application(){
	//if(document.getElementById("rsrv_hpcd").value=="GR"||(document.getElementById("rsrv_hpcd").value=="AA" && document.rsrvType1.dpCode.value=="AAEC")){
	if(document.getElementById("rsrv_hpcd").value=="GR" || document.getElementById("rsrv_hpcd").value=="AA"){
		if(document.getElementById("rsrv_memo").value.length == 0){
				alert("진료예약 진행을 위해 환자의 증상을 자세히 입력해 주시기 바랍니다.");
				return;
		}
	}
	var f = "";
	var type = "";
	if(document.getElementById("rsrv_type").value=="G"){
		type = "G";
	}else{
		type = "S";
	}
	if(type=="G"){		//일반예약
		f = document.rsrvType1;
		if(f.dpCode.value==""){
			alert("진료과를 선택해 주십시오.");
			return;
		}
		/*if(f.dsCode.value==""){
			alert("병명(질환명)을 선택해 주십시오.");
			return;
		}*/
		if(f.drNo.value==""){
			alert("담당의사를 선택해 주십시오.");
			return;
		}
		if(f.rsrvDt.value=="" || f.rsrvTm.value==""){
			alert("진료날짜 및 시간을 선택해 주십시오.");
			return;
		}
		if(f.agRsrvYn.value=="Y"){		//대리예약이면 
			if(document.getElementById("realnameChk_confirm1").value==""){
				alert("실명인증을 해주십시오.");
				return;
			}
			
			if(document.getElementById("pat_nm_").value==""){
				alert("환자이름을 입력해 주십시오.");
				return;
			}
			if(document.getElementById("jumin_n1_").value=="" || document.getElementById("jumin_n2_").value==""){
				alert("주민등록번호를 입력해 주십시오.");
				return;
			}
			if(document.getElementById("pat_relation").value==""){
				alert("환자와의 관계를 입력해 주십시오.");
				return;
			}
			if(document.getElementById("tel_num1").value=="" || document.getElementById("tel_num2").value=="" || document.getElementById("tel_num3").value==""){
				alert("연락처를 입력해 주십시오.");
				return;
			}
			f.patNm.value = document.getElementById("pat_nm_").value;
			f.ssn.value = document.getElementById("jumin_n1_").value + document.getElementById("jumin_n2_").value;
			f.proxyrlt.value = document.getElementById("pat_relation").value;			
			f.tel.value = document.getElementById("tel_num1").value+"-"+document.getElementById("tel_num2").value+"-"+document.getElementById("tel_num3").value;
		}	
		
	}else{				//증상별 예약 
		f = document.rsrvType2;
		if(f.dpCode.value==""){
			alert("진료과를 선택해 주십시오.");
			return;
		}
		/*if(f.dsCode.value==""){
			alert("병명(질환명)을 선택해 주십시오.");
			return;
		}*/
		if(f.drNo.value==""){
			alert("담당의사를 선택해 주십시오.");
			return;
		}
		if(f.rsrvDt.value=="" || f.rsrvTm.value==""){
			alert("진료날짜 및 시간을 선택해 주십시오.");
			return;
		}
		if(f.agRsrvYn.value=="Y"){		//대리예약이면 
			if(document.getElementById("realnameChk_confirm2").value==""){
				alert("실명인증을 해주십시오.");
				return;
			}
			
			if(document.getElementById("pat_nm2_").value==""){
				alert("환자이름을 입력해 주십시오.");
				return;
			}
			if(document.getElementById("jumin2_n1_").value=="" || document.getElementById("jumin2_n1_").value==""){
				alert("주민등록번호를 입력해 주십시오.");
				return;
			}
			if(document.getElementById("pat_relation2").value==""){
				alert("환자와의 관계를 입력해 주십시오.");
				return;
			}
			if(document.getElementById("tel2_num1").value=="" || document.getElementById("tel2_num2").value=="" || document.getElementById("tel2_num3").value==""){
				alert("연락처를 입력해 주십시오.");
				return;
			}
			f.patNm.value = document.getElementById("pat_nm2_").value;
			f.ssn.value = document.getElementById("jumin2_n1_").value + document.getElementById("jumin2_n2_").value;
			f.proxyrlt.value = document.getElementById("pat_relation2").value;			
			f.tel.value = document.getElementById("tel2_num1").value+"-"+document.getElementById("tel2_num2").value+"-"+document.getElementById("tel2_num3").value;
			
		}		
	}
	dupChk();
}
//예약 타입 선택 
function rsrv_type_ch(type,num){
	/*if(type=="G" && num == 2){
		alert("서비스 준비중입니다.");
		return;
	}*/
	var msg = "";
	var tmp_str = "";
	var curRsrvType = document.rsrvType1.type.value;
	if(type=="G"){
		tmp_str = "<div style=\"width:354px; height:140px; background:url('/images/reservation/confirmUserInfo/bg.gif');\">";
		tmp_str +=	"<div style=\"widht:354px;background:url('/images/reservation/confirmUserInfo/top_bg.gif');margin:0px 2px;\"><p align=\"right\"><a class=\"btnLeft\" href=\"#\" onclick=\"closeflashReserve();\"/><img src=\"/images/reservation/confirmUserInfo/btn_colse.gif\" /></a></p></div>";
		tmp_str +=	"<div style=\"width:350px;height:118px;  background:#ffffff top;  margin:0px 2px;\">";
		tmp_str +=		"<h1 class=\"pt20 pl20\"></h1>";
		tmp_str	+=	"<p class=\"font \" style=\"font-size:11px;padding-right:15px;padding-left:15px;padding-bottom:6px;\">일반예약으로 진료예약을 변경하시겠습니까?<br>선택하신 모든 예약 정보가 초기화 됩니다.</p>";
		tmp_str	+=	"<div class=\"pt15\" style=\"width:350px; text-align:center;\">";
		tmp_str	+=	"	<span><a href=\"javascript:fnOk('popupConfirm5_ok_g');\"><img src=\"/images/reservation/confirmUserInfo/btn_ok.gif\" /></a></span>";
		tmp_str	+=	"	<span style=\"padding-left:5px;\">";
		tmp_str	+=	"		<a class=\"btnLeft\" href=\"#\" onclick=\"fnOk('popupConfirm5_no_g');\"/><img src=\"/images/reservation/confirmUserInfo/btn_cancle.gif\" /></a>";
		tmp_str	+=	"    </span>";
		tmp_str	+=	"</div>";
		tmp_str	+= "</div>";
		tmp_str += "</div>";		
	}else{
		tmp_str = "<div style=\"width:354px; height:140px; background:url('/images/reservation/confirmUserInfo/bg.gif');\">";
		tmp_str +=	"<div style=\"widht:354px;background:url('/images/reservation/confirmUserInfo/top_bg.gif');margin:0px 2px;\"><p align=\"right\"><a class=\"btnLeft\" href=\"#\" onclick=\"closeflashReserve();\"/><img src=\"/images/reservation/confirmUserInfo/btn_colse.gif\" /></a></p></div>";
		tmp_str +=	"<div style=\"width:350px;height:118px;  background:#ffffff top;  margin:0px 2px;\">";
		tmp_str +=		"<h1 class=\"pt20 pl20\"></h1>";
		tmp_str	+=	"<p class=\"font \" style=\"font-size:11px;padding-right:15px;padding-left:15px;padding-bottom:6px;\">증상별 예약으로 진료예약을 변경하시겠습니까?<br>선택하신 모든 예약 정보가 초기화 됩니다.</p>";
		tmp_str	+=	"<div class=\"pt15\" style=\"width:350px; text-align:center;\">";
		tmp_str	+=	"	<span><a href=\"javascript:fnOk('popupConfirm5_ok_s');\"><img src=\"/images/reservation/confirmUserInfo/btn_ok.gif\" /></a></span>";
		tmp_str	+=	"	<span style=\"padding-left:5px;\">";
		tmp_str	+=	"		<a class=\"btnLeft\" href=\"#\" onclick=\"fnOk('popupConfirm5_no_s');\"/><img src=\"/images/reservation/confirmUserInfo/btn_cancle.gif\" /></a>";
		tmp_str	+=	"    </span>";
		tmp_str	+=	"</div>";
		tmp_str	+= "</div>";
		tmp_str += "</div>";		
	}
	if(curRsrvType!=type){
		document.getElementById("popupConfirm5").innerHTML = tmp_str;
		//document.getElementById("popupConfirm5").style.display = "";
		$("#bgLayer").show();
		$("#popupConfirm5").show();
	}
	tabChg('tab01',num);
	if(type=="G" && num == 1){
		$("#dept_sel_list").css("height","626px");
		$("#diseaseListDiv").hide();
		getAjaxDeptList('','','','');
	}else if(type=="G" && num == 2){
		$('#dept_sel_list').empty();
		document.search_form2.dpCode.value = "";
		document.search_form3.dpCode.value = "";
		$("#dept_sel_list").css("height","264px");
		$("#diseaseListDiv").show();
		getAjaxDsList('','','','','','');
	}
}

//초기화
function reserve_init(type){
	$("#bgLayer").show();
	$("#popupConfirm14").show();
	/*if(confirm("현재 선택하신 모든 정보를 초기화하고\n처음부터 다시 진행하시겠습니까?")){
		if(type=="G"){
			init_items('G');
			document.getElementById("rsrv_cal1").style.display = "";
			document.getElementById("rsrv_cal2").style.display = "none";
			//document.getElementById("rsrv_cal2").innerHTML = "";
		}else{
			init_items('S');
			document.getElementById("rsrv_cal3").style.display = "";
			document.getElementById("rsrv_cal4").style.display = "none";
		}
	}*/
}
//예약 항목 초기화 
function init_items(type){
	var f = "";
	var fc = document.cal_form;	
	fc.year.value = document.getElementById("standard_date1").value;
	fc.month.value = document.getElementById("standard_date2").value;	
	document.hiddenForm.calendar_ym.value = fc.year.value+fc.month.value;
	document.getElementById("calendar_ym_str").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	document.getElementById("calendar_ym_str2").innerHTML = fc.year.value+". "+(parseInt(fc.month.value)+1);
	getCalendar(fc.year.value,fc.month.value,'');
	document.getElementById("tmp_list_num").value = "";
	document.getElementById("tmp_list_num2").value = "";
	document.getElementById("tmp_list_num3").value = "";
	document.getElementById("rsrv_btn1").src = "/reservation/reserv_script/images/layer/btn_reserve.gif";
	document.getElementById("rsrv_btn2").src = "/reservation/reserv_script/images/layer/btn_reserve.gif";
	document.getElementById("rsrv_btn3").src = "/reservation/reserv_script/images/layer/btn_reserve02.gif";
	document.getElementById("rsrv_btn4").src = "/reservation/reserv_script/images/layer/btn_reserve02.gif"; 
	if(type=="G"){
		f = document.rsrvType1;
		f.drNo.value = "";
		f.drNm.value = "";
		f.exmTp.value = "";
		f.dpCode.value = "";
		f.dpNm.value = "";
		f.dsCode.value = "";
		f.rsrvDt.value = "";
		f.rsrvTm.value = "";
		f.agRsrvYn.value = "N";
		document.getElementById("ds_sel_list").innerHTML = "";
		document.getElementById("doct_sel_list").innerHTML = "";				
		document.getElementById("rsrv_dpnm").innerHTML = "";
		document.getElementById("rsrv_drnm").innerHTML = "";
		document.getElementById("rsrv_ymd").innerHTML = "";
		document.getElementById("rsrv_tm").innerHTML = "";
		document.getElementById("pat_nm_").value = "";
		document.getElementById("jumin_n1_").value = "";
		document.getElementById("jumin_n2_").value = "";
		document.getElementById("pat_relation").value = "";
		document.getElementById("tel_num1").value = "";
		document.getElementById("tel_num2").value = "";
		document.getElementById("tel_num3").value = "";
		document.getElementById("rsrv_dpnm_").innerHTML = "";
		document.getElementById("rsrv_drnm_").innerHTML = "";
		document.getElementById("rsrv_ymd_").innerHTML = "";
		document.getElementById("rsrv_tm_").innerHTML = "";
		document.search_form1.sv.value = "";
		document.search_form2.sv.value = "";
		document.search_form3.sv.value = "";
		arr_cal_day = "";
		arr_cal_gbn = "";
		arr_cal_tm = "";
		arr_cal_len = "";
		document.search_form2.dpCode.value = "";
		document.search_form3.dpCode.value = "";
		document.search_form3.dsCode.value = "";
		//search_dp_all();
		//search_ds_all();		
		$('#active_layer1').show();
		$('#active_layer2').show();
		$('#active_layer3').show();
		
		if(f.proxyrlt.value!=""){			
			f.patNm.value = document.getElementById("tmp_patNm").value;
			f.RESNO1.value = document.getElementById("tmp_jumin1").value;
			f.RESNO2.value = document.getElementById("tmp_jumin2").value;
			document.getElementById("pat_nm").innerHTML = document.getElementById("tmp_patNm").value;
			document.getElementById("jumin_n1").innerHTML = document.getElementById("tmp_jumin1").value;			
			f.proxyrlt.value = "";
		}
		
		document.getElementById("agRsrvYn_n").style.display = "";
		//document.getElementById("agRsrvYn_y").style.display = "";
		//tabChg('tab03',1);
		agRsrvYn_ch('1');
		if($("#diseaseListDiv").css("display") == "block"){
			rsrv_type_ch('G','2');
		}else{
			search_dp_all();
			//tabChg('tab03',1);
		}
		
	}else{	
		f = document.rsrvType2;
		f.drNo.value = "";
		f.drNm.value = "";
		f.exmTp.value = "";
		f.dpCode.value = "";
		f.dpNm.value = "";
		f.dsCode.value = "";
		f.rsrvDt.value = "";
		f.rsrvTm.value = "";
		f.sex.value = "";
		f.agRsrvYn.value = "N";
		document.getElementById("sympt_num").value = 0;
		//document.getElementById("sexual_m").src = "/reservation/reserv_script/images/layer/btn_male_off.gif";
		//document.getElementById("sexual_f").src = "/reservation/reserv_script/images/layer/btn_female_off.gif";
		document.getElementById("faq-list").innerHTML = "";
		document.getElementById("doct_sel_list2").innerHTML = "";
		document.getElementById("rsrv_dpnm2").innerHTML = "";
		document.getElementById("rsrv_drnm2").innerHTML = "";
		document.getElementById("rsrv_ymd2").innerHTML = "";
		document.getElementById("rsrv_tm2").innerHTML = "";
		document.getElementById("pat_nm2_").value = "";
		document.getElementById("jumin2_n1_").value = "";
		document.getElementById("jumin2_n2_").value = "";
		document.getElementById("pat_relation2").value = "";
		document.getElementById("tel2_num1").value = "";
		document.getElementById("tel2_num2").value = "";
		document.getElementById("tel2_num3").value = "";
		document.getElementById("rsrv_dpnm2_").innerHTML = "";
		document.getElementById("rsrv_drnm2_").innerHTML = "";
		document.getElementById("rsrv_ymd2_").innerHTML = "";
		document.getElementById("rsrv_tm2_").innerHTML = "";
		document.getElementById("serv23").style.display = "";
		document.getElementById("serv24").style.display = "none";		
		arr_cal_day2 = "";
		arr_cal_gbn2 = "";
		arr_cal_tm2 = "";
		arr_cal_len2 = "";
		$('#active_layer4').show();
		$('#active_layer5').show();
		$('#active_layer6').show();
		
		if(f.proxyrlt.value!=""){
			f.patNm.value = document.getElementById("tmp_patNm").value;
			f.RESNO1.value = document.getElementById("tmp_jumin1").value;
			f.RESNO2.value = document.getElementById("tmp_jumin2").value;
			document.getElementById("pat_nm2").innerHTML = document.getElementById("tmp_patNm").value;
			document.getElementById("jumin2_n1").innerHTML = document.getElementById("tmp_jumin1").value;			
			f.proxyrlt.value = "";
		}
		
		document.getElementById("agRsrvYn2_n").style.display = "";
		//document.getElementById("agRsrvYn2_y").style.display = "";
		tabChg('tab23',1);
		agRsrvYn_ch('1');
		
	}
}

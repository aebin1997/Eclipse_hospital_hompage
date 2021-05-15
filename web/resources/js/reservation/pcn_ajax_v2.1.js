/**
 * ajax 실행
 * @param urls         호출할 URL
 * @param method      GET or POST
 * @param queryString POST방식 항목데이터
 * @param userHandler 응답 데이터 처리 함수. 
 *                    handler함수는 3개의 파라미터를 받을 수 있다. (HtpRequest객체, xml DOM객체, text문자열)
 * @param addObj      [옵션] 추가로 넘겨받을 객체정보. 핸들러의 req["addObj"]에 그대로 담겨서 오게된다.
 */
/*
  예제)
 	pcnAjax.run("http://intranet.postcorea.net/temp/utf.php", "GET", "", "handlerA", {A:"10",B:"20"});
 	pcnAjax.run("http://intranet.postcorea.net/temp/utf.php", "GET", "a=1&b=2", "handlerB");
 	pcnAjax.run("http://intranet.postcorea.net/temp/utf.php", "POST", "a=1&b=2", "handlerC");
 
 	function handlerA(req, xml, txt){
 		var a = document.getElementById("x");
 		a.innerHTML = txt;

		alert(req["addObj"].A);
		alert(req["addObj"].B);
 	}
 	function handlerB(req, xml, txt){
 		var a = document.getElementById("y");
 		a.innerHTML = txt;
 	}
 	function handlerC(req, xml, txt){
 		var a = document.getElementById("z");
 		a.innerHTML = txt;
 	}
*/
var pcnAjax = {
	run: function(urls, method, queryString, userHandler, addObj) { 
		// 기본적인 변수 선언 

		var xmlhttp = null;

		// FF일 경우 window.XMLHttpRequest 객체가 존재한다. 
		if (window.XMLHttpRequest) {
			// Create XMLHttpRequest object in non-Microsoft browsers
			xmlhttp = new XMLHttpRequest();
			if (xmlhttp.overrideMimeType) {
				xmlhttp.overrideMimeType('text/xml');
			}

		} else if (window.ActiveXObject) {
			// Create XMLHttpRequest via MS ActiveX
			try {
				// Try to create XMLHttpRequest in later versions
				// of Internet Explorer
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e1) {
				// Failed to create required ActiveXObject
				try {
					// Try version supported by older versions
					// of Internet Explorer
					xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e2) {
					// Unable to create an XMLHttpRequest with ActiveX
				}
			}
		}
		var o = xmlhttp;

		// GET 모드로 URL 주소의 값을 가져온다 
		// 주의 해야 할점은 무조건 UTF 로 값이 들어옴 
		if(o != null){
			if(addObj != null){
				o["addObj"] = addObj;
			}
			if(method == 'GET'){
				o.open('GET', urls+(queryString ? "?"+queryString : ""), true); //비동기식 호출
				o.onreadystatechange = function(){
					if(o.readyState==4 && o.status == 200 && o.statusText=='OK'){
						eval(userHandler+"(o, o.responseXML, o.responseText)");
					}
				}
				o.send(null); 
			}else if(method == 'POST'){
				if (urls == "/ajax/chkRecentPassword.do") {
					o.open("POST", urls, false);
				} else {
					o.open("POST", urls, true);
				}
				o.onreadystatechange = function(){
					if(o.readyState==4 && o.status == 200 && o.statusText=='OK'){
						eval(userHandler+"(o, o.responseXML, o.responseText)");
					}
				}
				o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=UTF-8");    
				//o.setRequestHeader("Content-length", queryString.length);
				//o.setRequestHeader("Connection", "close");
				o.send(queryString); 
			}
		}else{
			alert("[ajax] 객체생성실패");
		}
	}
} 
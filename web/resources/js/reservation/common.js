
$(function(){

	/* main board tab */
	$(".m-board h4 a").click(function(){
		var idx = $(this).parent("h4").attr("class").charAt(20);
		$(".m-board h4 a").removeClass("actOn");
		$(this).addClass("actOn");
		return false;
	});

});
/* TAB */
function tabChg(tabId,num){
	var tabCnt = document.getElementById(tabId).getElementsByTagName('li');
	var content;
	for ( i=1;i<=tabCnt.length;i++ ){
		if ( i!=num) {
			content=tabCnt[i-1].childNodes[0];
			document.getElementById(content.href.split("#")[1]).style.display="none";
			tabCnt[i-1].getElementsByTagName('img')[0].src=tabCnt[i-1].getElementsByTagName('img')[0].src.replace("_on.gif","_off.gif");
			tabCnt[i-1].getElementsByTagName('img')[0].src=tabCnt[i-1].getElementsByTagName('img')[0].src.replace("_on.png","_off.png");
			tabCnt[i-1].className="";
		}
		else {
		}
	}
	content=tabCnt[num-1].childNodes[0];
	document.getElementById(content.href.split("#")[1]).style.display="block";
	tabCnt[num-1].getElementsByTagName('img')[0].src=tabCnt[num-1].getElementsByTagName('img')[0].src.replace("_off.gif","_on.gif");
	tabCnt[num-1].getElementsByTagName('img')[0].src=tabCnt[num-1].getElementsByTagName('img')[0].src.replace("_off.png","_on.png");
	tabCnt[num-1].className="on";
	$('ul[id^=tab0] li:last').addClass('last, bbno, pr0');
}

/* tab change*/
function tab(i){
	$('.faq li>div').hide();
	$('.lounge-performance').hide();

	var i;

	$("#tab"+i+">li").find('>div').css('visibility','hidden');
	$("#tab"+i+">li").find('>div.active').css('visibility','visible');

	function TabMenuToggle(event){
		$("#tab"+i+">li").find('>a').each(function(){
			$(this).find('img').attr('src', $(this).find('img').attr('src').replace('_on.', '.'));
		});
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('.', '_on.'));
		
		$("#tab"+i+">li").find('>div').css('visibility','hidden');
		$(this).next('div').css('visibility','visible');

		$("#tab"+i+">li").find('>div').removeClass('active');
		$(this).next('div').addClass('active');
		return false;
	}
	$("#tab"+i+">li").find('>a').click(TabMenuToggle).focus(TabMenuToggle);

};


function tabnotChg(){
};


$(function() {
	/**/
	
	$("#promot-area>ul>li").find('>a').click(heightControl).focus(heightControl);
	
	function heightControl(){
	if($('#promot-area').css('visibiliy')=='hidden'){
			$('#promot-area ').css('height','420px');
			
	}else{
			$('#promot-area').css('height','460px');
		}
	}
	
	tab(1);
	tab(2);

});
$(function(){
		$('.cont_tip').css('display', 'none')
		$('.list>li>a').hover(function(){
			$(this).parent().addClass('on');
			$(this).parent().find('.cont_tip').fadeIn('fast')
			return false;
		}, function(){
			$(this).parent().removeClass('on');
			$('.cont_tip').fadeOut('fast')
				return false;
		});
	});

	var onblur = function(){
		var $item = $("input[type=text].ipt"),
			arr = new Array(),
			arrClass = new Array(),
			baseValue,
			idx;
		for (var i = 0, leg = $item.length; i < leg; i++){
			arr[i] = $item.eq(i).attr("value")
		};
		$item
			.focus(function(){
				idx = $item.index(this)
				baseValue = arr[idx];
				if($item.eq(idx).val() == baseValue) $item.eq(idx).val("").addClass("on")
			})
			.blur(function(){
				if($item.eq(idx).val() == "") $item.eq(idx).val(baseValue).removeClass("on")
			});
	}; 
	var focu = function(){
		$("input[type=text].ipt")
			.focus(function(){
			})
			.blur(function(){
			});
	};
	
	$(function(){
		focu();
		onblur();
	});


$(function(){
			$('.open_layer_reserve').click(function(){
			$('#layer_reserve').css('display', 'show');
			}, function(){
		});
});


 jQuery (function ($){
	$(".contcont>li").removeClass('on');
	$(".menu_list02>li>a").bind('click keyup', function(){
		$(".contcont>li").addClass('on');
		return false;
		}), $(".btn_dody>a").bind('click keyup', function(){
			$(".contcont>li").removeClass('on');
			return false;
	});
	$('.contcont>li:first-child').show();
	$('.contcont>li').hide();
	$('.contcont>li:first-child').show();
	$(".menu_list02>li>a").bind('mouseover keyup', function(){
		 var thisArea = $(this).attr('class');
		$('.contcont>li').hide();
		$('.contcont> li#'+thisArea).show();
	});
})
$(function(){
	$('.img_over>li>a').hover(function(){
		$(this).find('>img').attr('src', $(this).find('>img').attr('src').replace('.', '_on.'));
	}, function(){
		$(this).find('>img').attr('src', $(this).find('>img').attr('src').replace('_on.', '.'));
	});
});

$(function(){
	
});

/* FAQ */
function openClose(){
	var obj_p = document.getElementById('faq-list');
	var obj_li = obj_p.getElementsByTagName('li');
	for(var i=0; i<obj_li.length; i++){
		if(obj_li[i].getElementsByTagName('div')[0].getElementsByTagName('a')[0]){
			obj_li[i].getElementsByTagName('div')[0].getElementsByTagName('a')[0].onclick = function(){
				this.blur();
			}
		}else return;
		obj_li[i].getElementsByTagName('div')[0].onclick = function(){
			if(this.parentNode.getElementsByTagName('div')[1].style.display == 'block'){
				this.parentNode.getElementsByTagName('div')[1].style.display = 'none';
				$(this).removeClass("current");
				//this.className = 'faq-q';
				return false;
			}else{
				this.parentNode.getElementsByTagName('div')[1].style.display = 'block';
				$(this).addClass("current");
				//this.className = 'faq-q current';
				return false;

			}
		}
	}
}
(function($) {
	
	var win_width_, leftpos, wdth, win_height_, esc;
	win_width_ = $(window).width();	
	win_height_ = $(window).height();
	
	$(document).ready(function(){
		$('.person').on('click', function(){			
			
			$('.person').removeClass('zoomed');		
			$(this).addClass('zoomed');	
			
			if($(this).hasClass('zoomed')){				
				$(this).prevAll().each(function(){
					//console.log($(this).addClass('prev') +' prev');	
					$(this).addClass('prev');
				});
				$(this).nextAll().each(function(){
					//console.log($(this).addClass('next') +' next');	
					$(this).addClass('next');
				});				
			}
			cal_size();
		});
		
		cal_size();
		
		$('body').on('click','.click_cross', function(){		
			$('.zoomed').removeClass('zoomed');
			$('.zoomed,.prof_sec').removeAttr('style');
			cal_size();
			$('.person').removeClass('next prev');
		});
		
	});
	
	function cal_size(){		
		var i, hght, toppos, sec_div, sec_img, zoom_, sect_lngth;
		
		sect_lngth = $('.person').length;
		sec_div = $('.person');
		zoom_ = $('.zoomed');
		sec_img = $('.sec_img');
		wdth = $(window).width()/sect_lngth+'px';
		leftpos = $(window).width()/sect_lngth;
		
		hght = wdth;
		
		sec_div.css({
			'width': wdth,
			'height': hght			
		});
		
		sec_img.css({
			'width': wdth, 
			'height': hght
		});
		
		i = -1;
		sec_div.each(function(){
			i++;
			$(this).css('left',i*leftpos+'px');
		//	console.log(i*leftpos+'px');
		});
		
		zoom_.css({'height':win_width_/2+'px', 'top': '0px','left': '0px','width': win_width_+'px'});
		zoom_.find('.sec_img').css({'height':win_width_/2+'px', 'top': '0px','left': '0px','width': win_width_/2+'px'});
		zoom_.find('.prof_sec').css({'right':'0%','display':'block'});			
		
	}	
	
	$(window).resize(function(){
		cal_size();
	}).resize();
	
	$(document).keyup(function(e) {		
		if (e.keyCode === 27) {
			$('.zoomed').removeClass('zoomed');
			cal_size();
			$('.person').removeClass('next prev');
			$('.zoomed,.prof_sec').removeAttr('style');
		}
	});
	
})(jQuery);
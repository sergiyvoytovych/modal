/**
$('.modal_box').modal_box_lite({
    html_el: $('div.pop_up_form_login'),
    height:500,
    width:700,
    left: 100,
    top:50
});
 */
(function($){

	// Defining our jQuery plugin
	$.fn.modal_box_lite = function(val){
        // Default parameters
		var options = $.extend({
			class_modal_box:'modal_box',
			class_modal_box_close:'modal_box_close',
			class_bag_box:'modal_bg',
            height : 250,
			width : 500,
			title:"JQuery Modal Box Demo",
			description: "Example of how to create a modal box.",
			top:20,
			left:150,
			html_el:'',
            time_in:550,
            time_out:550

		},val);

        /*Hide block html*/
        options.html_el.hide();
		//Click event on element
		return this.click(function(e){
            e.preventDefault();
			add_block_page();
			add_popup_box();
			add_styles();
			$('.'+options.class_modal_box).fadeIn(options.time_in);
		});

		/**
		 * Add styles to the html markup
		 */
		 function add_styles(){
			$('.'+options.class_modal_box).css({
				'position':'absolute',
				'left':options.left,
				'top':options.top,
				'display':'none',
				'height': options.height + 'px',
				'width': options.width + 'px',
				'border':'1px solid #fff',
				'box-shadow': '0px 0px 2px 7px #292929',
				'-moz-box-shadow': '0px 2px 7px #292929',
				'-webkit-box-shadow': '0px 2px 7px #292929',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px',
				'background': '#3c3c3c',
				'z-index':'50'
			});
			$('.'+options.class_modal_box_close).css({
				'position':'relative',
				'top':'6px',
				'left':'-6px',
				'float':'right',
				'display':'block',
				'height':'30px',
				'width':'30px',
				'background': 'url(images/pop_up_close.png) no-repeat'
			});

			/*Block page overlay*/
            var pageHeight = document.body.scrollHeight;
            var pageWidth = $(window).width();
            $('.'+options.class_bag_box).css({
                'position':'absolute',
                'top':'0',
                'left':'0',
                'background-color':'rgba(0,0,0,0.6)',
                'height':pageHeight,
                'width':pageWidth,
                'z-index':'10'
            });

			$('.paulund_inner_modal_box').css({
				'background-color':'##3c3c3c',
				'height':(options.height - 50) + 'px',
				'width':(options.width - 50) + 'px',
				'padding':'10px',
				'margin':'15px',
				'border-radius':'10px',
				'-moz-border-radius':'10px',
				'-webkit-border-radius':'10px'
			});
		}

		 /**
		  * Create the block page div
		  */
		 function add_block_page(){
			var block_page = $('<div class='+options.class_bag_box+'></div>');
			$(block_page).appendTo('body');
		}
        /*
        * Delete modal box
        * */
        function hide_modal_box()
        {
                $('.'+options.class_modal_box).fadeOut(options.time_out,function(){$(this).remove()});
                $('.'+options.class_bag_box).fadeOut(options.time_out,function(){$(this).remove()});
        }
		 /**
		  * Creates the modal box
		  */
		 function add_popup_box(){
			 var pop_up = $('<div class=' + options.class_modal_box+'><a href="#" class='+options.class_modal_box_close+'></a><div class="paulund_inner_modal_box">' + options.html_el.html() + '</div></div>');
			 $(pop_up).appendTo('body');

			 $('.'+options.class_modal_box_close).click(function(e){
                 e.preventDefault();
				hide_modal_box();
			 });
             $('.'+options.class_bag_box).click(function(){
                 hide_modal_box();
             });
		}
		return this;
	};
	
})(jQuery);

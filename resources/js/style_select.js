/*
* styleSelect - apply style to a select box
* (http://www.8stream.com)
*
* Copyright (c) 2009 Siim Sindonen, 8STREAM <siim@8stream.com>
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
* 
* Requires jQuery version: >= 1.3.2
* $Version: 1.2.1 | 22.09.2009
*/

(function($) {
	$.fn.styleSelect = function(options) {
		var tabindex = 1;
		
		//Click id
		var clickId = '';
		
		var opts = $.extend({}, $.fn.styleSelect.defaults , options);
		
		//set tabindex
		$('input,select,textarea,button').each(function() {
			var input = $(this);
			if (!input.attr('tabindex')) {
				input.attr('tabindex', tabindex);
				tabindex++;
			}
		});
		
		return this.each(function() {
			mainSelect = $(this);
			var mainId = mainSelect.attr('name');
			var styledTabIndex = mainSelect.attr('tabindex');
			var date = new Date;
			var selectId = 'selectbox_' + mainId + date.getTime();
			var width = $(this).width();
			
			//Hidde select box
			mainSelect.hide();
	
			//Main container 
			var mainContainer = $('<div tabindex="' + styledTabIndex + '" class="base1-background"></div>').css({
					'position': 'relative',
					'width': width + 14
				})
				.addClass(opts.styleClass)
				.attr('id', selectId)
				.insertBefore(mainSelect);
			
			//Options container
			var subContainer = $('<ul></ul>').css({
					'position': 'absolute',
					'z-index': '999',
					'top': opts.optionsTop,
					'left': opts.optionsLeft,
					'width': width
				})
				.appendTo($(mainContainer))
				.hide();
				
			//Generate options list
			var optionsList = '';
			
			mainSelect.find('option').each(function() {
				optionsList += '<li id="' + $(this).val() + '"';
				if($(this).attr('class')) optionsList += ' class="'+$(this).attr('class')+'" ';
				optionsList += '>';
				optionsList += '<span style="display: block;"';
				if ($(this).attr('selected')) optionsList += ' class="selected" ';
				optionsList += '>';
				optionsList += $(this).text();
				optionsList += '</span>';
				optionsList += '</li>';
				
			});
			
			subContainer.append(optionsList);
			
			checkSelected(opts.styleClass,opts.optionsWidth);
				
			//Show otions
			$('#'+selectId).click(function() {
				if (clickId !== '') { $('#'+clickId).find('ul').slideToggle(opts.speed); }
				if (clickId !== selectId) {
					$(this).find('ul').slideToggle(opts.speed);
					clickId = selectId;
				} else {
					clickId = '';
				}
			});
			
			//On click
			$('#' + selectId + ' li').click(function() {
				doSelection($(this));
			});
			
			//Keyboard support
			$('#'+selectId).keydown(function(event) {
				var active = $(this).find('.selected').parent();
				
				if (event.keyCode == 40 || event.keyCode == 39 ) { doSelection(active.next()); }
				if (event.keyCode == 37 || event.keyCode == 38 ) { doSelection(active.prev()); }
				
				if (event.keyCode == 13 || event.keyCode == 0) { $(this).find('ul').slideToggle(opts.speed); }
				if (event.keyCode == 9) { $(this).find('ul').hide(opts.speed); }
			});
			
			//Do selection
			var doSelection = function(item) {
				item.siblings().find('span').removeClass('selected');
				item.find('span').addClass('selected');
				
				var selectedItem = item.attr('id');
				
				var realSelector = $('select[name="' + mainId + '"]');
				realSelector.siblings().selected = false;
				realSelector.find('option[value="' + selectedItem + '"]').attr('selected','selected');
				realSelector.trigger(opts.selectTrigger);
				
				checkSelected(opts.styleClass,opts.optionsWidth);
			}
			
			$('#' + selectId).click(function(e) {
				e.stopPropagation();
			});
			
			$(document).click(function() {
				$('#' + selectId + ' ul').hide();
				clickId = '';
			});
		});	
	}
		
	//Selected items check
	function checkSelected(mainClass,mainWidth) {
		$('.' + mainClass).each(function() {
			var elementList = $(this).find('ul');
			
			$(this).find('span').each(function() {
				var spanClass = $(this).attr('class');
				if (spanClass == 'passiveSelect' || spanClass == 'activeSelect') $(this).remove();
			});
			
			var selectedName = $(this).find('.selected');
			
			$('<span></span>').text(selectedName.text())
				.attr('id', selectedName.parent().attr('id'))
				.addClass('passiveSelect')
				.appendTo($(this));
			
			if (mainWidth === 0) {
				$(this).css({'width': elementList.width()});
			}
		});
		
		$('.' + mainClass + ' span').each(function() {
			if ($(this).attr('id')) {
				$(this).removeClass();
				$(this).addClass('activeSelect');
			}
		});
	}
	
	$.fn.styleSelect.defaults = {
		optionsTop: '26px',
		optionsLeft: '0px',
		optionsWidth: 0,
		styleClass: 'selectMenu',
		speed: 0,
		selectTrigger: 'change'
	};
})(jQuery);
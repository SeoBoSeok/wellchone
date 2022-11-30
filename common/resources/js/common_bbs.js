var file_upload_size=0;

/**
 * 게시판 Submit
 * @returns {boolean}
 */
function fnBoardOnSubmit(el){
	if(fn_text_null_check($('.bbs_input'))){
		return true;
	}else{
		return false;
	}
}

/**
 * 설문조사 게시판 참여 Submit
 */
function fnSurveySubmit(){
	var return_val=true;
	$('.article_input').each(function(idx, el){
		if(return_val == false){
			return;
		}
		var el_name=$(el).attr(name);
		if($(el).attr('type') == 'text'){
			if($(el).val() == ''){
				alert($(el).attr('title') + '는(은) 필수 입력 항목 입니다.');
				$(el).focus();
				return_val=false;
				return false;
			}
		}else if($(el).attr('type') == 'checkbox'){
			if($('input[name=' + el_name + ']:checked').size() < 0){
				alert($(el).attr('title') + '는(은) 1개 이상 필수 선택 항목 입니다.');
				$('input[name=' + el_name + ']').focus();
				return_val=false;
				return false;
			}
		}else if($(el).attr('type') == 'radio'){
			if($('input[name=' + el_name + ']:checked').size() < 0){
				alert($(el).attr('title') + '는(은) 필수 선택 항목 입니다.');
				$('input[name=' + el_name + ']').focus();
				return_val=false;
				return false;
			}
		}
	});
	if(return_val == true){
		if(confirm("해당 설문조사 참여시 수정 및 삭제 할수 없습니다. 신중히 선택하여 참여해 주시길 바랍니다.\n계속 진행 하시겠습니까?")){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}


/**
 * 게시판_페이징 이동(mc수정 페이지)
 *
 * @param pageNo
 */
function fnPageMove_paging(pageNo){
	addParam();
	document.search_form.pageindex.value=pageNo;
	document.search_form.submit();
}


/**
 * 게시판 페이징 이동(공통게시판)
 *
 * @param pageNo
 */
function fnPageMove(pageNo){
	document.search_form.pageindex.value=pageNo;
	document.search_form.submit();
}
function fnPageMove2(pageNo){
	document.search_form2.pageindex.value=pageNo;
	document.search_form2.submit();
}
function fnPageMoveCourse(pageNo){
	document.courseForm2.pageindex.value=pageNo;
	document.courseForm2.submit();
}
function fnPageMoveShare(pageNo){
	$("#search_form").find("#pageindex").val(pageNo);
	$("#search_form").submit();
}

/**
 * 게시판 페이징 이동 (마이페이지 온라인민원처리 현황 페이징)
 *
 * @param pageNo
 */
function fnPageMoveComplainForm(pageNo){
	document.complainForm.complainPageIndex.value=pageNo;
	document.complainForm.submit();
}
/**
 * 게시판 페이징 이동 (마이페이지 질문형 게시판 민원처리 페이징)
 *
 * @param pageNo
 */
function fnPageMoveQnaBoardForm(pageNo){
	document.qnaBoardForm.qnaBoardPageIndex.value=pageNo;
	document.qnaBoardForm.submit();
}

/**
 * 게시판 검색 이동
 */
function fnSearchFormSubmit(){
	if($('#sk').val() == ""){
		alert("검색어를 입력하세요.");
		$('#sk').focus();
		return false;
	}else{
		$('input[name=pageindex]').val("1");
		return true;
	}
}

/**
 * 게시판 글 삭제
 * @returns {boolean}
 */
function fnBoardDelete(){
	if(confirm("해당 게시물을 삭제 하시겠습니까?")){
		return true;
	}else{
		return false;
	}
}
/**
 * 게시판 글 영구삭제
 * @returns {boolean}
 */
function fnBoardRealDelete(){
	if(confirm("해당 게시물을 영구적으로 삭제 하시겠습니까?")){
		return true;
	}else{
		return false;
	}
}

/**
 * 파일 삭제
 * @param pk
 */
function fnAjaxFileDelete(pk, el){
	if(confirm("해당 파일을 삭제 하시겠습니까?")){
		var url='/ajaxBoardFileDelete.do';
		var data=new Array();
		data={file_idx: pk };
		var successFn=function(json){
			var file_idx=$('input[name=file_idx]');
			file_idx.each(function(){
				if($(this).val() == pk){
					$(this).remove();
				}
			});
			$(el).parent().remove();
			if($('.bbs_file_list li').size() <= 0){
				$('.bbs_file_list').hide();
			}
		};
		fn_ajax_json(url, data, successFn, null);
	}
}

/**
 * 파일 업로드 완료 fn
 * @param json
 */
function fnAjaxFileUploadComplete(json){
	$('.bbs_file_list').show();
	file_upload_size+=Number(json.file_size);
	$(".file_upload_size").val(file_upload_size);
	var file_li=$('<li />');
	var file_icon=$('<img src="/common/resources/images/bbs/file.gif" alt="file" />');
	var img_icon=$('<img src="/common/resources/images/bbs/image.gif" alt="image" />');
	var file_a=$('<a href="/boardFileDown.do?file_idx=' + json.file_idx + '">' + json.ori_name + '</a>');
	var file_size = roundXL(Number(json.file_size) / 1024, 3);
	var file_size_span=$('<span class="font f_c_1">(' + file_size + ' Kbyte)</span>');
	var delete_a=$('<a onclick="fnAjaxFileDelete(' + json.file_idx + ',$(this))" class="c_click"><img src="/common/resources/images/bbs/delete_btn.gif" alt="삭제" ></a>');
	if(json.type == 'img'){
		file_li.append(img_icon);
	}else{
		file_li.append(file_icon);
	}
	file_li.append("&nbsp;");
	file_li.append(file_a);
	file_li.append("&nbsp;");
	file_li.append(file_size_span);
	file_li.append("&nbsp;");
	file_li.append(delete_a);

	$('.bbs_file_list').append(file_li);
	var file_idx=$('<input type="hidden" name="file_idx" value="' + json.file_idx + '" />');
	$('#bbsForm').append(file_idx);
	if(json.type == 'img'){
		alert(json.ori_name + " 이미지가 업로드 되었습니다.");
	}else{
		alert(json.ori_name + " 파일이 업로드 되었습니다.");
	}
	$('.bbs_file_list').show();
	$('.progress').hide();
	$('.progress').width("0%");
	$('.bar').html("0%");
}


/**
 * 파일 업로드 이벤트
 */
function fnAjaxFileUploadChangeEvent(){
	if($('#boardFileAjaxForm .file_upload_size').val() == ""){
		$('#boardFileAjaxForm .file_upload_size').val(0);
	}
	var file=$('#uploadfile').val().toLowerCase();
	var file_extension=file.substring(file.lastIndexOf('.') + 1);
	var types_arr=$('#file_extension').val().split(",");
	var file_ex_ck=true;
	for(var i=0; i < types_arr.length; i++){
		if(file_extension == types_arr[i]){
			file_ex_ck=false;
			break;
		}
	}
	if(file_ex_ck){
		alert("업로드 할수 없는 파일 형식 입니다.\n" + file_extension + " 확장자를 업로드 하시고 싶으시다면\n해당 게시판 템플릿을 수정 하시길 바랍니다.");
		return false;
	}else{
		$('#boardFileAjaxForm').submit();
	}
}

/**
 * 파일 업로드 클릭
 */
function fnAjaxFileUploadClick(){
	$('.bbs_file_list').show();
	var progress=$('.progress');
	var bar=$('.bar');
	progress.hide();
	progress.width("0%");
	bar.html("0%");
	$('#uploadfile').click();
}

/**
 * INPUT TEXT NULL 체크
 *
 * @param obj
 *            확인할 객체
 * @returns {Boolean}
 */
function fn_text_null_check(obj){
	var re_val=true;
	obj.each(function(index, item){
		if($(item).hasClass('dates')){
			var obj_title=$(item).attr('title');
			var start_input=$(item).parent().find('input[type=text]:eq(0)');
			var end_input=$(item).parent().find('input[type=text]:eq(1)');
			var start_val=Number($(item).parent().find('input[type=text]:eq(0)').val().replace(/[-|.]/g, ""));
			var end_val=Number($(item).parent().find('input[type=text]:eq(1)').val().replace(/[-|.]/g, ""));
			if($(item).hasClass('null_false')){
				if(!start_val){
					start_input.focus();
					alert(obj_title + " 시작일은 필수 입력란 입니다. 해당란을 입력해 주십시오.");
					re_val=false;
					return false;
				}else if(!end_val){
					end_input.focus();
					alert(obj_title + " 종료일은 필수 입력란 입니다. 해당란을 입력해 주십시오.");
					re_val=false;
					return false;
				}else{
					if(start_val > end_val){
						end_input.focus();
						alert(obj_title + " 종료일은 시작일보다 빠를수 없습니다.");
						re_val=false;
						return false;
					}
				}
			}else{
				if($(item).hasClass('validation')){
					if(start_val > end_val){
						end_input.focus();
						alert(obj_title + " 종료일은 시작일보다 빠를수 없습니다.");
						re_val=false;
						return false;
					}
				}
			}
		}else{
			$(this).val(fnClearXSS($(this).val()));
			if(!$(item).prop('disabled')){
				if($(item).hasClass('null_false')){
					if($(item).hasClass('editor')){
						var validator=new Trex.Validator();
						var content=Editor.getContent();
						if(!validator.exists(content)){
							alert('내용을 입력하세요');
							re_val=false;
							Editor.focus();
							return false;
						}
					}else{
						if($(item).val() == ""){
							$(item).focus();
							var obj_title=$(item).attr('title');
							if(obj_title == ""){
								obj_title=$('label[for=' + $(item).attr('id') + ']').text().replace(/<(\/)?([a-zA-Z]*)(\s[a-zA-Z]*=[^>]*)?(\s)*(\/)?>/g, "").replace(/[*]/gi, "").replace(/\n/gi, "");
							}
							alert(obj_title + "는(은) 필수 입력란 입니다.\n해당란을 입력(선택)해 주십시오");
							re_val=false;
							return false;
						}else{
							if($(item).hasClass('validation')){
								var validation_data=fn_validation_check($(item));
								if(validation_data[0]){
									$(item).val('');
									$(item).focus();
									alert(validation_data[1]);
									re_val=false;
									return false;
								}
							}
						}
					}
				}else{
					if($(item).val() != ""){
						if($(item).hasClass('validation')){
							var validation_data=fn_validation_check($(item));
							if(validation_data[0]){
								$(item).val('');
								$(item).focus();
								alert(validation_data[1]);
								re_val=false;
								return false;
							}
						}
					}
				}
			}
		}
	});
	return re_val;
}

/*******************************************************************************
 * 영문 숫자 한글 및 기타 체크
 *
 * @param type
 *            체크할 타입
 * @param msg
 *            체크할 메시지
 * @returns {Array}
 */
function fn_validation_check(element){

	var return_ck=null;
	var return_msg=null;
	var validation_type=null;

	if(element.hasClass('number')){
		validation_type=/^[0-9]+$/;
		return_msg="숫자만 입력해주세요.";
	}else if(element.hasClass('eng')){
		validation_type=/^[a-zA-Z0-9]+$/;
		return_msg="영문만 입력해주세요.";
	}else if(element.hasClass('eng_number')){
		validation_type=/^[a-zA-Z0-9]+$/;
		return_msg="영문과 숫자 조합으로 입력해주세요.";
	}else if(element.hasClass('kor')){
		validation_type=/^[가-힣\s]+$/;
		return_msg="한글만 입력해주세요.";
	}else if(element.hasClass('mail')){
		validation_type=/([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return_msg="메일만 입력해주세요.";
	}else if(element.hasClass('all')){
		validation_type=/[^(가-힣a-zA-Z0-9)]/;
		return_msg="특수기호는 입력할수 없습니다.";
	}else if(element.hasClass('latlng')){
		validation_type=/^[0-9-.]+$/;
		return_msg="좌표만 입력해주세요.";
	}

	var return_values=new Array();

	if(validation_type == null){
		return_ck=true;
		return return_values;
	}

	if(validation_type.test(element.val())){
		return_ck=false;
	}else{
		return_ck=true;
	}
	return_values[0]=return_ck;
	return_values[1]=return_msg;

	return return_values;
}


/** 모든 input script 지우기 * */
function fnClearXSS(str){
	var ret=str;
	ret=ret.replace(/\<script[^>]*>/g, "").replace(/<\/script\>/g, "");
	//ret=ret.replace(/<script[^>]*>(.*?)<\/script\\s*>/gi, "").replace(/<[^>]+on[a-zA-Z]{4,}=[^>]*>/gi, "");
	/*
	 * form_obj.find(':input:not(:hidden)').each(function(){ //replace(/</g,
	 * "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#34;") $(this).val(str);
	 * });
	 */
	return ret;
}
function fnClearFormXSS(form_obj){
	form_obj.find(':input:not(:hidden)').each(function(){
		// replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&#34;")
		var str=$(this).val();
		str=str.replace(/\<script[^>]*>/g, "").replace(/<\/script\>/g, "");
		$(this).val(str);
	});
}
/** 모든 input script 지우기 * */


/**
 * 설문조사 로그인 체크 Ajax
 * @param el
 * @param pageMenuCd
 */
function fnAjaxSurveyLoginConfirm(el, pageMenuCd){
	var menucd=null;
	var site=null;
	if(location.href.indexOf("kor") > -1){
		site="kor";
		menucd=138;
	}else if(location.href.indexOf("cyber") > -1){
		site="cyber";
		menucd=270;
	}else if(location.href.indexOf("office") > 1){
		site="office";
		menucd=421;
	}

	var url=el.attr("href");
	var data=new Array();
	data={menucd: pageMenuCd, site: site};
	var successFn=function(json){
		if(json.rs == 1){
			alert("로그인 또는 본인확인이 필요한 서비스 입니다.");
			location.href="loginForm.do?menuIdx=" + menucd;
		}
	};
	fn_ajax_json(url, data, successFn, null)
}

/* faq 게시판 */
function bbs_faq(e){
	var bbs_name = e;
    $(bbs_name + " dd").hide();
    $(bbs_name + " dt a").on('click', function(){
      $(this).parent().next('dd').slideDown();
      $(this).addClass('open');
      return false;
    });
    $(bbs_name + " .faq_btn .btn").on('click', function(){    
      $(this).parents('dd').slideUp();
      $(this).parents('dd').prev().children('a').removeClass('open');
      return false;
      
    });
}


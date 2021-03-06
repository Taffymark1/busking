// 탭이동
function tab_menu(num){
    var f = $('.pro_tab_wapper').find('li');
    for ( var i = 0; i < f.length; i++ ) { 
    	if ( i == num) { 
      		f.eq(i).addClass('active');
      		$('.tab-pane' + i ).css('display','block');
     	} else {
      		f.eq(i).removeClass('active');   
      		$('.tab-pane' + i ).css('display','none');
     	}
    }
}

//탭이동(팔로우 / 팔로워)
function tab_menu_follow(num){
    var f = $('.category__tab').find('a');
    for ( var i = 0; i < f.length; i++ ) { 
    	if ( i == num) { 
      		f.eq(i).addClass('current');
      		$('.tab-pane-follow' + i ).css('display','block');
     	} else {
      		f.eq(i).removeClass('current');   
      		$('.tab-pane-follow' + i ).css('display','none');
     	}
    }
}

//　팔로우 취소 이벤트
$(".follow__cancel").click(function () {
	data = $(this).parent().parent().attr("value").split(",");
	const followMemberNo = data[0];
	const followBuskerNo = data[1];
	
	Swal.fire({
		  title: '팔로우를 취소하시겠습니까?',
		  type: 'info',
		  showCancelButton: true,
		  confirmButtonColor: '#3085d6',
		  cancelButtonColor: '#d33',
		  confirmButtonText: '예',
		  cancelButtonText: '아니오',
		}).then((result) => {
		  if (result.value) {
			  $.ajax({
					type: 'POST',
					url: "followCancel.do",
					data: {"memberNo":followMemberNo, "buskerNo":followBuskerNo},
					success: function(cancelResult) {
						if(cancelResult == 0) {
							Swal.fire({
								  title:'팔로우 취소',
								  type:'success',
								  timer:2000	
							}).then(function () {
								location.reload();
							});
						}
					}
				});
	        	return true;
		  }
	})
});

$(".follow_list_noneBuskerNo").click(function() {
	Swal.fire({
		  title:'해당유저는 버스커가 아닙니다!',
		  type:'info',
		  timer:2000
	});
});


//Get the modal
var modal = document.getElementById('myModal');
var probtn = document.getElementById("profileBtn");
var span = document.getElementsByClassName("close")[0];                                          
var cbtn = document.getElementsByClassName("closeBtn")[0];                                          

probtn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

cbtn.onclick = function() {
    modal.style.display = "none";
}


// 프로필 이미지 미리보기
let sel_file;

$(document).ready(function () {
	$("#profile__img").on("change", handleImgFileSelect);
});

function handleImgFileSelect(e) {
	e.preventDefault();
	
	let prvFiles = e.target.files;
	let filesArr = Array.prototype.slice.call(prvFiles);
	
	filesArr.forEach(function (f) {
		if(!f.type.match("image.*")) {
			alert("확장자는 이미지 확장자만 가능합니다.");
			$("#profile__img").val("");
			return;
		}
		
		sel_file = f;
		
		let reader = new FileReader();
		reader.onload = function (e) {
			$(".preview-profile").css('display','inline-block');
			$(".btn-file-word").css('display','none');
			console.log(e.target.result);
			$("#profile__preview").attr("src", e.target.result);
			
		}
		reader.readAsDataURL(f);
	});
}

// 프로필 이미지 업로드
let maxSize  = 5 * 1024 * 1024;

$(".closeBtn").click(function () {
	$("#profile__img").val("");
	$("#profile__preview").removeAttr("src");
	$('.preview-profile').css('display','none');
	$(".btn-file-word").css('display','inline-block');
});

$(".saveBtn").click(function (f) {
	if(($("#profile__img").val() == "" || $("#profile__img").val() == null)) {
		alert("이미지 파일을 등록해주세요!");
	} else if($("#profile__img")[0].files[0].size > maxSize) {
		alert("이미지 파일은 5MB를 초과할수 없습니다!");
	} else {
		let file = $("#profile__img")[0].files[0];
		let uriPath = "/buskers/main/board/member/";
		
		let formData = new FormData();
		formData.append("file", file);
		formData.append("uriPath", uriPath);
		formData.append("memberNo", userMemberNo);
		formData.append("id", id);
		formData.append("profileImg", profileImg);
		formData.append("profileImgPath", profileImgPath);
		$.ajax({
			type: 'POST',
			url: "profileUpload.do",
			data: formData,
			processData: false,
			contentType: false,
			cache : false,
			success: function(result) {
				alert("프로필 이미지를 업로드 했습니다.");
				location.reload();
			},
			error: function(error) {
				alert("프로필 이미지 업로드에 실패하였습니다.");
				console.log(error);
				console.log(error.status);
			}
			
		});
	}
});

/* 프로필 소개글 */
	$("#modify_intorduce").click(function DoupdateIntroduce() {
		
		// 프로필 소개글 공백 확인
        if($("#introduce__textarea").val() == ""){
          	alert("소개글을 입력해주세요!");
          	$("#introduce__textarea").focus();
          	return false;
        }
        
        Swal.fire({
			  title: '소개글을 변경하시겠습니까?',
			  type: 'info',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: '예',
			  cancelButtonText: '아니오',
			}).then((result) => {
			  if (result.value) {
		       		$("#member__introduce").submit();
		        	return true;
			  }
		})
	})



/*  후승 개인정보 변경  */
	let emailck = 0;
	let nickNameck = 0;
	
	$(".user__nickName").on("change paste keyup", function() {
		nickNameck = 0;
	});
	
	$(".user__email").on("change paste keyup", function() {
		emailck = 0;
	});
	
	$("#modify").click(function DosignUp() {
		let getMail = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
     	let getCheck = RegExp(/^[a-zA-Z0-9]{4,16}$/);
     	let getCheckPwd = RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
      	let getName = RegExp(/^[가-힣]+$/);
      	let nickName = $(".user__nickName").val();
      	
      	
      	if("${sessionScope.user.isBusker}" == 'n'){
      	// 비밀번호 공백 확인
          	if($("#pass").val() == "") {
          		Swal.fire({
    				  title:'비밀번호를 입력해 주세요',
    				  type:'warning',
    				  timer:2000	
    			});
          		return false;
          	}
          	
          	// 비밀번호 유효성 검사
          	if(!getCheckPwd.test($("#pass").val())) {
    	      	Swal.fire({
    				  title:'비밀번호는 특수문자를 제외한 영문,숫자를 혼용하여 8~16자를 입력해주세요!',
    				  type:'warning',
    				  timer:2000	
    			});
    	      	$("#pass").val("");
    	      	$("#pass").focus();
    	      	return false;
          	}	
          	
         	// 비밀번호체크 공백 확인
          	if($("#checkpass").val() == "") {
          		Swal.fire({
    				  title:'비밀번호확인을 입력해 주세요',
    				  type:'warning',
    				  timer:2000	
    			});
          		return false;
          	}
         
            // 비밀번호와 비밀번호체크가 같은지 검사
            if($("#pass").val() != ($("#checkpass").val())){ 
            	Swal.fire({
    				  title:'비밀번호가 같지 않습니다.',
    				  type:'warning',
    				  timer:2000	
    			});
    	        $("#pass").val("");
    	        $("#checkpass").val("");
    	        $("#pass").focus();
            	return false;
            }
      	}
      	    
        // 이메일 공백 확인
        if($(".user__email").val() == ""){
        	Swal.fire({
				  title:'이메일을 입력해 주세요..',
				  type:'warning',
				  timer:2000	
			});
          	$(".user__email").focus();
          	return false;
        }
             
        // 이메일 유효성 검사
        if(!getMail.test($(".user__email").val())){
        	Swal.fire({
				  title:'이메일형식에 맞게 입력해 주세요.',
				  type:'warning',
				  timer:2000	
			});
          	alert("이메일형식에 맞게 입력해주세요!")
          	$(".user__email").focus();
          	return false;
        }
        
        
        Swal.fire({
			  title: '개인정보를 변경하시겠습니까?',
			  type: 'info',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: '예',
			  cancelButtonText: '아니오',
			}).then((result) => {
			  if (result.value) {
				 	if (emailck == 0) {
				 		Swal.fire({
							  title:'이메일 중복체크를해 주세요',
							  type:'warning',
							  timer:2000	
						});
			       		return false;
			       	}  else if (nickNameck == 0) {
			       		Swal.fire({
							  title:'닉네임 중복체크를해 주세요',
							  type:'warning',
							  timer:2000	
						});
			       		return false;
			       	}  else {
			       		Swal.fire({
							  title:'정보가 변경되었습니다.',
							  type:'success',
							  timer:2000	
						}).then(function () {
				       		$("#user_info").submit();
				        	return true;
						});
			       	}
			  }
		})
	})
	
	// 이메일 중복 체크
	$(function() {
		$("#checkEmail").click(function() {
			let email = $(".user__email").val();
			if(email == ""){
				Swal.fire({
					  title:'이메일을 입력해주세요',
					  type:'info',
					  timer:2000	
				});
			return
			}
			/* 현재이메일과 같은경우 */ 
			if(email==userEmail){
				Swal.fire({
					  title:'사용가능한 이메일 입니다',
					  type:'info',
					  timer:2000	
				});
				emailck = 1;
				return;
			}
			
			//이메일 공백일때
			if(email.length < 1) {
				Swal.fire({
					  title:'이메일을 입력해 주세요',
					  type:'warning',
					  timer:2000	
				});
			} else {
				$.ajax({
					data: "email="+email,
					url: "checkEmail.do",
					success: function(result) {
						if (result == 0) {
							Swal.fire({
								  title:'사용가능한 이메일 입니다',
								  type:'info',
								  timer:2000	
							});
							emailck = 1;
						} else if (result == 1) {
							Swal.fire({
								  title:'존재하는 이메일입니다.',
								  type:'warning',
								  timer:2000	
							});
						} else {
							Swal.fire({
								  title:'에러발생',
								  type:'warning',
								  timer:2000	
							});
						}
					}
				});
			}
		});
	})
	
	/* 닉네임 중복체크 */
	$(function() {
		$("#checkNickName").click(function() {
			let nickName = $(".user__nickName").val();

			/* 현재닉네임과 같은경우 */
			if(nickName==userNickName){
				Swal.fire({
					  title:'사용가능한 닉네임 입니다',
					  type:'info',
					  timer:2000	
				});
				nickNameck = 1;
				return;
			
			}			
			
			if(nickName.length < 1) {
				Swal.fire({
					  title:'닉네임을 입력해 주세요',
					  type:'info',
					  timer:2000	
				});
			} else {
				$.ajax({
					data: "nickName="+nickName,
					url: "checkNickName.do",
					success: function(result) {
						if (result == 0 || nickName===userNickName) {
							Swal.fire({
								  title:'사용가능한 닉네임 입니다',
								  type:'info',
								  timer:2000	
							});
							nickNameck = 1;
						} else if (result == 1) {
							Swal.fire({
								  title:'이미 존재하는 닉네임입니다. 다른 닉네임을 입력해주세요',
								  type:'warning',
								  timer:2000	
							});
						} else {
							alert("에러 발생");
						}
					}
				});
			}
		});
	});
	
	/*  버스커정보 변경  */
	let activityNameck = 0;
	const updateBusker = document.updateBusker;
	const phone = updateBusker.phone;
	const buskerCheckbox = updateBusker.buskerCheckbox;
	
	$("#changeActivityName").on("change paste keyup", function() {
		activityNameck = 0;
	});
	
	$("#modify_busker").click(function () {
		let activityName = $(".busker__activityName").val();
        
        /* 활동명 공백 확인 */
        if($("#changeActivityName").val() == ""){
          	alert("활동명을 입력해주세요!");
          	$("#changeActivityName").focus();
          	return false;
        }
        
        /* 폰번호 공백 확인 */
        if($("#phone").val() == "") {
        	alert("폰번호를 입력해주세요!");
        	$("#phone").focus();
        	return false;
        }
        
        /* 유효성 검사 */
        if (!isCellPhone(phone.value)){
			alert("연락처를 형식에 맞게 입력해주세요\n ex) 010-3333-3333");
			return false;
		}
        
        /* 체크박스 체크 */
        if (!checkbox(buskerCheckbox)) {
			alert("관심분야를 1가지이상 선택하세요.");
			return false;
		}
        
        Swal.fire({
			  title: '버스커정보를 변경하시겠습니까?',
			  type: 'info',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: '예',
			  cancelButtonText: '아니오',
			}).then((result) => {
			  if (result.value) {
				 	if (activityNameck == 0) {
				 		Swal.fire({
							  title:'활동명 중복체크를해 주세요',
							  type:'warning',
							  timer:2000	
						});
			       		return false;
			       	} else {
			       		Swal.fire({
							  title:'정보가 변경되었습니다.',
							  type:'success',
							  timer:2000	
						}).then(function () {
				       		$("#updateBusker").submit();
				        	return true;
						});
			       	}
			  }
		})
	})

	/* 체크박스 체크 */
	function checkbox(buskerCheckbox){
		 let flag = false;
		 for(let check of buskerCheckbox){
			 if(check.checked){
				 flag = true;
				 break;
			 };
		 }
		 return flag;
	}
	
	/* 연락처 유효성 검사. */
	function isCellPhone(p) {
		const phonenum = $('#phone').val();
		const regPhone = /(01[0|1|6|9|7])[-](\d{3}|\d{4})[-](\d{4}$)/g;
		if(!regPhone.test(phonenum)){
			$('#phone').select();
			return false;    
		}
		return true;
	}
	
	/* 활동명 중복 체크 */
	$(function() {
		$("#updateActivityName").click(function() {
			let activityName = $(".busker__activityName").val();
			
			/* 현재활동명과 같은경우 */ 
			if(activityName == buskeractivityName){
				Swal.fire({
					  title:'사용가능한 활동명 입니다',
					  type:'info',
					  timer:2000	
				});
				activityNameck = 1;
				return;
			}
			
			/* 활동명 공백일때 */
			if(activityName.length < 1) {
				Swal.fire({
					  title:'활동명을 입력해 주세요',
					  type:'warning',
					  timer:2000	
				});
			} else {
				$.ajax({
					data: "activityName="+activityName,
					url: "checkActivityName.do",
					success: function(result) {
						if (result == 0) {
							Swal.fire({
								  title:'사용가능한 활동명 입니다',
								  type:'info',
								  timer:2000	
							});
							activityNameck = 1;
						} else if (result == 1) {
							Swal.fire({
								  title:'존재하는 활동명입니다.',
								  type:'warning',
								  timer:2000	
							});
						} else {
							Swal.fire({
								  title:'에러발생',
								  type:'warning',
								  timer:2000	
							});
						}
					}
				});
			}
		});
	});
	
	
 
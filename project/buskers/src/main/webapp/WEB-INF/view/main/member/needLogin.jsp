<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet" href="<c:url value='/resources/css/common/sweetalert2.min.css'/>" />
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@8"></script>
<title>buskers</title>
</head>
<body>
<script>
/* window.alert("${msg}"); */
Swal.fire({
  title:'로그인후에 이용가능합니다',
  type:'info',
  timer: 2000
});
setTimeout( () => window.location.href="/buskers/main/member/loginform.do",1500);
</script>
</body>
</html>
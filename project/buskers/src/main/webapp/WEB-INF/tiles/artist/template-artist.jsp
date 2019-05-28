<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="tiles" uri="http://tiles.apache.org/tags-tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="<c:url value='/resources/css/artist/main/artist.css' />" />
    <script src="<c:url value='/resources/js/jquery-3.4.1.min.js'/>"></script>
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
      integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
      crossorigin="anonymous"
    />
    <title>Buskers</title>
  </head>
  <body>
    <!-- <button>확인</button> -->
    <div class="busker">
      <tiles:insertAttribute name="sidebar" />
      <tiles:insertAttribute name="info" />
      <section class="busker-section">
        <tiles:insertAttribute name="header" />
        <main class="busker-main">
          <tiles:insertAttribute name="body" />
          <tiles:insertAttribute name="chat" />
        </main>
      </section>
    </div>
    <script src="<c:url value='/resources/js/artist/main/artist.js' />"></script>
  </body>
</html>
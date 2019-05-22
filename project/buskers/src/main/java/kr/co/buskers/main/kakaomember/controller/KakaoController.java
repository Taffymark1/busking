package kr.co.buskers.main.kakaomember.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import kr.co.buskers.main.member.service.MemberService;
import kr.co.buskers.repository.domain.Member;

@Controller
@RequestMapping("main/member")
public class KakaoController {
	@Autowired
	private MemberService service;
	
	// 카카오 로그인 디비에 없을시에 회원가입 처리후 메인으로 이동
	@RequestMapping("kakao-signup.do")
	public String signupMember(HttpSession session, Member member,RedirectAttributes rttr) {
		service.signupKakaoMember(member);
		Member user = service.login(member);
		user.setAccessToken(member.getAccessToken());
		session.setAttribute("user", user);
		session.setMaxInactiveInterval(60 * 60);   //물어보기
		
		return "redirect:/index.jsp";
	}
	
	@RequestMapping("kakao-checkid.do")
	@ResponseBody
	public int checkId(Member member) {
		int result = 0;
        int user = service.checkId(member);
        if(user != 0) {
        	result = 1;
        }
		return result;
	}
	

	
	// 로그인 처리
		@RequestMapping("kakao-login.do")
		public String login(HttpSession session, Member member,RedirectAttributes rttr) {
			Member user = service.login(member);
			user.setAccessToken(member.getAccessToken());
			session.setAttribute("user", user);
			session.setMaxInactiveInterval(60 * 60);   //물어보기
			return "redirect:/index.jsp";
		}
	

}
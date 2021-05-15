package user.controller;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import user.model.service.UserService;
import user.model.vo.User;

/**
 * Servlet implementation class UserUpdateServlet
 */
@WebServlet("/uupdate")
public class UserUpdateServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	/**
	 * @see HttpServlet#HttpServlet()
	 */
	public UserUpdateServlet() {
		super();
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 회원 정보 수정 처리용 컨트롤러
		// 1. 전송온 값에 한글이 있다면, 인코딩 처리함
		request.setCharacterEncoding("UTF-8"); // 전송보낸 뷰페이지의 문자셋으로 지정

		// 2. 전송온 값 꺼내서 변수 또는 vo 객체에 기록 저장
		User user = new User();
		// String 변수 = request.getParameter("input의 name");
		user.setUserPw(request.getParameter("user_pw"));
		user.setPhone(request.getParameter("phone"));
		user.setAddress(String.join(",", request.getParameterValues("address")));
		user.setUserId(request.getParameter("user_id"));

		// 수정 처리하고, 성공하면 다시 조회해 와서 상세보기로 내보내는 작업

		System.out.println("uupdate,user : " + user);

		// 3. 모델 서비스 객체 생성하고, 메소드 실행시키고 결과 받기
		UserService userService = new UserService();
		// 클래스가 제공하는 메소드 쓰려면 생성해야됨

		int result = userService.updateUser(user);
		System.out.println("result" + result);

		// 4. 받은 결과에 따라 성공/실패 페이지를 선택해서 내보냄
		RequestDispatcher view = null;
		if (result > 0) {
			// 수정항목 추출에서 제외된 전송값 추출해서 user 에 기록 저장함
			User loginUser = userService.selectUser(user.getUserId());
			System.out.println("loginUser" + loginUser);
			if (user != null) {
				view = request.getRequestDispatcher("views/user/userDetailView.jsp");
				HttpSession session = request.getSession(false);
				session.setAttribute("loginUser", loginUser); // session 만들어 써야됨
				// userUPdateview 가 세션에서 꺼내서 맞춰줌
				view.forward(request, response);
			}
		} else {
			view = request.getRequestDispatcher("views/common/error.jsp");
			request.setAttribute("message", "가입된 아이디가 없습니다.");
			view.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

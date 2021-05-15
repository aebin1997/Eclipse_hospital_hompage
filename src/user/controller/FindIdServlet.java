package user.controller;

import java.io.IOException;
import java.sql.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import user.model.service.UserService;

/**
 * Servlet implementation class FindIdServlet
 */
@WebServlet("/findid")
public class FindIdServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public FindIdServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//전송온 한글 인코딩
		request.setCharacterEncoding("utf-8");
		

		//2. 전송온 값 꺼내서 vo 객체에 기록 저장
		String userNm = request.getParameter("user_nm");
		String gender = request.getParameter("gender");
		Date birthday = (java.sql.Date.valueOf(String.join("-", request.getParameterValues("birthday"))));
		
		//3. 모델에 서비스 객체 생성하고 메소드 실행
		String id = new UserService().findUser(userNm, gender, birthday);
		
		//4. 받은 결과에 따라 성공/실패 페이지를 선택해서 내보냄
		RequestDispatcher view = null;
		if(id != null) {
			view = request.getRequestDispatcher("views/user/idFound.jsp");
			request.setAttribute("id", id); //맵 방식이어서 이름, 값 
			view.forward(request, response); 
		}else {
			view = request.getRequestDispatcher("views/common/error.jsp");
			request.setAttribute("message", "가입된 아이디가 없습니다.");
			view.forward(request, response);
		}
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

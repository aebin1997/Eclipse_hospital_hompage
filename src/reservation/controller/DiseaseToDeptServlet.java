package reservation.controller;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import disease.model.service.DiseaseService;

/**
 * Servlet implementation class DiseaseToDept
 */
@WebServlet("/d2dept")
public class DiseaseToDeptServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DiseaseToDeptServlet() {
        super();
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	//예약 페이지: 병명 -> 진료과
	//ajax 로 요청온 것임
	
		request.setCharacterEncoding("utf-8");

		String diseaseNm1 = request.getParameter("diseaseNm1");
		
		System.out.println("병명클릭: " + diseaseNm1);
		
		String deptNm = new DiseaseService().findDept(diseaseNm1);
		
		response.setContentType("text/html; charset=utf-8");
		response.getWriter().append(deptNm); //내보내는 스트림 만들기
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}

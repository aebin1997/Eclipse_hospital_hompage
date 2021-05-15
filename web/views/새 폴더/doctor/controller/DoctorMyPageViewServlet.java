package doctor.controller;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import doctor.model.service.DoctorService;
import doctor.model.vo.Doctor;
import user.model.service.UserService;
import user.model.vo.User;

/**
 * Servlet implementation class DoctorMyPageViewServlet
 */
@WebServlet("/dtlist")
public class DoctorMyPageViewServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DoctorMyPageViewServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// 의사 정보 view
		
				int userNo = (Integer.parseInt(request.getParameter("user_no")));
				
				Doctor doctor = new DoctorService().selectDoctor(userNo);
				
				RequestDispatcher view = null;
				if (doctor != null) { 
					view = request.getRequestDispatcher("views/doctor/doctorMyPage.jsp");
					request.setAttribute("doctor", doctor);
					view.forward(request, response);
				} else {
					view = request.getRequestDispatcher("views/common/error.jsp");
					request.setAttribute("message", "의사 정보 조회 실패");
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

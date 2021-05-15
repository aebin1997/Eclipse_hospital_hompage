package user.model.service;

import static common.JDBCTemp.close;
import static common.JDBCTemp.commit;
import static common.JDBCTemp.getConnection;
import static common.JDBCTemp.rollback;

import java.sql.Connection;
import java.sql.Date;
import java.util.ArrayList;

import user.model.dao.UserDao;
import user.model.vo.User;

//db 연결/닫기, 트랜잭션 관리 : commit/rollback 전담하는 클래스
//뷰파일 --> 컨트롤러 --> service --> dao
public class UserService {
	// 의존성 주입(Dependency Injection : DI)
	private UserDao udao = new UserDao();

	public UserService() {
	}

	// 로그인 처리용
	public User selectLogin(String userId, String userPw) {
		Connection conn = getConnection();
		User user = udao.selectLogin(conn, userId, userPw);
		close(conn);
		return user;
	}

	// 회원가입 처리용
	public int insertUser(User user) {
		Connection conn = getConnection();
		int result = udao.insertUser(conn, user);
		if (result > 0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	// 회원탈퇴 처리용
	public int deleteUser(String userId) {
		Connection conn = getConnection();
		int result = udao.deleteUser(conn, userId);
		if (result > 0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	// 회원정보 수정 처리용
	public int updateUser(User user) {
		Connection conn = getConnection();
		int result = udao.updateUser(conn, user);
		System.out.println("service result " + result);
		if (result > 0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	// 회원정보 조회 처리용
	public User selectUser(String userId) {
		Connection conn = getConnection();
		User user = udao.selectUser(conn, userId);
		close(conn);
		return user;
	}

	// 관리자용 전체 회원 조회 처리용
	public ArrayList<User> selectList() {
		Connection conn = getConnection();
		ArrayList<User> list = udao.selectList(conn);
		close(conn);
		return list;
	}

	//아이디 중복확인 
	public int selectCheckId(String userId) { 
	Connection conn = getConnection(); 
	int idcount = udao.selectCheckId(conn, userId); 
	close(conn);
	return idcount;
	}
	
	//닉네임 중복확인
	public int selectCheckNnm(String nickNm) { Connection conn =
	getConnection();
	int nnmcount = udao.selectCheckNnm(conn, nickNm);
	close(conn);
	return nnmcount;
	}
	
	//로그인 오케이
	public int updateLoginOk(String user_id, String loginok) {
		Connection conn = getConnection();
		int result = udao.updateLoginOk(conn, user_id, loginok);
		if (result > 0)
			commit(conn);
		else
			rollback(conn);
		close(conn);
		return result;
	}

	//아이디 찾기 기능
	public String findUser(String userNm, String gender, Date birthday) {
		Connection conn = getConnection();
		String id = udao.findUser(conn, userNm, gender, birthday);
		close(conn);
		return id;
	}
	
	//회원가입 완료
	public String doneEnroll(String userId) {
		Connection conn = getConnection();
		String nm = udao.doneEnroll(conn, userId);
		close(conn);
		return nm;
	}
	
}

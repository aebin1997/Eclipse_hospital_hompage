package doctor.model.service;

import static common.JDBCTemp.close;
import static common.JDBCTemp.getConnection;

import java.sql.Connection;
import java.util.ArrayList;

import doctor.model.dao.DoctorDao;
import doctor.model.vo.Doctor;

public class DoctorService {
	//의존성 주입 
	private DoctorDao dtdao = new DoctorDao();
	
	// 의사 정보 전체 조회
		public Doctor selectDoctor(int userNo) {
			Connection conn = getConnection();
			Doctor doctor = dtdao.selectDoctor(conn, userNo);
			close(conn);
			return doctor;
		}
		
}
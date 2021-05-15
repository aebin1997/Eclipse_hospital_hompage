package disease.model.service;

import static common.JDBCTemp.close;
import static common.JDBCTemp.getConnection;

import java.sql.Connection;
import java.util.ArrayList;

import disease.model.dao.DiseaseDao;
import disease.model.vo.Disease;

//db 연결/닫기, 트랜잭션 관리 : commit/rollback 전담하는 클래스
//뷰파일 --> 컨트롤러 --> service --> dao
public class DiseaseService {
	//의존성 주입 
	private DiseaseDao ddao = new DiseaseDao();
	
	// 전체 병명 조회 처리용
		public ArrayList<Disease> selectRList() {
			Connection conn = getConnection();
			ArrayList<Disease> list = ddao.selectRList(conn);
			close(conn);
			return list;
		}
		
	// 병명 -> 진료과
		public String findDept(String diseaseNm1){
			Connection conn = getConnection();
			String deptNo = ddao.findDept(conn, diseaseNm1); //diseaseNm = String diesaseNm
			close(conn);
			return deptNo;
			
		}
}

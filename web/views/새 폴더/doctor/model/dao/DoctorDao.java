package doctor.model.dao;

import static common.JDBCTemp.close;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.PreparedStatement;

import doctor.model.vo.Doctor;

public class DoctorDao {
	public DoctorDao() {}
	
	// 의사 정보조회
	public Doctor selectDoctor(Connection conn, int userNo) {
			  Doctor d = null;	
			  PreparedStatement pstmt = null;
		      ResultSet rset = null;
		      
		      String query = "select * from tb_doctor where doc_no = ?";
		        try {
		        	pstmt = conn.prepareStatement(query);
		        	pstmt.setInt(1, userNo);
		            rset = pstmt.executeQuery();
		           
		            if(rset.next()) { //while & if 차이는?
						/* Doctor d = new Doctor(); */
		               d = new Doctor();
		               
		               d.setDocNo(rset.getInt("doctor_no"));
		               d.setDocNm(rset.getString("doctor_nm"));
		               d.setDeptNo(rset.getInt("dept_no"));
		               d.setMajor(rset.getString("major"));
		               d.setAcademicCareer(rset.getString("academic_career"));
		               d.setCareer(rset.getString("career"));
		               d.setAcademicActivity(rset.getString("academic_activity"));
		               d.setDomesticActivity(rset.getString("domestic_activity"));
		               d.setInternationalActivity(rset.getString("international_activity"));
		               d.setResearch(rset.getString("research"));
		               d.setJournal(rset.getString("journal"));
		               d.setEtc(rset.getString("etc"));
		               d.setProfilePic(rset.getString("profile_pic"));
		             
		            }
		         } catch (Exception e) {
		            e.printStackTrace();
		         }finally {
		            close(rset);
		            close(pstmt);
		         }
		         
		         return d;
		      }

	}

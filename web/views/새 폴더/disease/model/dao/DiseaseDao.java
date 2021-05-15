package disease.model.dao;

import static common.JDBCTemp.close;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;

import disease.model.vo.Disease;

//쿼리문 작성해서 db로 전달해서 실행하고 결과받음
//select 문은 받은 결과(ResultSet)를 vo 객체에 옮겨 저장(결과매핑)해서 리턴 처리함
public class DiseaseDao {
	public DiseaseDao() {}
	
	// 예약 가능한 전체 병명 조회 처리용
	 public ArrayList<Disease> selectRList(Connection conn){ //오버로딩
	      ArrayList<Disease> list = new ArrayList<Disease>();
	      Statement stmt = null;
	      ResultSet rset = null;
	      
	      String query = "select disease_no, disease_nm, dept_no, reservable from tb_disease where reservable='Y'";
	        try {
	            stmt = conn.createStatement();
	            rset = stmt.executeQuery(query);
	            while(rset.next()) {
	               Disease d = new Disease();
	               
	               d.setDiseaseNo(rset.getInt("disease_no"));
	               d.setDiseaseNm(rset.getString("disease_nm"));
	               d.setDeptNo(rset.getInt("dept_no"));
	               d.setReservable(rset.getString("reservable"));
	               
	               list.add(d);
	            }
	         } catch (Exception e) {
	            e.printStackTrace();
	         }finally {
	            close(rset);
	            close(stmt);
	         }
	         
	         return list;
	      }
	 
	// 병명 -> 진료과
	 public String findDept(Connection conn, String diseaseNm1) {
		 String diseaseNm = null;
		 PreparedStatement pstmt = null;
		 ResultSet rset = null;
		
		 String query = "select dept_nm from tb_dept where dept_no =" 
		 		+ "(select dept_no from tb_disease where disease_nm= ? )";
		 
		 try {
				//미완성된 쿼리문을 가지고 객체 먼저 생성함
				pstmt = conn.prepareStatement(query);
				//객체 생성 후에 쿼리문을 완성시킴
				pstmt.setString(1, diseaseNm1);
				//번호는 물음표 순서
				
				//쿼리문 실행시키고 결과 받음
				rset = pstmt.executeQuery();
				
				if(rset.next()) {
					diseaseNm = rset.getString(1); //조회된 항목의 순번
				}//있다면 트루 리턴 > 꺼내서 아이디에 담기
				 //여러개면 리스트에 담아서
			}catch (Exception e) {
						e.printStackTrace();
					}finally {
						close(rset);
						close(pstmt);
					}
					
					return diseaseNm;
				}

	 public ArrayList<Disease> selectList(Connection conn, int currentPage, int limit) {
	      ArrayList<Disease> list = new ArrayList<Disease>();
	      PreparedStatement pstmt = null;
	      ResultSet rset = null;
	      
	      String query = "select * from tb_disease where disease_no<900  order by disease_nm asc"; 
	            
	     
	      int startRow = (currentPage - 1) * limit + 1; // 3 page 이면 시작행은 21
	      int endRow = startRow + limit - 1; // 3page 이면 끝행은 30
	            
	      try {
	         pstmt = conn.prepareStatement(query);
	         pstmt.setInt(1, startRow);
	         pstmt.setInt(2, endRow);
	         
	         rset = pstmt.executeQuery();
	         
	         while(rset.next()) {
	            Disease disease = new Disease();
	            
	            disease.setDiseaseNo(rset.getInt("DISEASE_NO"));
	            disease.setDiseaseNm(rset.getString("DISEASE_NM"));
	            disease.setPic01(rset.getString("PIC01"));
	            disease.setDiseaseAltNm(rset.getString("DISEASE_ALT_NM"));

	            list.add(disease);
	         }
	      } catch (Exception e) {
	         e.printStackTrace();
	      }finally {
	         close(rset);
	         close(pstmt);
	      }
	         return list;
	   }



	   public Disease selectDisease(Connection conn, int diseaseNo) {
	      Disease disease = null;
	      PreparedStatement pstmt = null;
	      ResultSet rset = null;
	      
	      String query = "select * from tb_disease where disease_no = ?";
	      
	      try {
	         pstmt = conn.prepareStatement(query);
	         pstmt.setInt(1, diseaseNo);
	         
	         rset = pstmt.executeQuery();

	         if (rset.next()) {
	            disease = new Disease();
	            disease.setDiseaseNo(rset.getInt("DISEASE_NO"));
	            disease.setDiseaseNm(rset.getString("DISEASE_NM"));
	            disease.setReservable(rset.getString("RESERVABLE"));
	            disease.setDeptNo(rset.getInt("DEPT_NO"));
	            disease.setSect01(rset.getString("SECT01"));
	            disease.setText01(rset.getString("TEXT01"));
	            disease.setPic01(rset.getString("PIC01"));
	            disease.setSect02(rset.getString("SECT02"));
	            disease.setText02(rset.getString("TEXT02"));
	            disease.setPic02(rset.getString("PIC02"));
	            disease.setSect03(rset.getString("SECT03"));
	            disease.setText03(rset.getString("TEXT03"));
	            disease.setPic03(rset.getString("PIC03"));
	            disease.setSect04(rset.getString("SECT04"));
	            disease.setText04(rset.getString("TEXT04"));
	            disease.setPic04(rset.getString("PIC04"));
	            disease.setSect05(rset.getString("SECT05"));
	            disease.setText05(rset.getString("TEXT05"));
	            disease.setPic05(rset.getString("PIC05"));
	            disease.setSect06(rset.getString("SECT06"));
	            disease.setText06(rset.getString("TEXT06"));
	            disease.setPic06(rset.getString("PIC06"));
	            disease.setSect07(rset.getString("SECT07"));
	            disease.setText07(rset.getString("TEXT07"));
	            disease.setPic07(rset.getString("PIC07"));
	            disease.setDiseaseAltNm(rset.getString("DISEASE_ALT_NM"));
	         }
	         
	      } catch (Exception e) {
	         e.printStackTrace();
	      } finally {
	         close(rset);
	         close(pstmt);
	      }

	      return disease;
	   }

	   public int insertDisease(Connection conn, Disease disease) {
	      int result = 0;
	      PreparedStatement pstmt = null;

	      String query = "insert into tb_disease values ((select max(disease_no) + 1 from tb_disease) ,"
	            + " ?, ?, ?, "// diseaseNm, deptNo, reservable
	            + " ?, ?, ?, " // 01 정의
	            + " ?, ?, ?, " // 02 원인
	            + " ?, ?, ?, " // 03 증상
	            + " ?, ?, ?, " // 04 검사 · 진단
	            + " ?, ?, ?, " // 05 치료
	            + " ?, ?, ?, " // 06 합병증
	            + " ?, ?, ?, " // 07 주의사항
	            + " ? )"; // diseaseAltNm
	      
	      try {
	         pstmt = conn.prepareStatement(query);
	         pstmt.setString(1,  disease.getDiseaseNm());
	         pstmt.setInt(2, disease.getDeptNo() );
	         pstmt.setString(3, disease.getReservable());
	         pstmt.setString(4, disease.getSect01());
	         pstmt.setString(5, disease.getText01());
	         pstmt.setString(6, disease.getPic01());
	         pstmt.setString(7, disease.getSect02());
	         pstmt.setString(8, disease.getText02());
	         pstmt.setString(9, disease.getPic02());
	         pstmt.setString(10, disease.getSect03());
	         pstmt.setString(11, disease.getText03());
	         pstmt.setString(12, disease.getPic03());
	         pstmt.setString(13, disease.getSect04());
	         pstmt.setString(14, disease.getText04());
	         pstmt.setString(15, disease.getPic04());
	         pstmt.setString(16, disease.getSect05());
	         pstmt.setString(17, disease.getText05());
	         pstmt.setString(18, disease.getPic05());
	         pstmt.setString(19, disease.getSect06());
	         pstmt.setString(20, disease.getText06());
	         pstmt.setString(21, disease.getPic06());
	         pstmt.setString(22, disease.getSect07());
	         pstmt.setString(23, disease.getText07());
	         pstmt.setString(24, disease.getPic07());
	         pstmt.setString(25, disease.getDiseaseAltNm());

	         result = pstmt.executeUpdate();
	         
	      } catch (Exception e) {
	         e.printStackTrace();
	      }finally {
	         close(pstmt);
	      }
	      return result;
	   }

}






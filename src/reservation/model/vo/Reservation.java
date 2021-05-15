package reservation.model.vo;

public class Reservation implements java.io.Serializable {
	private static final long serialVersionUID = 10L;
	
	private int diseaseNo; //질환 번호
	private String diseaseNm; //질환 이름
	private int deptNo; //진료과 번호
	private String reservable; //진료 가능 여부
//	sect01
//	text01
//	pic01
//	sect02
//	text02
//	pic02
//	sect03
//	text03
//	pic03
//	sect04
//	text04
//	pic04
//	sect05
//	text05
//	pic05
//	sect06
//	text06
//	pic06
//	sect07
//	text07
//	pic07
//	disease_alt_nm
	
	public Disease() {}

	public Disease(int diseaseNo, String diseaseNm, int deptNo, String reservable) {
		super();
		this.diseaseNo = diseaseNo;
		this.diseaseNm = diseaseNm;
		this.deptNo = deptNo;
		this.reservable = reservable;
	}

	public int getDiseaseNo() {
		return diseaseNo;
	}

	public void setDiseaseNo(int diseaseNo) {
		this.diseaseNo = diseaseNo;
	}

	public String getDiseaseNm() {
		return diseaseNm;
	}

	public void setDiseaseNm(String diseaseNm) {
		this.diseaseNm = diseaseNm;
	}

	public int getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}

	public String getReservable() {
		return reservable;
	}

	public void setReservable(String reservable) {
		this.reservable = reservable;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Disease [diseaseNo=" + diseaseNo + ", diseaseNm=" + diseaseNm + ", deptNo=" + deptNo + ", reservable="
				+ reservable + "]";
	}
	
}


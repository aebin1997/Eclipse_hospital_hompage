package department.model.vo;

public class Department implements java.io.Serializable {
	private static final long serialVersionUID = 7L;
	
	
	private int deptNo;
	private String deptNm;
	
	public Department() {}

	public Department(int deptNo, String deptNm) {
		super();
		this.deptNo = deptNo;
		this.deptNm = deptNm;
	}

	public int getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}

	public String getDeptNm() {
		return deptNm;
	}

	public void setDeptNm(String deptNm) {
		this.deptNm = deptNm;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Department [deptNo=" + deptNo + ", deptNm=" + deptNm + "]";
	}
	
}


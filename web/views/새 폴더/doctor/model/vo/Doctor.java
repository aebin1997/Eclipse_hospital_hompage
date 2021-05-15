package doctor.model.vo;

public class Doctor implements java.io.Serializable {
	private static final long serialVersionUID = 10L;
	
	private int docNo;
	private String docNm;
	private int deptNo;
	private String major;
	private String academicCareer;
	private String career;
	private String academicActivity;
	private String domesticActivity;
	private String internationalActivity;
	private String research;
	private String journal;
	private String etc;
	private String profilePic;
	
	public Doctor() {}

	public Doctor(int docNo, String docNm, int deptNo, String major, String academicCareer, String career,
			String academicActivity, String domesticActivity, String internationalActivity, String research,
			String journal, String etc, String profilePic) {
		super();
		this.docNo = docNo;
		this.docNm = docNm;
		this.deptNo = deptNo;
		this.major = major;
		this.academicCareer = academicCareer;
		this.career = career;
		this.academicActivity = academicActivity;
		this.domesticActivity = domesticActivity;
		this.internationalActivity = internationalActivity;
		this.research = research;
		this.journal = journal;
		this.etc = etc;
		this.profilePic = profilePic;
	}

	public int getDocNo() {
		return docNo;
	}

	public void setDocNo(int docNo) {
		this.docNo = docNo;
	}

	public String getDocNm() {
		return docNm;
	}

	public void setDocNm(String docNm) {
		this.docNm = docNm;
	}

	public int getDeptNo() {
		return deptNo;
	}

	public void setDeptNo(int deptNo) {
		this.deptNo = deptNo;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public String getAcademicCareer() {
		return academicCareer;
	}

	public void setAcademicCareer(String academicCareer) {
		this.academicCareer = academicCareer;
	}

	public String getCareer() {
		return career;
	}

	public void setCareer(String career) {
		this.career = career;
	}

	public String getAcademicActivity() {
		return academicActivity;
	}

	public void setAcademicActivity(String academicActivity) {
		this.academicActivity = academicActivity;
	}

	public String getDomesticActivity() {
		return domesticActivity;
	}

	public void setDomesticActivity(String domesticActivity) {
		this.domesticActivity = domesticActivity;
	}

	public String getInternationalActivity() {
		return internationalActivity;
	}

	public void setInternationalActivity(String internationalActivity) {
		this.internationalActivity = internationalActivity;
	}

	public String getResearch() {
		return research;
	}

	public void setResearch(String research) {
		this.research = research;
	}

	public String getJournal() {
		return journal;
	}

	public void setJournal(String journal) {
		this.journal = journal;
	}

	public String getEtc() {
		return etc;
	}

	public void setEtc(String etc) {
		this.etc = etc;
	}

	public String getProfilePic() {
		return profilePic;
	}

	public void setProfilePic(String profilePic) {
		this.profilePic = profilePic;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}

	@Override
	public String toString() {
		return "Doctor [docNo=" + docNo + ", docNm=" + docNm + ", deptNo=" + deptNo + ", major=" + major
				+ ", academicCareer=" + academicCareer + ", career=" + career + ", academicActivity=" + academicActivity
				+ ", domesticActivity=" + domesticActivity + ", internationalActivity=" + internationalActivity
				+ ", research=" + research + ", journal=" + journal + ", etc=" + etc + ", profilePic=" + profilePic
				+ "]";
	}
	
}


package xulichuoi;

public class Sinhvien implements Comparable<Sinhvien> {
	private int maSinhvien;
	private String hovaten;
	private String tenlop;
	private double diemtrungbinh;
	public Sinhvien(int maSinhvien, String hovaten, String tenlop, double diemtrungbinh) {
		super();
		this.maSinhvien = maSinhvien;
		this.hovaten = hovaten;
		this.tenlop = tenlop;
		this.diemtrungbinh = diemtrungbinh;
	}
	public int getMaSinhvien() {
		return maSinhvien;
	}
	public void setMaSinhvien(int maSinhvien) {
		this.maSinhvien = maSinhvien;
	}
	public String getHovaten() {
		return hovaten;
	}
	public void setHovaten(String hovaten) {
		this.hovaten = hovaten;
	}
	public String getTenlop() {
		return tenlop;
	}
	public void setTenlop(String tenlop) {
		this.tenlop = tenlop;
	}
	public double getDiemtrungbinh() {
		return diemtrungbinh;
	}
	public void setDiemtrungbinh(double diemtrungbinh) {
		this.diemtrungbinh = diemtrungbinh;
	}
	public String getTen() {
		String s= this.hovaten.trim();
		if(s.indexOf(" ")>=0) {
			int vitri=s.lastIndexOf(" ");
			return s.substring(vitri+1);
		}else {return s;}
	}
	@Override
	public int compareTo(Sinhvien o) {
		// TODO Auto-generated method stub
		String tenThis=this.getTen();	
		String teno = o.getTen();
		return this.maSinhvien-o.maSinhvien;
	}
	
	
}

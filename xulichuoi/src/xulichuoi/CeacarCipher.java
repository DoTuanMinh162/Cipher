package xulichuoi;

import java.util.Scanner;

public class CeacarCipher {
	public static String encrypt(String text, int s){
		StringBuilder result = new StringBuilder();
	for(int i=0;i<text.length();i++) {
		char ch = text.charAt(i);
			if(Character.isUpperCase(ch)) {
				char c = (char)((ch+s-'A')%26+'A');
				result.append(c);
			}else if (Character.isLowerCase(ch)) {
				char c = (char)((ch+s-'a')%26+'a');
				result.append(c);
			}else {
				result.append(ch);
			}
		}
	return result.toString();
	
	}
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Nhap van ban can ma hoa: ");
		String text = sc.nextLine();
		System.out.println("Nhap so ki tu dich chuyen: ");
		int s = sc.nextInt();
		
		String result = encrypt(text, s);
		System.out.println("Ket qua: " + result);
	}
}

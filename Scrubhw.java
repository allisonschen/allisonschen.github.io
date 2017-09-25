import java.util.Scanner;
public class Scrubhw {
  public static void main(String[] args) {
    Scanner s = new Scanner(System.in);
    String x = s.nextLine().toLowerCase();
    int[] arr = new int[26];
    int max = 0;
    for(int i = 0; i < x.length(); i++) {
      if(x.charAt(i)==' ') continue;
      int spot = x.charAt(i)-'a';
      arr[spot]++;
      if(arr[spot]>max) max = arr[spot];
    }
    System.out.printf("----------------------------------\n");
    for(int i = max; i >0;i--) {
      for(int j = 0; j < 26; j++) {
	if(arr[j]==i) {
	  System.out.print('X');
	  arr[j]--;
	} else {
	  System.out.print(' ');
	}
      }
      System.out.println();
    }
    System.out.println("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    System.out.printf("----------------------------------");
    
  }
}


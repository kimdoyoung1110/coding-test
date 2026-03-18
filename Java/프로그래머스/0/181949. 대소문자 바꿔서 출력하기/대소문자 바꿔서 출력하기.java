import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        
        Scanner scanner = new Scanner(System.in);
        String str = scanner.next();
        
        // StringBuilder: 수정할 수 있는 문자열
        StringBuilder result = new StringBuilder();
        
        // toCharArray: String -> Char형으로 변환
        for (char item:str.toCharArray()){
            if (Character.isUpperCase(item))
                result.append(Character.toLowerCase(item));
            else
                result.append(Character.toUpperCase(item));
        }
        
        // Char -> String으로 다시 변환
        System.out.print(result.toString());
    }
}
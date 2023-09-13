import java.util.Scanner;

public class Contador {

    public static void main(String[] args) {
        Scanner userInput = new Scanner(System.in);
        System.out.println("Type the first param: ");
        int firstParam = userInput.nextInt();
        System.out.println("Type the second param: ");
        int secondParam = userInput.nextInt();

        try {
            counter(firstParam, secondParam);
        }catch (ParametrosInvalidosException exception) {
            System.out.println("The second param needs to be bigger than the first param! ");
        }
    }

    static void counter(int firstParam, int secondParam ) throws ParametrosInvalidosException {

        if (secondParam < firstParam) {
            throw new ParametrosInvalidosException();
        } else {
            int counter = secondParam - firstParam;

            for (int i = 0; i <= counter; i++) {
                System.out.println(i);
            }
        }
    }
}

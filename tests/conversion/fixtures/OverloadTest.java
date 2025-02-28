public class OverloadTest {
    // Overloaded methods with same parameter count but different types
    public void process(String text) {
        System.out.println("Processing text: " + text);
    }

    public void process(Integer number) {
        System.out.println("Processing number: " + number);
    }

    // Overloaded methods with different parameter counts
    public void calculate(int a) {
        System.out.println("Single parameter: " + a);
    }

    public void calculate(int a, int b) {
        System.out.println("Two parameters: " + a + ", " + b);
    }

    // Constructor overloading
    public OverloadTest() {
        System.out.println("Default constructor");
    }

    public OverloadTest(String name) {
        System.out.println("Constructor with name: " + name);
    }

    public OverloadTest(int id) {
        System.out.println("Constructor with id: " + id);
    }
}

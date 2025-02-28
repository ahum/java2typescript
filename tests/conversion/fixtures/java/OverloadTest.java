public class OverloadTest {
    // Custom class for testing complex type overloads
    public static class DataContainer {
        private Object data;
        
        public DataContainer(Object data) {
            this.data = data;
        }
        
        public Object getData() {
            return data;
        }
    }
    
    // Overloaded methods with same parameter count but different types
    public void process(String text) {
        System.out.println("Processing text: " + text);
    }

    public void process(Integer number) {
        System.out.println("Processing number: " + number);
    }
    
    // Complex type overloads with same parameter count
    public void handle(DataContainer container) {
        System.out.println("Handling data container: " + container.getData());
    }

    public void handle(Object obj) {
        System.out.println("Handling generic object: " + obj);
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

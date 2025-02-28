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
    
    public OverloadTest() {
        System.out.println("Default constructor");
    }

    public OverloadTest(String name) {
        System.out.println("Constructor with name: " + name);
    }

    public OverloadTest(DataContainer container) {
        System.out.println("Constructor with: " + container);
    }
}

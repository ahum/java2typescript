public class Outer {
  
    public static class DataContainer {
        private Object data;
        
        public DataContainer(Object data) {
            this.data = data;
        }
        
        public Object getData() {
            return data;
        }
    }
}

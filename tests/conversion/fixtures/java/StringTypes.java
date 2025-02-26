public class StringTypes {
    private String name;
    
    public StringTypes(String name) {
        this.name = name;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String formatGreeting(String prefix) {
        return prefix + " " + name;
    }
}

export class OverloadTest {
    // Custom class for testing complex type overloads
    public static class DataContainer {
        private  unknown;
        
        constructor( unknown) {
            this.data = data;
        }
        
        public getData(): unknown {
            return this.data;
        }
    }
    
    // Overloaded methods with same parameter count but different types
    public process(text: string): void;
    public process(number: number): void;
    public process(arg: unknown): void {
        if (typeof arg === "string") {
            console.log("Processing text: " + arg);
        } else if (typeof arg === "number") {
            console.log("Processing number: " + arg);
        } else {
            throw new Error("Invalid argument type");
        }
    }
    
    // Complex type overloads with same parameter count
    public handle(container: OverloadTest.DataContainer): void;
    public handle(obj: object): void;
    public handle(arg: unknown): void {
        if (arg instanceof OverloadTest.DataContainer) {
            console.log("Handling data container: " + arg.getData());
        } else if (typeof arg === "object" && arg !== null) {
            console.log("Handling generic object: " + arg);
        } else {
            throw new Error("Invalid argument type");
        }
    }

    // Overloaded methods with different parameter counts
    public calculate(a: number): void;
    public calculate(a: number, b: number): void;
    public calculate(...args: unknown[]): void {
        switch (args.length) {
            case 1: {
                const [a] = args as [number];
                console.log("Single parameter: " + a);
                break;
            }

            case 2: {
                const [a, b] = args as [number, number];
                console.log("Two parameters: " + a + ", " + b);
                break;
            }

            default: {
                throw new Error("Invalid number of arguments");
            }
        }
    }

    // Constructor overloading
    constructor(name?: string | number) {
        if (arguments.length === 0) {
            console.log("Default constructor");
        } else if (typeof name === "string") {
            console.log("Constructor with name: " + name);
        } else if (typeof name === "number") {
            console.log("Constructor with id: " + name);
        }
    }
}

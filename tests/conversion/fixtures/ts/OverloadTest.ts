export class OverloadTest {
    // Custom class for testing complex type overloads
    public static DataContainer = class {
        private  unknown;
        
        constructor( unknown) {
            this.data = data;
        }
        
        public getData(): unknown {
            return this.data;
        }
    };
    
    // Overloaded methods with same parameter count but different types
    public process(text: string): void;
    public process(number: number): void;
    public process(...args: unknown[]): void {
        // Check argument count first
        switch (args.length) {
            case 1: {
                const [arg0] = args;
                
                if (typeof arg0 === "string") {
                    const text = arg0 as string;
                    console.log("Processing text: " + text);
                }
                else if (typeof arg0 === "number") {
                    const number = arg0 as number;
                    console.log("Processing number: " + number);
                }
                else {
                    throw new Error("No overload matches this parameter type combination");
                }
                break;
            }

            default: {
                throw new Error("Invalid number of arguments");
            }
        }
    }
    
    // Complex type overloads with same parameter count
    public handle(container: OverloadTest.DataContainer): void;
    public handle(obj: object): void;
    public handle(...args: unknown[]): void {
        // Check argument count first
        switch (args.length) {
            case 1: {
                const [arg0] = args;
                
                if ((typeof arg0 === "object" && arg0 !== null && (function() { try { return arg0 instanceof OverloadTest.DataContainer; } catch(e) { return false; } })())) {
                    const container = arg0 as OverloadTest.DataContainer;
                    console.log("Handling data container: " + container.getData());
                }
                else if (typeof arg0 === "object" && arg0 !== null) {
                    const obj = arg0 as object;
                    console.log("Handling generic object: " + obj);
                }
                else {
                    throw new Error("No overload matches this parameter type combination");
                }
                break;
            }

            default: {
                throw new Error("Invalid number of arguments");
            }
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

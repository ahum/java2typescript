export class SimpleClass {
    private name: string;
    private age: number;
    
    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    
    public getName(): string {
        return this.name;
    }
    
    public setName(name: string): void {
        this.name = name;
    }
    
    public getAge(): number {
        return this.age;
    }
    
    public setAge(age: number): void {
        this.age = age;
    }
    
    public toString(): string {
        return `SimpleClass{name='${this.name}', age=${this.age}}`;
    }
}

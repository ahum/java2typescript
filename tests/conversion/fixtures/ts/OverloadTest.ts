import { java, JavaObject, S } from "jree";

export class OverloadTest extends JavaObject {
  // Custom class for testing complex type overloads
  public static DataContainer = class DataContainer extends JavaObject {
    private data: java.lang.Object | null;

    public constructor(data: java.lang.Object | null) {
      super();
      this.data = data;
    }

    public getData = (): java.lang.Object | null => {
      return this.data;
    }
  };

  public constructor();

  public constructor(name: java.lang.String | null);

  public constructor(container: OverloadTest.DataContainer | null);
  public constructor(...args: unknown[]) {
    // Check argument count first
    switch (args.length) {
      case 0: {
        super();
        java.lang.System.out.println("Default constructor");

        break;
      }

      case 1: {
        const [arg0] = args;

        if (typeof arg0 === "string") {
          const name = arg0 as java.lang.String;

          super();
          java.lang.System.out.println("Constructor with name: " + name);
        } else if ((
          typeof arg0 === "object" &&
          arg0 !== null &&
          (function () {
            try {
              return arg0 instanceof OverloadTest.DataContainer;
            } catch (e) {
              return false;
            }
          })()
        )) {
          const container = arg0 as OverloadTest.DataContainer;

          super();
          java.lang.System.out.println("Constructor with: " + container);
        } else {
          throw new Error(
            "No overload matches this parameter type combination"
          );
        }
        break;
      }

      default: {
        throw new Error("Invalid number of arguments");
      }
    }
  }
}

// eslint-disable-next-line @typescript-eslint/no-namespace, no-redeclare
export namespace OverloadTest {
  export type DataContainer = InstanceType<typeof OverloadTest.DataContainer>;
}

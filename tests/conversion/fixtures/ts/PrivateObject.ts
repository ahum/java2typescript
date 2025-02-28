import { java, JavaObject } from "jree";

export  class Outer extends JavaObject {

    public static DataContainer =  class DataContainer extends JavaObject {
        private  data:  java.lang.Object | null;

        public  constructor(data: java.lang.Object| null) {
            super();
this.data = data;
        }

        public  getData = ():  java.lang.Object | null => {
            return this.data;
        }
    };

}



export namespace Outer {
        export type DataContainer = InstanceType<typeof Outer.DataContainer>;
}

import { java, JavaObject } from "jree";



export  class Cookies extends JavaObject {

  protected static  loadCookies = (m: java.util.HashMap<java.lang.String, java.lang.String>| null):  void => {
    var docCookie = document.cookie;
  };

}

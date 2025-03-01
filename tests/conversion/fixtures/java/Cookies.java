package com.google.gwt.user.client;

import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

public class Cookies {

  static native void loadCookies(HashMap<String, String> m) /*-{
    var docCookie = $doc.cookie;
  }-*/;

}

import { PackageSource } from "./src/PackageSource.js";

const root = "/Users/ede/dev/github/ahum/gwt-experiment";
const gwtPackages = {
  "com.google.gwt.core.client.EntryPoint": root + "/user/src/com/google/gwt/core/client/EntryPoint",
  // "com.google.gwt.event.dom.client": {
  //   ClickEvent: "../../user/src/com/google/gwt/event/dom/client/ClickEvent",
  //   ClickHandler: "../../user/src/com/google/gwt/event/dom/client/ClickHandler"
  // },
  // "com.google.gwt.user.client": {
  //   Window: "../../user/src/com/google/gwt/user/client/Window"
  // },
  // "com.google.gwt.user.client.ui": {
  //   Button: "../../user/src/com/google/gwt/user/client/ui/Button",
  //   RootPanel: "../../user/src/com/google/gwt/user/client/ui/RootPanel"
  // }
};

export const gwtImportResolver  = (fullName) => {
  console.log("gwtImportResolver", fullName);
  const pkg = gwtPackages[fullName];
  if (pkg) {
    return new PackageSource(fullName, pkg[fullName], "ts-out/foo.ts");
  }
  return null;
}; 

export default gwtImportResolver;

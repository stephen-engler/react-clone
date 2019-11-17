import * as jQuery from "jquery";
import { render } from "../ReactClone/ReactDomClone";
import app from "./componentsJSX";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
  namespace JSX {
    export interface IntrinsicElements {
      [elemName: string]: any;
      props: any;
      children: any;
    }
  }
}

window.$ = jQuery;
window.jQuery = jQuery;

const load = () => {
  $(document).ready(() => {
    render(app);
  });
};

load();

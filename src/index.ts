import * as jQuery from "jquery";
import { render } from "../ReactClone/ReactDomClone";
import app from "./components";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
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

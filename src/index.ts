import * as jQuery from "jquery";

import app, { Component } from "./components";

import { isEqual, isString } from "lodash";

declare global {
  interface Window {
    $: JQueryStatic;
    jQuery: JQueryStatic;
  }
}

window.$ = jQuery;
window.jQuery = jQuery;

let virtualDom: any;

const createVirtualDom = (myComponent: () => Component) => {
  const node = myComponent();
  if (node.children[0] && node.children instanceof Function) {
  }

  const nodeChildren: any = node.children.map((child: any) => {
    if (child instanceof Function) {
      return createVirtualDom(child);
    }
    return child;
  });

  return {
    ...node,
    children: nodeChildren
  };
};

const findDiff = (prevDom: any, updatedDom: any) => {
  return isEqual(prevDom, updatedDom);
};

const render = () => {
  const updatedDom = createVirtualDom(app);
  if (!findDiff(updatedDom, virtualDom)) {
    console.log("not equal");
    virtualDom = updatedDom;
    renderComponentTreeToDom(virtualDom);
  }
};

const renderComponentTreeToDom = (newDomElement: any) => {
  const node = document.getElementById("root");
  renderComponentToDom(newDomElement, node);
};

const renderComponentToDom = (
  newComponent: Component,
  parentNode: HTMLElement
) => {
  console.log(newComponent);
  const node = document.createElement(newComponent.type);

  newComponent.children.forEach((child: any) => {
    if (isString(child)) {
      node.appendChild(document.createTextNode(child as string));
    } else if (child instanceof Object) {
      renderComponentToDom(child, node);
    }
  });

  parentNode.appendChild(node);
};

const load = () => {
  $(document).ready(() => {
    render();
  });
};

load();

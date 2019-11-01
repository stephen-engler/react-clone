import { isEqual, isString } from "lodash";

import {
  virtualDom,
  createVirtualDom,
  setVirtualDom
} from "../ReactClone/ReactClone";
import { Component } from "../ReactClone/Types";

const findDiff = (prevDom: any, updatedDom: any) => {
  return isEqual(prevDom, updatedDom);
};

export const render = (app: any) => {
  const updatedDom = createVirtualDom(app);
  if (!findDiff(updatedDom, virtualDom)) {
    console.log("not equal");

    // TODO now we are just redoing the entire dom.
    // we need to  find exactly which elements were changed
    // and just update those
    setVirtualDom(updatedDom);
    renderComponentTreeToDom(updatedDom);
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
  if (newComponent.props) {
  }

  newComponent.children.forEach((child: any) => {
    if (isString(child)) {
      node.appendChild(document.createTextNode(child as string));
    } else if (child instanceof Object) {
      renderComponentToDom(child, node);
    }
  });

  parentNode.appendChild(node);
};

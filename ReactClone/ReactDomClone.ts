import { isEqual, isString, isFunction } from "lodash";

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
    console.log(updatedDom);

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
  const node = document.createElement(newComponent.type);
  const { props } = newComponent;
  if (newComponent.props) {
    Object.keys(props).forEach(key => {
      if (isFunction(props[key])) {
        const thisAttribute = mapHandlers[key];
        node.setAttribute(thisAttribute, props[key]);
      }
    });
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

const mapHandlers: handlers = {
  onClick: "onclick",
  onChange: "onchange"
};

interface handlers {
  [key: string]: any;
}

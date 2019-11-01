import { Component } from "./Types";

declare namespace JSX {
  export interface IntrinsicElements {
    [elemName: string]: any;
    props: any;
    children: any;
  }
}

export let virtualDom: any;

export const createElement = (
  type: string,
  props: any,
  children: any
): JSX.IntrinsicElements => {
  return {
    type,
    props,
    children: [children]
  };
};

export const setVirtualDom = (newVirtualDom: any) => {
  virtualDom = newVirtualDom;
};

export const createVirtualDom = (myComponent: () => Component) => {
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

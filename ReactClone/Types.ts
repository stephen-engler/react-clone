export interface Component {
  type: string;
  children: ((() => Component) | string)[];
  props?: any;
}

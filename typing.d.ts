declare module '*.svg' {
  import * as React from 'react';

  export const SVGComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default SVGComponent;
}
import * as React from 'react';

type Props = {
  color: 'blue' | 'red' | 'black',
  size: '20' | '30' | '40'
};
const withIconProps = (WrappedComponent) => {
  return (props: Props) => {
    const {color, size} = props;
    return (
      <WrappedComponent
        style={{fill: color, width: `${size}px`, height: 'auto'}}
      />
    )
  }
};

export default withIconProps;
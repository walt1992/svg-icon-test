import * as React from 'react';
import Icon from "components/Icon/Icon";

type Props = {

};
const One = (props: Props) => {
  return (
    <div>
      Use only one icon
      <br/>
      <Icon icon={"camcorder"} size={"25px"} />
    </div>
  );
};

export default One;
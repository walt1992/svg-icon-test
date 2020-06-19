import * as React from 'react';
import CamcorderSVG from "components/Icon/svg/c";

type Props = {

};
const Single = (props: Props) => {
  return (
    <div>
      <h1>Single file import</h1>
      <p>이 방법도 결국 모든 svg를 번들에 포함시킴</p>
      <br/>
      <CamcorderSVG style={{width: '30px', height:'auto'}}/>
    </div>
  );
};

export default Single;
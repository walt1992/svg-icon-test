import * as React from 'react';
import {CamcorderIcon} from "components/Icon2";

type Props = {

};
const WayTwo = (props: Props) => {
  return (
    <div>
      <h1>방법 2</h1>
      <h2>각각의 아이콘 별로 Component화 하여 사용하는 방식</h2>
      <p>통일된 props를 주기 위해서 withIconProps라는 hoc로 한번 감싼 후 export하도록 설정</p>
      <p>장점 : 아이콘별로 컴포넌트가 각각 존재하기 때문에 빌드시 해당 페이지에서 사용된 아이콘만 빌드에 포함되도록 할 수 있는 구조</p>
      <p>단점 : 아이콘이 추가될 때마다 컴포넌트를 생성해 주어야 함. 또한 각각 아이콘을 import 해서 사용해야 하는 것도 불편함</p>
      <p>(<a href={'https://www.notion.so/reallifeliver/Tree-Shaking-with-sideEffects-8bd795fd9d914864bbfe35f0cc37bc8a'}>Tree shaking</a>을 적용하여 index 파일로부터 import 하여도 실제 사용된 코드만 빌드파일에 추가 되게끔 설정 가능</p>

      <CamcorderIcon color={'blue'} size={'20'}/>
      <CamcorderIcon color={'black'} size={"30"}/>
      <CamcorderIcon color={'red'} size={'40'}/>

    </div>
  );
};

export default WayTwo;
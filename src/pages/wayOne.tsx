import * as React from 'react';
import Icon, {iconTypes} from "components/Icon/Icon";

type Props = {

};
const WayOne = (props: Props) => {
  return (
    <div>
      <h1>방법 1</h1>
      <h2>하나의 Icon Component에서 모든 아이콘 svg를 옵션으로써 관리하는 방법</h2>

      <p>장점 : 아이콘을 관리하는 가장 쉬운 방법, svg 디렉토리에 svg 파일을 추가하고 index.ts에서 export만 해주면 설정 끝</p>
      <p>단점 : 아이콘 하나를 사용하더라도 모든 아이콘이 빌드에 포함되어 빌드파일의 사이즈가 커진다. (tree shaking 적용 불가.)</p>

      <Icon color={'red'} icon={"camcorder"} size={"20px"} />
      <Icon color={'blue'} icon={"cart"} size={"30px"}/>
      <Icon color={'black'} icon={"cloth"} size={'40px'}/>

    </div>
  );
};

export default WayOne;
import * as React from 'react';
import Icon from "components/Icon/Icon";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      <h1>SVG Icon을 효율적으로 활용하는 방법 테스트</h1>

      <ul>
        <li><Link href={'/wayOne'} as={'/wayOne'} >적용 방법 1</Link></li>
        <li><Link href={'/wayTwo'} as={'/wayTwo'} >적용 방법 2</Link></li>
      </ul>

    </div>
  )
}

export default Home;

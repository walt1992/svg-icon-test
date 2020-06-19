import * as React from 'react';
import Icon from "components/Icon/Icon";
import Link from "next/link";
const Home = () => {
  return (
    <div>
      This is SVG Icon test
      <br/>
      <Link href={'/one'} as={'/one'} >use One Icon</Link>
      <br/>
      <Link href={'/all'} as={'/all'} >All-icons</Link>
      <br/>
      <Link href={'/no'} as={'/no'} >no-icon</Link>
      <br/>
      <Link href={'/single'} as={'/single'} >single file import </Link>
    </div>
  )
}

export default Home;

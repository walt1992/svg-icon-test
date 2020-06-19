import * as React from 'react';
import Icon, {iconTypes} from "components/Icon/Icon";

type Props = {

};
const All = (props: Props) => {
  return (
    <div>
      {iconTypes.map(type => <Icon icon={type} size={'30px'} />)}
    </div>
  );
};

export default All;
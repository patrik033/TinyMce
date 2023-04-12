/* eslint-disable eqeqeq */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable dot-notation */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as React from 'react'
import { ITinyMceProps } from './ITinyMceProps';
import Test from './TestBundling';

const TinyMce: React.FC<ITinyMceProps> = (props) => {

  const {
    hasTeamsContext,
    context
  } = props;

  const [value,setValue] = React.useState(null);

  console.log(context);

const save = (content:any) => {
  setValue(content);
}

React.useEffect(() => {
  if(value != null){
    console.log(value);
  }
},[value])

  console.log(hasTeamsContext)

  return (
    <div>
      <Test
      saveInput={save} 
      initialContent="Hello sir"
      />
    </div>
  );
}

export default TinyMce;
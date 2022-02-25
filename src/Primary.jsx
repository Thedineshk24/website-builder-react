import 'grapesjs-preset-webpage';
import { GrapesjsReact } from 'grapesjs-react';
import "grapesjs/dist/css/grapes.min.css";

export const Primary = () => {
  return <GrapesjsReact
    id='grapesjs-react'
    plugins={[
      'gjs-preset-webpage',
      'gjs-blocks-basic'
    ]}
  />;
};
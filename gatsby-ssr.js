import React from 'react';

('use strict');

export const onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  setPostBodyComponents([
    <div
      key={pluginOptions.key ? pluginOptions.key : 'portal'}
      id={pluginOptions.id ? pluginOptions.id : 'portal'}
    >
      {pluginOptions.text}
    </div>,
  ]);
};

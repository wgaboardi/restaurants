import React from 'react';
import BaseText from './Base';

const Text = ({ children, size, textStyle, alerta, ...others }) => (
  <BaseText size={size} textStyle={textStyle} alerta={alerta} {...others}>
    {children}
  </BaseText>
);

export default Text;

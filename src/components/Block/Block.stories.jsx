import React from 'react';
import Block from './Block';

export const BlockPrimary = () => (
  <Block color='primary'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ea animi
    ipsam odit corporis consequuntur ad maxime neque quam fuga nesciunt
    reiciendis molestiae ex, eos rerum corrupti ipsa. Libero, aliquam?
  </Block>
);
export const BlockSuccess = () => (
  <Block color='success'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ea animi
    ipsam odit corporis consequuntur ad maxime neque quam fuga nesciunt
    reiciendis molestiae ex, eos rerum corrupti ipsa. Libero, aliquam?
  </Block>
);
export const BlockDanger = () => (
  <Block color='danger'>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum ea animi
    ipsam odit corporis consequuntur ad maxime neque quam fuga nesciunt
    reiciendis molestiae ex, eos rerum corrupti ipsa. Libero, aliquam?
  </Block>
);

export default {
  title: 'Block',
  component: Block,
};

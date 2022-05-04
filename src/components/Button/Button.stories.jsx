import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button color='primary' type='button'>
    First button
  </Button>
);
export const Success = () => (
  <Button color='success' type='reset'>
    First button
  </Button>
);
export const Danger = () => (
  <Button color='danger' type='submit'>
    First button
  </Button>
);

// export const Primary = () => (

//   return <S.Button type="primary">First button</S.Button>;

// );
export default {
  title: 'Button',
  component: Button,
};

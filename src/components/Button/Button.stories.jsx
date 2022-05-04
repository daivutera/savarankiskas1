import React from 'react';
import Button from './Button';

export const Primary = () => (
  <Button color='primary' type='button'>
    First button
  </Button>
);
export const Primary1 = () => (
  <Button color='success' type='reset'>
    First button
  </Button>
);
export const Primary2 = () => (
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

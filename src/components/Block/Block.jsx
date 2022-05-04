import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Block.styled';

const theme = {
  primary: { background: 'grey' },
  success: { background: 'green' },
  danger: { background: 'red' },
};

const Block = ({ children, color }) => {
  return <S.Block color={theme[color]}>{children}</S.Block>;
};

Block.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success', 'danger']),
};

export default Block;

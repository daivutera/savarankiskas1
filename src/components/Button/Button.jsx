import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styled';

const color = {
  primary: { background: 'red' },
  secondary: { background: 'green' },
};

const Button = ({ children, type }) => {
  //color ar butina rasyt per propsa siuo atveju, jei virsuj pasirasiau?
  return <S.Button gotTypeFromProps={color[type]}>{children}</S.Button>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
};

Button.defaultProps = {
  type: 'secondary',
};

export default Button;

// const Tag = ({ type, children }) => {
//   return <S.Tag type={colors[type]}>{children}</S.Tag>;
// };

// Tag.propTypes = {
//   type: PropTypes.oneOf(['primary', 'secondary']),
//   children: PropTypes.node.isRequired,
// };

// Tag.defaultProps = {
//   type: 'primary',
// };

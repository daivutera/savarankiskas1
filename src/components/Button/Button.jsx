import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Button.styled';

const styleByProps = {
  primary: { background: 'yellow' },
  success: { background: 'rgb(30, 165, 30)' },
  danger: { background: 'red' },
};
// Button (color: primary, success, danger; type: submit, reset, button).
const Button = ({ children, color, type }) => {
  //color ar butina rasyt per propsa siuo atveju, jei virsuj pasirasiau?
  return (
    <S.Button gotTypeFromProps={styleByProps[color]} type={type}>
      {children}
    </S.Button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'success, danger']).isRequired,
};

Button.defaultProps = {
  color: 'primary',
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

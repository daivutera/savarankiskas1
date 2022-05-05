import React from 'react';
import PropTypes from 'prop-types';
import * as S from './Hero.styled';

const theme = {
  success: { background: '#1cb81c' },
  danger: { background: '#ec9e9e' },
};

const Hero = ({ children, title, subtitle, color }) => {
  return (
    <S.Hero color={theme[color]}>
      <S.Heroh1>{title}</S.Heroh1>
      <S.Heroh3>{subtitle}</S.Heroh3>
      <p>{children}</p>
    </S.Hero>
  );
};

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  subtitle: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['danger', 'success']),
};

export default Hero;

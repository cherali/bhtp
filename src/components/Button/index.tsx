import type { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { IPallete } from 'theme/pallete'

type ISize = 'small' | 'medium' | 'large';

interface ButtonProps {
  size?: ISize;
  color?: 'primary';
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  children: ReactNode;
}

const _SIZES = {
  small: 32,
  medium: 40,
  large: 60,
}

const _PADDINGS = {
  small: '0 8px',
  medium: '0 16px',
  large: '0 32px',
}

const _ICONSIZE = {
  small: 16,
  medium: 22,
  large: 32,
}

const _FONTSIZE = {
  small: 12,
  medium: 16,
  large: 20,
}

const primaryBG = (startColor?: string, endColor?: string) => `
  background: ${endColor};
  background: linear-gradient(0deg, ${endColor} 0%, ${startColor} 100%);
`
const _BGCOLORS = (pallete: IPallete) => ({
  primary: primaryBG(pallete.primary.light, pallete.primary.dark),
})


type ExcludeTypes = 'startIcon' & 'endIcon' & 'children'


const StyledButton = styled.button<Omit<ButtonProps, ExcludeTypes>>(({ theme, size = 'medium', color = 'primary' }) => `
  height: ${_SIZES[size]}px;
  border: none;
  border-radius: 8px;
  box-shadow: 0px 6px 14px -3px ${theme.pallete.primary.darkest};
  background: ${_BGCOLORS(theme.pallete)[color]};
  color: ${theme.pallete.white};
  text-transform: uppercase;
  padding: ${_PADDINGS[size]};
  display: flex;
  justify-content: center;
  align-items: center;
  outline-color: ${theme.pallete.primary.darkest};
  white-space: nowrap;
  font-size: ${_FONTSIZE[size]}px;
  cursor: pointer;

  :hover {
    opacity: 0.92;
  }
`)

const IconWrapper = styled.span<{ size: ISize }>(({ size = 'medium' }) => `
  &, svg {
    width: ${_ICONSIZE[size]}px;
    height: ${_ICONSIZE[size]}px;
  }
`)

const StartIconWrapper = styled(IconWrapper)`
  padding-right: 4px;
`

const EndIconWrapper = styled(IconWrapper)`
  padding-left: 4px;
`

const Button: FC<ButtonProps> = ({
  color = 'primary',
  size = 'medium',
  children,
  startIcon,
  endIcon,
}) => {
  return (
    <StyledButton
      size={size}
      color={color}
    >
      {startIcon && <StartIconWrapper size={size}>{startIcon}</StartIconWrapper>}
      {children}
      {endIcon && <EndIconWrapper size={size}>{endIcon}</EndIconWrapper>}
    </StyledButton>
  )
}

export default Button
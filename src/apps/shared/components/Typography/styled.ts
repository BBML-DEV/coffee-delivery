import styled from 'styled-components'

interface TittleTextPros {
  color?: 'title' | 'subtitles'
  size?: 'extra-large' | 'large' | 'medium' | 'small' | 'extra-small'
  weight?: string | number
}

interface RegularTextProps {
  color?: 'text' | 'subtitles'
  size?: 'regular-large' | 'regular-medium' | 'regular-small'
  weight?: string | number
}

export const TittleText = styled.h1<TittleTextPros>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'title'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`title-${size ?? 'medium'}`]};
  font-family: ${({ theme }) => theme.fonts.title};
  font-weight: ${({ weight }) => weight ?? 800};
  line-height: 130%;
`

export const RegularText = styled.p<RegularTextProps>`
  color: ${({ theme, color }) => theme.colors[`base-${color ?? 'text'}`]};
  font-size: ${({ theme, size }) =>
    theme.textSizes[`text-${size ?? 'regular-medium'}`]};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-weight: ${({ weight }) => weight ?? 400};
  line-height: 130%;
`

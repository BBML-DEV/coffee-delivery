import styled from 'styled-components'

export const TittleCardContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: flex-start;

  > div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
  }
`

interface IconsProps {
  variant: 'purple' | 'yellow'
}

export const Icon = styled.span<IconsProps>`
  color: ${({ theme, variant }) => theme.colors[variant]};
`

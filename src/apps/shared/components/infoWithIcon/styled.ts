import styled from 'styled-components'

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.875rem;
`

interface iconProps {
  iconBg: 'purple' | 'purple-dark' | 'yellow' | 'yellow-dark'
}

export const IconContainer = styled.div<iconProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-color: ${({ iconBg }) => iconBg};
`

import { styled } from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => `${theme.spacing(4)} ${theme.spacing(3)}`};
`;

export const HeaderText = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeights.large};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const Loader = styled.div`
  width: ${({ theme }) => theme.spacing(8)};
  height: ${({ theme }) => theme.spacing(8)};
  border: 5px solid ${({ theme }) => theme.colors.lightSecondaryText};
  border-top: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  animation: spin 1.15s ease-in-out infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ErrorWrapper = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: ${({ theme }) => theme.spacing(5)};
`;

export const ErrorMessage = styled.p`
  margin: 0;
  padding: ${({ theme }) => `${theme.spacing(1)} ${theme.spacing(12)}`};
  border: 2px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  color: ${({ theme }) => theme.colors.error};
  background-color: ${({ theme }) => theme.colors.errorBackground};
`;

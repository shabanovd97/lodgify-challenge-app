import styled from 'styled-components';

export const AccordionWrapper = styled.details`
  border: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
  border-top: none;
  border-radius: 0;

  &:first-of-type {
    border-top: 1px solid ${({ theme }) => theme.colors.secondaryBorder};
    border-top-left-radius: ${({ theme }) => theme.spacing(1)};
    border-top-right-radius: ${({ theme }) => theme.spacing(1)};
  }

  &:last-of-type {
    border-bottom-left-radius: ${({ theme }) => theme.spacing(1)};
    border-bottom-right-radius: ${({ theme }) => theme.spacing(1)};
  }

  & + & {
    margin-top: -1px;
  }
`;

export const AccordionSummary = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacing(3)};
  cursor: pointer;
`;

export const AccordionTitle = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionTitleIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(2)};
`;

export const AccordionTitleText = styled.h2<{ completed: boolean }>`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.medium};
  color: ${({ theme, completed }) =>
    completed ? theme.colors.primary : theme.colors.primaryText};
`;

export const AccordionExpand = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(1)};
  padding: 0;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.lightSecondaryText};
  font-size: ${({ theme }) => theme.fontSizes.normal};
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  line-height: ${({ theme }) => theme.lineHeights.normal};
  cursor: pointer;
  user-select: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryText};
  }

  @media (max-width: 320px) {
    & {
      display: none;
    }
  }
`;

export const AccordionExpandIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(3)};
  height: ${({ theme }) => theme.spacing(3)};
`;

export enum DirectionType {
  top = 'top',
  right = 'right',
  bottom = 'bottom',
  left = 'left',
}

export const Chevron = styled.div<{ direction: DirectionType }>`
  height: ${({ theme }) => theme.spacing(1)};
  width: ${({ theme }) => theme.spacing(1)};
  margin-top: -4px; // Centering chevron according to the Mockup
  border-style: solid;
  border-width: 1px 1px 0 0;
  border-color: ${({ theme }) => theme.colors.primaryText};
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  transform: ${({ direction }) => direction === 'top' && 'rotate(-45deg)'};
  transform: ${({ direction }) => direction === 'right' && 'rotate(45deg)'};
  transform: ${({ direction }) => direction === 'bottom' && 'rotate(135deg)'};
  transform: ${({ direction }) => direction === 'left' && 'rotate(-135deg)'};
`;

export const AccordionDetails = styled.div`
  padding: ${({ theme }) => `${theme.spacing(2)}`};
`;

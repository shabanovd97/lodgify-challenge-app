import styled from 'styled-components';

export const CheckboxWrapper = styled.fieldset`
  margin: 0;
  padding: ${({ theme }) => theme.spacing(2)};
  border: none;
`;

export const CheckboxHiddenInput = styled.input.attrs({ type: 'checkbox' })`
  display: none;
`;

export const CheckboxContent = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  width: fit-content;
  user-select: none;
  cursor: pointer;
`;

export const CheckboxStyledInput = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ theme }) => theme.spacing(2)};
  height: ${({ theme }) => theme.spacing(2)};
  border: ${({ checked, theme }) =>
    `1px solid ${checked ? theme.colors.primary : theme.colors.lightSecondaryText}`};
  border-radius: ${({ theme }) => theme.spacing(0.5)};
  background-color: ${({ checked, theme }) =>
    checked ? theme.colors.primary : 'transparent'};
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  &:after {
    display: ${({ checked }) => (checked ? 'block' : 'none')};
    content: '';
    margin-top: -2px; // Centering the checkmark according to the Mockup
    width: ${({ theme }) => theme.spacing(1.1)};
    height: ${({ theme }) => theme.spacing(0.7)};
    border-left: ${({ theme }) =>
      `1px solid ${theme.colors.primaryBackground}`};
    border-bottom: ${({ theme }) =>
      `1px solid ${theme.colors.primaryBackground}`};
    rotate: -45deg;
    box-sizing: border-box;
  }
`;

export const CheckboxLabel = styled.span`
  color: ${({ theme }) => theme.colors.secondaryText};
`;

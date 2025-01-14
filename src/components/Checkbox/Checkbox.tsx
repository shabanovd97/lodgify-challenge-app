// import { useRef } from 'react';
import {
  CheckboxContent,
  CheckboxHiddenInput,
  CheckboxLabel,
  CheckboxStyledInput,
  CheckboxWrapper,
} from './styles';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  // I like this approach (using ref) but for better code readability and simplicity I would use additional label-wrapper element to solve this problem
  /* const inputRef = useRef<HTMLInputElement>(null);

  function handleCheckBoxClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  } */

  return (
    <CheckboxWrapper>
      <CheckboxHiddenInput
        checked={checked}
        onChange={onChange}
        id={label}
        // ref={inputRef}
      />
      <CheckboxContent htmlFor={label}>
        <CheckboxStyledInput
          checked={checked}
          // onClick={handleCheckBoxClick}
        />
        <CheckboxLabel>{label}</CheckboxLabel>
      </CheckboxContent>
    </CheckboxWrapper>
  );
}

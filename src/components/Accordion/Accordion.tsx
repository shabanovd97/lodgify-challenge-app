import { useState } from 'react';

import AccordionIcon from '@/assets/icons/booking-features.svg?react';
import AccordionIconCompleted from '@/assets/icons/booking-ok.svg?react';

import {
  AccordionDetails,
  AccordionExpand,
  AccordionExpandIcon,
  AccordionSummary,
  AccordionTitle,
  AccordionTitleIcon,
  AccordionTitleText,
  AccordionWrapper,
  Chevron,
  DirectionType,
} from './styles';

interface AccordionProps {
  title: string;
  completed?: boolean;
  children: React.ReactNode;
}

export default function Accordion({
  title,
  completed = false,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState<boolean>(false);

  function handleToggle() {
    setOpen((prev) => !prev);
  }

  return (
    <AccordionWrapper open={open} onToggle={handleToggle}>
      <AccordionSummary>
        <AccordionTitle>
          <AccordionTitleIcon>
            {completed ? <AccordionIconCompleted /> : <AccordionIcon />}
          </AccordionTitleIcon>
          <AccordionTitleText completed={completed}>{title}</AccordionTitleText>
        </AccordionTitle>
        <AccordionExpand>
          <span>{open ? 'Hide' : 'Show'}</span>
          <AccordionExpandIcon>
            <Chevron
              direction={open ? DirectionType.top : DirectionType.bottom}
            />
          </AccordionExpandIcon>
        </AccordionExpand>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionWrapper>
  );
}

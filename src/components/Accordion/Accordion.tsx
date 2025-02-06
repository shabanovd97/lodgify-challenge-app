import { ReactNode, useEffect, useRef } from 'react';

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
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<string | null>>;
  completed?: boolean;
  children: ReactNode;
}

export default function Accordion({
  title,
  open,
  setOpen,
  completed = false,
  children,
}: AccordionProps) {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    if (detailsRef.current) {
      if (detailsRef.current.open !== open) {
        detailsRef.current.open = open;
      }
    }
  }, [open]);

  function handleOpen(e: React.MouseEvent<HTMLDetailsElement>) {
    e.preventDefault();
    setOpen((prev) => (prev !== title ? title : null));
  }

  return (
    <AccordionWrapper ref={detailsRef} open={open}>
      <AccordionSummary onClick={handleOpen}>
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

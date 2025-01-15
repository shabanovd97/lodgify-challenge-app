import { useMemo } from 'react';

import ProgressBar from '@/components/ProgressBar/ProgressBar';

import { HeaderText, HeaderWrapper } from './style';

import { useTaskWidgetContext } from '@/layouts/TaskWidget/hooks/context-hooks';

import { calculateProgress } from '@/utils/progress-helpers';

export default function Header() {
  const { tasks } = useTaskWidgetContext();
  const progress = useMemo(() => calculateProgress(tasks), [tasks]);

  return (
    <HeaderWrapper>
      <HeaderText>Lodgify Grouped Tasks</HeaderText>
      <ProgressBar progress={progress} />
    </HeaderWrapper>
  );
}

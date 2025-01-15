import { useMemo } from 'react';

import ProgressBar from '@/components/ProgressBar/ProgressBar';

import {
  ErrorMessage,
  ErrorWrapper,
  HeaderText,
  HeaderWrapper,
  Loader,
  LoaderWrapper,
} from './style';

import { useTaskWidgetContext } from '@/layouts/TaskWidget/hooks/context-hooks';

import { calculateProgress } from '@/utils/progress-helpers';

export default function Header() {
  const { tasks, loading, error } = useTaskWidgetContext();
  const progress = useMemo(() => calculateProgress(tasks), [tasks]);

  return (
    <HeaderWrapper>
      <HeaderText>Lodgify Grouped Tasks</HeaderText>
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}

      {error && (
        <ErrorWrapper>
          <ErrorMessage>{error.message}</ErrorMessage>
        </ErrorWrapper>
      )}

      {!loading && !error && <ProgressBar progress={progress} />}
    </HeaderWrapper>
  );
}

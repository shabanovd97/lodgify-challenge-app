import ProgressBar from '@/components/ProgressBar/ProgressBar';

import { HeaderText, HeaderWrapper } from './style';

export default function Header({ progress }: { progress: number }) {
  return (
    <HeaderWrapper>
      <HeaderText>Lodgify Grouped Tasks</HeaderText>
      <ProgressBar progress={progress} />
    </HeaderWrapper>
  );
}

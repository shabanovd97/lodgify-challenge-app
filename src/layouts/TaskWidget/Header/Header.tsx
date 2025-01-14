import ProgressBar from '@/components/ProgressBar/ProgressBar';

import { HeaderWrapper } from './style';

export default function Header({ progress }: { progress: number }) {
  return (
    <HeaderWrapper>
      <h1>Lodgify Grouped Tasks</h1>
      <ProgressBar progress={progress} />
    </HeaderWrapper>
  );
}

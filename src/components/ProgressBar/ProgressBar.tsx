import { Progress, ProgressBarWrapper, ProgressText } from './styles';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <ProgressBarWrapper>
      <Progress percentage={progress}>
        <ProgressText>{`${progress}%`}</ProgressText>
      </Progress>
    </ProgressBarWrapper>
  );
}

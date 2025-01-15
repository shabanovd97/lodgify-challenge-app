import { Progress, ProgressBarWrapper, ProgressText } from './styles';

interface ProgressBarProps {
  progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <Progress percentage={progress}>
        <ProgressText>{`${progress}%`}</ProgressText>
      </Progress>
    </ProgressBarWrapper>
  );
}

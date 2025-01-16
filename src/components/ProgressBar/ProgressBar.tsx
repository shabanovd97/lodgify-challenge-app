import {
  ProgressBarIndicator,
  ProgressBarText,
  ProgressBarWrapper,
} from './styles';

export default function ProgressBar({ progress }: { progress: number }) {
  return (
    <ProgressBarWrapper
      role="progressbar"
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <ProgressBarIndicator percentage={progress}>
        <ProgressBarText>{`${progress}%`}</ProgressBarText>
      </ProgressBarIndicator>
    </ProgressBarWrapper>
  );
}

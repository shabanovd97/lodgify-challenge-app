import React, { ReactNode } from 'react';

import { ErrorContainer } from './styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo): void {
    console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          Something went wrong. Please try again later.
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

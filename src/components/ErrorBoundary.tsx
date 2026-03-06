import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg flex items-center justify-center p-5 text-center">
          <div className="max-w-md">
            <div className="text-6xl mb-6">Oops! 🧸</div>
            <h1 className="font-display text-3xl font-black mb-4 text-dark">Something went wrong</h1>
            <p className="text-mid mb-8">
              Even the best explorers take a wrong turn sometimes! Please try refreshing the page.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-pink text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:scale-105 transition-transform"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

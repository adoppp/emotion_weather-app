import { Component, type ReactNode } from "react";
import { ErrorPage } from "@/pages/ErrorPage/ErrorPage";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }


  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <ErrorPage
          propError={{
            title: this.state.error.name,
            message: this.state.error.message,
          }}
        />
      );
    }

    return this.props.children;
  }
}

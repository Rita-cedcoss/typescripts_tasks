import React, { Component } from "react";
// typeScript 
type errorBoundariesProps = {
  children: React.ReactNode;
  random: number;
  numGenerator: () => void;
};
type classProps = {
  errorStatus: boolean;
  errorMsg: string;
};
// class component child
export default class ErrorBoundaries extends Component<
  errorBoundariesProps,
  classProps
> {
  constructor(props: errorBoundariesProps) {
    super(props);
    this.state = {
      errorStatus: false,
      errorMsg: "",
    };
  }
  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { errorStatus: true };
  }
  componentDidCatch() {
    this.setState({ errorMsg: "Number is Less than 5!" });
  }
  render() {
    if (this.state.errorStatus === true) {
      return (
        <>
          <h2>{this.state.errorMsg}</h2>
        </>
      );
    }
    return this.props.children;
  }
}

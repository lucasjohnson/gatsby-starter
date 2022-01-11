import React from 'react';
import ReactDOM from 'react-dom';

const portalRoot =
  typeof document !== `undefined` && document.getElementById('portal');
const element =
  typeof document !== `undefined` && document.createElement('div');

export default class extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  componentDidMount = (): void => {
    portalRoot.appendChild(element);
  };

  componentWillUnmount = (): void => {
    portalRoot.removeChild(element);
  };

  render() {
    const { children } = this.props;

    if (element) {
      return ReactDOM.createPortal(children, element);
    } else {
      return null;
    }
  }
}

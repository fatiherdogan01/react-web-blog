import React, { PureComponent } from "react";

import PropTypes from "prop-types";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { prism } from "react-syntax-highlighter/dist/esm/styles/prism";

class CodeBlock extends PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string
  };

  static defaultProps = {
    language: null
  };

  render() {
    const { language, value } = this.props;
    return (
      <div style={borderStyle}>
        <SyntaxHighlighter language={language} style={prism}>      
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }
}
const borderStyle = {
  borderLeft: '7px solid #F5F2F0',
  borderRight: '7px solid #F5F2F0',
  borderRadius: 8
}

export default CodeBlock;
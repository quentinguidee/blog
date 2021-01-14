import React, { Component } from "react";
import { atomOneDark, CopyBlock, dracula } from "react-code-blocks";

import "./sass/Code.sass";

export default class Code extends Component {
    render() {
        return (
            <div className="code">
                <CopyBlock
                    text={this.props.code}
                    language={this.props.language}
                    showLineNumbers={false}
                    theme={dracula}
                    wrapLines
                />
            </div>
        );
    }
}

import React from 'react';

class Headline extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { header, desc } = this.props;

        if (!header) {
            return null;
        }

        return <div data-test="HeadlineComponent">
            <h1 data-test="header">{header}</h1>
            {/* Test */}
            <p data-test="desc">{desc}</p>
        </div>
    }
}

export default Headline;
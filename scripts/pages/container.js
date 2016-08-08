import React, { PropTypes, Children } from 'react';

const PageContainer = (props) => (<div className="pageContainer" style={{ minHeight: '720px' }}>
    {Children.only(props.children)}
</div>);

PageContainer.propTypes = {
    children: PropTypes.element
};

export default PageContainer;

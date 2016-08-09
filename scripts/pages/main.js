import React from 'react';
import Info from 'containers/choice';
import Form from 'containers/form';
import Finish from 'containers/finishBtn';
const FormView = Form.View;
const main = () => (
    <div>
        <Info />
        <FormView />
        <Finish />
    </div>
);

export default main;

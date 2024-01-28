// MockupGenerator.js
import React from 'react';
import RMGHeader from './RMG/RMGHeader';
import RMGText from './RMG/RMGText';
import RMGInput from './RMG/RMGInput';
import RMGButton from './RMG/RMGButton';

const MockupGenerator = ({ input }) => {
    return (
        <div>
            <center>
                <RMGHeader>{input.title}</RMGHeader><br />
                <RMGText>{input.description}</RMGText><br />
                <RMGInput title="email" /><br />
                <RMGInput title="password" /><br />
                <RMGButton title="login" /><br />
            </center>
        </div>
    );
};

export default MockupGenerator;

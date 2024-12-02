import React from 'react';

const InlineStyling: React.FC = ( isHighlighted ) => {
    const divStyle = {
        backgroundColor: 'lightblue',
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center' as const
    };

    const textStyle = {
        color: 'darkblue',
        fontSize: '20px',
        fontWeight: 'bold' as const
    };


    return (
        <div>
            {/* Example of inline stlying that uses an object to define the styles. */}
            <div style={divStyle}>
                <p style={textStyle}>This is an example of inline styling in React.</p>
            </div>

            
            {/* Example of inline stlying that actually defines the styles in the argument. */}
            <div
                style={{
                    backgroundColor: 'lightcoral',
                    padding: '20px',
                    borderRadius: '5px',
                    textAlign: 'center' as const
                }}
            />

            {/* Example of dynamic inline stlying that uses a conditional to determine the styles. */}
            <div
                style={{
                backgroundColor: isHighlighted ? 'lightgreen' : 'lightcoral',
                padding: '20px',
                borderRadius: '5px',
                textAlign: 'center' as const,
                marginTop: '20px'
                }}
            >
                { isHighlighted ? 'Highlighted' : 'Not Highlighted' }
            </div>


        </div>
    );
};

export default InlineStyling;
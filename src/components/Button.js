import * as React from 'react';

function Button({disabled, onClick, children}) {
    return (
        <button
        type="button"
        disabled={disabled}
        onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
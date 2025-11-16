import React from 'react';
import { ButtonProps } from '@/interfaces'; 

const Button: React.FC<ButtonProps> = ({ title, style }) => {
    // Define basic default styling (blue background, padding, rounded)
    const baseClasses = 'bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600 transition-colors';
    
    // Combine base styles with any custom classes passed via the 'style' prop
    const combinedClasses = `${baseClasses} ${style}`;
    
    return (
        <button className={combinedClasses.trim()}>
            {title}
        </button>
    )
}

export default Button;
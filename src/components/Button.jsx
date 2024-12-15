import React from 'react';
import PropTypes from 'prop-types';

export const Button = ({ children, onClick, variant = 'default', className = '' }) => {
  const baseStyles =
    'inline-flex items-center justify-center px-4 py-2 border rounded shadow-sm text-sm font-medium transition';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-gray-300 text-gray-700 hover:bg-gray-50',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['default', 'outline']),
  className: PropTypes.string,
};

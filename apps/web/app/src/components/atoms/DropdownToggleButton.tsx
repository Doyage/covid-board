import React from 'react';

interface DropdownToggleButtonProps {
  displayContent: React.ReactNode;
  onClick: () => void;
}

const DropdownToggleButton: React.FC<DropdownToggleButtonProps> = ({
  displayContent,
  onClick,
}) => {
  return (
    <button
      type="button"
      className="w-full text-left bg-white border border-gray-300 rounded-lg shadow-sm px-4 py-2 text-gray-700 hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
      onClick={onClick}
    >
      {displayContent}
    </button>
  );
};

export default DropdownToggleButton;

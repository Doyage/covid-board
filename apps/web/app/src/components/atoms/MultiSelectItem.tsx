import React from 'react';

interface MultiSelectItemProps {
  item: string;
  isSelected: boolean;
  onClick: (item: string) => void;
}

const MultiSelectItem: React.FC<MultiSelectItemProps> = ({
  item,
  isSelected,
  onClick,
}) => {
  return (
    <div
      className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => onClick(item)}
    >
      <span className="text-gray-700">{item}</span>
      {isSelected && (
        <svg
          className="w-4 h-4 text-blue-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </svg>
      )}
    </div>
  );
};

export default MultiSelectItem;

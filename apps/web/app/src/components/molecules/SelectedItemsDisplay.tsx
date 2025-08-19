import React from 'react';
import SelectedTag from '../atoms/SelectedTag';

interface SelectedItemsDisplayProps {
  selectedItems: string[];
  placeholder: string;
  isMulti?: boolean; // New prop
}

const SelectedItemsDisplay: React.FC<SelectedItemsDisplayProps> = ({
  selectedItems,
  placeholder,
  isMulti = true, // Default to multi-select
}) => {
  return (
    <div className="flex flex-wrap gap-1">
      {selectedItems.length > 0 ? (
        isMulti ? (
          selectedItems.map((item, index) => (
            <SelectedTag key={index} item={item} />
          ))
        ) : (
          <span className="text-gray-700">{selectedItems[0]}</span>
        )
      ) : (
        <span className="text-gray-500">{placeholder}</span>
      )}
    </div>
  );
};

export default SelectedItemsDisplay;

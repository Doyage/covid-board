'use client';

import React, { useEffect, useRef, useState } from 'react';
import DropdownToggleButton from '../atoms/DropdownToggleButton';
import MultiSelectMenu from '../molecules/MultiSelectMenu';
import SelectedItemsDisplay from '../molecules/SelectedItemsDisplay';

interface MultiSelectDropdownProps {
  items: string[];
  isMulti?: boolean; // New prop
}

const MultiSelectDropdown: React.FC<MultiSelectDropdownProps> = ({
  items,
  isMulti = true, // Default to multi-select
}) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: string) => {
    if (isMulti) {
      setSelectedItems((prevItems) => {
        if (prevItems.includes(item)) {
          return prevItems.filter((i) => i !== item);
        } else {
          return [...prevItems, item];
        }
      });
    } else {
      // Single select mode
      setSelectedItems([item]);
      setIsOpen(false); // Close dropdown after single selection
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="w-full max-w-sm" ref={dropdownRef}>
      <div className="relative">
        <DropdownToggleButton
          displayContent={
            <SelectedItemsDisplay
              selectedItems={selectedItems}
              placeholder="항목 선택..."
              isMulti={isMulti} // Pass isMulti to SelectedItemsDisplay
            />
          }
          onClick={handleToggleDropdown}
        />

        {isOpen && (
          <div className="absolute z-10 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200">
            <MultiSelectMenu
              items={items}
              selectedItems={selectedItems}
              onItemClick={handleItemClick}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiSelectDropdown;

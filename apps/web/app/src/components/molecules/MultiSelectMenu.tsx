import React from 'react';
import MultiSelectItem from '../atoms/MultiSelectItem';

interface MultiSelectMenuProps {
  items: string[];
  selectedItems: string[];
  onItemClick: (item: string) => void;
}

const MultiSelectMenu: React.FC<MultiSelectMenuProps> = ({
  items,
  selectedItems,
  onItemClick,
}) => {
  return (
    <div className="py-1">
      {items.map((item) => (
        <MultiSelectItem
          key={item}
          item={item}
          isSelected={selectedItems.includes(item)}
          onClick={onItemClick}
        />
      ))}
    </div>
  );
};

export default MultiSelectMenu;

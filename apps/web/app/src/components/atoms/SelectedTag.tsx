import React from 'react';

interface SelectedTagProps {
  item: string;
}

const SelectedTag: React.FC<SelectedTagProps> = ({ item }) => {
  return (
    <span className="inline-flex items-center bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mr-1 my-0.5">
      {item}
    </span>
  );
};

export default SelectedTag;

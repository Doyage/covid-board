import React from 'react';
import MultiSelectDropdown from '../src/components/organisms/MultiSelectDropdown';

const items = [
  'Apple',
  'Banana',
  'Cherry',
  'Date',
  'Grape',
  'Kiwi',
  'Lemon',
  'Mango',
  'Orange',
  'Peach',
];

export default function DropdownExamplePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 space-y-8">
      <h1 className="text-2xl font-bold">Multi-Select Dropdown</h1>
      <MultiSelectDropdown items={items} isMulti={true} />

      <h1 className="text-2xl font-bold">Single-Select Dropdown</h1>
      <MultiSelectDropdown items={items} isMulti={false} />
    </div>
  );
}

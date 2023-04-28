import { useState } from 'react';
import Select from 'react-select';
import { Fruit } from '../../types';
import s from './TypeAhead.module.scss';

interface Option {
  value: number;
  label: string;
}

interface TypeAheadProps {
  fruits: Fruit[];
}

const TypeAhead = (props: TypeAheadProps) => {
  const [selected, setSelected] = useState<Option | null>(null);
  const [searchOptions, setSearchOptions] = useState<Option[]>([]);

  const handleOnChange = (selectedOption: Option | null) => {
    setSelected(selectedOption);
    if (selectedOption) {
      console.log(`Selected fruit: ${selectedOption.label} (ID: ${selectedOption.value})`);
    }
  };

  const handleSearch = (query: string) => {
    const options = props.fruits
      .filter((fruit) => fruit.name.toLowerCase().includes(query.toLowerCase()))
      .map((fruit) => ({
        value: fruit.id,
        label: fruit.name,
      }));
    setSearchOptions(options);
  };

  const DropdownIndicator = () => null; // custom component to disable dropdown indicator

  return (
    <div className={s.TypeAhead}>
      <label className={s.label} htmlFor="typeahead-input">
        Product
      </label>
      <div className={s.inputGroup}>
        <Select
          id="typeahead"
          inputId="typeahead-input" // set inputId to connect label and input
          onChange={handleOnChange}
          onInputChange={handleSearch}
          options={searchOptions}
          placeholder="Search for a fruit..."
          value={selected}
          isClearable={true}
          components={{
            DropdownIndicator,
          }}
        />
        <button type="button">Add</button>
      </div>
    </div>
  );
};

export default TypeAhead;

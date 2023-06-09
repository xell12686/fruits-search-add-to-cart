import { useState, useContext } from 'react';
import Select from 'react-select';
import s from './TypeAhead.module.scss';
import { CartContext } from '../../contexts/CartContext';
import { Fruit } from '../../types';

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
  const { addToCart, updateItemQuantity, cartItems } = useContext(CartContext);

  const handleOnChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      const selectedFruit = props.fruits.find((f) => f.id === selectedOption.value);
      if (selectedFruit) {
        const existingItem = cartItems.find((i) => i.id === selectedFruit.id);
        if (existingItem) {
          handleIncrementItem(selectedFruit);
        } else {
          addToCart(selectedFruit);
        }
      }
    }
    setSelected(selectedOption);
  };

  const handleIncrementItem = (selectedItem: Fruit) => {
    const currentQuantity = cartItems.find((i) => i.id === selectedItem.id)?.quantity ?? 0;
    updateItemQuantity(selectedItem.id, currentQuantity + 1);
  };

  const handleAddToCart = () => {
    if (selected) {
      const selectedFruit = props.fruits.find((f) => f.id === selected.value);
      if (selectedFruit) {
        const existingItem = cartItems.find((i) => i.id === selectedFruit.id);
        if (existingItem) {
          handleIncrementItem(selectedFruit);
        } else {
          addToCart(selectedFruit);
        }
      }
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

  const inputGroupClasses = [s.inputGroup];
  if (selected) {
    inputGroupClasses.push(s.selected);
  }

  return (
    <div className={s.TypeAhead}>
      <label className={s.label} htmlFor="typeahead-input">
        Product
      </label>
      <div className={inputGroupClasses.join(' ')}>
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
        <button onClick={handleAddToCart} disabled={!selected}>
          Add
        </button>
      </div>
    </div>
  );
};

export default TypeAhead;


import { Fruit } from '../../types';
import s from './TypeAhead.module.scss';

interface TypeAheadProps {
  // Add any necessary props here
  fruits: Fruit[]
}

const TypeAhead = (props: TypeAheadProps) => {
  
  console.log("TypeAhead Fruits", props.fruits);

  return (
    <div className={s.TypeAhead}>
      {/* Your TypeAhead component content */}
    </div>
  );
};

export default TypeAhead;

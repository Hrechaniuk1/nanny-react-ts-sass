// gen imports 
import Select, { StylesConfig } from 'react-select'
import {FC} from 'react'

// styles
import css from './FilterSelect.module.scss'

// types
type OptionType = {
    value: string;
    label: string;
}

// component
const options: OptionType[] = [
    {value: 'rating', label: 'Rating'},
    {value: 'price_per_hour', label: 'Price per hour'},
    {value: 'name', label: 'Name'},
] 

const customStyles: StylesConfig<OptionType> = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'rgb(16, 57, 49)', 
      border: 'none',
      boxShadow: 'none',
      borderRadius: '14px',
      '&:hover': {
        backgroundColor: 'rgb(12, 46, 40)', 
      },
      color: 'white',
      padding: '7px',
    }),
    indicatorSeparator: () => ({
        display: 'none',
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: state.isFocused ? 'black' : 'gray',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'white',
    }),
    menu: (provided) => ({
        ...provided,
        borderRadius: '20px', 
        overflow: 'hidden'
      }),
  };


const FilterSelect: FC = () => {

    function changeHandler() {

    }

    return (
        <Select
        options={options}
        placeholder='Change filters'
        onChange={changeHandler}
        defaultValue={options[2]}
        styles={customStyles}
        className={css.selectContainer}
        >

        </Select>
    )
}

export default FilterSelect
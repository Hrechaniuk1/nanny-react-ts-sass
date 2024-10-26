// gen imports 
import Select from 'react-select'
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

const FilterSelect: FC = () => {

    function changeHandler() {

    }

    return (
        <Select
        options={options}
        placeholder='Change filters'
        onChange={changeHandler}
        >

        </Select>
    )
}

export default FilterSelect
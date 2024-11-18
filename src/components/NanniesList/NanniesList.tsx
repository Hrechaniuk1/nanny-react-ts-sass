// get imports
import { FC } from "react";

// custom imports
import NannieCard from "../NannieCard/NannieCard";
import { NannyResponse } from "../../redux/operatioms";

// styles 
import css from './NanniesList.module.scss';

// types
type NanniesListProps = {
    data?: NannyResponse[] | undefined;
    idList?: string[];
    sotrBy?: 'rating' | 'price_per_hour' | 'name'
};

const NanniesList: FC<NanniesListProps> = ({ data, idList, sotrBy }) => {
    let list = data;

    if (idList && idList.length === 0) {
        list = [];
    } else if (idList && idList.length !== 0 && data) {

        const filteredList = data.filter(item => idList.includes(item.id));

        if (sotrBy) {
            filteredList.sort((a, b) => {
                const aValue = a[sotrBy];
                const bValue = b[sotrBy];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return aValue - bValue;
                }

                if (typeof aValue === 'string' && typeof bValue === 'string') {
                    return aValue.localeCompare(bValue);
                }

                return aValue === undefined ? 1 : -1;
            });

            list = filteredList;
        }
    }

    return (
        <ul className={css.list}>
            {list?.map(item => (
                <li key={item.id}>
                    <NannieCard data={item} />
                </li>
            ))}
        </ul>
    );
};

export default NanniesList;

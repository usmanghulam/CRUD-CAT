import { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Context } from '../../ContextApi/StoreContext';
import Dropdown from '../components/DropDown';

const sidebar = observer(() => {
    const { cats, getAllCats, removeCat, getSingleCat } = useContext(Context);
    useEffect(() => {
        typeof getAllCats === "function" && getAllCats();
    }, []);
    const showTodos = cats.map(({ name, description, _id, breed, age }) => <div className="border" key={_id}>
        <Dropdown {...{ removeCat, getSingleCat, _id }} />
        <b>{name}</b>
        <b>{age}</b>
        <b>{breed}</b>
        <p>{description}</p>
    </div>)
    return (
        <div className="">
            {showTodos}
        </div>
    );
});

export default sidebar;
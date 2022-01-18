import { useContext, useState, useEffect } from 'react';
import { observer } from 'mobx-react';
import { Context } from '../../ContextApi/StoreContext';
import Dropdown from '../components/DropDown';

const sidebar = observer(() => {
    const { cats, getAllCats, removeCat, getSingleCat } = useContext(Context);
    useEffect(() => {
        typeof getAllCats === "function" && getAllCats();
    }, []);
    const showTodos = cats.map(({ name, description, _id, breed, age }) => <div className="border-bottom" key={_id}>
        <div className='float-right'><Dropdown {...{ removeCat, getSingleCat, _id }} /></div>
        <div>
            <p>Name: <b>{name}</b></p>
            <p>Age: {age}</p>
            <p>Breed: {breed}</p>
            {description && <p>Description: {description}</p>}
        </div>
    </div>)
    return (
        <div className="">
            {showTodos}
        </div>
    );
});

export default sidebar;
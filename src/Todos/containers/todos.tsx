import React, { ChangeEvent, FC, useState, useContext, useEffect } from 'react';
import { observer } from 'mobx-react';
import Formik from '../components/TodoForm';
import { FormValues } from '../interfaces';
import { Context } from '../../ContextApi/StoreContext';
import "../todos.scss";

const Todos: FC = observer(() => {
    const { cats , addCats, cat, clearSingleCat, updateCat } = useContext(Context);
    const [values, setValues] = useState<FormValues>({
        name: "",
        age: "",
        breed: "",
        description: "",
    });
    useEffect(() => {
        if (typeof cat === "object" && Object.keys(cat).length) {
            setValues(cat);
        } else {
            setValues({
                name: "",
                age: "",
                breed: "",
                description: "",
            });
        }
    }, [cat])
    const [errors, setErrors] = useState({
        _id: "",
        name: "",
        age: "",
        breed: "",
        description: "",
    });
    const ErrorsChecking = () => {
        const { name, age, breed } = values;
        if (name && age && breed) {
            return true;
        }
        if (!name) setErrors(prevErrors => ({ ...prevErrors, name: "Name is Required", age: "", breed: "" }));
        if (!age) setErrors(prevErrors => ({ ...prevErrors, name: "", age: "Age is Required", breed:"" }));
        if (!breed) setErrors(prevErrors => ({ ...prevErrors, name: "", age: "", breed: "Breed is Required" }));
        if (!breed && !age && !breed) setErrors(prevErrors => ({ ...prevErrors, title: "Title is Required", age: "Age is Required", breed:"Breed is Required" }));
        return false;
    }
    const changeHandler = (e: ChangeEvent) => {
        const { name, value } = e.target as HTMLInputElement;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }));
    };
    const clickHandler = (todo: FormValues) => {
        const isVerified = ErrorsChecking();
        if (isVerified && Object.keys(cat).length > 0 && typeof updateCat === "function" && typeof clearSingleCat === "function") {
            updateCat(values);
            clearSingleCat();
            return;
        }
        if (isVerified && typeof addCats === "function") {
            addCats(values);
            setValues({ name: "", breed: "", description:"", age: "" });
        }
    };
    return (
        <div>
            <Formik {...{ values, changeHandler, clickHandler, errors, clearSingleCat, cat }} />
        </div>
    );
});

export default Todos;
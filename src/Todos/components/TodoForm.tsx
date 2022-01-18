import React, { FC } from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import { FormValues } from '../interfaces';

interface Props {
    changeHandler: any;
    values: FormValues;
    clickHandler: any;
    clearSingleCat: any;
    cat: any;
    errors: {
        name: string;
        age: string | number;
        breed: string;
        description: string;
    }
}
const TodoForm: FC<Props> = ({ changeHandler, values, clickHandler, errors, clearSingleCat, cat }) => {
    return (
        <Row>
            <Col sm="6">
                <Form inline>
                    {(typeof cat === "object" && Object.keys(cat).length) ? <Button onClick={() => {
                        if ( typeof clearSingleCat === "function") {
                            clearSingleCat(); 
                        }
                    }}>Incert New Cat</Button>: null}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="name" className="mr-sm-2">Name</Label>
                        <Input required onChange={changeHandler} value={values.name} type="text" name="name" id="name" placeholder="" />
                    </FormGroup>
                    {errors && errors.name && <div className="form-error">{errors.name}</div>}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="age" className="mr-sm-2">Age</Label>
                        <Input required onChange={changeHandler} value={values.age} type="text" name="age" id="age" placeholder="" />
                    </FormGroup>
                    {errors && errors.age && <div className="form-error">{errors.age}</div>}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="name" className="mr-sm-2">Breed</Label>
                        <Input required onChange={changeHandler} value={values.breed} type="text" name="breed" id="breed" placeholder="" />
                    </FormGroup>
                    {errors && errors.breed && <div className="form-error">{errors.breed}</div>}
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Label for="description" className="mr-sm-2">Description</Label>
                        <Input required onChange={changeHandler} defaultValue={values.description} value={values.description} type="textarea" name="description" id="description" />
                    </FormGroup>
                    {errors && errors.description && <div className="form-error">{errors.description}</div>}
                    <FormGroup className="mt-2 mr-sm-2 mb-sm-0">
                        <Button onClick={clickHandler}>Submit</Button>
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );
};

export default TodoForm;
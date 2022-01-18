import React, { FC, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FaTh } from 'react-icons/fa';

const DropDown: FC<any> = ({ removeCat, _id, getSingleCat }) => {
    const [isToggle, setIsToggle] = useState<boolean>(false);
    const toggle = () => setIsToggle(!isToggle);
    return (
        <Dropdown 
        Direction={"right"} 
        isOpen={isToggle} 
        toggle={toggle}
        >
            <DropdownToggle caret>
                <FaTh />
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem onClick={() => {
                    if (typeof getSingleCat === "function") getSingleCat(_id);
                }}>Edit</DropdownItem>
                <DropdownItem onClick={() => {
                    if (typeof removeCat === "function") removeCat(_id);
                }}>Delete</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
};

export default DropDown;
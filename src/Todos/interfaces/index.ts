export interface FormValues {
    _id?: string | number;
    name: string;
    age: number | string;
    breed: string;
    description?: string;
}

export interface Store {
    cats: FormValues[];
    cat: FormValues;
    addCats?: (cat: FormValues) => void;
    getAllCats?: () => void;
    removeCat?: (_id: string | number) => void;
    getSingleCat?:(_id: string) => void;
    clearSingleCat?:() => void;
    updateCat?:(cat: FormValues) => void;
}
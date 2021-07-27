import { useState } from "react"

const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({target}) => {
        setValues({
            ...values,
            [target.name]: target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
        setValues(initialState);
    };

    return [values, handleInputChange, handleSubmit];
}

export default useForm;
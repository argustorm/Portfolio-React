import { useState } from "react";

const useForm = () => {

    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        description: ''
    });

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value
        });
    }

    return [state, handleOnChange];
}

export default useForm;
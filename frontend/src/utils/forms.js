import { useState, useEffect } from "react";

const forms = (onLogin) => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});
    const [inactive, setInactive] = useState(null);

    useEffect(() => {
        setValues({});
        setErrors({});
        setInactive(false)
      }, []);
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value,
        });
    
        setErrors({
          ...errors,
          [name]: event.target.validationMessage,
        });

        setInactive(event.target.closest(".form").checkValidity());
      };
    
      function handleSubmit(e) {
        e.preventDefault();
        onLogin(values);
      }

      const resetForm = () => {
        setValues({});
        setErrors({});
        setInactive(false);
      }

      return {
        values,
        errors,
        inactive,
        handleChange,
        handleSubmit,
        resetForm,
        setValues
      };
}

export default forms;


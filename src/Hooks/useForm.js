import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [formState, setFormState] = useState(initialValue);

  const handleChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return {
    formState,
    ...formState,
    handleChange,
    handleSubmit,
  };
};

import React from 'react';
import { useForm } from 'react-hook-form';
import '../global.css';

const Form = () => {
  const {} = useForm();

  return (
    <form action="" className="flex flex-col gap-2">
      <input type="text" className="bg-amber-400 p-8 text-red-600" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  );
};

export default Form;

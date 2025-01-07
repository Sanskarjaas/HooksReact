import React from 'react';
import { useForm } from 'react-hook-form';

const FormExample = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Form submitted successfully! Welcome, ${data.firstName} ${data.lastName}`);
  };

  return (
    <div>
      <h1>React Hook Form Example</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* First Name Field */}
        <div>
          <label>First Name</label>
          <input
            type="text"
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName.message}</p>}
        </div>

        {/* Last Name Field */}
        <div>
          <label>Last Name</label>
          <input
            type="text"
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName.message}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address',
              },
            })}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormExample;

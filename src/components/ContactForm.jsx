import React, { useState } from 'react';
import axios from 'axios';
const heading='Contact Me'

export function Contact() {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let tempErrors = {};
        tempErrors.name = formData.name ? '' : 'Name is required.';
        tempErrors.email = formData.email.match(/^\S+@\S+\.\S+$/) ? '' : 'Email is invalid.';
        tempErrors.phone = formData.phone.match(/^\d{10}$/) ? '' : 'Phone must be 10 digits.';
        tempErrors.message = formData.message ? '' : 'Message is required.';
        setErrors(tempErrors);
        return Object.keys(tempErrors).every((key) => !tempErrors[key]);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async () => {
        try {
            await axios.post('https://sheetdb.io/api/v1/ao1788t52ic76', formData);
            console.log('Form submitted successfully');
            setFormSubmitted(true);
        } catch (error) {
            console.error('Error submitting form:', error);
            setFormSubmitted(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                await submitForm();
                setFormData({ name: '', email: '', phone: '', message: '' });
                setFormSubmitted(true);
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else {
            setFormSubmitted(false);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-customBlue">
  <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-xl">
                <h1 className="text-3xl font-bold leading-tight text-textColorSecondary text-center">{heading}</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="Name"
                className='border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform font-bold hover:border-b-2' />
                {errors.name && <p className="text-red-500">{errors.name}</p>}<br />

                <input 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="Email" 
                className='border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform font-bold hover:border-b-2'/>
                {errors.email && <p className="text-red-500">{errors.email}</p>}<br />

                <input 
                type="text" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                placeholder="Phone"
                className='border-b border-textColorSecondary placeholder-textColorTertiary bg-transparent focus:outline-none w-full mt-12 xl:mt-36 py-3 transition-transform font-bold hover:border-b-2' />
                {errors.phone && <p className="text-red-500">{errors.phone}</p>}<br />

                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" className='font-bold'></textarea>
                {errors.message && <p className="text-red-500">{errors.message}</p>}<br />
                <button
                        type="submit"
                        className='bg-black text-white w-full py-2 rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 disabled:opacity-50'
                        disabled={formSubmitted}
                    >
                        {formSubmitted ? 'Sent!' : 'Send'}
                    </button>
            </form>
            </div>
        </div>
    );
}


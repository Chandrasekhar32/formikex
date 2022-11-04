import React from 'react';
import { useFormik } from 'formik';
import * as  Yup from 'yup';

const SampleForm = () => {
     
    const initialValues = {
        email:"",
        name:""
    }
  const validationSchema = Yup.object({
  email:Yup.string().email("Invalid email").required("Required"),
  name:Yup.string().required("Required")
  })

    // const validate = (values) => {
    //   console.log("checking",values);
    //   let errors = {};
    //   if(!values.email){
    //       errors.email = "Required";
    //   } else if(!/^[a-z0-9][a-z0-9-_\.]+@([a-z]|[a-z0-9]?[a-z0-9-]+[a-z0-9])\.[a-z0-9]{2,10}(?:\.[a-z]{2,10})?$/.test(values.eamil)) {
    //       errors.email = "Email not in format";
    //   }
    //   if(!values.name){
    //       errors.name = 'Required';
    //   }
    //   return errors;
    // }

    const onSubmit = (values) => {
        console.log("form submitted",values)
    }

    const formik = useFormik({
        initialValues,
        // validate,
        validationSchema,
        onSubmit
    })
    console.log("form",formik);

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Formik Feedback</h1>
        <label htmlFor="email">Your Email</label>
        <input  type="email" name="email" id="email" value={formik.touched.email && formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <p className='error'>{formik.errors.email ? formik.errors.email:""}</p>
        <label htmlFor="name">Your Name</label>
        <input type="text" name="name" id="name" value={formik.touched.name && formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
        <p className='error'>{formik.errors.name ? formik.errors.name:""}</p>
        <button>Submit</button>
        <p className='footer'>Powered By Cloudseed Technologies</p>
      </form>
    </div>
  )
}

export default SampleForm;
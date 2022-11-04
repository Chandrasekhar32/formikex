import React from "react";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import ShowError from "./ShowError";

const FeedbackForm = () => {
  const initialValues = {
    email: "",
    name: "",
    phone: "",
    address: "",
    socialmedia: {
      facebook: "",
      gmail: "",
    },
    mobilenumbers: ["", ""],
    phoneNumbers: [""],
  };
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email Required"),
    name: Yup.string().required("Name Required"),
    phone: Yup.number().required("Phone Number Required"),
    address: Yup.string().required("Address Required"),
    socialmedia: Yup.object({
      facebook: Yup.string().required("fb id Required"),
      gmail: Yup.string().email("Invalid email").required("Gmail ID Required"),
    }),
    mobilenumbers: Yup.array().required("mobile numbers required "),
  });
  const onSubmit = (values) => {
    console.log("form submitted", values);
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <h1>Formik Feedback</h1>
          <label htmlFor="email">Your Email</label>
          <Field type="email" name="email" id="email" />
          <ErrorMessage name="email" component={ShowError} />
          <label htmlFor="name">Your Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component={ShowError} />
          <label htmlFor="phone">Phone Number</label>
          <Field type="text" name="phone" id="phone" />
          <ErrorMessage name="phone" component={ShowError} />
          <label htmlFor="address">Address</label>
          <Field type="text" name="address" id="address">
            {(props) => {
              console.log(props);
              const { meta, field } = props;
              return <textarea {...field}></textarea>;
            }}
          </Field>
          <ErrorMessage name="address" component={ShowError} />

          <label htmlFor="facebook">FaceBook ID</label>
          <Field type="text" name="socialmedia.facebook" id="facebook" />
          <ErrorMessage name="socialmedia.facebook" component={ShowError} />

          <label htmlFor="gmail">Gmail ID</label>
          <Field type="email" name="socialmedia['gmail']" id="gmail" />
          <ErrorMessage name="socialmedia['gmail']" component={ShowError} />

          <label htmlFor="mobile1">Mobile Number one</label>
          <Field type="text" name="mobilenumbers[0]" id="mobile1" />
          <ErrorMessage name="mobilenumbers[0]" component={ShowError} />

          <label htmlFor="mobile2">Mobile Number two</label>
          <Field type="text" name="mobilenumbers[1]" id="mobile2" />
          <ErrorMessage name="mobilenumbers[1]" component={ShowError} />

          <label htmlFor="mobileNumbers">Mobile Number</label>
          {/* <FieldArray>
              {
                  (fieldArgs) => {
                      console.log(fieldArgs)
                      return null
                  }
              }
          </FieldArray> */}

          <FieldArray name="phoneNumbers">
            {(fieldArgs) => {
              console.log(fieldArgs);
              const { form, push, remove } = fieldArgs;
              const { values } = form;
              const { phoneNumbers } = values;
              return (
                <div>
                  {phoneNumbers.map((phoneNumber, index) => (
                    <div key={index} className="flex-row-add">
                      <Field name={`phoneNumbers[${index}]`} />
                      {phoneNumbers.length > 1 && (
                        <button
                          className="addremove"
                          onClick={() => remove(index)}
                        >
                          -
                        </button>
                      )}
                      <button className="addremove" onClick={() => push("")}>
                        +
                      </button>
                    </div>
                  ))}
                </div>
              );
            }}
          </FieldArray>

          <button type="submit">Submit</button>
          <p className="footer">Powered By Cloudseed Technologies</p>
        </Form>
      </Formik>
    </div>
  );
};

export default FeedbackForm;

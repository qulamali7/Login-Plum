import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
        <>
            <div className="flex-col flex max-w-[384px] m-auto rounded-[26px] border border-solid border-[#D6D6D6] p-[25px] mt-[40px] mb-[10px]">
                <div className="flex flex-col mb-[30px]">
                    <h2 className="font-semibold text-[30px] font-plus">Login</h2>
                    <p className="font-[400] text-[20px] font-plus">to get started</p>
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        password: Yup.string()
                            .max(20, 'Must be 20 characters or less')
                            .required('Required'),
                        email: Yup.string().email('Invalid email address').required('Required'),
                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 400);
                    }}
                >
                    <Form className="flex flex-col gap-[10px]">
                        <Field className="w-full py-[12px] px-[16px] leading-[150%] rounded-[5px] text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Email" name="email" type="email" />
                        <p className="text-[red] text-center font-plus"><ErrorMessage name="email" /></p>

                        <Field className="w-full py-[12px] px-[16px] leading-[150%] rounded-[5px]  text-[14px] border border-solid border-[rgba(10,11,12,0.1)] outline-none shadow-[rgba(10,11,12,0.05)_0px_1px_2px_0px_inset]" placeholder="Password" name="password" type="password" />
                        <p className="text-[red] text-center font-plus"><ErrorMessage name="password" /></p>

                        <Link className="font-[400] text-[12px] font-plus">Forgot Password?</Link>

                        <button className="font-[400] text-[12px] font-plus text-white bg-[#0016DF] border border-solid border-[#EAEAEA] rounded-[5px] py-[10px] px-[16px]" type="submit">Continue</button>
                    </Form>
                </Formik>
            </div>
            <p className="font-[400] text-[12px] font-plus text-center">New User? <Link className="font-[600]" to={"/"}>Register</Link></p>
        </>
    )
}

export default Login
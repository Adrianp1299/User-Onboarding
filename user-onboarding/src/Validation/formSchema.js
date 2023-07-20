import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup.string().trim().required('Username is required').min(4, 'Username must be 4 characters long'),
    email: yup.string().email('Must be a valid email address').required('Email is required'),
    password: yup.string().required('Password is required').min(6, 'Password must be 6 characters long'),
    tos: yup.boolean().oneOf([true], 'Please accept the terms and conditions')
})

export default schema
import React from 'react'
import {Formik, Form, Field, ErrorMessage} from "formik"
import * as Yup from 'yup'
import axios from "axios";

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: "",
    };

    const validationSchema = Yup.object().shape({
        title: Yup.string() .required("you must input something la bro"),
        postText: Yup.string() .required("you must input something la bro"),
        username: Yup.string() .min(3) .max(15) .required("you must input something la bro"),
    });

    const onSubmit = (data) => {
        // onsubmit, make the post request using axios
        axios.post("http://localhost:3001/posts", data).then((response) => {
            console.log("It Worked bro!!");
        });
    };

    return (
        <div className="createPostPage">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}> 
            <Form className="formContainer">
                <label>Title:</label>
                <ErrorMessage name="title" component="span" />
                {/* the name needs to be exactly the same as the data we are using from the database */}
                <Field id="inputCreatePost" name="title" placeholder="(Example Title)"/>
                <label>Post:</label>
                <ErrorMessage name="postText" component="span" />
                <Field id="inputCreatePost" name="postText" placeholder="(Example Post)"/>
                <label>Username:</label>
                <ErrorMessage name="username" component="span" />
                <Field id="inputCreatePost" name="username" placeholder="(Example John123)"/>

                <button type="submit"> Create Post </button>
            </Form>
        </Formik>
        </div>
    )
}

export default CreatePost;
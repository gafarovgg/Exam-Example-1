import React from "react";
import { useFormik } from "formik";
import { ProductSchema } from "../../validation/ProductSchema";
import { addPostData } from "../../services";

const AddPage = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      imageUrl: "",
    },
    onSubmit: (values) => {
      addPostData(values).then((res) => {
        console.log(res);
      });
    },
    validationSchema: ProductSchema,
  });
  return (
    <div className="container">
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        {formik.errors.title && formik.touched.title && (
          <div id="feedback">{formik.errors.title}</div>
        )}

        <label htmlFor="description">description</label>
        <input
          id="description"
          name="description"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        {formik.errors.description && formik.touched.description && (
          <div id="feedback">{formik.errors.description}</div>
        )}
        <label htmlFor="imageUrl">imageUrl</label>
        <input
          id="imageUrl"
          name="imageUrl"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.imageUrl}
        />
        {formik.errors.imageUrl && formik.touched.imageUrl && (
          <div id="feedback">{formik.errors.imageUrl}</div>
        )}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AddPage;

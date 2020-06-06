// NewPost.js

import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {getRecordById,updateRecord,createRecord} from "../thunk";

const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const { editData, update, updateSuccess, addSuccess } = useSelector(
    (state) => {
      return {
        editData: state.posts.editPost,
        update: state.posts.update,
        updateSuccess: state.posts.updateSuccess,
        addSuccess: state.posts.addSuccess,
      };
    }
  );

  const {
    match: {
      params: { id },
    },
  } = props;

  useEffect(() => {
    if (id) {
      dispatch(getRecordById(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (updateSuccess || addSuccess) {
      props.history.push(`/postList`);
    }
    if (Object.keys(editData).length > 0) {
      const { title, body } = editData;
      if (update) {
        setTitle(title);
        setBody(body);
      }
    }
  }, [editData, update, updateSuccess, addSuccess, props]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() && body.trim()) {
      const {
        match: {
          params: { id },
        },
      } = props;
      if (update) {
        dispatch(updateRecord({ id, title, body }));
      } else {
        dispatch(createRecord({ title, body }));
      }
    }
  };

  const handleInputChange = (e) => {
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else if (e.target.name === "body") {
      setBody(e.target.value);
    }
  };

  const handleReset = () => {
    setTitle("");
    setBody("");
  };

  return (
    <div className="container">
      <form id="create_post_form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Title"
            className="form-control"
            name="title"
            onChange={handleInputChange}
            value={title}
          />
        </div>
        <div className="form-group">
          <textarea
            cols="19"
            rows="8"
            placeholder="Body"
            name="body"
            className="form-control"
            onChange={handleInputChange}
            value={body}
          ></textarea>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            {update ? "Update Post" : "Add Post"}
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(NewPost);

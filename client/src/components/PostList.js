// PostList.js

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import GridComponent from "./GridComponent";
import {getAllRecords,deleteRecordById} from "../thunk";
import "../components/styles.scss";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllRecords());
  }, [dispatch]);

  const headings = ["Title", "Body", "Actions"];
  return (
    <div className="container">
      {posts.posts.length ? (
        <GridComponent
          headings={headings}
          values={posts.posts}
          deleteAction={deleteRecordById}
          editAction={"editPost"}
        />
      ) : (
        "No data"
      )}
    </div>
  );
};

export default PostList;

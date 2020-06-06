import React from "react";
import { useDispatch } from "react-redux";
import "./styles.scss";
import { withRouter } from "react-router-dom";
import edit from "../images/edit.png";
import deleteimg from "../images/delete.png";

const GridComponent = (props) => {
  const { headings, values, deleteAction } = props;
  const dispatch = useDispatch();

  const editPost = (id) => props.history.push(`/editPost/${id}`);

  return (
    <table className="empty">
      <tbody>
        <tr key="row">
          {headings.map((heading) => {
            return <th key={heading}>{heading}</th>;
          })}
        </tr>
        {values.map((value) => {
          return (
            <tr key={value.id}>
              <td className="empty">{value.title}</td>
              <td className="empty">{value.body}</td>
              <td className="empty">
                <img
                  className="imgstyle"
                  alt="edit"
                  src={edit}
                  onClick={() => editPost(value.id)}
                />
                <img
                  className="imgstyle"
                  alt="delete"
                  src={deleteimg}
                  onClick={() => dispatch(deleteAction(value.id))}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default withRouter(GridComponent);

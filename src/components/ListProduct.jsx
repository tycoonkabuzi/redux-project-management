import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useParams } from "react-router";
import { addComplete, deleteProject } from "../store/manageProjectSlice";

const ListProduct = () => {
  const projectStore = useSelector((state) => state.projects.projects);
  const completedStore = useSelector((state) => state.projects.completed);
  const dispatch = useDispatch();
  const location = useLocation();
  const [checked, setChecked] = useState(null);

  const fewCaracter = (text) => {
    if (text.length >= 10) {
      const shortenedString = text.slice(0, 50);
      return shortenedString;
    } else {
      return text;
    }
  };
  const handleDelete = (id) => {
    dispatch(deleteProject(id));
  };

  const getPending = (firstStore, secondStore) => {
    const pending = firstStore.filter((first) => !secondStore.includes(first));
    return pending;
  };
  return (
    <div className="main-list">
      {location.pathname === "/all" ? (
        projectStore.map((aProject, index) => (
          <div
            className={`main-item  ${checked === index ? "line-through" : ""} `}
            key={aProject.id}
          >
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked(index);
                dispatch(addComplete(aProject.id));
              }}
            />
            <span
              className={
                aProject.priority === "high"
                  ? "high-priority"
                  : aProject.priority === "medium"
                  ? "medium-priority"
                  : "low-priority"
              }
            >
              {aProject.name}
            </span>
            :{fewCaracter(aProject.description)}...{" "}
            <Link to={`/all/${aProject.id}`}> More</Link>
            <button onClick={() => handleDelete(aProject.id)}>Delete</button>
          </div>
        ))
      ) : location.pathname === "/completed" ? (
        completedStore.length !== 0 ? (
          completedStore.map((aProject) => (
            <div className="main-item" key={aProject.id}>
              <span
                className={
                  aProject.priority === "high"
                    ? "high-priority"
                    : aProject.priority === "medium"
                    ? "medium-priority"
                    : "low-priority"
                }
              >
                {aProject.name}{" "}
              </span>
              :{fewCaracter(aProject.description)}...{" "}
              <Link to={`/all/${aProject.id}`}> More</Link>
              <button onClick={() => handleDelete(aProject.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Empty</p>
        )
      ) : location.pathname === "/pending" ? (
        getPending(projectStore, completedStore).length !== 0 ? (
          getPending(projectStore, completedStore).map((aProject) => (
            <div className="main-item" key={aProject.id}>
              <span
                className={
                  aProject.priority === "high"
                    ? "high-priority"
                    : aProject.priority === "medium"
                    ? "medium-priority"
                    : "low-priority"
                }
              >
                {aProject.name}{" "}
              </span>
              :{fewCaracter(aProject.description)}...{" "}
              <Link to={`/all/${aProject.id}`}> More</Link>
              <button onClick={() => handleDelete(aProject.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>Empty</p>
        )
      ) : (
        ""
      )}
    </div>
  );
};
export default ListProduct;

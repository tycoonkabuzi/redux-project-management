import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import { addComplete } from "../store/manageProjectSlice";

const ListProduct = () => {
  const projectStore = useSelector((state) => state.projects.projects);
  const completedStore = useSelector((state) => state.projects.completed);
  const dispatch = useDispatch();
  const location = useLocation();
  const [checked, setChecked] = useState(false);
  const fewCaracter = (text) => {
    if (text.length >= 10) {
      const shortenedString = text.slice(0, 50);
      return shortenedString;
    } else {
      return text;
    }
  };

  return (
    <div className="main-list">
      <p style={{ textAlign: "left" }}>Complete</p>

      {location.pathname === "/all" ? (
        projectStore.map((aProject) => (
          <div className="main-item" key={aProject.id}>
            <input
              type="checkbox"
              onChange={(e) => {
                setChecked(e.target.checked);
                dispatch(addComplete(aProject.id));
              }}
              value={checked}
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
            :{fewCaracter(aProject.description)}... <Link> More</Link>
            <button>Delete</button>
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
              :{fewCaracter(aProject.description)}... <Link> More</Link>
              <button>Delete</button>
            </div>
          ))
        ) : (
          <p>Empty</p>
        )
      ) : location.pathname === "/pending" ? (
        <p>Pending</p>
      ) : (
        ""
      )}
    </div>
  );
};
export default ListProduct;

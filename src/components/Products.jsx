import { useDispatch, useSelector } from "react-redux";
import { addProject } from "../store/manageProjectSlice";
import Links from "./Links";
import { useState } from "react";

const Products = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState({});
  const handleAddProject = (e) => {
    e.preventDefault();

    dispatch(addProject(value));
  };
  console.log(value);
  return (
    <div>
      <h1>Project Management </h1>

      <h2>Add Project</h2>
      <div className="priority">
        Low:
        <span className="box low-priority" /> Medium:
        <span className="box medium-priority" /> High:
        <span className="box high-priority" />
      </div>
      <form onSubmit={handleAddProject}>
        <input
          type="text"
          onChange={(e) =>
            setValue((prevValue) => ({ ...prevValue, name: e.target.value }))
          }
          value={value.name}
          placeholder=" Project"
        />
        <input
          type="text"
          placeholder="Description "
          onChange={(e) =>
            setValue((prevValue) => ({
              ...prevValue,
              description: e.target.value,
            }))
          }
          value={value.description}
        />
        <label>
          Priority:
          <select
            onChange={(e) =>
              setValue((prevValue) => ({
                ...prevValue,
                priority: e.target.value,
              }))
            }
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>{" "}
          </select>
        </label>
        <button type="submit">Add</button>
      </form>

      <Links />
    </div>
  );
};
export default Products;

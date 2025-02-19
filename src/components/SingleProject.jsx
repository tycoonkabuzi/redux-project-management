import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";

const SingleProject = () => {
  const project = useSelector((state) => state.projects);
  const params = useParams();
  const index = project.projects.findIndex(
    (theIndex) => theIndex.id == params.id
  );
  const navigation = useNavigate();

  return (
    <div>
      <button style={{ float: "left" }} onClick={() => navigation("/all")}>
        Back
      </button>
      <h1>{project.projects[index].name}</h1>
      <p>{project.projects[index].description}</p>
      <p
        style={{
          display: "flex",
          width: "20%",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        Priority:{project.projects[index].priority}
        <span
          className={
            project.projects[index].priority === "high"
              ? "box high-priority"
              : project.projects[index].priority === "medium"
              ? "box medium-priority"
              : "box low-priority"
          }
        />
      </p>
    </div>
  );
};

export default SingleProject;

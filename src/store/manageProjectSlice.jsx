import { createSlice } from "@reduxjs/toolkit";

const manageProjectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [
      {
        id: 1,
        name: "Project Alpha",
        description:
          "A web application for project management, allowing teams to collaborate in real time.",
        priority: "high",
      },
      {
        id: 2,
        name: "Project Beta",
        description:
          "An e-commerce platform designed to optimize user experience and increase conversion rates.",
        priority: "medium",
      },
      {
        id: 3,
        name: "Project Gamma",
        description:
          "A mobile app for fitness tracking that integrates with wearables and health devices.",
        priority: "high",
      },
      {
        id: 4,
        name: "Project Delta",
        description:
          "A machine learning algorithm for predictive analytics in the financial industry.",
        priority: "low",
      },
      {
        id: 5,
        name: "Project Epsilon",
        description:
          "A customer support chatbot that uses AI to provide fast and accurate solutions.",
        priority: "medium",
      },
    ],

    completed: [],
    pending: [],
  },
  reducers: {
    addProject: (state, action) => {
      state.projects = [
        ...state.projects,
        {
          id: Date.now(),
          name: action.payload.name,
          description: action.payload.description,
          priority:
            action.payload.priority === undefined
              ? "high"
              : action.payload.priority,
        },
      ];
    },

    addComplete: (state, action) => {
      const index = state.projects.findIndex(
        (theIndex) => theIndex.id === action.payload
      );

      state.completed.push(state.projects[index]);
      console.log(state.projects[index]);
    },
  },
});

export const { addProject, addComplete } = manageProjectSlice.actions;
export default manageProjectSlice.reducer;

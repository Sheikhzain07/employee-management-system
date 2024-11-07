const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Finish Report",
        taskDescription:
          "Complete the monthly performance report and submit it to the manager.",
        taskDate: "2024-11-01",
        category: "Work",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription: "Attend the client meeting at the headquarters.",
        taskDate: "2024-11-05",
        category: "Meeting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Team Training",
        taskDescription:
          "Complete the team training on the new software tools.",
        taskDate: "2024-11-10",
        category: "Training",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription:
          "Create a presentation for the upcoming board meeting.",
        taskDate: "2024-11-02",
        category: "Work",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Code Review",
        taskDescription:
          "Review the code for the new feature and provide feedback.",
        taskDate: "2024-11-07",
        category: "Development",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: true,
        taskTitle: "Bug Fix",
        taskDescription:
          "Fix the critical bug found in the production environment.",
        taskDate: "2024-11-08",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Write Blog Post",
        taskDescription: "Write a blog post about the new software features.",
        taskDate: "2024-11-03",
        category: "Content",
      },
      {
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Team Standup",
        taskDescription:
          "Join the daily team standup meeting to discuss progress and blockers.",
        taskDate: "2024-11-06",
        category: "Meeting",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Marketing Campaign",
        taskDescription: "Launch the marketing campaign for the new product.",
        taskDate: "2024-11-09",
        category: "Marketing",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Feedback",
        taskDescription:
          "Collect and analyze customer feedback for the new release.",
        taskDate: "2024-11-04",
        category: "Feedback",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Website Maintenance",
        taskDescription:
          "Perform regular maintenance and optimization of the company website.",
        taskDate: "2024-11-07",
        category: "Maintenance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Documentation",
        taskDescription:
          "Update the user manual and online documentation for the software.",
        taskDate: "2024-11-10",
        category: "Documentation",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Research Trends",
        taskDescription:
          "Research the latest trends in the industry and summarize the findings.",
        taskDate: "2024-11-02",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Quarterly Review",
        taskDescription:
          "Prepare the financial summary and quarterly review presentation.",
        taskDate: "2024-11-05",
        category: "Finance",
      },
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Product Testing",
        taskDescription:
          "Test the new version of the product for bugs and issues.",
        taskDate: "2024-11-09",
        category: "Quality Assurance",
      },
    ],
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};

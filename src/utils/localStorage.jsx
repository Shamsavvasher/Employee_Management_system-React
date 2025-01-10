
const employees = [
    {
        "id": 1,
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Complete Monthly Report",
                "task_description": "Prepare and submit the monthly performance report.",
                "task_date": "2025-01-10",
                "category": "Reporting"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Update Website",
                "task_description": "Update the homepage with new content.",
                "task_date": "2024-12-20",
                "category": "Development"
            },
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Customer Feedback Analysis",
                "task_description": "Analyze the customer feedback from the recent survey.",
                "task_date": "2025-01-15",
                "category": "Analysis"
            }
        ]
    },
    {
        "id": 2,
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Prepare Sales Pitch",
                "task_description": "Create a new sales pitch for the upcoming product launch.",
                "task_date": "2025-01-12",
                "category": "Sales"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Client Meeting Preparation",
                "task_description": "Prepare agenda and presentation for the upcoming client meeting.",
                "task_date": "2024-12-18",
                "category": "Sales"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": true,
                "task_title": "Website Research",
                "task_description": "Conduct research for improvements on the company website.",
                "task_date": "2025-01-20",
                "category": "Research"
            }
        ]
    },
    {
        "id": 3,
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Update Social Media Strategy",
                "task_description": "Update and refine the social media marketing strategy for the new year.",
                "task_date": "2025-01-14",
                "category": "Marketing"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Content Writing",
                "task_description": "Write new blog content for the company's website.",
                "task_date": "2025-01-17",
                "category": "Content"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Customer Support Follow-up",
                "task_description": "Follow up with customers about recent inquiries and issues.",
                "task_date": "2024-12-22",
                "category": "Support"
            }
        ]
    },
    {
        "id": 4,
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Organize Office Event",
                "task_description": "Plan and organize an office event for team bonding.",
                "task_date": "2025-01-25",
                "category": "HR"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Team Meeting",
                "task_description": "Conduct the weekly team meeting to discuss current progress.",
                "task_date": "2024-12-15",
                "category": "HR"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Recruitment Drive",
                "task_description": "Plan and execute a recruitment campaign for new hires.",
                "task_date": "2025-01-30",
                "category": "Recruitment"
            }
        ]
    },
    {
        "id": 5,
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "active": true,
                "new_task": true,
                "completed": false,
                "failed": false,
                "task_title": "Develop New Feature",
                "task_description": "Develop and test the new feature for the application.",
                "task_date": "2025-01-20",
                "category": "Development"
            },
            {
                "active": true,
                "new_task": false,
                "completed": false,
                "failed": false,
                "task_title": "Bug Fixes",
                "task_description": "Fix the bugs reported in the recent software update.",
                "task_date": "2025-01-25",
                "category": "Development"
            },
            {
                "active": false,
                "new_task": false,
                "completed": true,
                "failed": false,
                "task_title": "Code Review",
                "task_description": "Review the code submitted by junior developers for quality assurance.",
                "task_date": "2024-12-10",
                "category": "Quality Assurance"
            }
        ]
    }
];

const admin= [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }]

export  const setLocalStorage=()=>{
    localStorage.setItem("employee",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))


}
export const getLocalStorage=()=>{
 const employees=JSON.parse(localStorage.getItem('employee'))
const admin=JSON.parse(localStorage.getItem('admin'))
return {employees,admin}
// console.log(employee,admin)
}
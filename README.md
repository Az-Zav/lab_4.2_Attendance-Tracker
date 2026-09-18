Laboratory Exercise 4.2 - React Hooks — Props and State in Action

A Class Attendance Tracker web app built for Laboratory Exercise 4.2. It allows teachers to mark student attendance, search/filter the roster, and add new students in real time using React state and props.

📌 Features & Task Requirements

Task 1: Project Scaffolding

Organized code inside src/components/ with four modular files: App.jsx, StudentCard.jsx, StudentList.jsx, and AddStudentForm.jsx.

Task 2: Passing Data via Props

Passed student information down from App to StudentCard using StudentList as a middle layer.

Styled student status dynamically (green for Present, red for Absent).

Task 3: Interactive State & Toggling Status

Used useState in App.jsx to store student data.

Added a toggleStatus function using functional state updaters (setStudents(prev => ...)) to safely switch attendance states.

Task 4: Search Filter & Add Student Form

Search: Filtered the student list live using a searchTerm state without modifying the original data.

Add Form: Created a controlled form in AddStudentForm to add new students immediately without refreshing the page.

Bonus Task: LocalStorage Persistence

Applied useEffect to save attendance updates in localStorage so data stays saved across page reloads.

📂 Component Structure

App (Parent State: students, search term)
 ├── Search Bar
 ├── AddStudentForm (Form input state)
 └── StudentList (Passes down student data)
      └── StudentCard (Displays student info & toggle button)


🚀 How to Run Locally

Clone the repository:

git clone <your-repository-url>
cd my-app


Install dependencies:

npm install


Start the development server:

npm run dev


Open in browser:
Navigate to given link
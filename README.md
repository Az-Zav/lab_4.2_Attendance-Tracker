# Laboratory Exercise 4.2 - React Hooks — Props and State in Action

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

A Class Attendance Tracker web app built for **Laboratory Exercise 4.2**. It allows teachers to mark student attendance, search/filter the roster, and add new students in real time using React state and props.

---

## 📌 Features & Task Requirements

* **Task 1: Project Scaffolding**
  * Organized code inside `src/components/` with four modular files: `App.jsx`, `StudentCard.jsx`, `StudentList.jsx`, and `AddStudentForm.jsx`.

* **Task 2: Passing Data via Props**
  * Passed student information down from `App` to `StudentCard` using `StudentList` as a middle layer.
  * Styled student status dynamically (green for *Present*, red for *Absent*).

* **Task 3: Interactive State & Toggling Status**
  * Used `useState` in `App.jsx` to store student data.
  * Added a `toggleStatus` function using functional state updaters (`setStudents(prev => ...)`) to safely switch attendance states.

* **Task 4: Search Filter & Add Student Form**
  * **Search:** Filtered the student list live using a `searchTerm` state without modifying the original data.
  * **Add Form:** Created a controlled form in `AddStudentForm` to add new students immediately without refreshing the page.

* **Bonus Task: LocalStorage Persistence**
  * Applied `useEffect` to save attendance updates in `localStorage` so data stays saved across page reloads.

---

## 📂 Component Structure

```text
App (Parent State: students, search term)
 ├── Search Bar
 ├── AddStudentForm (Form input state)
 └── StudentList (Passes down student data)
      └── StudentCard (Displays student info & toggle button)
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd my-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to given link in terminal

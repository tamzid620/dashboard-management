import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Shared/Layout/Layout";
import ErrorPage from "./Components/Shared/ErrorPage/ErrorPage";
import Home from "./Components/Pages/Home/Home";
import Teachers from "./Components/Pages/About/Teachers";
import Employees from "./Components/Pages/About/Employees";
import FullMessages from "./Components/Pages/Home/FullMessages";
import OurCampus from "./Components/Pages/Academic/OurCampus";
import Login from "./Components/Pages/Login/Login";
import SignUp from "./Components/Pages/SignUp/SignUp";
import Payment from "./Components/Pages/Payment/Payment";
import Syllabus from "./Components/Pages/Academic/Syllabus";
import StudentDetails from "./Components/Pages/StudentDetails/StudentDetails";
import PendingStudent from "./Components/Pages/AdminPanel/Navigation/PendingStudent";
import AllStudent from "./Components/Pages/AdminPanel/Navigation/AllStudent";
import AdminLogin from "./Components/Pages/Login/AdminLogin";
import Notice from "./Components/Pages/Notice/Notice";
import EnterPhone from "./Components/Pages/Payment/EnterPhone";
import EnterOTP from "./Components/Pages/Payment/EnterOTP";
import AcademicRules from "./Components/Pages/Academic/AcademicRules";
import AcademicCalender from "./Components/Pages/Academic/AcademicCalender";
import Routine from "./Components/Pages/Academic/Routine";
import ApplyOnline from "./Components/Pages/Admission/ApplyOnline";
import ApplyMethod from "./Components/Pages/Admission/ApplyMethod";
import OurHistory from "./Components/Pages/About/OurHistory";
import AdminPayment from "./Components/Pages/Payment/AdminPayment";
import AdminTeachers from "./Components/Pages/AdminPanel/Navigation/AdminTeachers";
import AdminTeachersEdit from "./Components/Pages/AdminPanel/Navigation/AdminTeachersEdit";
import AdminTeachersAdd from "./Components/Pages/AdminPanel/Navigation/AdminTeachersAdd";
import AdminStudentAdd from "./Components/Pages/AdminPanel/Navigation/AdminStudentAdd";
import AdminStudentEdit from "./Components/Pages/AdminPanel/Navigation/AdminStudentEdit";
import AdminStudentDetails from "./Components/Pages/AdminPanel/Navigation/AdminStudentDetails";
import AdminNotices from "./Components/Pages/AdminPanel/Navigation/AdminNotices";
import AdminNoticesAdd from "./Components/Pages/AdminPanel/Navigation/AdminNoticeAdd";
import AdminNoticesEdit from "./Components/Pages/AdminPanel/Navigation/AdminNoticesEdit";
import AdminRoutine from "./Components/Pages/AdminPanel/Navigation/AdminRoutine";
import AdminRoutineAdd from "./Components/Pages/AdminPanel/Navigation/AdminRoutineAdd";
import AdminRoutineEdit from "./Components/Pages/AdminPanel/Navigation/AdminRoutineEdit";
import AdminSyllabus from "./Components/Pages/AdminPanel/Navigation/AdminSyllabus";
import AdminSyllabusAdd from "./Components/Pages/AdminPanel/Navigation/AdminSyllabusAdd";
import AdminSyllabusEdit from "./Components/Pages/AdminPanel/Navigation/AdminSyllabusEdit";
import PendingPayment from "./Components/Pages/AdminPanel/Navigation/PendingPayment";
import ApprovedPayment from "./Components/Pages/AdminPanel/Navigation/ApprovedPayment";
import PaymentHistory from "./Components/Pages/AdminPanel/Navigation/PaymentHistory";
import UnpaidStudent from "./Components/Pages/AdminPanel/Navigation/UnpaidStudent";
import Invoice from "./Components/Pages/Invoice/Invoice";
import AdminEmployees from "./Components/Pages/AdminPanel/Navigation/AdminEmployees";
import AdminEmployeesEdit from "./Components/Pages/AdminPanel/Navigation/AdminEmployeesEdit";
import AdminEmployeesAdd from "./Components/Pages/AdminPanel/Navigation/AdminEmployeesAdd";
import AdminEvent from "./Components/Pages/AdminPanel/Navigation/AdminEvent";
import StudentIdCard from "./Components/Shared/StudentIdCard/StudentIdCard";
import AdminDrawer from "./Components/Pages/AdminPanel/Dashboard/SearchPanel/AdminDrawer";
import DashBoardBody from "./Components/Pages/AdminPanel/Dashboard/Dashbody/DashBoardBody";
// import AdminDashboard from "./Components/Pages/AdminPanel/Navigation/AdminDashboard";
import PendingStudentEdit from "./Components/Pages/AdminPanel/Navigation/PendingStudentEdit";
import AllStudentEdit from "./Components/Pages/AdminPanel/Navigation/AllStudentEdit";
import AdminAttendance from "./Components/Pages/AdminPanel/Navigation/AdminAttendence";
import UnderConstrunction from "./Components/Shared/UnderConstrunction/UnderConstrunction";
import AdminAdmissionMng from "./Components/Pages/AdminPanel/Navigation/AdminAdmissionMng";
import AdminClassMng from "./Components/Pages/AdminPanel/Navigation/AdminClassMng";
import AdminExamination from "./Components/Pages/AdminPanel/Navigation/AdminExamination";
import AdminAccountsMng from "./Components/Pages/AdminPanel/Navigation/AdminAccountsMng";
import AdminPrintableResult from "./Components/Pages/AdminPanel/Navigation/AdminPrintableResult";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
// default panel route ---------------------------

      // Home section----------
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fullMessages",
        element: <FullMessages />,
      },

      // Academic section------------
      {
        path: "/ourCampus",
        element: <OurCampus />,
      },
      {
        path: "/academicRules",
        element: <AcademicRules />,
      },
      {
        path: "/academicCalender",
        element: <AcademicCalender />,
      },
      {
        path: "/routine",
        element: <Routine />,
      },
      {
        path: "/syllabus",
        element: <Syllabus />,
      },


      // Admission section----------
      {
        path: "/applyOnline",
        element: <ApplyOnline />,
      },
      {
        path: "/applyMethod",
        element: <ApplyMethod />,
      },

      // About section--------------
      {
        path: "/ourHistory",
        element: <OurHistory />,
      },
      {
        path: "/teachers",
        element: < Teachers/>,
      },
      {
        path: "/employees",
        element: <Employees />,
      },

      // Notice section-----------------
      {
        path: "/notice",
        element: <Notice />,
      },

      // Payment section---------------
      {
        path: "/enterPhone",
        element: <EnterPhone />,
      },
      {
        path: "/enterotp",
        element: <EnterOTP />,
      },
      {
        path: "/studentDetails",
        element: <StudentDetails />,
      },
      {
        path: "/Payment",
        element: <Payment />,
      },

      // login and signup section---------------
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },

// admin panel route ---------------------------
      {
        path: "/adminlogin",
        element: <AdminLogin />,
      },
      {
        path: "/dp",
        element: <AdminDrawer />,
      },
      // Dashboard section --------------------
      // {
      //   path: "/dp",
      //   element: <AdminDashboard />,
      // },
      {
        path: "/dashboardbody",
        element: <DashBoardBody />,
      },
      // student section --------------------
      {
        path: "/pendingStudent",
        element: <PendingStudent />,
      },
      {
        path: "/allStudent",
        element: <AllStudent />,
      },
      {
        path:"/adminStudentAdd",
        element:<AdminStudentAdd/>
      },
      {
        path: "/pendingStudentEdit/:studentId",
        element: <PendingStudentEdit />,
      },
      {
        path: "/allStudentEdit/:studentId",
        element: <AllStudentEdit />,
      },
      {
        path: "/adminStudentEdit/:studentId",
        element: <AdminStudentEdit />,
      },
      {
        path: "/adminStudentDetails/:studentId",
        element: <AdminStudentDetails />,
      },
      {
        path: "/adminPayment/:studentId",
        element: <AdminPayment/>,
      },
      {
        path: "/studentIdCard/:studentId",
        element: <StudentIdCard/>,
      },

      // teachers section ---------------
      {
        path: "/adminTeachers",
        element:<AdminTeachers/>,
      },
      {
        path: "/adminTeachersEdit/:teacherId",
        element:<AdminTeachersEdit/>, 
      },
      {
        path:"/adminTeacherAdd",
        element:<AdminTeachersAdd/>
      },
      // admin employees seciton ----------------
      {
        path: "/adminEmployees",
        element: <AdminEmployees />,
      },
      {
        path: "/adminEmployeesEdit/:employeeId",
        element: <AdminEmployeesEdit />,
      },
      {
        path: "/adminEmployeesAdd",
        element: <AdminEmployeesAdd/>,
      },
      // notices section ----------------------
      {
        path:"/adminNotices",
        element:<AdminNotices/>
      },
      {
        path:"/adminNoticesAdd",
        element:<AdminNoticesAdd/>
      },
      {
        path:"/adminNoticesEdit/:noticeId",
        element:<AdminNoticesEdit/>
      },

      // Event section ----------------------
      {
        path:"/adminEvent",
        element:<AdminEvent/>
      },
      // Routine section ----------------------
      {
        path:"/adminRoutines",
        element:<AdminRoutine/>
      },
      {
        path:"/adminRoutineAdd",
        element:<AdminRoutineAdd/>
      },
      {
        path:"/adminRoutineEdit/:routineId",
        element:<AdminRoutineEdit/>
      },

      // syllabus section ----------------------
      {
        path:"/adminSyllabus",
        element:<AdminSyllabus/>
      },
      {
        path:"/adminSyllabusAdd",
        element:<AdminSyllabusAdd/>
      },
      {
        path:"/adminSyllabusEdit/:syllabusId",
        element:<AdminSyllabusEdit/>
      },
      
      // admin payment section ------------------------
      {
        path:"/pendingPayment",
        element:<PendingPayment/>
      },
      {
        path:"/approvedPayment",
        element:<ApprovedPayment/>
      },
      {
        path: "/unpaidStudent",
        element: <UnpaidStudent/>,
      },
      {
        path:"/paymentHistory/:studentId",
        element:<PaymentHistory/>
      },
      {
        path: "/invoice/:paymentId",
        element: <Invoice/>,
      },
      // Admin Admission Management section -----------------------------
      {
        path: "/adminAdmissionMng",
        element: <AdminAdmissionMng/>,
      },
      // Admin Class Management section -----------------------------
      {
        path: "/adminClassMng",
        element: <AdminClassMng/>,
      },
      // Admin Attendence section -----------------------------
      {
        path: "/adminAttendance",
        element: <AdminAttendance/>,
      },
      // Admin Examination section -----------------------------
      {
        path: "/adminExamination",
        element: <AdminExamination/>,
      },
      // Admin Accounts Management section -----------------------------
      {
        path: "/adminAccountsMng",
        element: <AdminAccountsMng/>,
      },
      // Admin Printable Result section -----------------------------
      {
        path: "/adminPrintableResult",
        element: <AdminPrintableResult/>,
      },
      // UnderConstruction  section -----------------------------
      {
        path: "/uc",
        element: <UnderConstrunction/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

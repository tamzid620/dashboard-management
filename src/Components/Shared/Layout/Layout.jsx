import { Outlet, useLocation } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import NavigationBar from "../Navbar/NavigationBar";


const Layout = () => {

    const location = useLocation();
    const noHeaderFooter =
        location.pathname.includes('ad') ||
        location.pathname.includes('login') ||
        location.pathname.includes('signup') ||

        location.pathname.includes('studentDetails') ||

        location.pathname.includes('dp') ||

        location.pathname.includes('pendingStudent') ||
        location.pathname.includes('allStudent') ||

        location.pathname.includes('Payment')  ||
        location.pathname.includes('enterPhone') ||
        location.pathname.includes('enterotp') ||
        location.pathname.includes('studentEdit') ||

        location.pathname.includes('adminTeachers') ||       
        location.pathname.includes('adminTeachersEdit')  ||      
        location.pathname.includes('adminTeacherAdd') ||    
        
        location.pathname.includes('adminEmployees') ||
        location.pathname.includes('adminEmployeesEdit') ||
        location.pathname.includes('adminEmployeesAdd') ||

        location.pathname.includes('adminStudentAdd')  || 
        location.pathname.includes('adminStudentEdit') ||
        location.pathname.includes('adminStudentDetails') ||
        location.pathname.includes('studentIdCard') ||
        
        
        location.pathname.includes('adminNotices') ||      
        location.pathname.includes('adminNoticesAdd') ||      
        location.pathname.includes('adminNoticesEdit')  || 

        location.pathname.includes('adminEvent')  || 

        location.pathname.includes('adminRoutines')   ||    
        location.pathname.includes('adminRoutineAdd')  ||     
        location.pathname.includes('adminRoutineEdit') ||  

        location.pathname.includes('adminSyllabus')   ||    
        location.pathname.includes('adminSyllabusAdd') ||      
        location.pathname.includes('adminSyllabusEdit') ||   
           
        location.pathname.includes('pendingPayment')  ||     
        location.pathname.includes('approvedPayment')  || 

        location.pathname.includes('unpaidStudent') ||    

        location.pathname.includes('invoice') ||    

        location.pathname.includes('paymentHistory')     || 
        location.pathname.includes('/adminAdmissionMng')   ||    
        location.pathname.includes('/adminClassMng')      ||
        location.pathname.includes('/adminExamination')   ||    
        location.pathname.includes('/adminAccountsMng')    || 
        location.pathname.includes('/adminPrintableResult')       

    return (
        <div>
            {noHeaderFooter || <NavigationBar />}
            <Outlet />
            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Layout;
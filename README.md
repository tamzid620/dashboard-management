⦿ blue-900: #0d47a1 ;
⦿ gray-300 : #d1d5db ;
⦿ localExposs link:  https://backend.ap.loclx.io/api/ 
⦿ Existance Link: https://schoolbackend.softplatoon.com/api/
<!--
 <Routes>
          <Route path="/dashboardbody" component={<DashBoardBody />} />
          <Route path="/pendingStudent" component={<PendingStudent />} />
          <Route path="/allStudent" component={<AllStudent />} />
          <Route path="/adminTeachers" component={<AdminTeachers />} />
          <Route path="/adminEmployees" component={<AdminEmployees />} />
          <Route path="/adminNotices" component={<AdminNotices />} />
          <Route path="/adminRoutines" component={<AdminEvent />} />
          <Route path="/adminRoutines" component={<AdminRoutine />} />
          <Route path="/adminSyllabus" component={<AdminSyllabus />} />
          <Route path="/pendingPayment" component={<PendingPayment />} />
          <Route path="/approvedPayment" component={<ApprovedPayment />} />
</Routes> 

 <ListItemButton
    sx={{
   minHeight: 48,
  justifyContent: open ? 'initial' : 'center',
  px: 2.5,
  }}
> 
 <ListItemIcon
   sx={{
   minWidth: 0,
   mr: open ? 3 : 'auto',
   justifyContent: 'center',
   }}
 > 
----------------------------------------------------------------------------------------------
collect token from localStorage <=============================>
   useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        position: "center",
        icon: "warning",
        title: "You have to Login first",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/adminlogin");
    } else {
      // Example: Assuming adminEmployees are stored in localStorage as "adminEmployees"
      const Admintoken = JSON.parse(localStorage.getItem(token));
      if (Admintoken) {
        setAdminStudents(Admintoken);
        setIsLoading(true);
      } else {
        ""
      }
    }
  }, [navigate]);
  --------------------------------------------------------------------------------------------------
 -->

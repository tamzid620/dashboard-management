/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
// component import section -------------------------------
import AdminTeachers from "../../Navigation/AdminTeachers";
import AdminEvent from "../../Navigation/AdminEvent";
import PendingStudent from "../../Navigation/PendingStudent";
import AllStudent from "../../Navigation/AllStudent";
import AdminRoutine from "../../Navigation/AdminRoutine";
import AdminEmployees from "../../Navigation/AdminEmployees";
import AdminNotices from "../../Navigation/AdminNotices";
import AdminSyllabus from "../../Navigation/AdminSyllabus";
import PendingPayment from "../../Navigation/PendingPayment";
import ApprovedPayment from "../../Navigation/ApprovedPayment";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import SearchPanel from "./SearchPanel";
import DashBoardBody from "../Dashbody/DashBoardBody";
import AdminAttendance from "../../Navigation/AdminAttendence";
import { baseUrl } from "../../../../../utilies/config";

const drawerWidth = 240;
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AdminDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  // eslint-disable-next-line no-unused-vars
  const [studentData, setStudentData] = useState([]);

  const navigate = useNavigate();
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
      const user = JSON.parse(localStorage.getItem("user"));
      const headers = {
        accept: "application/json",
        Authorization: "Bearer " + user.token,
      };

      axios
        .get(baseUrl("admin-graph-first"), {
          headers: headers,
        })
        .then((res) => {
          setStudentData(res.data);
        })
        .catch((error) => {
          setStudentData(error);
        });
    }
  }, [navigate]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", backgroundColor: " white" }}>
      <CssBaseline />

      {/* AppBar section  */}
      <AppBar sx={{ backgroundColor: "#0d47a1"  }} position="fixed" open={open}>
        <Toolbar>
          <IconButton
        
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            title="Open"
            sx={{ mr: 2, ...(open && { display: "none"  }) }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <SearchPanel />
        </Toolbar>
      </AppBar>

      {/*---------------------------------- drawer section----------------------  */}
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundcolor: "black",
            color: "black",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader  style={{ color: "white" , backgroundColor: "#0d47a1"}}>
          <Link to="/">
            <h1 className="font-semibold text-md">School Management</h1>
          </Link>
          <IconButton
            style={{ color: "white" }}
            title="Close"
            onClick={handleDrawerClose}
          >
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon/>
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {/* ------------------------ Navigation List option -------------------- */}
        <List>
          {/* Dashboard section  */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/dp">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Student Information section  */}
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <List
                  style={{ marginLeft: "16px" }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <DoubleArrowIcon className="mr-[16px] my-2" /> Student
                  Information
                </List>
                <Menu {...bindMenu(popupState)}>
                  <Link to="/pendingStudent">
                    <MenuItem className="w-[200px]" onClick={popupState.close}>
                      Pending Student
                    </MenuItem>
                  </Link>
                  <Link to="/allStudent">
                    <MenuItem onClick={popupState.close}>All Student</MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Divider />

          {/* Teachers section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminTeachers">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Teachers" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Employees section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminEmployees">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Notices section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminNotices">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Notices" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Events section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminEvent">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Routines section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminRoutines">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Routines" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Syllabus section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminSyllabus">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Syllabus" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Payment Fees section  */}
          <PopupState variant="popover" popupId="demo-popup-menu">
            {(popupState) => (
              <React.Fragment>
                <List
                  style={{ marginLeft: "16px" }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <DoubleArrowIcon className="mr-[16px]" /> Payment Fees
                </List>
                <Menu {...bindMenu(popupState)}>
                  <Link to="/pendingPayment">
                    <MenuItem className="w-[200px]" onClick={popupState.close}>
                      Pending Payment
                    </MenuItem>
                  </Link>
                  <Link to="/approvedPayment">
                    <MenuItem onClick={popupState.close}>
                      Approved Payment
                    </MenuItem>
                  </Link>
                </Menu>
              </React.Fragment>
            )}
          </PopupState>
          <Divider />

          {/* Admission Management section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminAdmissionMng">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Addmission" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Class Management section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminClassMng">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Class" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Attendance section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminAttendance">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Attendance" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Online Class & Exam System section */}
          <ListItem disablePadding sx={{ display: "block"}}>
            <ListItemButton to="">
              <ListItemIcon sx={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Online Class & Exam System" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Examination section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminExamination">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Examinaiton Management" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Accounts section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminAccountsMng">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Accounts" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Printable Result section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminPrintableResult">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Printable Result" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Profile Management section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Profile Management" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Evaluation Management section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Evaluation Management" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Website Management section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Website Management" />
            </ListItemButton>
          </ListItem>
          <Divider />

          {/* Time Table & Scheduling section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Time Table & Scheduling" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/*--------------------------- main section ------------------------------ */}
      <Main  className="bg-[#e4e8ed]"  open={open}>
        <DrawerHeader /> 
        <DashBoardBody />
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
          <Route path="/approvedPayment" component={<AdminAttendance />} />
        </Routes>
      </Main>
    </Box>
  );
}

import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { IoMdArrowDropright } from "react-icons/io";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

// appbar function -------------------------------------------------------------------------------

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function AdminPanel() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* AppBar ------------------------------------------------------------------------------------- */}
      <Drawer variant="permanent" open={open}>
        <DrawerHeader sx={{ backgroundColor: "#0d47a1", color: "white" }}>
          <Link to="/">
            <h1 className="font-semibold text-md">School Management</h1>
          </Link>
          <IconButton sx={{ color: "white" }} onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {/* ------------------------ Navigation option section -------------------- */}

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
                  style={{
                    marginLeft: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <DoubleArrowIcon className="mr-[30px] my-2" /> Student
                  Information <IoMdArrowDropright />
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
                  style={{
                    marginLeft: "16px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  variant="contained"
                  {...bindTrigger(popupState)}
                >
                  <DoubleArrowIcon className="mr-[30px]" /> Payment Fees{" "}
                  <IoMdArrowDropright />
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
              <ListItemText primary="Addmission " />
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

          {/* Examination section */}
          <ListItem disablePadding sx={{ display: "block" }}>
            <ListItemButton to="/adminExamination">
              <ListItemIcon style={{ color: "black" }}>
                <DoubleArrowIcon />
              </ListItemIcon>
              <ListItemText primary="Examination" />
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
        </List>
      </Drawer>
      <Box component="main"></Box>
    </Box>
  );
}

import sidebar from '../styles/sidebar.module.scss'

import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";


import Link from 'next/link';

const Sidebar = () => {
  return (
    <>
      <div className={sidebar.sidebar}>
        <div className={sidebar.top}>
          <span className={sidebar.logo}>Freelancer</span>
        </div>
        <hr />
        <div className={sidebar.center}>
          <ul>
            <p className={sidebar.title}>MAIN</p>
            <li>
            <DashboardIcon className={sidebar.icon} />
              <Link href="/dash">
              <span>Dashboard</span>
              </Link>
            </li>
            <p className={sidebar.title} >LISTS</p>
            <li>
              <PersonOutlineIcon className={sidebar.icon}  />
              <span>Users</span>
            </li>
            <li>
              <StoreIcon className={sidebar.icon}  />
              <span>Products</span>
            </li>

            <li>
            <CreditCardIcon className={sidebar.icon}  />
                <Link href="dash/myOrder">
              <span>Orders</span>
              
                </Link>
            </li>
            <p className={sidebar.title} >USEFUL</p>
            <li>
              <InsertChartIcon className={sidebar.icon}  />
              <span>Stats</span>
            </li>
            <li>
              <NotificationsNoneIcon className={sidebar.icon}  />
              <span>Notifications</span>
            </li>
            <p className={sidebar.title} >USER</p>
            <li>
              <AccountCircleOutlinedIcon className={sidebar.icon}  />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className={sidebar.icon}  />
              <span>Logout</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


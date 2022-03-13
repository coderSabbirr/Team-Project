import sidebar from '../styles/sidebar.module.scss'

import DashboardIcon from "@mui/icons-material/Dashboard";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import RssFeedIcon from '@mui/icons-material/RssFeed';
import AddIcon from '@mui/icons-material/Add';

import Link from 'next/link';
import { useRouter } from 'next/router'

const Sidebar = () => {
  const router = useRouter();
  return (
    <>
      <div className={sidebar.sidebar}>
        <div className={sidebar.top}>
          <span className={sidebar.logo}>Admin</span>
        </div>
        <hr />
        <div className={sidebar.center}>
          <ul>
            <p className={sidebar.title}>MAIN</p>
            <li>
            <DashboardIcon className={sidebar.icon} />
            <span  onClick={() => router.push('/dash')}>
               Dashboard
           </span>
              {/* <Link href="/dash">
               <span>  Dashboard </span>
              </Link> */}
            </li>
            <p className={sidebar.title} >BLOGS</p>
            <li>
              <RssFeedIcon className={sidebar.icon}  />
              <span  onClick={() => router.push('/dash/myBlog')}>
               My blogs
           </span>
              {/* <Link href="dash/myBlog">
              <span>My Blog</span>
              </Link> */}
            </li>
            <li>
              <AddIcon className={sidebar.icon}  />
              <span  onClick={() => router.push('/dash/createBlog')}>
              Create Blog
           </span>
            </li>

            <p className={sidebar.title} >Gallery</p>
            <li>
              <RssFeedIcon className={sidebar.icon}  />
              <span  onClick={() => router.push('/dash/myGallery')}>
               My Gallery
           </span>
            </li>
            <li>
              <AddIcon className={sidebar.icon}  />
              <span>Add Image</span>
            </li>

           
            <p className={sidebar.title} >ORDERS</p>
            <li>
            <CreditCardIcon className={sidebar.icon}  />
            <span  onClick={() => router.push('/dash/myOrder')}>
               Orders history
           </span>

                {/* <Link href="dash/myOrder">
                  My Orders
                </Link> */}
            </li>
            <p className={sidebar.title} >USER</p>
            <li>
              <AccountCircleOutlinedIcon className={sidebar.icon}  />
              <span>Profile</span>
            </li>
            <li>
              <ExitToAppIcon className={sidebar.icon}  />
              <span  onClick={() => router.push('/')}>
              Logout
           </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;


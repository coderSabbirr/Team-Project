import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

import featuredStyle from '../styles/featured.module.scss'

const Featured = () => {
  return (
    <div className={featuredStyle.featured}>
      <div className={featuredStyle.top}>
        <h1 className={featuredStyle.title}>Total Revenue</h1>
        <MoreVertIcon fontSize="small" />
        </div>
        <div className={featuredStyle.bottom}>
          <div className={featuredStyle.featuredChart}>
              <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
          </div>
          <p className={featuredStyle.title}>Total sales made today</p>
          <p className={featuredStyle.amount}>$420</p>
          <p className={featuredStyle.desc}>
          Previous transactions processing. Last payments may not be included.
          </p>
          <div className={featuredStyle.summary}>
          <div className={featuredStyle.item}>
            <div className={featuredStyle.itemTitle}>Target</div>
            <div className={`${featuredStyle.itemResult} ${featuredStyle.negative}`} >
              <KeyboardArrowDownIcon fontSize="small"/>
              <div className={featuredStyle.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={featuredStyle.item}>
            <div className={featuredStyle.itemTitle}>Last Week</div>
            <div className= {`${featuredStyle.itemResult} ${featuredStyle.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={featuredStyle.resultAmount}>$12.4k</div>
            </div>
          </div>
          <div className={featuredStyle.item}>
            <div className={featuredStyle.itemTitle}>Last Month</div>
            <div className={`${featuredStyle.itemResult} ${featuredStyle.positive}`}>
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className={featuredStyle.resultAmount}>$12.4k</div>
            </div>
          </div>
        </div>
          </div>
    </div>
  )
}

export default Featured
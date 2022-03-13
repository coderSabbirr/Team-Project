import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import listStyle from '../styles/list.module.scss'

const List = ({type,rows}) => {
  let data;

    switch(type){
        case "blog":
            data = {
              title: "Blog Title",
              coverTitle: "Blog Image"
              };
            break;
            case "gallery":
              data = {
                title: "Gallery Title",
                coverTitle: "Gallery Image"
              };
              break;
          
          default:
            break;
    }


  return (
    <TableContainer component={Paper} className={listStyle.table}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={listStyle.tableCell}>Tracking ID</TableCell>
            <TableCell className={listStyle.tableCell}>{data.coverTitle}</TableCell>
            <TableCell className={listStyle.tableCell}>{data.title}</TableCell>
            <TableCell className={listStyle.tableCell}>Date</TableCell>
            <TableCell className={listStyle.tableCell}>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className={listStyle.tableCell}>{row.id}</TableCell>
              <TableCell className={listStyle.tableCell}>
                <div className={listStyle.cellWrapper}>
                  <img src={row.img} alt="" className={listStyle.image} />
                </div>
              </TableCell>
              <TableCell className={listStyle.tableCell}>{row.title}</TableCell>
              <TableCell className={listStyle.tableCell}>{row.date}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
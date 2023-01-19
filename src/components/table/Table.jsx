import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
  const rows = [
    {
      id: 1143155,
      product: "Jeans Black",
      img: "https://i.pinimg.com/564x/5f/14/2c/5f142c59bf1a88f8bd8a79fcfb34d51a.jpg",
      customer: "Mason",
      date: "10 January",
      amount: 800,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Shirt Jeans",
      img: "https://i.pinimg.com/564x/33/73/1f/33731f1d4ba052589409cadc9462546f.jpg",
      customer: "John",
      date: "14 January",
      amount: 1000,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342353,
      product: "Long Jeans",
      img: "https://i.pinimg.com/236x/ae/af/e5/aeafe5b0f91dc92e9459f8935b7730aa.jpg",
      customer: "Marcus",
      date: "8 May",
      amount: 1200,
      method: "Online Payent",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Jeans 2",
      img: "https://i.pinimg.com/564x/48/90/83/4890837c9ed475d89bc3b6925044c728.jpg",
      customer: "Jack",
      date: "30 July",
      amount: 1900,
      method: "Online Payment",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Shirt Black Jeans",
      img: "https://i.pinimg.com/564x/ce/47/2e/ce472ed99be734192cad5aead5568517.jpg",
      customer: "Jazmin",
      date: "4 August",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCellTitle">Tracking ID</TableCell>
            <TableCell className="tableCellTitle">Product</TableCell>
            <TableCell className="tableCellTitle">Customer</TableCell>
            <TableCell className="tableCellTitle">Date</TableCell>
            <TableCell className="tableCellTitle">Amount</TableCell>
            <TableCell className="tableCellTitle">Payment Method</TableCell>
            <TableCell className="tableCellTitle">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List
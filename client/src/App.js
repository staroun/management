import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
// import { withStyles } from '@mui/styles';
// import Paper from '@mui/material';

// const styles = theme => ({
//   root: {
//     width: '100%', marginTop: theme.spacing.unit * 3, overflowX: "auto"
//   },
//   table: {
//     minWidth: 1080
//   }
// })

const customers = [
  {
    id: 1,
    image: 'https://placehold.it/64',
    name: '이성운',
    birthday: 550101,
    gender: '남자',
    job: '교수'
  },
  {
    id: 2,
    image: 'https://placehold.it/64',
    name: '홍길동',
    birthday: 550101,
    gender: '남자',
    job: '학생'
  },
  {
    id: 3,
    image: 'https://placehold.it/64',
    name: '이순신',
    birthday: 550101,
    gender: '남자',
    job: '군인'
  },
  {
    id: 4,
    image: 'https://placehold.it/64',
    name: '성춘향',
    birthday: 550101,
    gender: '여자',
    job: '프로그래머'
  }
]

function App() {
  // const { classes } = this.props;
  return (
    // <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>이미지</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); })}
        </TableBody>
      </Table>
    // </Paper>
  );
}

export default App;
// export default withStyles (styles)(App);

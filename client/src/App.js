import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import CircularProgress from '@mui/material/CircularProgress';
// import { withStyles } from '@mui/styles';
// import Paper from '@mui/material';

// const styles = theme => ({
//   root: {
//     width: '100%', marginTop: theme.spacing.unit * 3, overflowX: "auto"
//   },
//   table: {
//     minWidth: 1080
//   },
//   progress: {
//      margin: ThemeContext.spacing.unit * 2
//  }
// })

class App extends Component {
  state = {
    customers: "",
    completed: 0
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
      .then(res => this.setState({ customers: res }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({completed: completed >= 100 ? 0 : completed + 1 });
  }

  render() {
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
          {this.state.customers ?
            this.state.customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />); }) :
            <TableRow>
              <TableCell colspan="6" align="center">
                <CircularProgress variant="determinate" value={this.state.completed}/>
              </TableCell>
              </TableRow>}
        </TableBody>
      </Table>
      // </Paper>
    );
  }
}

export default App;
// export default withStyles (styles)(App);

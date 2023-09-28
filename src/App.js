import './App.css';
import Customer from './components/Customer';

const customer = {
  name: '이성운',
  num: '1111',
  gender: '남자',
  job: '교수'
}

function App() {
  return (
    <Customer
      name = {customer.name}
      num = {customer.num}
      gender = {customer.gender}
      job = {customer.job}   
    />
  );
}

export default App;

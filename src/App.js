import './App.css';
import Customer from './components/Customer';

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
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              gender={c.gender}
              job={c.job}
            />
          );
        })
      }
    </div>
  );
}

export default App;

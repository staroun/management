const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
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
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));

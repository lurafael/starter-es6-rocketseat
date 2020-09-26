// Transforme os seguintes trechos de código utilizando async/await:

// Função delay aciona o .then após 1s
// const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

//1.1
// function umPorSegundo() {
//     delay().then(() => {
//     console.log('1s');
//     delay().then(() => {
//     console.log('2s');
//     delay().then(() => {
//     console.log('3s');
//     });
//     })
//     });
//    }
//    umPorSegundo();

const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

async function umPorSegundo() {
    await delay(console.log('1s'));
    await delay(console.log('2s'));
    await delay(console.log('3s'));
}
umPorSegundo();

//1.2
// import axios from 'axios';
// function getUserFromGithub(user) {
//  axios.get(`https://api.github.com/users/${user}`)
//  .then(response => {
//  console.log(response.data);
//  })
//  .catch(err => {
//  console.log('Usuário não existe');
//  })
// }
// getUserFromGithub('diego3g');
// getUserFromGithub('diego3g124123');

import axios from 'axios';

const getUserFromGithub = async (user) => {
    try {
        const response = await axios.get(`https://api.github.com/users/${user}`);
        console.log(response.data);
    } catch (err) {
        console.warn('Usuário não existe');
    }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');


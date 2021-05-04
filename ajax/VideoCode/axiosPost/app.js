// async function getUsers() {
//   const res = await axios.get('https://reqres.in/api/users?page=2');
//   console.log(res);
// } 

// async function createUser() {
//   const res = await axios.post('https://reqres.in/api/users?page=2', {username: 'Paperslippybarshange', emaile: 'taekbeen@gmail.com', age: '2'});
//   console.log(res);
// } 

async function getUsers(token) {
  const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users?skip=0&limit=10', {params: { token }});
  console.log(res)
}

async function signUp(username, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } })
  console.log(res)
}


async function logIn(username, password, name) {
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } })
  console.log(res);
  return res.data.token;
}


async function getUsersWithAuth() {
  const token = await logIn('taekbeen', 'taek113');
  getUsers(token)
}

async function createStory() {
  const token = await logIn('taekbeen', 'taek113');
  const newStory = {
    token,
    story: {
      author: 'Butters',
      title: 'Bock Bock Bock',
      url: 'http://chickens4lyfe.com'
    }
  }
  const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory)
  console.log(res)
}

createStory();
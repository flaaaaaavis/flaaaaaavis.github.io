const signin = document.getElementById('btn-signin')
const ancoraMessage = document.getElementById('register-ancora-message')
const ancora = document.getElementById('register-ancora')
const register = document.getElementById('btn-register')

function changeView(shown, hidden) {
  const toHide = document.getElementById(shown)
  const toShow = document.getElementById(hidden)

  toHide.style.display('none');
  toShow.style.display('flex');
}

signin.addEventListener('click', async (req, res) => {
  await fetch('http://localhost:3000/signIn', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: document.getElementById('registeredEmail').value,
      password: document.getElementById('registeredPass').value
    })
  }).then( res => {
    if(res.message == 'Created token. Logged in') {
      displayControl( 'sign-in', 'content')
    } else if(res.message == 'Wrong password, try again') {
      console.log('Wrong password, try again')
    } else if(res.message == 'User not found') {
      displayControl( 'sign-in', 'register-ancora-message')
      ancoraMessage.style.color = red
    } else if(res.message == 'Try again') {
      console.log('Try again')
    }
  }).catch(err => console.log(err.message))
})

ancora.addEventListener('click', () => {
  changeView( 'sign-in', 'register')
})

register.addEventListener('click', async (req, res) => {
  await fetch('http://localhost:3000/register', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      email: document.getElementById('email').value,
      password: document.getElementById('pass').value
    })
  }).then( res => {
    return res.text()
  }).then( data => {
    console.log(JSON.parse(data))
  }).catch(err => console.log(err))
})

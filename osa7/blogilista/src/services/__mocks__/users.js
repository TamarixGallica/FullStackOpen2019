const users = [{
  'blogs': [{
    'title': 'React patterns',
    'author': 'Michael Chan',
    'url': 'https://reactpatterns.com/',
    'likes': 9,
    'id': '5e16ffcf5c5b6923aad8acca'
  }, {
    'title': 'Go To Statement Considered Harmful',
    'author': 'Edsger W. Dijkstra',
    'url': 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    'likes': 9,
    'id': '5e16ffcf5c5b6923aad8accc'
  }, {
    'title': 'Canonical string reduction',
    'author': 'Edsger W. Dijkstra',
    'url': 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    'likes': 12,
    'id': '5e16ffcf5c5b6923aad8acce'
  }, {
    'title': '',
    'author': '',
    'url': '',
    'likes': 0,
    'id': '5e17624c68c10f354c48a34d'
  }],
  'username': 'root',
  'name': 'Squareroot of all evil',
  'id': '5e16ffcf5c5b6923aad8acc8'
}, {
  'blogs': [{
    'title': 'Brianin elämä',
    'author': 'Brian Kottarainen',
    'url': 'foo',
    'likes': 0,
    'id': '5e172dc47358982d96ceab25'
  }],
  'username': 'briankottarainen',
  'name': 'Brian Kottarainen',
  'id': '5e16ffcf5c5b6923aad8acc9'
}, {
  'blogs': [],
  'username': 'britakottarainen',
  'name': 'Brita Kottarainen',
  'id': '5e16ffcf5c5b6923aad8acd0'
}]

const getAll = () => {
  return Promise.resolve(users)
}

export default { getAll }
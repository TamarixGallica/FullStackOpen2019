const blogs = [
  {
    'title': 'React patterns',
    'author': 'Michael Chan',
    'url': 'https://reactpatterns.com/',
    'likes': 10,
    'user': {
      'username': 'root',
      'name': 'Squareroot of all evil',
      'id': '5e0f156f424fb8545babf82d'
    },
    'id': '5e0f156f424fb8545babf82f'
  },
  {
    'title': 'Go To Statement Considered Harmful',
    'author': 'Edsger W. Dijkstra',
    'url': 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    'likes': 10,
    'user': {
      'username': 'root',
      'name': 'Squareroot of all evil',
      'id': '5e0f156f424fb8545babf82d'
    },
    'id': '5e0f156f424fb8545babf831'
  },
  {
    'title': 'Canonical string reduction',
    'author': 'Edsger W. Dijkstra',
    'url': 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    'likes': 14,
    'user': {
      'username': 'root',
      'name': 'Squareroot of all evil',
      'id': '5e0f156f424fb8545babf82d'
    },
    'id': '5e0f156f424fb8545babf833'
  },
  {
    'title': '1',
    'author': '1',
    'url': '1',
    'likes': 0,
    'user': {
      'username': 'briankottarainen',
      'name': 'Brian Kottarainen',
      'id': '5e0f156f424fb8545babf82e'
    },
    'id': '5e0f1a579c092b1a1a4d72a1'
  }]

const getAll = () => {
  return Promise.resolve(blogs)
}

const setToken = () => {}

export default { getAll, setToken }
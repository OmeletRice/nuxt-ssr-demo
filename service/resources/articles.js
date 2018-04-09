export default function (instance) {
  const path = 'articles'

  return {
    fetchAll () {
      return instance
        .get(`${path}`)
        .then(response => response.data)
    }
  }
}

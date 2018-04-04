export default function (instance) {
  const path = 'app'

  return {
    fetch (id) {
      return instance
        .get(`${path}`)
        .then(response => response.data)
    }
  }
}

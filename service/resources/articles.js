export default function (instance) {
  const path = 'articles'

  return {
    fetchAll () {
      return instance
        .get(`${path}`)
        .then(response => response.data)
    },

    fetch(params) {
      return instance
        .get(`${path}/${params.article_id}`)
        .then(res => res.data)
      }
  }
}

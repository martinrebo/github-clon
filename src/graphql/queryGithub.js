export const QUERY_GITHUB = `
query repo {
    user(login: "martinrebo") {
      name
      bio
      avatarUrl
      company
      email
      repositories(first: 50) {
          nodes {
            name
            description
            createdAt
            resourcePath
            url
          }
      }
    }
  }
  
`

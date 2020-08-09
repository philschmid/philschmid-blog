module.exports = ({actions}) => {
  actions.createTypes(`
    type Article implements Node {
      id: ID!
      slug: String!
      title: String!
      date: Date! @dateformat
      author: String!
      excerpt(pruneLength: Int = 140): String!
      tag: [String]
      photograph: String
      body: String!
      hero: File @fileByRelativePath
      timeToRead: Int
    }
  `);
  actions.createTypes(`
  type Notebook implements Node {
    id: ID!
    slug: String!
    title: String!
    date: Date! @dateformat
    author: String!
    excerpt(pruneLength: Int = 140): String!
    tag: [String]
    photograph: String
    body: String!
    hero: File @fileByRelativePath
    timeToRead: Int
  }
`);
};

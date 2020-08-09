const fs = require('fs-extra'); // eslint-disable-line import/no-extraneous-dependencies

module.exports = async ({reporter}, themeOptions) => {
  const authorsPath = themeOptions.contentAuthors || 'content/authors';
  const postsPath = themeOptions.contentPosts || 'content/posts';
  const notebooksPath = themeOptions.contentNotebooks || 'content/notebooks';

  if (!fs.existsSync(authorsPath)) {
    reporter.warn(`
      Missing directory for Authors.
      We are creating the "${authorsPath}" directory for you.
      Please ensure you add your authors within "${authorsPath}"
    `);

    fs.mkdirSync(authorsPath, {recursive: true});
  }

  if (!fs.existsSync(postsPath)) {
    reporter.warn(`
      Missing directory for Posts.
      We are creating the "${postsPath}" directory for you.
      Please ensure you add your posts within "${postsPath}"
    `);

    fs.mkdirSync(postsPath, {recursive: true});
  }
  if (!fs.existsSync(notebooksPath)) {
    reporter.warn(`
      Missing directory for Notebooks.
      We are creating the "${notebooksPath}" directory for you.
      Please ensure you add your posts within "${notebooksPath}"
    `);

    fs.mkdirSync(notebooksPath, {recursive: true});
  }
};

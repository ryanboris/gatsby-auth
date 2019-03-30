const cred = require('./cred.js')

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-firebase-firestore`,
      options: {
        // pass you Firebase credentials in here.
        credential: cred,
        databaseURL: 'https://doormangats.firebaseio.com',
        types: [
          {
            // The TypeName - Will become `FirebaseLike` in Gatsby
            // *required*
            type: 'User',
            // The path to the resource in your Firestore database
            // *required*
            path: 'users',
            // Any additional Firestore queries
            // Default: (ref) => ref
            query: ref => ref.limit(50),
            // Use the map function to transform your nodes however you like.
            // Default: (node) => node
            map: node => {
              node.id = `user-${node.id}`
              return node
            }
          }
        ]
      }
    }
  ]
}

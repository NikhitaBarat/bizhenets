const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')
const { model } = require('mongoose')


let schema = buildSchema(gql`



    type Query {
        hello: String
    }
`)


let root = {
    hello: () => {
        return 'GraphQL server is running 🚀'
    }
}

module.exports = graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
})
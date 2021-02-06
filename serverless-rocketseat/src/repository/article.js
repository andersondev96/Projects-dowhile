const AWS = require('aws-sdk')
const { v4: uuidv4 } = require('uuid')

const  dydemoDB = new AWS.DynamoDB.DocumentClient()
const ARTICLES_TABLE = 'articles'

const create = async article => {
  const articleId= uuidv4()
  const newArticle = {
    articleId,
    ...article
  }

  const params= {
    tableName: ARTICLES_TABLE,
    Item: newArticle
  }

  await dydemoDB.put(params).promise()

  return newArticle
}

const get = async articleId => {
  const params= {
    tableName: ARTICLES_TABLE,
    Key: {
      articleId
    }
  }

  const response = await dydemoDB.get(params).promise()

  return response.Item
}

module.exports = {
  create,
  get
}

const AWS = require('aws-sdk')
const dynamoConfig = require('../dynamo.config');
const uuid = require('uuid')

// @desc create application
// @route POST /api/application/create
const createUser = async (req, res) => {
    AWS.config.update(dynamoConfig.aws_remote_config);
    const docClient = new AWS.DynamoDB.DocumentClient();
    const Item = req.body
    Item.id = uuid()
    let params = {
        TableName: dynamoConfig.aws_table_name,
        Item: Item
    }

    // creating user
    docClient.put(params, (err, data) => {
        if(err){
            res.send(err)
        }else {
            res.status(201).send(data);
        }
    });
}

// @desc get user application submitted to host
// @route GET /api/application/host/applied
const getAppliedUser = async (req, res) => {
    AWS.config.update(dynamoConfig.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: dynamoConfig.aws_table_name
    };

    docClient.scan(params, (err, data) => {

        if(err) {
            console.log(err);
            res.status(400).send(err)
        }else{
            res.status(200).send(data)
        }

    })

}

// @desc get user profile of user submitted the application
// @route GET /api/application/applied
const getUserProfile = async (req, res) => {
    AWS.config.update(dynamoConfig.aws_remote_config);

    const docClient = new AWS.DynamoDB.DocumentClient();

}

// @desc remove user application 
// @route DELETE /api/application/:id
const deleteUserProfile = async (req, res) => {


}

module.exports = {
    createUser,
    getAppliedUser,
    getUserProfile,
    deleteUserProfile
}
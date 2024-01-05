const data = require('../../public/dbpost.json');
const headers = {
    'Content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
};

exports.handler = async (event, context, callback) => {
    return {
        body: JSON.stringify(data),
        statusCode: 200,
        headers: headers

    }
}



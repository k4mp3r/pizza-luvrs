const AWS = require('aws-sdk')
const s3 = new AWS.S3()

module.exports.save = (name, data) => {
    return new Promise((resolve, reject) => {
        const params = {
            Bucket: 'pizza-luvrs-brian',
            Key: `pizzas/${name}.png`,
            Body: Buffer.from(data, 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/png'
        }
        console.log(params)
        s3.putObject(params, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(`//pizza-luvrs-brian.s3.us-east-2.amazonaws.com/${params.Key}`)
            }
        })
    })
}
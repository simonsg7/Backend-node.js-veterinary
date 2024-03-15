const app = require('./app')
const port = 3002

app.set('port', port)

app.listen(app.get('port'), (error)=>{
    if (error) {
        console.error(error)
    } else {
        console.log('Servidor...', port)
    }
})
console.log('Launching Admin panel');

const io = require('socket.io')(2001);
const ResourceMonitor = require('./Functionalities/ResourceMonitor');
const RESTapi = require('./rest')

RESTapi.initializeRESTapi();

//Event names
const RESOURCE_REPORT = 'ResourceReport'
const CONNECTION_ESTABLISHED = 'Connected'

//Request event names
const RESORCE_REPORT_REQ = 'ResourceReport'

io.on('connection', (socket) => {

    // console.log('Client connected')
    socket.emit(CONNECTION_ESTABLISHED, 'ok')

    socket.on(RESORCE_REPORT_REQ, () => {
    var data = ResourceMonitor.getResourceReport();
    socket.emit(RESOURCE_REPORT, data);
    });
    socket.on('disconnect', (socket) => {
        // console.log('Client disconnected');
    })
})
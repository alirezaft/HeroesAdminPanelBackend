const osutil = require('os-utils');
const iostat = require('iostat');
const Report = require('../Classes/ResourceReport');
var prevbusy = 0;
var prevtotal = 0;
var tcpu;
iostat(['-x','-m','2[5]']).on('data', function(err, stats) {
  tcpu = 100 - stats.cpu['%idle']
});
module.exports = {
    getResourceReport(){
        var r = Report.NewResourceReport();
        // var iostat = require('iostat');
        
        
        r.RamUsage = osutil.freememPercentage() * 100;
        r.CpuUsage = tcpu;
        return r;
    }
}
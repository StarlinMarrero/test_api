var MikroNode = require('mikronode-ng');
    
// var device = new MikroNode({lns: {ipv4: ""}});
// 192.168.109.222
module.exports = () => {
    var connection = new MikroNode.getConnection("192.168.109.222", "user1", "123456789");

  
     console.log({connection: connection })
    connection.getConnectPromise(function(conn) {

      var chan = conn.openChannel();
      conn.closeOnDone = true;
      chan.write('/ip/address/print', function() {
        chan.closeOnDone = true;
        chan.on('done', function(data) {
          var parsed = MikroNode.parseItems(data);
          parsed.forEach(function(item) {
            console.log('Interface/IP: ' + item.interface + "/" + item.address);
          });
        });
        chan.once('trap', function(trap, chan) {
          console.log('Command failed: ' + trap);
        });
        chan.once('error', function(err, chan) {
          console.log('Oops: ' + err);
        });
      });
    })
      return
    // device.connect().then((data)=>{

    //     console.log(data)

    //     return data[0]('user1','123456789');
        

    //   }).catch(error => console.log({error})).then(function(conn) {
    
    //     console.log({con})
    //     var chan=conn.openChannel("addresses"); // open a named channel
    //     var chan2=conn.openChannel("firewall_connections",true); // open a named channel, turn on "closeOnDone"
    
    //     console.log({con, chan, chan2})
    //     chan.write('/ip/address/print');

    
    //     chan.on('done',function(data) {
    
    //          // data is all of the sentences in an array.
    //          data.forEach(function(item) {
    //             console.log('Interface/IP: '+item.data.interface+"/"+item.data.address);
    //          });
    
    //          chan.close(); // close the channel. It is not autoclosed by default.
    //          conn.close(); // when closing connection, the socket is closed and program ends.
    
    //     });
    
    //     chan.write('/ip/firewall/print');
    
    //     chan.done.subscribe(function(data){
    
    //          // data is all of the sentences in an array.
    //          data.forEach(function(item) {
    //             var data = MikroNode.resultsToObj(item.data); // convert array of field items to object.
    //             console.log('Interface/IP: '+data.interface+"/"+data.address);
    //          });
    
    //     }).catch(err => {
    //       console.log({err})
    //     });
    
    // });

}

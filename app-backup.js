console.log("Starting password manager");

var storage=require("node-persist");
storage.initSync();

storage.setItemSync('accounts',[{
    username: 'Poonam',
    balance: 100
}])

var data = storage.getItemSync('accounts')
console.log(data);
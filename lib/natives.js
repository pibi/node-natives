var natives = process.binding('natives'),
    name;
    
for (name in natives) {
    exports[name] = require(name);        
}
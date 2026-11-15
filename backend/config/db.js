const mongoos = require("mongoose");

const connectdb = async () => {
    try {
        await mongoos.connect(process.env.MONGO_URL);
        console.log("Mongodb connected");
        
    } catch (error) {
        console.error('MongoDB Connection Failed:', error.message);
        process.exit(1); 
        
    }
};

module.exports =connectdb;


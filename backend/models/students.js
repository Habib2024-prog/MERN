

const mongoos = require("mongoose");

const studentschema = new mongoos.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        unique: true
    },
    department: {
        type: String,
        required: true
    },

    semester: {
        type: Number,
        required: true,
        min: 1,
        max: 8
    },

    cgpa: {
        type: Number,
        required: true,
        min: 0,
        max: 4
    }
},{
  timestamps: true
});
 
const Student = mongoos.model("Student", studentschema);
module.exports = Student;
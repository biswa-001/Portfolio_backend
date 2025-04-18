const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema= new Schema(
{
    title: {
        type: String,
        required: true
      },
      description: String,
      image: String,
      liveLink: String, 
      githubLink: String, 
      techStack: [String], 
      createdAt: {
        type: Date,
        default: Date.now
      }

}

)

module.exports = mongoose.model('Project', projectSchema);
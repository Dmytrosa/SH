import mongoose from 'mongoose';

const Hero = new mongoose.Schema({
    nickname: {type: String, required: true},
    real_name: {type: String, required: true},
    origin_description: {type: String, required: true},
    superpowers: {type: String, required: true},
    catch_phrase: {type: String, required: true},
    picture: [{type: String}]
})

export default mongoose.model('Hero', Hero)
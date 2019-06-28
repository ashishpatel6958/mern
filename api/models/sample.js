import mongoose,{Schema} from 'mongoose'


let RestaurantSchema = new Schema({
    name: {type: String, required: true, max: 100},
    meals : [{ type: String }]
    // meals : [{ type: Schema.Types.ObjectId, ref: 'meals' }]
},{
	timestamps:true
});

export default mongoose.model('restaurants', RestaurantSchema)

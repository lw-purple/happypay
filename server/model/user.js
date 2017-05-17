

// Models
var User = mongoose.model('user', {
    name:String,
    age:Number,
    sex:String,
    phone:Number,
    hosName:String,
    petName:String,
    petCate:String,
    password:String
});

// 定义对象模型
var UserScheme = new Schema({
real_name: {type: String, default: '匿名'},
password: {type: String, default: '123'},
mail: {type: String, default: ''},
birth: {type: Date, default: Date.now}

});

// 访问user对象
// (注意)NOTE: methods must be added to the schema before compiling it with mongoose.model()
UserScheme.methods.speak = function() {
var greeting = this.real_name ? 'My name is ' + this.real_name : 'I don\'t have a name…';
console.log(greeting);
}

mongoose.model('User', UserScheme);
var User = mongoose.model('User');
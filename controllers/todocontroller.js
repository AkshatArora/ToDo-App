var mongoose = require('mongoose');
//connect to database
mongoose.connect('mongodb://test:test@ds049486.mlab.com:49486/to_do'); 

//Create a schema -  this is like a blueprint
var todoSchema = new mongoose.Schema({
	item:String
});
//create a mongoose model or collection and base the model on schema
var Todo = mongoose.model('Todo',todoSchema);

var bodyParser =  require('body-parser')
var urlencodedParser = bodyParser.urlencoded({extended:false});
module.exports=function (app){
	
	app.get('/todo',function(req,res){
		//find all the items in the collection
		Todo.find({},function(err,data){
			if(err) throw err;
		res.render('todo',{data:data});
		})
		
	})
	app.post('/todo',urlencodedParser,function(req,res){
		//save the added item in the mongodb
		var newTodo =  Todo(req.body).save(function(err,data){
			if(err) throw err;
			res.json(data);
		})
	})
		

app.delete('/todo/:item',function(req,res){
	//remove the item from the mongodb
	Todo.find({item:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
		if(err) throw err;
		res.json(data);
})
})}
		

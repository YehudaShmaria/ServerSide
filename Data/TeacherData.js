var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Yehuda:yehuda21@cluster0.bndyq.mongodb.net/<dbname>?retryWrites=true&w=majority";


var GetAllTeacher = function(SendToView)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('MyDB');
    dbo.collection("Teachres").find({}).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
        SendToView(result);
        db.close();
    });
});
}

var GetOneTeacher = function(SendToView,Phone)
{
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('MyDB');
    var query = {PhoneNumber:Phone};
    var jsonq = JSON.stringify(query);
    dbo.collection("Teachres").find(jsonq).toArray(function(err, result) {
        if (err) throw err;
        console.log(result)
        SendToView(result);
        db.close();
    });
});
}

var insertTeacher = function(teacher){
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('MyDB');
    dbo.collection("Teachres").insertOne(teacher, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
});
}

var updateTeacher = function(pn,comment){
  MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true},function(err,db){
    if (err) throw err;
    var dbo = db.db('MyDB');
    const query = { PhoneNumber: '0524681430', "Commit.Commit":'אחלה מורה שבעולם'};
    const updateDocument = {
      $set: { "Commit.$.Commit": comment }
    };
    dbo.collection("Teachres").updateOne(query,updateDocument, function(err, res) {
      if (err) throw err;
      console.log("1 document update");
      db.close();
    });
});
}
module.exports.GetAllTeacher = GetAllTeacher;
module.exports.GetOneTeacher = GetOneTeacher;
module.exports.insertTeacher = insertTeacher;
module.exports.updateTeacher = updateTeacher;
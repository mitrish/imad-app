var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles ={
 "article-one": {
    title:'  Article one | Rishabh Mittal',
    heading:'article One',
    date:'05 Sept,2018',
    content:
    ` <p>
            This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.
            </p>
            <p>
                This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.
            </p>
            <p>
                This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.This is the conetent for my first article.
            </p>`
},
"article-two":{
   title:'  Article one | Rishabh Mittal',
    heading:'article One',
    date:'05 Sept,2018',
    content:
    ` <p>
            This is the conetent for my second article.
            </p>`
},
"article-three":{
     title:'  Article one | Rishabh Mittal',
    heading:'article One',
    date:'05 Sept,2018',
    content:
    ` <p>
            This is the conetent for my third article.
            </p>`
},
};
function createTemplate(data){
 var title = data.title;
 var date=data.date;
 var content=data.content;
 var heading=data.heading;

var htmlTemplate =
`<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name ="viewport" content="width-device-width, initital scale =1">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="contianer">
        <div>
            <a href="/">Home</a>
        </div>
        <br/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
        ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}
//add counter to know the number of calls to this page
var counter = 0;
app.get('/counter', function(req,res){
    counter += 1;
    res.send(counter.toString());
})

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
app.get('/:articleNames', function (req,res){
    var articleNames = req.params.articleNames
  res.send(createTemplate(articles[articleNames]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
var names = [];
app.get('/submit-name/:name',function(req,res){
  //Get teh name from request object
  var name = req.params.name;
  names.push(name);
  // JSON: javascript Object Notation
  res.send(JSON.stringify(names));
  //res.send(names);
})

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
//inject the above data in the html template
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

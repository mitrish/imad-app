var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article-one', function (req,res){
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req,res){
    res.send(createTemplate(articleOne));
 
});

app.get('/article-three', function (req,res){
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));

});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
//inject the above data in the html template
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

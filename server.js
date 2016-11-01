var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var contents={
    article_one:{
	title:"article-one,Riya",
        date:"Oct 4",
	heading:"article-one",
	body:` <p>
       This is my first app html.I am editig it locally.  This is my first app html.  This is my first app html.  This is my first app html.  
      This is my first app html.  
    </p>
    
     <p>
      This is my first app html.  This is my first app html.  This is my first app html.  This is my first app html.  
      This is my first app html.  
    </p>
    
     <p>
      This is my first app html.  This is my first app html.  This is my first app html.  This is my first app html.  
      This is my first app html. This is my first app html.  
      This is my first app html 
    </p>`},
    article_two:{	title:"article-two,Riya",
        date:"Oct 5",
	heading:"article-two",
	body:` <p>
       This is my first app html.I am editig it locally.  This is my first app html.  This is my first app html.  This is my first app html.  
      This is my first app html.  
        </p>`},
    article_three:{title:"article-three,Riya",
        date:"Oct 6",
	heading:"article-three",
	body:` <p>
       This is my first app html.I am editig it locally.  This is my first app html.  This is my first app html.  This is my first app html.  
      This is my first app html.  
        </p>`}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var body=data.body;
    var htmlTemplate=`<html>
    <head>
        <title>${title}</title>
    <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
      <div class="container">  
        <div>
            <a href="/">home</a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <hr/>
        ${body}
      </div>   
    </body>
     </html>`;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[aricleName])); 
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

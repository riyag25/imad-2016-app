var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var contents={
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
    </p>`
};
var html_template=`<html>
<head>
    <title>Article one</title>
<link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
  <div class="container">  
    <div>
        <a href="/">home</a>
    </div>
    <hr/>
    <h3>article one</h3>
    <div>sep 23</div>
    <hr/>
    <p>
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
    </p>
  </div>   
</body>
 </html>`
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/article-one', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

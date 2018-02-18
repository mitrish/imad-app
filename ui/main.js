var button = document.getElementById('counter');

button.onclick = function () {
  // make a request to the counter endpoint
    var request = new XMLHttpRequest();
  // Capture the response and store it in a variable
    request.onreadystatechange = function (){
        if(request.readyState === XMLHttpRequest.DONE){
            //take some action
            if(request.status === 200){
                var counter = request.responseText;
                 var span = document.getElementById('count');
                 span.innerHTML = counter.toString();
            }
        }
        // NOt done yet
    };
//make a request
request.open('GET','http://rishabhmittal200.imad.hasura-app.io/counter', true);
request.send(null);


};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = doucument.getElementById('submit_btn');
submt.onclick = function (){
  //Make a request to the server and send the name
  //Capture a list of name and render it.

  var names =['name1','name2','name3','name4'];
  var list ='';
  for(var i=0;i<names.length;i++){
    list +='<li>' + names[i] + '<li>'  

  }
  var ul = document.getElementsById('namelist')
  ul.innerHTML = list;
}

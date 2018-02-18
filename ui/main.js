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
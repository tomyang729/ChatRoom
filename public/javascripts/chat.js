var socket = io('http://localhost:3000');

$('form').submit(function(){
    socket.emit('chat message', username + ':' + $('#m').val());
    $('#m').val('');
    return false;
});

socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
});
$(document).ready(function(){
    $('#studentName, #studentMsg').focus(function ()
    {
        $(this).css('background', '#999');
    });

    $('#studentName, #studentMsg').blur(function ()
    {
        $(this).css('background', '#fff');
    });


    $('#sendMsg').click(function ()
    {
        var name = $('#studentName').val();
        var msg = $('#studentMsg').val();

        var domMsg = '<p class="msg" >' + name + ': ' + msg + '</p>';

        $('#messageBox').append(domMsg);

    });


    var colors = ["yellow", "pink", "red", "green"];
    var colorCount = 0;

    $('#border-color').click(function ()
    {
        if (colorCount > 3)
            colorCount = 0;
        $('#messageBox p').css('border-color', colors[colorCount]);
        colorCount++;
    });

});
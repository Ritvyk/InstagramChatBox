setInterval(checkEmpty,100);
function checkEmpty()
{
        if(document.getElementById("senderMessage").value)
        {
                // console.log(document.getElementById("senderMessage").value);
                document.getElementById("optionsSender").style.display="none";
                document.getElementById("senderSendBtn").style.display="inline-block";
        }
        if(document.getElementById("receiverMessage").value)
        {
                document.getElementById("optionsReceiver").style.display="none";
                document.getElementById("receiverSendBtn").style.display="inline-block";
        }
        if(document.getElementById("senderMessage").value==="")
        {
                document.getElementById("optionsSender").style.display="inline-block";
                document.getElementById("senderSendBtn").style.display="none"; 
        }
        if(document.getElementById("receiverMessage").value==="")
        {
                
                document.getElementById("optionsReceiver").style.display="inline-block";
                document.getElementById("receiverSendBtn").style.display="none";
        
        }
}

function senderToReceiver()
{
        var Message=document.getElementById("senderMessage").value;
        // console.log(Message);
        var receiverBox=document.getElementById("messageBoxReceiver");
        var senderBox=document.getElementById("messageBoxSender");
        senderBox.innerHTML+="<div class='outText'><div class='alignRight'>"+ `${Message}` +"</div></div>";
        receiverBox.innerHTML+="<div class='outText'><img src='./img/user1.jpg' class='iconSize left'><div class='alignLeft'>"+ `${Message}` +"</div></div>";
        document.getElementById("senderMessage").value="";
}

function receiverToSender()
{
    var Message=document.getElementById("receiverMessage").value;
//     console.log(Message);
    var senderBox=document.getElementById("messageBoxSender");
    var receiverBox=document.getElementById("messageBoxReceiver");
    receiverBox.innerHTML+="<div class='outText'> <div class='alignRight'>"+ `${Message}` +"</div></div>";    
    senderBox.innerHTML+="<div class='outText'><img src='./img/user2.jpg' class='iconSize left'><div class='alignLeft'>"+ `${Message}` +"</div></div>";
    document.getElementById("receiverMessage").value="";
}
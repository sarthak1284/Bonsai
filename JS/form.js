/* EXTERNAL JS*/ 

function validation()
    {
        
        var email = document.forms["myform"]["email"].value;
        if (email=="")                                          /* If value of mail is found empty */
            {
                alert("Empty field found");
            }
        else{
                alert ("Thank You for your FeedBack");
        }
    }

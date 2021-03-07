var attempt = 3; // counting number 0f attemps to 3
function validate(){
    // executes onclick of login button.
    var username = document.getElementById("username").Value;
    var password = document.getElementById("password").Value;
    if (username == "pcf113" && password == "trust@123"){
        alert("login Successful");
        window.location = "success.html";
        return false;
    }
    else{
        attempt --; //login decrements by one
        alert(" "+attempt+" attempt;");
        //fields disabled after 3 attemps.

        if (attempt == 0){
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;

        }
    }
}
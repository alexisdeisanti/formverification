function validate()
{
var un = document.myform.username.value;

var pw = document.myform.pword.value;

var flname = document.myform.flname.value;

var valid = false;

var invalid = true;
 

var flnameArray = ["Kaunda Hughes","Coniece Cookhorn"]
var unArray = ["Khughes7", "Cookiecane"]; 

var pwArray = ["Password1", "Password2"]; 

 

for (var i=0; i <unArray.length; i++)

{

if ((un == unArray[i]) && (pw == pwArray[i]) && (flname == flnameArray[i]))

{

valid = true;
}
}
 

if (valid)
{
alert ("Access is Granted");
 
return false;

}
 
else
 

if (invalid)

{

alert ("Access Denied");

return true;

}

}
 

function doClear()

{

document.getElementById("username").value="";

document.getElementById("pword").value="";

document.getElementById("flname").value="";

}

 

function Adduser()

{

alert("Add person ");

un.push(document.getElementById("username").value);

pw.push(document.getElementById("pword").value);

flname.push(document.getElementById("flname").value);

alert("Name added was: " + document.getElementById("username").value);

}
 

function Deleteuser()
{

alert("Delete person ");

un.pop(document.getElementById("username").value);

pw.pop(document.getElementById("pword").value);

flname.pop(document.getElementById("flname").value);

alert("Name deleted was: " + document.getElementById("username").value);

}
 

function Updatepass()

{
alert("Changing password ");

var t1=pw.splice(pwArray[i],pwArray[i],"Password5","Password6");

document.write(pw.join(" <br> "));

alert("Password changed ");

}
 

function Showdata()

{

alert("Compiling data ");

document.write(un.toString());

document.write(pw.toString());

document.write(flname.toString());

alert("Finished compiling data ");

}

 <script type="text/javascript" src="<?php echo base_url();?>support/datepicker/js/jquery-1.7.2.min.js"></script>
 <script type="text/javascript" src="<?php echo base_url();?>support/js/jquery.validate.js"></script>

 <script>
  $(document).ready(function() {

// validate signup form on keyup and submit
var validator = $("#voucherform").validate({
    showErrors: function(errorMap, errorList) {
        $(".errormsg").html($.map(errorList, function (el) {
            return el.message;
        }).join(", "));
    },
    wrapper: "span",
    rules: {

        reg_number[]: {
            required: true,
            minlength: 2,
            remote: {
                url: '<?php echo base_url();?>sales/invoice_check', async: false,
                type: 'post'
            },

        }
    },
    messages: {

        reg_number[]: {
            required: "Enter Reg Number",
            minlength: jQuery.format("Enter at least {0} characters"),
            remote: jQuery.format("{0} is already in use")
        },
    }
    });
    });
   </script>

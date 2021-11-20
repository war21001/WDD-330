'use strict;'
window.onload = function() {
    document.getElementById("first_name").focus();  
}

item_0.addEventListener('change', total_cost); 
item_1.addEventListener('change', total_cost); 
item_2.addEventListener('change', total_cost); 
item_3.addEventListener('change', total_cost); 
item_4.addEventListener('change', total_cost); 

function focusInput(){
    document.getElementById("first_name").focus();
    document.getElementById("total").innerHTML=" ";
    document.getElementById("first_name_error").innerHTML=" ";
    document.getElementById("last_name_error").innerHTML=" ";
    document.getElementById("address_error").innerHTML=" ";
    document.getElementById("phone_error").innerHTML=" ";
    document.getElementById("credit_card_error").innerHTML=" ";
    document.getElementById("exp_date_error").innerHTML=" ";
  }

  function checkFields(){ 
    // checking for empty fields
    document.getElementById("first_name_error").innerHTML=" ";
    document.getElementById("last_name_error").innerHTML=" ";
    document.getElementById("address_error").innerHTML=" ";
    document.getElementById("phone_error").innerHTML=" ";
    document.getElementById("credit_card_error").innerHTML=" ";
    document.getElementById("exp_date_error").innerHTML=" ";


    var fn = document.forms["form"]["first_name"].value;
    var ln = document.forms["form"]["last_name"].value;
    var add = document.forms["form"]["address"].value;
    var ph = document.forms["form"]["phone"].value;
    var cc = document.forms["form"]["credit_card"].value;
    var ex = document.forms["form"]["exp_date"].value;
    var focus = 0;

    if(!fn){
      document.getElementById("first_name_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      focus = 1;
    }
    if(!ln){
      document.getElementById("last_name_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      if (focus ==0){
        focus = 2;
      }    
    }
    if(!add){
      document.getElementById("address_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      if (focus ==0){
        focus = 3;
      }
    }
    if(!ph){
      document.getElementById("phone_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      if (focus ==0){
        focus = 4;
      }
    }
    if(!cc){
      document.getElementById("credit_card_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      if (focus == 0){
        focus = 5;
      }      
    }
    if(!ex){
      document.getElementById("exp_date_error").innerHTML="Required field";
      document.getElementById("total").innerHTML=' ';
      if (focus ==0){
        focus = 6;
      }
    }
    // window.alert(focus);
    if(focus == 1){          
      document.getElementById("first_name").focus();
    }
    if(focus == 2){
      document.getElementById("last_name").focus();
    }
    if(focus == 3){
      document.getElementById("address").focus();
    }
    if(focus == 4){
      document.getElementById("phone").focus();
    }
    if(focus == 5){
      document.getElementById("credit_card").focus();
    }
    if(focus == 6){
      document.getElementById("exp_date").focus();
    }
    validate();
    
  }
  function total_cost(){
    let total=0;
    if (document.getElementById('item_0').checked){
      total+=1.99;
    }
    if (document.getElementById('item_1').checked){
      total+=2.99;
    }
    if (document.getElementById('item_2').checked){
      total+=2.25;
    }
    if (document.getElementById('item_3').checked){
      total+=1.5;
    }
    if (document.getElementById('item_4').checked){
      total+=2.5;
    }
 
    document.getElementById("total").innerHTML="$" + total.toFixed(2);
  }

  function ph_check(){
    var ph = document.forms["form"]["phone"].value;
    var value = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    var ok = value.test(ph);
    if(!ok){
      document.getElementById("phone_error").innerHTML="Please use 555-555-5555 format";
      document.getElementById("phone").focus();
    }    
    else{
      document.getElementById("phone_error").innerHTML=" ";
    }    
  }

  function cc_check(){
    var cc = document.forms["form"]["credit_card"].value;
    var value = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/;
    var ok = value.test(cc);
    if(!ok){
      document.getElementById("credit_card_error").innerHTML="Must have #### #### #### #### format";
      document.getElementById("credit_card").focus();
    } 
    else{
      document.getElementById("credit_card_error").innerHTML=" ";
    }  
  }

  function expDate_check(){
    var ex = document.forms["form"]["exp_date"].value;
    var value = /^(0[1-9]|1[0-2])\/?(2([0-9]{3})$)/;
    var ok = value.test(ex);
    if(!ok){
      document.getElementById("exp_date_error").innerHTML="Must have 01/2020 format";
      document.getElementById("exp_date").focus();
    }   
    else{
      document.getElementById("exp_date_error").innerHTML=" ";
    }  
  }

  function validate(){
    
    var ph = document.forms["form"]["phone"].value;
    var value = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    var ok = value.test(ph);
    if(!ok){
      document.getElementById("phone_error").innerHTML="Please use 555-555-5555 format";
    } else{
      document.getElementById("phone_error").innerHTML=" ";
    }

    var cc = document.forms["form"]["credit_card"].value;
    var cc_value = /^([0-9]{4}[\s-]?){3}([0-9]{4})$/
    var cc_ok = cc_value.test(cc);
    if(!cc_ok){
      document.getElementById("credit_card_error").innerHTML="Must have 1111 1111 1111 1111 format";
    } else{
      document.getElementById("credit_card_error").innerHTML=" ";
    }

    var ex = document.forms["form"]["exp_date"].value;
    var ex_value = /^(0[1-9]|1[0-2])\/?(2([0-9]{3})$)/;
    var ex_ok = ex_value.test(ex);
    if(!ex_ok){
      document.getElementById("exp_date_error").innerHTML="Must have 01/2020 format";
    }  else{
      document.getElementById("exp_date_error").innerHTML=" ";
    }  
  }
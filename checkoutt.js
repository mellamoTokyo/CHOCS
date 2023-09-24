//toggle button
const toggleBtn = document.querySelector('.toggle-btn');
const linkContainer = document.querySelector('.links-container');

toggleBtn.addEventListener('click', ()=>{
    toggleBtn.classList.toggle('active');
    linkContainer.classList.toggle('show');
})

//links
const links = document.querySelectorAll('.link');

links.forEach(link => {
    link.addEventListener('click', () => {
        links.forEach(ele => ele.classList.remove('active'));
        link.classList.add('active');
    })
})

function validateForm() {
   
        if (document.forms["formCh"]["nama"].value == "") {
            alert("Name cannot be empty");
            document.forms["formCh"]["nama"].focus();
            return false;
        }
     
        if (document.forms["formCh"]["angka"]. value =="") {
            alert("Phone cannot be empty");
            document.forms["formCh"]["angka"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["address"].value == "") {
            alert("Address cannot be empty");
            document.forms["formCh"]["address"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["apartment"].value == "") {
            alert("Apartment cannot be empty");
            document.forms["formCh"]["apartment"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["prov"].value == "") {
            alert("Province cannot be empty");
            document.forms["formCh"]["prov"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["country"].value == "") {
            alert("Country cannot be empty");
            document.forms["formCh"]["country"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["post"].value == "") {
            alert("Postal Code cannot be empty");
            document.forms["formCh"]["post"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["deliv"].selectedIndex < 1) {
            alert("Choose delivery method");
            document.forms["formCh"]["deliv"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["cardname"].value == "") {
            alert("Card Name cannot be empty");
            document.forms["formCh"]["cardname"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["cardno"].value == "") {
            alert("Card Number cannot be empty");
            document.forms["formCh"]["cardno"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["choch"].selectedIndex < 1) {
            alert("Choose chocolate");
            document.forms["formCh"]["choch"].focus();
            return false;
        }

        if (document.forms["formCh"]["chochh"].selectedIndex < 1) {
            alert("Choose chocolate");
            document.forms["formCh"]["choch"].focus();
            return false;
        }
    
        if (document.forms["formCh"]["quantity"].value == "") {
            alert("Quantity cannot be empty");
            document.forms["formCh"]["quantity"].focus();
            return false;
        }

        if (document.forms["formCh"]["quantityy"].value == "") {
            alert("Quantity cannot be empty");
            document.forms["formCh"]["quantityy"].focus();
            return false;
        }
    
    
       if(document.forms["formCh"]["nama"].value != "" && document.forms["formCh"]["angka"]. value !="" && document.forms["formCh"]["address"].value != "" && document.forms["formCh"]["apartment"].value != "" && document.forms["formCh"]["prov"].value != "" && document.forms["formCh"]["country"].value != "" && document.forms["formCh"]["post"].value != "" && document.forms["formCh"]["deliv"].selectedIndex > 0 && document.forms["formCh"]["cardname"].value != "" &&document.forms["formCh"]["cardno"].value != "" && document.forms["formCh"]["choch"].selectedIndex > 0 && document.forms["formCh"]["quantity"].value != "" && document.forms["formCh"]["quantityy"].value != "" && document.forms["formCh"]["chochh"].selectedIndex > 0) {
            alert("Checkful Success!")
            return false;
       }
    
 
  }
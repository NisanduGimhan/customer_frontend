

function addCustomer(){
    
    console.log("Add button clicked!");
   
    let id=document.getElementById("id").value.trim();
    let name = document.getElementById("name").value.trim();
    let address=document.getElementById("address").value.trim();
    let salary=document.getElementById("salary").value.trim();
    let phoneNumber=document.getElementById("PhoneNumber").value.trim();

    console.log(name);
    console.log(address);
    console.log(salary);
    console.log(phoneNumber);

    if (!name || !address || !salary || !phoneNumber) {
        Swal.fire({
            icon: "warning",
            title: "Oops...",
            text: "Please fill all the fields before adding a customer!",
        });
        return;
    }


    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name":name,
  "address": address,
  "salary": salary,
  "phoneNumber": phoneNumber
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/customer/add", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  
  Swal.fire({
    title: "Added Successfully! 🎉",
    icon: "success",
    draggable: true
  })
  clearFields()
  setNextID()

  .catch((error) => console.error(error));
  console.error(error);
  Swal.fire({
      icon: "error",
      title: "Oops!",
      text: "Something went wrong. Please try again.",
  })
  }

  function setNextID(){
        fetch("http://localhost:8080/customer/get-lastCustomerId")
        .then(res => res.json())
                .then(data => {
                    console.log(data);
                
                    let id=document.getElementById("id");
                    
                    id.value=data;
                });
  }

  setNextID();

  function clearFields() {
    
    document.getElementById("name").value = "";
    document.getElementById("address").value = "";
    document.getElementById("salary").value = "";
    document.getElementById("PhoneNumber").value = "";
  }
  
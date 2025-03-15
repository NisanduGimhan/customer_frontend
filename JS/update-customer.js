function setValuesToUpdate() {
    let id = document.getElementById("id").value.trim();

    if (!id) {
        console.error("ID field is empty!");
        return;
    }

    fetch(`http://localhost:8080/customer/search-by-id/${id}`)
        .then((response) => response.json()) 
        .then((customer) => {
            console.log("Customer Data:", customer);

            if (customer) {
                document.getElementById("name").value = customer.name || "";
                document.getElementById("address").value = customer.address || "";
                document.getElementById("salary").value = customer.salary || "";
                document.getElementById("PhoneNumber").value = customer.phoneNumber || "";
            } else {
                console.warn("Customer not found!");
            }
        })
        .catch((error) => console.error("Error fetching customer data:", error));
}


function update(){

    let id=document.getElementById("id").value.trim();
    let name = document.getElementById("name").value.trim();
    let address=document.getElementById("address").value.trim();
    let salary=document.getElementById("salary").value.trim();
    let phoneNumber=document.getElementById("PhoneNumber").value.trim();

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "id": id,
  "name": name,
  "address": address,
  "salary": salary,
  "phoneNumber": phoneNumber
});

const requestOptions = {
  method: "PUT",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://localhost:8080/customer/update-customer", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  Swal.fire({
    title: "Update Successfully! 🎉",
    icon: "success",
    draggable: true
  })
  clearFields()
  .catch((error) => console.error(error));
}
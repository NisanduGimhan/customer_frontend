


function setValuesToDelete() {
    let id = document.getElementById("id").value.trim();

    if (!id) {
        console.error("ID field is empty!");
        return;
    }

    fetch(`http://localhost:8080/customer/search-by-id/${id}`)
        .then((response) => response.json()) // Convert response to JSON
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

function deletecustomer(){
    let id = document.getElementById("id").value.trim();
    console.log("hi")

    const requestOptions = {
        method: "DELETE",
        redirect: "follow"
      };
      
      fetch(`http://localhost:8080/customer/delete/${id}`, requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        Swal.fire({
            title: "Deleted Successfully! 🎉",
            icon: "success",
            draggable: true
          })
          clearFields()

        .catch((error) => console.error(error));



}
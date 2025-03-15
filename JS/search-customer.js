function search() {
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
        document.getElementById("PhoneNumber").value =
          customer.phoneNumber || "";
      } else {
        console.warn("Customer not found!");
      }
    })
    .catch((error) => console.error("Error fetching customer data:", error));
}


        function getallCustomer() {
            fetch("http://localhost:8080/customer/get-all")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    let tableRows = "";
                    let customerTable = document.querySelector("#tblCustomer tbody");
                    
                    data.forEach(customer => {
                        tableRows +=  `
                        <tr class="border-b border-gray-200 hover:bg-gray-100">
                          <td class="py-2 px-4 text-center text-3xl font-medium">${customer.id}</td>
                          <td class="py-2 px-4 text-center text-3xl font-medium">${customer.name}</td>
                          <td class="py-2 px-4 text-center text-3xl font-medium">${customer.address}</td>
                          <td class="py-2 px-4 text-center text-3xl font-medium">${customer.salary}</td>
                           <td class="py-2 px-4 text-center text-3xl font-medium">${customer.phoneNumber}</td>
                        </tr>
                      `;
                    });
                    customerTable.innerHTML = tableRows;
                });
        }

        
        getallCustomer();

        document.getElementById("addBtn").addEventListener("click", function () {
            fetch("add-customer.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("contentArea").innerHTML = data;
                    setNextID();
                })
                .catch(error => console.log("Error loading page:", error));
        });

        document.getElementById("deleteBtn").addEventListener("click", function () {
            fetch("delete-customer.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("contentArea").innerHTML = data;
                })
                .catch(error => console.log("Error loading page:", error));
        });

        document.getElementById("searchbtn").addEventListener("click", function () {
            fetch("search-customer.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("contentArea").innerHTML = data;
                })
                .catch(error => console.log("Error loading page:", error));
        });

        document.getElementById("updateBtn").addEventListener("click", function () {
            fetch("update-customer.html")
                .then(response => response.text())
                .then(data => {
                    document.getElementById("contentArea").innerHTML = data;
                })
                .catch(error => console.log("Error loading page:", error));
        });



        
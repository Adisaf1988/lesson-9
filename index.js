
function init() {
    let selectedUsers = 0;
    const selectedUsersContainer = document.getElementById("selectedUsersNumber");
    selectedUsersContainer.innerText = selectedUsersNumber;
    const tableBody = document.getElementById("usersTable")
    draw(users, tableBody)

    // access addNewUser button, how?!
    const addNewUserButton = document.getElementById("addNewUser")
    addNewUserButton.addEventListener("click", function () {
        const firstNameInput = document.getElementById("firstName");
        const lastNameInput = document.getElementById("lastName");
        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const ageInput = document.getElementById("age");
        const imgInput = document.getElementById("img")
        const genderInput = document.getElementById("gender")
        const countryInput = document.getElementById("country")
        const isSingleInput = document.getElementById("isSingle")

        const user = {
            name: { first: firstNameInput.value, last: lastNameInput.value },
            email: emailInput.value,
            phone: phoneInput.value,
            dob: { age: ageInput.value },
            login: { username: `${firstNameInput.value}${Math.ceil(Math.random() * 9999)}` },
            picture: { large: imgInput.value },
            gender: genderInput.value,
            country: countryInput.value,
            isSingle: isSingleInput.checked // next lesson.
        }

        users.push(user)
        draw(users, tableBody)




    })

    const searchInputButton = document.getElementById("search-btn")
    searchInputButton.addEventListener("click", function () {
        const input = document.getElementById("searchInput")
        const searchValue = input.value;
        const newUsersArr = users.filter(users => users.name.first.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) || users.name.last.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()))
        draw(newUsersArr, tableBody)

    })


    const deleteAllButton = document.getElementById("buttonToDelete");
    deleteAllButton.addEventListener("click", function () {
        usersTable.innerHTML = ""
    })
}



function draw(arrayOfUsers, tableBody) {
    tableBody.innerHTML = ""
    for (let index = 0; index < arrayOfUsers.length; index++) {
        tableBody.append(getUserRowUI(arrayOfUsers[index]))
        // table  <=     // row       // data

    }
    // const usersRows = arrayOfUsers.map((currentUser) => getUserRowUI(currentUser))
    // tableBody.append(...usersRows)


}


function updateSelectedUsers(arrayOfSelectedUsers) {
    const selectedUsersContainer = document.getElementById("selectedUsersNumber");
    selectedUsersContainer.innerText = arrayOfSelectedUsers.length;
}

function getUserRowUI(user) {

    const tdId = document.createElement("td")
    tdId.innerText = user?.login?.username

    const tdFirstName = document.createElement("td")
    tdFirstName.innerText = user?.name?.first

    const tdLastName = document.createElement("td")
    tdLastName.innerText = user?.name?.last

    const tdEmail = document.createElement("td")
    tdEmail.innerText = user?.email

    const tdPhone = document.createElement("td")
    tdPhone.innerText = user?.phone

    const tdAge = document.createElement("td")
    tdAge.innerText = user?.dob?.age

    const tdGender = document.createElement("td")
    tdGender.innerText = user?.gender

    const tdImage = document.createElement("td")
    const imgUser = document.createElement("img")
    imgUser.classList.add("user-image")
    imgUser.src = user?.picture?.large
    tdImage.append(imgUser)

    const tdCountry = document.createElement("td")
    tdCountry.innerText = user?.location?.country

    const selectBtn = document.createElement("button")
    selectBtn.classList.name = "select-btn"
    selectBtn.innerText = "select"


    selectBtn.addEventListener("click", function () {
        if (user.isSelected === true) {
            user.isSelected = false;
            selectBtn.innerText = "Select"
            trUser.style.backgroundColor = "white"
        } else {
            user.isSelected = true
            selectBtn.innerText = "Unselect";
            trUser.style.backgroundColor = "pink"
        }
        updateSelectedUsers(users.filter(user => user.isSelected === true));
        draw(users, tableBody)

    });



    const trUser = document.createElement("tr")
    trUser.append(tdId, tdFirstName, tdLastName, tdEmail, tdPhone, tdAge, tdGender, tdCountry, selectBtn, tdImage)


    return trUser

}


init()



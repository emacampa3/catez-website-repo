// nav
const nav = document.querySelector(".nav")

// form data
const submitButton = document.getElementById("contact-submit")
const form = document.getElementById("contact")

window.addEventListener("scroll", fixNav)

function fixNav() {
	if (window.scrollY > nav.offsetHeight + 0) {
		nav.classList.add("active")
	} else {
		nav.classList.remove("active")
	}
}

/* photos */
const panels = document.querySelectorAll(".panel")

panels.forEach((panel) => {
	panel.addEventListener("click", () => {
		removeActiveClasses()
		panel.classList.add("active")
	})
})

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove("active")
	})
}

function formHandler(e) {
	e.preventDefault()

	const guestName = document.getElementById("guestName").value
	const guestEmail = document.getElementById("guestEmail").value
	const guestPhoneNumber = document.getElementById("guestPhoneNumber").value
	const guestDescription = document.getElementById("guestDescription").value
	const guestHouses = document.querySelectorAll("input[name='guestHouse']")
	const guestNumber = document.getElementById("guestNumber").value
	const guestArrivalDate = document.getElementById("guestArrival").value
	const guestLeaveDate = document.getElementById("guestLeave").value

	let selectedGuestHouse

	for (const guestHouse of guestHouses) {
		if (guestHouse.checked) {
			selectedGuestHouse = guestHouse.value
			break
		}
	}

	const data = {
		guestName,
		guestEmail,
		guestPhoneNumber,
		guestDescription,
		selectedGuestHouse,
		guestNumber,
		guestArrivalDate,
		guestLeaveDate
	}

	console.log(data)

	fetch("https://catez-contact-be-default-rtdb.europe-west1.firebasedatabase.app/reservations.json", {
		method: "POST",
		headers: {
			"Content-type": "application/json"
		},
		body: JSON.stringify(data)
	})
	.then((res) => {
		return res
	})
	.catch((err) => {
		return err
	})
}

form.addEventListener("submit", formHandler)

// nav
const nav = document.querySelector(".nav")

// form data
const submitButton = document.getElementById("contact-submit")
const form = document.getElementById("contact")
const guestName = document.getElementById("guestName").value
const guestEmail = document.getElementById("guestEmail").value
const guestPhoneNumber = document.getElementById("guestPhoneNumber").value
const guestDescription = document.getElementById("guestDescription").value
const guestHouse1 = document.getElementById("teddy").value
const guestHouse2 = document.getElementById("lili").value
const guestNumber = document.getElementById("guestNumber").value
const guestArrivalDate = document.getElementById("guestArrival").value
const guestLeaveDate = document.getElementById("guestLeave").value

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

// submitButton.addEventListener("submit", (event) => {
// 	event.preventDefault()

// 	const data = {
// 		guestName,
// 		guestEmail,
// 		guestPhoneNumber,
// 		guestDescription,
// 		guestHouse1,
// 		guestHouse2,
// 		guestNumber,
// 		guestArrivalDate,
// 		guestLeaveDate
// 	}

// 	console.log(data)
// })

// submitButton.addEventListener("submit", (event) => {
// 	event.preventDefault()

// 	console.log("submited")
// })

function formHandler(e) {
	e.preventDefault()

	const data = {
				guestName,
				guestEmail,
				guestPhoneNumber,
				guestDescription,
				guestHouse1,
				guestHouse2,
				guestNumber,
				guestArrivalDate,
				guestLeaveDate
			}

	console.log(data)
}

form.addEventListener("submit", formHandler)

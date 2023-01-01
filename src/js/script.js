const previousBtn = document.querySelector('.previous-btn')
const nextBtn = document.querySelector('.next-btn')
const progress = document.querySelector('.progress')
const progressBee = document.querySelector('.progress-bee')
const page = document.querySelectorAll('.page')

let pageNum = 1
let width = 0

const nextPage = () => {
	if (pageNum >= 1 && pageNum < page.length) {
		pageNum++
		width += 12.5
        progressBee.style.transform= 'scalex(1) translate(-50%, -50%)'
		progress.style.width = `${width}%`
		progressBee.style.left = `${width}%`
		
	}
    disableBtn()
    handlePages()
}

const handlePages = () => {
    page.forEach(page => {
        if (pageNum == page.dataset.number) {
            page.classList.add('active-page')
        } else {
            page.classList.remove('active-page')

        }
    })
}

const disableBtn = () => {
	if (pageNum === 1) {
		previousBtn.disabled = true
	} else if ((pageNum === page.length)) {
		nextBtn.disabled = true
	} else {
		previousBtn.disabled = false
		nextBtn.disabled = false
	}
}

const previousPage = () => {
    if (pageNum > 1 && pageNum <= page.length) {
		pageNum--
		width -= 12.5
        progressBee.style.transform= 'scalex(-1) translate(50%, -50%)'
		progress.style.width = `${width}%`
		progressBee.style.left = `${width}%`
		
	}
    disableBtn()
    handlePages()
}

nextBtn.addEventListener('click', nextPage)
previousBtn.addEventListener('click', previousPage)
const $picSelector = document.querySelectorAll(".photo-item")
const $mainWrapper = document.querySelector(".main-wrapper")
const $picPopUp = document.querySelector(".pop-up")
const $modal = document.querySelector(".lightbox")

// console.log($picSelector)

$picSelector.forEach(function(image) {
    image.addEventListener("click", function(e){
        e.preventDefault();
        // $mainWrapper.classList.add("hidden")
        $modal.classList.remove("hidden")
    })
})

	// Get the modal
var modal = document.querySelector("#myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.querySelectorAll(".img-fluid");
var modalImg = document.querySelector("#img01");
var captionText = document.querySelector("#caption");
for(var i = 0; i < img.length; i++){
	img[i].onclick = function(){
	  modal.style.display = "block";
	  modalImg.src = this.src;
	  captionText.innerHTML = this.alt;
	}
	img[i].style.cursor = 'pointer';

}

var span = document.querySelector(".close");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
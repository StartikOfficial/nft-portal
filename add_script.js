// window.addEventListener('load', function() {
//     document.querySelector('input[type="file"]').addEventListener('change', function() {
//         if (this.files && this.files[0]) {
//             var img = document.querySelector('img');
//             img.onload = () => {
//                 URL.revokeObjectURL(img.src); // no longer needed, free memory
//             }

//             img.src = URL.createObjectURL(this.files[0]); // set src to blob url
//         }
//     });

// });

var loadFile = function(event) {
    var image = document.getElementById('uploadedImage');
    image.src = URL.createObjectURL(event.target.files[0]);
    const note = document.querySelector('.nft-image');
    note.style.display = 'none';
    image.style.display = 'block';

};

const switchSpan = function() {
    const element = document.firstChild
}
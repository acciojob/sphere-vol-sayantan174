function volume_sphere() {
    //Write your code here
	const radius = document.getElementById('radius');
	const volume = document.getElementById('volume');
	volume.value = Math.floor(4/3*3.13*radius.value*radius.value*radius.value);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Caesar_cipher</title>
	<link rel="stylesheet" href="css/main.css">
</head>
<body>
	<section class="main">
		<div class="main_block">
			<div class="first_block">
				<h4>What Caesar means:</h4>
				<textarea id="inner_text" cols="30" rows="10"></textarea>			
			</div>
			<div class="second_block">
				<h4>What Caesar says:</h4>
				<img src="caesar.png" alt="Caesar">			
			</div>
			<textarea id="out" cols="30" rows="10">
				
			</textarea>	
		</div>
		<div class="main_block">
			<div class="first_block">
				<h4>What do you hear from Caesar:</h4>
				<textarea id="symbols_text" cols="30" rows="10"></textarea>
			</div>
			<div class="second_block">
				<h4 class="out_matrix">|</h4>
				<img src="neo.png" alt="Neo">	
				<button id="decrypt">Decrypt</button>			
			</div>
			<textarea id="out_offset" cols="30" rows="10">
				
			</textarea>	
		</div>	
	</section>
	<script src="js/main.js"></script>
</body>
</html>
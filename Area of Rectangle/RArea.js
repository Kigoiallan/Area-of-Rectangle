function areaOfRectangle() {
  // Get the values of length and width from the input fields
  const length = Number(document.getElementById("myLength").value);
  const width = Number(document.getElementById("myWidth").value);

  // Check if the inputs are valid numbers
  if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
    // Handle invalid input
    document.getElementById("myArea").innerHTML = "Invalid input. Please enter valid positive numbers.";
  } else {
    // Calculate the area
    const area = length * width;

    // Display the result in the #myArea element
    document.getElementById("myArea").innerHTML = `The area of the rectangle is: ${area}`;
  }
}

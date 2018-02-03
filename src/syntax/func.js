function add(...values) {
   console.log(values.reduce((a, b) => a + b));
}

add(3);
add(4, 2);
add(5, 5, 4, 4, 2 , 5);
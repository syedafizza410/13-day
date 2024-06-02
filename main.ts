// ************** 100 days coding challenge "13 day" **************** //


/* Q37  Large Shirts: Default values in make_shirt().
Explain & TIP: Modify functions to have default parameters, 
simplifying calls for common use cases. This introduces default function parameters.*/


function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

make_shirt();
make_shirt("medium"); 
make_shirt("small", "Dive into Coding"); 


/* Q38 Cities: Describing cities with a function.
Explain & TIP: Use functions with default parameters to handle cases where certain data 
might not change often. This helps in making your code more flexible.*/


function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}

describe_city("Karachi");
describe_city("Daharki");
describe_city("Tokyo", "Japan");


/* Q39 City Names: Formatting city-country pairs.
Explain & TIP: Returning formatted strings from functions can simplify data presentation. 
This exercise practices string formatting and returning values from functions.*/


function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
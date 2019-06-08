// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };
let neighborhoodId = 0;
let mealId = 0;
let customerId = 0;
let deliveryId = 0;

class Neighborhood {
    constructor(name) {
        this.id = ++neighborhoodId;
        this.name = name;
        // insert in the neighborhood to the store
        store.neighborhoods.push(this);
    }
//A neighborhood has many deliveries
    deliveries() {
        return store.deliveries.filter(delivery => {
                return delivery.neighborhoodId === this.id;
        });
    }

//A neighborhood has many customers through deliveries
    customers() {
        return store.customers.filter(customer => {
            return customer.neighborhoodId === this.id;
        });
    }

//A neighborhood has many meals through deliveries
     meals() {
        return this.deliveries().map(meal => {
           return delivery.meal
        });
     }
     
}

class Meal {
    constructor(title, price) {
        this.id = ++mealId;
        this.title = title;
        this.price = price;
        // insert in the meal to the store
        store.meals.push(this);
    }

//A meal has many customers
    customers() {
        return this.deliveries().map(delivery => {
                return delivery.customer()
            });
    }

//returns all of the deliveries associated with a particular meal.
    deliveries() {
        return store.deliveries.filter(delivery => {
            return delivery.mealId == this.id;
    })
}

//A class method that orders all meal instances by their price 
//in descending order. 
//Use the static keyword to write a class method.
    static byPrice() {
        store.meals.filter(meal.price => {
        meal.price.sort(function (a, b) {
            return a.value - b.value;
          });
    }
}

class Customer {
    constructor(name, neighborhood) {
        this.id = ++customerId;
        this.neighborhoodId = neighborhood;
        this.name = name;
        
        // insert in the customer to the store
        store.customers.push(this);
    }

    setNeighborhood(neighborhood) {
        this.neighborhoodId = neighborhood.id;
    }

    setMeal(Meal) {
        this.mealId = meal.id;
    }


//A customer has many deliveries
    deliveries() {
        return store.deliveries.filter(delivery => {
            return delivery.customerId === this.id;
        });
    }

//A customer has many meals through deliveries
    meals() {
        return this.deliveries().map(delivery => {
            return delivery.meal()
        });
    }

    
// returns the total amount that the customer has spent on food.
    //totalSpent() {}

//A customer belongs to a neighborhood (NOT LISTED IN TEXT) 
    neighborhood() {
        return store.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.neighborhoodId
        });
    }
}

class Delivery {
    constructor(meal, neighborhood, customer) {
        this.id = ++deliveryId;
        this.mealId = meal;
        this.customerId = customer;
        this.neighborhoodId = neighborhood
     
        // insert in the deliveries to the store
        store.deliveries.push(this);
    }

    setNeighborhood(neighborhood) {
        this.neighborhoodId = neighborhood.id;
    }

//A delivery belongs to a meal. 
    meal() {
        return store.meals.find(meal => {
            return meal.id === this.mealId;
        });
    }

//A delivery belongs to a customer.
    customer() {
        return store.customers.find(customer => {
            return customer.id === this.customerId
        })
    }

//A delivery belongs to a neighborhood.
    neighborhood() {
        return store.neighborhoods.find(neighborhood => {
            return neighborhood.id === this.neighborhoodId
        })
    }
}

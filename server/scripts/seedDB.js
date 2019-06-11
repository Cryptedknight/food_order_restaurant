const mongoose = require("mongoose");
const db = require("../models");
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1/grams-db");

const userSeed = {
  firstName: "John",
  lastName: "Doe",
  username: "JohnD",
  password: "likeGoogle3214",
};

const customerSeed = {
  customerName: "John Doe",
  customerPhone: "333-555-4444",
  customerEmail: "grapesongrams@gmail.com"
}

const restaurantSeed = {
  zinBurger: {
    restaurantName: "IIITM Cafeteria",
    restaurantAddress: "ABV-IIITM Morena Link Road, Gwalior",
    restaurantImg: "https://images.unsplash.com/photo-1531947398206-60f8e97f34a2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=981b88e56d0d329347e68f1831a57b08&auto=format&fit=crop&w=1000&q=80",
    restaurantDescription: "Hip, modern chain serving creative gourmet burgers & shakes, plus wine, local beers & cocktails.",
    category: "American"
  },
  thaiCafe: {
    restaurantName: "Chacha's cafe",
    restaurantAddress: "City Centre Gwalior",
    restaurantImg: "https://images.unsplash.com/photo-1534345115699-7be8b13815ab?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=77a0221b3741bcf490ba382a9d6f3b0f&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb",
    restaurantDescription: "Family-run spot serving standard Thai dishes plus sushi in a polished, laid-back setting.",
    category: "Asian "
  }
}

const dishSeed = {
  zinBurger: [
    {
      dishName:"SAMBURGER",
      dishDescription:"Applewood Smoked Bacon, American Cheese, Lettuce & 1,000 Island",
      category:"Entree",
      dishImg: "https://images.unsplash.com/photo-1428660386617-8d277e7deaf2?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d85cfa1d6d003f6e82f46bc5a394a592&auto=format&fit=crop&w=1567&q=80",
      dishPrice:12.00
    },
    {
      dishName:"THE DOUBLE",
      dishDescription:"Two 3.5 oz. Patties, Double American Cheese, Minced Onion, Lettuce, Ketchup & Mayo",
      category:"Entree",
      dishPrice:10.50
    },
    {
      dishName:"RINGER",
      dishDescription:"Applewood Smoked Bacon, Pepper Jack Cheese, Onion Rings, Lettuce, Mayo & Frank’s RedHot",
      category:"Entree",
      dishPrice:11.50
    },
    {
      dishName:"SPIKED RASPBERRY LEMONADE",
      dishDescription:"GREY GOOSE® Vodka, Signature House-Made Lemonade, Simple Syrup, Fresh Raspberry & Fresh Lemon",
      category:"Drinks",
      dishPrice:7.00
    },
    {
      dishName:"CHOCOLATE CHIP COOKIE DOUGH",
      dishDescription:"Vanilla Ice Cream, Milk, Chocolate Chip Cookie Dough, Chocolate Chip Cookies, Mini-Chocolate Chips",
      category:"Drinks",
      dishPrice:4.50
    },
    {
      dishName:"ONION RINGS",
      dishDescription:"Comes with your choice of sauce.",
      category:"Side",
      dishPrice:6.00
    },
    {
      dishName:"Triple Chocolate",
      dishDescription:"This isn't your momma's birthday cake.",
      category:"Desert",
      dishPrice:10.50
    }
  ],
  thaiCafe: [
    {
      dishName:"Egg Rolls",
      dishDescription:"Three homemade and crispy fried vegetarian spring rolls with Thai Cafe's sweet and sour sauce.",
      category:"Side",
      dishPrice:3.95
    },
    {
      dishName:"Thai Salad",
      dishDescription:"Fresh romaine lettuce, tomato, cucumber and sliced boiled egg and bean sprouts served with homemade peanut dressing.",
      category:"Side",
      dishPrice:6.95
    },
    {
      dishName:"Pad Thai",
      dishDescription:"Most popular noodle dish of Thailand, thin rice noodle pan fried with shrimp, egg, scallions, bean sprouts and peanuts. Choice of Chicken, Pork, Tofu or Vegetable.",
      category:"Entree",
      dishPrice:12.95
    },
    {
      dishName:"Panang (red curry)",
      dishDescription:"Our popular currywith kiffir lime leaves, bell pepper, and basil. Delicious! Choice of Chicken, Pork, Tofu or Vegetable.",
      category:"Entree",
      dishPrice:12.95
    },
    {
      dishName:"CHOCOLATE CHIP COOKIE DOUGH",
      dishDescription:"Vanilla Ice Cream, Milk, Chocolate Chip Cookie Dough, Chocolate Chip Cookies, Mini-Chocolate Chips",
      category:"Drinks",
      dishPrice:4.50
    },
    {
      dishName:"Thai Iced Tea",
      dishDescription:"This isn't your momma's sweet tea.",
      category:"Drinks",
      dishPrice:2.25
    },
    {
      dishName:"Shu She Salmon",
      dishDescription:"fresh salmon filet topped with red shu she curry sauce, straw mushroom, bell peppers and basil leaves.",
      category:"Entree",
      dishPrice:18.95
    }
  ]
}

const tableSeed = {
  zinBurger: [
    {
      tableNum: "Table 1"
    },
    {
      tableNum: "Table 2"
    },
    {
      tableNum: "Table 3"
    },
    {
      tableNum: "Table 4"
    },
    {
      tableNum: "Table 5"
    },
    {
      tableNum: "Table 6"
    },
    {
      tableNum: "Table 7"
    },
    {
      tableNum: "Table 8"
    },
    {
      tableNum: "Table 9"
    },
    {
      tableNum: "Table 10"
    },
    {
      tableNum: "Table 11"
    },
    {
      tableNum: "Table 12"
    }
  ],
  thaiCafe: [
    {
      tableNum: "Table 1"
    },
    {
      tableNum: "Table 2"
    },
    {
      tableNum: "Table 3"
    },
    {
      tableNum: "Table 4"
    },
    {
      tableNum: "Table 5"
    },
    {
      tableNum: "Table 6"
    },
    {
      tableNum: "Table 7"
    },
    {
      tableNum: "Table 8"
    }
  ]
}

const orderSeed = {
  zinBurger: [
    {
      dishName:"SAMBURGER",
      category:"Entree",
      dishPrice:12.00,
      notes: "Add Jalapenos"
    },
    {
      dishName:"RINGER",
      category:"Entree",
      dishPrice:11.50
    }
  ]
}

db.User.collection.drop();
db.Customer.collection.drop();
db.Restaurant.collection.drop();
db.Dish.collection.drop();
db.Table.collection.drop();
db.Order.collection.drop();



db.User
  .remove()
  .then(() => db.User.create(userSeed))
  .then(created => {
    console.log("success");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Customer
  .remove()
  .then(() => db.Customer.create(customerSeed))
  .then(created => {
    console.log("success")
    db.User.findOneAndUpdate({username: "JohnD"}, {$set: {customer: created._id}})
    .then(updated => console.log("success"))
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

db.Restaurant
  .remove()
  .then(() => db.Restaurant.create(restaurantSeed.zinBurger))
  .then(created => {
    console.log(created);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

  db.Restaurant
  .create(restaurantSeed.thaiCafe)
  .then(created => {
    console.log("success");
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

dishSeed.zinBurger.map(dish => {
  db.Dish.create(dish)
  .then(created => (
    db.Restaurant.findOneAndUpdate({restaurantName: "Zinburger Wine & Burger Bar"}, {$push: {dishes: created._id}})
  ))
  .then(updated => console.log("success"))
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
});

dishSeed.thaiCafe.map(dish => {
  db.Dish.create(dish)
  .then(created => (
    db.Restaurant.findOneAndUpdate({restaurantName: "Thai Cafe"}, {$push: {dishes: created._id}})
  ))
  .then(updated => console.log("success"))
  .catch(err => {
    console.log(err);
    process.exit(1);
  })
});

tableSeed.zinBurger.map(table => {
  db.Table.create(table)
  .then(created => (
    db.Restaurant.findOneAndUpdate({restaurantName: "Zinburger Wine & Burger Bar"}, {$push: {tables: created._id}})
  ))
  .then(updated => console.log("success"))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
});

tableSeed.thaiCafe.map(table => {
  db.Table.create(table)
  .then(created => (
    db.Restaurant.findOneAndUpdate({restaurantName: "Thai Cafe"}, {$push: {tables: created._id}})
  ))
  .then(updated => console.log("success"))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
});


  orderSeed.zinBurger.map(order => {
    db.Order.create(order)
    .then(created => (
      db.Restaurant.findOneAndUpdate({restaurantName: "Zinburger Wine & Burger Bar"}, {$push: {orders: created._id}})
    ))
    .then(updated => console.log("success"))
    .catch(err => {
      console.log(err);
      process.exit(1);
    });
  });

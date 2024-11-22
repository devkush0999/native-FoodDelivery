export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/icons/pizza.png'), // Tüm imgeler pizza olarak güncellendi
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/icons/hamburger.png'),
  },
  {
    id: 3,
    name: 'Salad',
    image: require('../assets/icons/salad.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/icons/sushi.png'),
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../assets/icons/noodle.png'),
  },
  {
    id: 6,
    name: 'Sweets',
    image: require('../assets/icons/donut.png'),
  },
];

export const featured = {
  id: 1,
  title: 'Hot and Spicy',
  description: 'Soft and tender fried chicken',
  restaurant: [
    {
      id: 1,
      name: 'Papa Johns',
      image: require('../assets/images/papa.png'),
      description: 'Hot and spicy pizzas',
      lng: -122.4194, // San Francisco, CA, USA
      lat: 37.7749,
      stars: 4,
      address: '434 Second Street',
      reviews: '4.4k',
      category: 'Fast Food',
      dishes: [
        {
          id: 1,
          name: 'Cheesy Garlic Pizza',
          description: 'Delicious cheesy garlic pizza',
          price: 10,
          image: require('../assets/images/pizzaro.png'),
        },
        {
          id: 2,
          name: 'Pepperoni Pizza',
          description: 'Classic pepperoni pizza',
          price: 12,
          image: require('../assets/images/pepe.png'),
        },
        {
          id: 3,
          name: 'Vegetarian Pizza',
          description: 'Fresh vegetable pizza',
          price: 11,
          image: require('../assets/images/vege.png'),
        },
      ],
    },
    {
      id: 2,
      name: 'Papa Johns',
      image: require('../assets/icons/pizzas.png'),
      description: 'Specialty spicy pizzas',
      lng: -0.1276, // London, UK
      lat: 51.5074,
      stars: 4.5,
      address: '123 Hot Avenue',
      reviews: '1.2k',
      category: 'Spicy Food',
      dishes: [
        {
          id: 1,
          name: 'Spicy Chicken Wings',
          description: 'Crispy chicken wings with hot sauce',
          price: 8,
          image: require('../assets/images/pizzaro.png'),
        },
        {
          id: 2,
          name: 'Spicy Tacos',
          description: 'Tacos filled with spicy meat and toppings',
          price: 9,
          image: require('../assets/images/pizzaro.png'),
        },
        {
          id: 3,
          name: 'Hot Curry',
          description: 'A bowl of hot and spicy curry',
          price: 10,
          image: require('../assets/images/pizzaro.png'),
        },
      ],
    },
    {
      id: 3,
      name: 'Papa Johns',
      image: require('../assets/icons/pizzas.png'),
      description: 'Specialty spicy pizzas',
      lng: 139.6917, // Tokyo, Japan
      lat: 35.6895,
      stars: 4.5,
      address: '123 Hot Avenue',
      reviews: '1.2k',
      category: 'Spicy Food',
      dishes: [
        {
          id: 1,
          name: 'Spicy Chicken Wings',
          description: 'Crispy chicken wings with hot sauce',
          price: 8,
          image: require('../assets/icons/pizzas.png'),
        },
        {
          id: 2,
          name: 'Spicy Tacos',
          description: 'Tacos filled with spicy meat and toppings',
          price: 9,
          image: require('../assets/icons/pizzas.png'),
        },
        {
          id: 3,
          name: 'Hot Curry',
          description: 'A bowl of hot and spicy curry',
          price: 10,
          image: require('../assets/icons/pizzas.png'),
        },
      ],
    },
  ],
};

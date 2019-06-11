import axios from 'axios';

export default {
    // Restaurant Routes
    getAllRestaurants: query => (query) ? axios.get(`/api/restaurants/${query}`) : axios.get(`/api/restaurants`),
    createRestaurant: (adminId, data) => axios.post(`/api/restaurants/${adminId}`, data),
    getRestaurant: restaurantId => axios.get(`/api/restaurants/${restaurantId}`),
        // update Restaurant's general information
    updateRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/${restaurantId}`, data),
    removeRestaurant: restaurantId => axios.delete(`/api/restaurants/${restaurantId}`),
    addOrderToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-orders/${restaurantId}`, data),
    removeOrderFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-orders/${restaurantId}`, data),
    addDishToRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/add-dishes/${restaurantId}`, data),
    removeDishFromRestaurant: (restaurantId, data) => axios.put(`/api/restaurants/remove-dishes/${restaurantId}`, data),

    // Dish Routes
    getDishesAcrossRestaurants: query => (query) ? axios.get(`/api/dishes/${query}`) : axios.get(`/api/dishes/`),
    getDish: dishId => axios.get(`/api/dishes/${dishId}`),
    updateDish: (dishId, data) => axios.put(`/api/dishes/${dishId}`, data),
    removeDish: dishId => axios.delete(`/api/dishes/${dishId}`),
    createDish: (restaurantId, data) => axios.post(`/api/dishes/restaurant/${restaurantId}`, data),

    // Table Routes
    getAllTablesAcrossRestaurants: query => (query) ? axios.get(`/api/tables/${query}`) : axios.get(`/api/tables`),
    getTables: tableId => axios.get(`/api/tables/${tableId}`),
    createTables: (restaurantId, data) => axios.post(`/api/tables/restaurant/${restaurantId}`, data),
    updateTable: (tableId, data) => axios.put(`/api/tables/${tableId}`, data),
    removeTable: tableId => axios.delete(`/api/tables/${tableId}`),

    // Admin Routes
    getAllAdmins: query => (query) ? axios.get(`/api/administrator/${query}`) : axios.get(`/api/administrator`),
    getAdmin: adminId => axios.get(`/api/administrator/${adminId}`),
    createAdmin: (userId, data) => axios.post(`/api/administrator/${userId}`, data),
    updateAdmin: (adminId, data) => axios.put(`/api/administrator/${adminId}`, data),
    removeAdmin: adminId => axios.delete(`/api/administrator/${adminId}`),
    
    // User Routes
    getAdminFromUser: userId => axios.get(`/api/users/${userId}`),

    // Order Routes
    getAllOrdersAcrossRestaurants: query => (query) ? axios.get(`/api/orders/${query}`) : axios.get(`/api/orders`),
    createOrder: data => axios.post(`/api/orders`, data),
    getOrderById: orderId => axios.get(`/api/orders/${orderId}`),
    updateOrder: (orderId, data) => axios.put(`/api/orders/${orderId}`, data),
    removeOrder: orderId => axios.delete(`/api/orders/${orderId}`)

}
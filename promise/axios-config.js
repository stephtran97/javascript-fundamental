import axios from 'axios';

// Create an instance of axios with custom configuration
const axiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Base URL for API requests
  timeout: 5000, // Request timeout in milliseconds
  headers: {
    'Content-Type': 'application/json', // Default content type; be careful when sending other content type (FormData,...)
    Authorization: 'Bearer <your_access_token>' // Authorization header if needed
  }
});

// Request interceptor to modify outgoing requests
axiosInstance.interceptors.request.use(
  (config) => {
    // You can modify the request config here
    // For example, adding custom headers or logging requests
    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

// Response interceptor to handle status codes and modify incoming responses
axiosInstance.interceptors.response.use(
  (response) => {
    // Check for successful response status codes (2xx)
    if (response.status >= 200 && response.status < 300) {
      // You can modify the response data here if needed
      return response.data;
    } else {
      // Handle other status codes (e.g., 4xx, 5xx)
      // You can throw an error, log the error, or handle it in any other way
      throw new Error(`Request failed with status code ${response.status}`);
    }
  },
  (error) => {
    // Handle network errors or other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;

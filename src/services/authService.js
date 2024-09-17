import api from "./api";

const authService = {
  async fetchUser(token) {
    try {
      // const response = await api.get('/user');
      // return response.data;
    } catch (error) {
      console.error("Error fetching user:", error);
      throw error;
    }
  },

  async register(username, email, password) {
    try {
      const response = await api.post("/register", {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },

  async login(email, password) {
    try {
      const response = await api.post("/login", { email, password });
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  logout() {
    localStorage.removeItem("token");
  },
};

export default authService;

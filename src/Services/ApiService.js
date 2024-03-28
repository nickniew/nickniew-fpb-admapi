import axios from 'axios';

const baseURL = 'http://localhost:8080/api'; 

class ApiService {
  constructor(resource) {
    this.resource = resource;
    this.api = axios.create({
      baseURL,
    });
  }

  async getAll() {
    try {
      const response = await this.api.get(`/${this.resource}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    try {
      const response = await this.api.get(`/${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async create(data) {
    try {
      const response = await this.api.post(`/${this.resource}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async update(id, data) {
    try {
      const response = await this.api.put(`/${this.resource}/${id}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      const response = await this.api.delete(`/${this.resource}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
}

export default ApiService;
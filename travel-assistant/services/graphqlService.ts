// src/services/graphqlService.ts
import axios from "axios"
import type { AxiosResponse } from "axios"

const graphqlEndpoint = 'http://localhost:4000/graphql';

interface GraphQLResponse<T> {
  data: T;
}

export const graphqlRequest = async <T>(query: string, variables: Record<string, any> = {}): Promise<T> => {
  try {
    const response: AxiosResponse<GraphQLResponse<T>> = await axios.post(graphqlEndpoint, {
      query,
      variables
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('GraphQL Request Error:', error);
    throw error;
  }
};

export const getRecommendations = async <T>(endpoint: string): Promise<T> => {
  try {
    const response: AxiosResponse<GraphQLResponse<T>> = await axios.get(`${graphqlEndpoint}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data.data;
  } catch (error) {
    console.error('GET Request Error:', error);
    throw error;
  }
};

// Define an interface for your data
export interface Activity {
  activity_id: string;
  activity_name: string;
  category: string;
  description: string;
  duration: string;
  location: string;
  price: string;
  rating: string;
  similarity_to_user: string;
}
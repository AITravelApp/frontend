import axios from "axios";
import type { AxiosResponse } from "axios";

const graphqlEndpoint = "http://localhost:4000/graphql";

interface GraphQLResponse<T> {
  data: T;
}

export const graphqlRequest = async <T>(
  query: string,
  variables: Record<string, any> = {}
): Promise<T> => {
  try {
    const response: AxiosResponse<GraphQLResponse<T>> = await axios.post(
      graphqlEndpoint,
      {
        query,
        variables,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.data;
  } catch (error) {
    console.error("GraphQL Request Error:", error);
    throw error;
  }
};

// Define and export the Recommendation type
export type Recommendation = {
  activity_id: string;
  activity_namename: string;
};

export const getRecommendations = async (): Promise<Recommendation[]> => {
  console.log("getRecommendations called"); // Console log for testing
  const query = `
    query {
      getRecommendations
    }
  `;

  const recommendations = await graphqlRequest<Recommendation[]>(query);
  console.log("Recommendations:", recommendations); // Log the outcome
  return recommendations;
};

console.log("graphqlService.ts loaded"); // Console log to test if the file is imported
console.log("graphqlEndpoint:", graphqlEndpoint); // Console log to test if the file is imported

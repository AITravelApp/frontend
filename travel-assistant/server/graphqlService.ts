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



export const getRecommendations = async (
  type_of_traveler: string[], 
  type_of_wanted_trip: string[], 
  wanted_activities: string[], 
  matched_experiences: string[], 
  traveling_with: string[]
): Promise<string> => {
  //clean the local storage
  localStorage.removeItem("recommendations");
  
  const query = `
    query {
      getRecommendations(
        type_of_traveler: ${JSON.stringify(type_of_traveler)}, 
        type_of_wanted_trip: ${JSON.stringify(type_of_wanted_trip)}, 
        wanted_activities: ${JSON.stringify(wanted_activities)}, 
        matched_experiences: ${JSON.stringify(matched_experiences)}, 
        traveling_with: ${JSON.stringify(traveling_with)}
      )
    }
  `;

  const recommendations = await graphqlRequest<any>(query);
  console.log("Recommendations:", JSON.parse(recommendations.getRecommendations)); // Log the outcome

  //store the recommendations in local storage
  localStorage.setItem("recommendations", recommendations.getRecommendations);
  return recommendations;
};

console.log("graphqlService.ts loaded"); // Console log to test if the file is imported
console.log("graphqlEndpoint:", graphqlEndpoint); // Console log to test if the file is imported

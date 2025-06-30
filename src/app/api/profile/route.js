import { headers } from "next/headers";
/**
 * This is the GET request for the profile page.
 *
 * It first gets all the headers from the request, and then
 * gets the authorization header from the list of headers.
 *
 * The authorization header is then logged to the console.
 *
 * Finally, a new Response is returned with a status of 200 and
 * the body "Hello, profile page".
 */
export async function GET(request) {
  // Get all headers from the request
  // and log the authorization header to the console
  // This is useful for debugging purposes, especially when dealing with authentication
  console.log("GET request for profile page", request);
  const headersList = await headers();
  const authorization = headersList.get("Authorization");
  console.log("authorization", authorization);
  const cookie = headersList.get("cookie");
  console.log("cookie", cookie);
  return new Response("Hello, profile page", {
    headers: {
      "Content-Type": "text/plain",
      "set-cookie": "name=John-Doe",
     
    },
    status: 200,
  });
}
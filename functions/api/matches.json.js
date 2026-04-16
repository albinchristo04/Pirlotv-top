export async function onRequest(context) {
  const url = new URL(context.request.url);
  
  // Allow API key from either the URL (?key=...) or a Header (X-API-Key: ...)
  const providedKey = url.searchParams.get("key") || context.request.headers.get("X-API-Key");
  
  // The secret key you want to protect the API with
  const SECRET_KEY = "893a585698eb4b4490b1f299f8a9149c";

  // If the key is missing or wrong, return a 401 Unauthorized error
  if (providedKey !== SECRET_KEY) {
    return new Response(JSON.stringify({ error: "Unauthorized. Invalid API key." }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  }

  // If the key matches perfectly, let Cloudflare serve the static matches.json
  const response = await context.next();
  
  // Clone the response to add CORS headers just in case
  const modifiedResponse = new Response(response.body, response);
  modifiedResponse.headers.set("Access-Control-Allow-Origin", "*");
  return modifiedResponse;
}

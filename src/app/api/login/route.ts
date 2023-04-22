export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();
    const response = await fetch(`${process.env.API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        KUsers: username,
        OPassword: password,
      }),
    });
    const data = await response.json();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response("Somethin crashed :D!");
  }
}

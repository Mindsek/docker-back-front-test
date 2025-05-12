export default async function Home() {
  const message = await getMessage();
  return <div>{message}</div>;
}

async function getMessage() {
  try {
    const response = await fetch("http://localhost:3001/");
    console.log(response);
    return response.text();
  } catch (error) {
    console.error("Error fetching message:", error);
    return "Error fetching message";
  }
}

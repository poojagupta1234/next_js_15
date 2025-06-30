import { comments } from "../../data/data";


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
 
  if (query) {
    const filteredComments = comments.filter((comment) =>
      comment.name.toLowerCase().includes(query.toLowerCase())
    );
    return new Response(JSON.stringify(filteredComments), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return Response.json(comments);
}

export async function POST(request) {
  const { name, text } = await request.json();
  console.log("POST", name, text);
  const newComment = {
    id : comments.length + 1,
    name,
    text
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
export async function PATCH(request, { params }) { 
  const { id } = params;
  const { name, text } = await request.json();
  console.log("PATCH", id, name, text);
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments[commentIndex] = { ...comments[commentIndex], name, text };
  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
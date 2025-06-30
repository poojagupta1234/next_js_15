import { comments } from "../../../data/data";

 export async function GET(request, { params }) {
   const { id } = params;
  console.log("GET", id);
   if (id) {
     const comment = comments.find((comment) => comment.id === parseInt(id));
     if (!comment) {
      return new Response("Comment not found", { status: 404 });
    }
    return new Response(JSON.stringify(comment), {
      status: 200,
     headers: {
        "Content-Type": "application/json",
      },
     });
   }
   console.log("comments", comments);
 return Response.json(comments);
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

export async function DELETE(request, { params }) {
  const { id } = params;
  console.log("DELETE", id);
  const commentIndex = comments.findIndex((comment) => comment.id === parseInt(id));
  if (commentIndex === -1) {
    return new Response("Comment not found", { status: 404 });
  }
  comments.splice(commentIndex, 1);
  return new Response(JSON.stringify(comments), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}



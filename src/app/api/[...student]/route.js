export async function GET(request, content) {
  //   console.log(content);
  console.log(content.params.student);
  return new Response("all route catched");
}

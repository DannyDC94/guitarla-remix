export async function getPosts() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
  return await respuesta.json();
}

export async function getPost(post) {
  const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${post}&populate=imagen`);
  return await respuesta.json();
}

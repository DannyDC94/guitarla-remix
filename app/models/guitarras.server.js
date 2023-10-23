export async function getGuitarras() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
  return await respuesta.json();
}

export async function getGuitarra(guitarra) {
    const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${guitarra}&populate=imagen`);
    return await respuesta.json();
}
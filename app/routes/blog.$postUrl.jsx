import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server";
import { formatearFecha } from '~/utils/helpers'


export function meta({data}) {
  if (!data) {
    return [
        { title: 'Post no encontrado' },
        { description: `Guitarras, venta de guitarras, post no encontrado` },
      ];
  }  
  return [
    { title: `GuitarLA - ${data[0].attributes.titulo}` },
    { description: `Guitarras, venta de guitarras, post ${data[0].attributes.titulo}` },
  ];
}

export async function loader({ request, params }) {
  const { postUrl } = params;
  const post = await getPost(postUrl);
  // Si no se encuentra el post lanzamos un error
  if (post.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Post no encontrado",
      data: {},
    });
  }
  return post.data;
}

export default function Posts() {
  const post = useLoaderData();
  const { titulo, contenido, imagen, publishedAt} = post[0]?.attributes
  return (
    <article className='post mt-3'>
        <img className="imagen" src={imagen?.data?.attributes?.url} alt={`Imagen blog ${titulo}`} />
        <div className="contenido">
            <h3>{titulo}</h3>
            <p className="fecha">{formatearFecha(publishedAt)}</p>
            <p className="texto">{contenido}</p>
        </div>
    </article>
  );
}

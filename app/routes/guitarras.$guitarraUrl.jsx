import { useState } from "react";
import { useLoaderData, useOutletContext } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";

// Agregar {request, params} para revisar lo que retorna la url
export async function loader({ request, params }) {
  const { guitarraUrl } = params;
  const guitarra = await getGuitarra(guitarraUrl);
  //Si no se encuentra la guitarra lanzamos un error
  if (guitarra.data.length === 0) {
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no encontrada",
      data: {},
    });
  }
  return guitarra.data;
}

export function meta({ data }) {
  if (!data) {
    return [
      { title: "Guitarra no encontrada" },
      { description: `Guitarras, venta de guitarras, guitarra no encontrada` },
    ];
  }
  return [
    { title: `GuitarLA - ${data[0].attributes.nombre}` },
    {
      description: `Guitarras, venta de guitarras, guitarra ${data[0].attributes.nombre}`,
    },
  ];
}

export default function Guitarras() {
  const [cantidad, setCantidad] = useState(0);
  const { agregarCarrito } = useOutletContext();

  const guitarra = useLoaderData();
  const { nombre, descripcion, imagen, precio } = guitarra[0].attributes;

  const handleSubmit = e => {
    e.preventDefault();
    if (cantidad < 1) {
      return;
    }
    const guitarraSelecionada = {
      id: guitarra[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad
    }
    agregarCarrito(guitarraSelecionada);
  }

  return (
    <div className="guitarra">
      <img
        className="imagen"
        src={imagen.data.attributes.url}
        alt={`Imagen de la guitarra ${nombre}`}
      />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">{precio}</p>
        <form onSubmit={handleSubmit} className="formulario">
          <label htmlFor="cantidad">Cantidad</label>
          <select
            id="cantidad"
            onChange={(e) => setCantidad(+e.target.value)}
          >
            <option value="0">--Seleccione--</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <input type="submit" value="Agregar al carrito" />
        </form>
      </div>
    </div>
  );
}

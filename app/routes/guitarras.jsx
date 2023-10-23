import { Outlet } from "@remix-run/react";
import styles from "~/styles/guitarras.css";
import { useOutletContext } from '@remix-run/react'

export function links() {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
}

function Tienda() {
  return (
    <main className="contenedor">
      <Outlet context={useOutletContext()}/>
    </main>
  );
}

export default Tienda;

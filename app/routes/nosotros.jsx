import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return [
      { title: "GuitarLA - Sobre Nosotros" },
      { description: "Venta de guitarras, blog de musica" }
    ];
  }

export function links() {
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}

function Nosotros() {
  return (
    <main className="contenedor nosotros">
        <h2 className="heading">Nosotros</h2>
        <div className="contenido">
            <img src={imagen} alt="imagen sobre nosotros" />
            <div>
                <p>Phasellus volutpat vehicula nibh, id congue urna vulputate vitae. Fusce nec vestibulum enim. Suspendisse facilisis euismod pellentesque. Fusce suscipit, diam sit amet suscipit fringilla, dui justo imperdiet nisl, vel fringilla nisi nisl eget augue. Ut est diam, aliquam in auctor et, dignissim congue est. Etiam blandit eu est dignissim mattis. Curabitur augue elit, euismod eu massa at, commodo tempus enim. Curabitur ligula lectus, vehicula vel velit vel, imperdiet mattis erat.</p>
                <p>Phasellus volutpat vehicula nibh, id congue urna vulputate vitae. Fusce nec vestibulum enim. Suspendisse facilisis euismod pellentesque. Fusce suscipit, diam sit amet suscipit fringilla, dui justo imperdiet nisl, vel fringilla nisi nisl eget augue. Ut est diam, aliquam in auctor et, dignissim congue est. Etiam blandit eu est dignissim mattis. Curabitur augue elit, euismod eu massa at, commodo tempus enim. Curabitur ligula lectus, vehicula vel velit vel, imperdiet mattis erat.</p>
            </div>
        </div>
    </main>
  )
}

export default Nosotros
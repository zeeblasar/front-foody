import './product-list.css';


function ProductList() {
    return (
        <main className="main">
            <p>Lista de Productos</p>
            <article className="favourites">
                <form>
                    <section className="favourites">
                        <p> Tus favoritos </p>
                    </section>
                    <section className="list-product">
                        <li>
                            <ul> Producto 1</ul>
                            <ul> Producto 2</ul>
                            <ul> Producto 3</ul>
                        </li>
                    </section>
                </form>
            </article>
        </main>
    );
}

export default ProductList;
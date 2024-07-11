import Image from "next/image";
import Carusel from "../components/carusel/carusel"
import Selects from "../components/selexts/selects"
import Products from "../components/popular_products/products"
import Popular from "../components/popular/products"
import Action from "../components/action/products"
import Brand from "../components/brands/brands"
import Comment from "../components/comment/comment"

export default function Home() {
  return (
    <>
      <section>
        <Carusel />
      </section>

      <section>
        <Selects />
      </section>

      <section>
        <Products />
      </section>

      <section>
        <Popular />
      </section>

      <section>
        <Action />
      </section>

      <section>
        <Brand />
      </section>

      <section>
        <Comment />
      </section>
    </>
  );
}

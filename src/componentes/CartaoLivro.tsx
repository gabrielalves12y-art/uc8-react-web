import type { Livro } from "../../types/entidades";

interface CartaoLivroProps {
  livro: Livro;
}

export function CartaoLivro({ livro }: CartaoLivroProps) {
  return (
    <article>
      <h2>{livro.titulo}</h2>
      <p>{livro.autor}</p>
      <p>{livro.sinopse ?? "Sem sinopse"}</p>
      <p>{livro.exemplares} exemplares</p>
    </article>
  );
}

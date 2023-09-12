import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getPizzas } from "../../../services/api"

export default function Pizzsas() {

  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    (async () => {
      const pizzaRequest = await getPizzas()
      setPizzas(pizzaRequest.data)
    })()
  }, [])
  /*const data = [
    {
      id: 1,
      snack: "burguer",
      name: "Hambúrguer",
      description: "Hambúrguer de carne, queijo, alface, tomate e molho especial.",
      price: 10.00,
      image: "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg"
    },
    {
      id: 2,
      snack: "burguer",
      name: "Hambúrguer Duplo",
      description: "Dois hambúrgueres de carne, queijo, alface, tomate e molho especial.",
      price: 15.00,
      image: "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg"
    },
    {
      id: 3,
      snack: "burguer",
      name: "Hambúrguer Triplo",
      description: "Três hambúrgueres de carne, queijo, alface, tomate e molho especial.",
      price: 20.00,
      image: "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg"
    },
    {
      id: 4,
      snack: "burguer",
      name: "Hambúrguer Triplo Bacon",
      description: "Três hambúrgueres de carne, queijo, alface, tomate e molho especial.",
      price: 20.00,
      image: "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg"
    },
    {
      id: 5,
      snack: "burguer",
      name: "Hambúrguer Triplo Cheddar",
      description: "Três hambúrgueres de carne, queijo, alface, tomate e molho especial.",
      price: 20.00,
      image: "https://s2-casavogue.glbimg.com/GRF9KCq-1hiz5uSs-xX9Go_KqIc=/0x0:2048x1365/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_d72fd4bf0af74c0c89d27a5a226dbbf8/internal_photos/bs/2022/p/X/eb4KQdToys327cGqnRGg/receita-ceboloni-bacon.jpg"
    },
  ]*/
  return (
    <>
      <Head title="Pizzas" />
      <SnackTitle> Pizzas </SnackTitle>
      <Snacks snacks={pizzas} />
    </>
  )
}
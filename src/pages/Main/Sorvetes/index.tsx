import { useState, useEffect } from "react"

import { Head } from "../../../components/Head"
import { SnackTitle } from "../../../components/SnackTitle"
import { Snacks } from "../../../components/Snacks"

import { getSorvetes } from "../../../services/api"

export default function Sorvetes() {

  const [sorvetes, setSorvetes] = useState([])
  useEffect(() => {
    (async () => {
      const sorveteRequest = await getSorvetes()
      setSorvetes(sorveteRequest.data)
    })()
  }, [])
  
  return (
    <>
      <Head title="Sorvetes" />
      <SnackTitle> Sorvetes </SnackTitle>
      <Snacks snacks={sorvetes} />
    </>
  )
}
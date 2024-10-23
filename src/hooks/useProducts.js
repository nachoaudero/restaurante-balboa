import { useEffect, useState } from 'react'
import { fetchProductsByCategory } from '../utilities/productUtilities'

export const useProducts = () => {
  const [productsByCategory, setProductsByCategory] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setLoading(true)
        const fetchedProducts = await fetchProductsByCategory()
        setProductsByCategory(fetchedProducts)
      } catch (err) {
        console.error(`Error al cargar productos: ${error}`)
        setError(err)
      } finally {
        setLoading(false)
        // Descomentar la linea de abajo y comentar la de arriba para ver la pantalla de loading
        // setTimeout(() => {
        //   setLoading(false)
        // }, 100000)
      }
    }

    loadProducts()
  }, [])

  return { productsByCategory, loading, error }
}
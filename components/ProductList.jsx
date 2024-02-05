'use client'

import { useState } from "react"

export default function ProductList({ products }) {
    const [Products, setProducts] = useState(products)

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        const resp = await fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                price: price,
                desc: desc
            })
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => {
                    setName(e.target.value)
                }} value={name} type="text" placeholder="name" />
                <input onChange={(e) => {
                    setPrice(e.target.value)
                }} value={price} type="text" placeholder="price" />
                <input onChange={(e) => {
                    setDesc(e.target.value)
                }} value={desc} type="text" placeholder="description" />

                <button>GOGOGO</button>
            </form>

            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Название</th>
                        <th>Цена</th>
                        <th>Описание</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        Products.map((product) => (
                            <tr>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.description}</td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

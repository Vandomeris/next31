import ProductList from "@/components/ProductList";
import { PrismaClient } from "@prisma/client";

async function getProducts() {
    const client = new PrismaClient()

    return await client.products.findMany()
}

export default async function ProductsPage() {
    const products = await getProducts()
    return (
        <div>
            <ProductList products={products} />
        </div>
    )
}

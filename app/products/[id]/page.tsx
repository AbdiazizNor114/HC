import { notFound } from "next/navigation";
import Link from "next/link";
import { products } from "@/data/products";
import ProductDetail from "@/components/ProductDetail";
import ProductCard from "@/components/ProductCard";
export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();
  return (
    <section className="section page-section">
      <div className="breadcrumbs">
        <Link href="/collections">Collections</Link> / {product.name}
      </div>
      <ProductDetail product={product} />
      <div className="section-head related">
        <h2>
          You may also <em>love.</em>
        </h2>
        <Link className="text-link" href="/collections">
          Explore all styles ↗
        </Link>
      </div>
      <div className="product-grid">
        {products
          .filter((p) => p.id !== id)
          .slice(0, 3)
          .map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
      </div>
    </section>
  );
}

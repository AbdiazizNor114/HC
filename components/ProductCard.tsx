import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Product, money } from "@/data/products";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="product-card">
      <div className="product-image">
        <Image
          src={product.image}
          alt={`${product.name} interior inspiration`}
          fill
          sizes="(max-width:640px) 90vw, (max-width:1000px) 45vw, 30vw"
        />
        <span className="product-label">{product.category}</span>
        <span className="product-arrow">
          <ArrowUpRight size={19} />
        </span>
      </div>
      <div className="product-meta">
        <div>
          <h3>{product.name}</h3>
          <p>{product.material}</p>
        </div>
        <span>
          from <b>{money(product.price)}</b>
        </span>
      </div>
    </Link>
  );
}

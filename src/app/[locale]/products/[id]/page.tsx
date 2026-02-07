import { notFound } from "next/navigation";
import { formatPKR } from "@/lib/utils";
import { getTranslations } from "next-intl/server";
import { WhatsAppOrderButton } from "@/components/ui/whatsapp-order-button";

// ISR Configuration
export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  // Simulating fetching top products
  return [{ id: 'fresh-milk' }, { id: 'desi-ghee' }];
}

export default async function ProductPage({
  params
}: {
  params: Promise<{ id: string; locale: string }>;
}) {
  const { id, locale } = await params;
  const t = await getTranslations({locale, namespace: 'ProductPage'});

  // Mock Data Fetching
  const product = {
    id,
    name: id === 'fresh-milk' ? 'Fresh Buffalo Milk' : 'Pure Desi Ghee',
    price: id === 'fresh-milk' ? 220 : 3500,
    description: 'Direct from farm, 100% pure and organic.'
  };

  if (!product) notFound();

  return (
    <div className="container mx-auto p-8 font-sans">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-square bg-pk-secondary/20 rounded-lg flex items-center justify-center text-pk-primary">
          [Image Placeholder for {product.name}]
          {/* Use next/image here with blurDataURL */}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-pk-primary mb-2">{product.name}</h1>
          <p className="text-2xl text-pk-gold font-bold mb-4">{formatPKR(product.price)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>
          <WhatsAppOrderButton productName={product.name} productPrice={product.price} />
        </div>
      </div>
    </div>
  );
}

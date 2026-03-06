import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getFeaturedItems() {
  try {
    const res = await fetch(`${API_URL}/api/featured`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch data');
    return res.json();
  } catch (error) {
    console.error("Error loading featured items:", error);
    return []; 
  }
}

function displayPrice(item) {
  if (item.base_price) return `Ksh ${item.base_price}`;
  if (item.price_1kg) return `From Ksh ${item.price_1kg} / kg`;
  return 'Price on request';
}

export default async function Home() {
  const featuredItems = await getFeaturedItems();

  return (
    <main className="min-h-screen pb-24">
      {/* Navigation Bar */}
      <nav className="w-full bg-brand-dark text-brand-canvas shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-widest uppercase">
            <a href="/" className="hover:text-brand-pink transition duration-300">
              Whisk & Whip
            </a>
          </h1>
          <div className="flex items-center gap-8">
            <a href="/" className="font-medium hover:text-brand-purple transition duration-300">
              Home
            </a>
            <a href="/menu" className="font-medium hover:text-brand-purple transition duration-300">
              Full Menu
            </a>
            <a 
              href="https://wa.me/254700478487" 
              className="bg-brand-pink text-brand-dark font-bold px-5 py-2 rounded-full hover:bg-white transition duration-300"
            >
              Order Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-8 text-center md:text-left">
          <h2 className="text-5xl md:text-7xl font-bold leading-tight">
            Home baked <br />
            <span className="text-brand-purple">happiness.</span>
          </h2>
          <p className="text-lg md:text-xl text-brand-dark/80 max-w-md mx-auto md:mx-0">
            Delivered straight to your door in Membly, Ruiru. From custom birthday cakes to fresh daily pastries, made with love.
          </p>
          <div className="pt-4">
            <a 
              href="https://wa.me/254700478487?text=Hi!%20I%20would%20like%20to%20place%20an%20order%20from%20Whisk%20n%20Whip." 
              className="inline-block bg-brand-purple text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-brand-dark transition duration-300 transform hover:-translate-y-1"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>

        {/* Hero Image Grid */}
        <div className="flex-1 w-full grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-8">
            <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-pink/20">
              <Image src="/img1.jpeg" alt="Signature Cake" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="w-full h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-pink/20">
              <Image src="/img2.jpeg" alt="Bakery Treats" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-full h-48 relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-pink/20">
              <Image src="/img3.jpeg" alt="Pastries" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
            <div className="w-full h-64 relative rounded-2xl overflow-hidden shadow-lg border-2 border-brand-pink/20">
              <Image src="/img4.jpeg" alt="Custom Bake" fill className="object-cover hover:scale-105 transition duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="container mx-auto px-6 mt-24">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Signature Bakes</h3>
          <p className="text-brand-dark/70 max-w-lg mx-auto">
            Our most loved creations, baked fresh daily. Perfect for your next celebration or afternoon tea.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredItems.length > 0 ? (
            featuredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-md transition duration-300 border border-brand-purple/10">
                {/* Product Photo */}
                <div className="w-full h-48 relative rounded-2xl mb-4 overflow-hidden bg-brand-canvas">
                  <Image 
                    src={`/product-${item.id}.jpg`} 
                    alt={item.name} 
                    fill 
                    className="object-cover"
                    // If image doesn't exist show background color
                  />
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-purple">
                    {item.category_name}
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark leading-tight">
                    {item.name}
                  </h4>
                  <p className="text-brand-dark/70 font-medium">
                    {displayPrice(item)}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-brand-dark/50">
              Loading our delicious menu...
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
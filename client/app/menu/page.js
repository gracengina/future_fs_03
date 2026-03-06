import Image from "next/image";

// Define the API URL at the top of the file
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

async function getFullMenu() {
  try {
    // Template literal handles the dynamic routing
    const res = await fetch(`${API_URL}/api/menu`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Failed to fetch menu');
    return res.json();
  } catch (error) {
    console.error("Error loading menu:", error);
    return [];
  }
}

export default async function MenuPage() {
  const menuItems = await getFullMenu();

  const groupedMenu = menuItems.reduce((acc, item) => {
    const category = item.category_name;
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

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
            <a href="/" className="font-semibold hover:text-brand-purple transition duration-300">
              Home
            </a>
            <a 
              href="/menu" 
              className="font-semibold hover:text-brand-purple transition duration-300 underline underline-offset-8 decoration-2 decoration-brand-pink"
            >
              Full Menu
            </a>
            <a 
              href="https://wa.me/254700478487" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:inline-block bg-brand-pink text-brand-dark font-bold px-6 py-2 rounded-full hover:bg-white transition duration-300"
            >
              Contact Baker
            </a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 pt-12">
        <div className="text-center mb-16 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4 uppercase tracking-wider">
            Whisk & Whip
          </h1>
          
          <div className="relative w-40 h-40 mb-6 drop-shadow-sm">
            <Image 
              src="/logo.png" 
              alt="Whisk & Whip Logo" 
              fill 
              className="object-contain"
              priority
            />
          </div>

          <p className="text-brand-dark/70 max-w-2xl mx-auto italic">
            "Home baked happiness, delivered to your door"
          </p>
        </div>

        {Object.keys(groupedMenu).map((category) => (
            <section key={category} className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-bold text-brand-purple">{category}</h2>
                <div className="h-px bg-brand-purple/20 flex-1"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedMenu[category].map((item) => (
                  <div key={item.id} className="bg-white rounded-3xl p-6 shadow-sm border border-brand-pink/30 hover:shadow-md transition duration-300 flex flex-col">
                    
                    {/* Photo displays ONLY for Cakes category */}
                    {category === "Cakes" && (
                      <div className="w-full h-56 relative rounded-2xl mb-4 overflow-hidden bg-brand-canvas">
                        <Image 
                          src={`/product-${item.id}.jpg`} 
                          alt={item.name} 
                          fill 
                          className="object-cover hover:scale-110 transition duration-500"
                        />
                      </div>
                    )}

                    <div className="flex justify-between items-start mb-4 text-brand-dark font-bold text-xl">
                      {item.name}
                    </div>

                    <div className="mt-auto pt-4 border-t border-brand-canvas">
                      {item.price_1kg ? (
                        <div className="grid grid-cols-3 gap-2 text-center text-[10px] sm:text-xs">
                          <div className="bg-brand-canvas rounded-lg p-2 font-bold">1kg: <br/> Ksh {Math.round(item.price_1kg)}</div>
                          <div className="bg-brand-canvas rounded-lg p-2 font-bold">1.5kg: <br/> Ksh {Math.round(item.price_1_5kg)}</div>
                          <div className="bg-brand-canvas rounded-lg p-2 font-bold">2kg: <br/> Ksh {Math.round(item.price_2kg)}</div>
                        </div>
                      ) : (
                        <div className="flex justify-between items-center font-bold">
                          <span>Price</span>
                          <span className="text-brand-purple">Ksh {item.base_price}</span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
        ))}
      </div>
    </main>
  );
}
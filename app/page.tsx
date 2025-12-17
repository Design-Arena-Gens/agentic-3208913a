"use client";

import { ShoppingBag, TrendingUp, Gift, DollarSign, Star, ExternalLink } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice: string;
  discount: string;
  platform: "tiktok" | "shopee";
  image: string;
  rating: number;
  sold: string;
  commission: string;
  affiliateLink: string;
}

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState<"all" | "tiktok" | "shopee">("all");

  const products: Product[] = [
    {
      id: 1,
      name: "Wireless Bluetooth Earbuds TWS",
      price: "Rp 89.000",
      originalPrice: "Rp 299.000",
      discount: "70%",
      platform: "tiktok",
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop",
      rating: 4.8,
      sold: "15rb",
      commission: "15%",
      affiliateLink: "#tiktok-earbuds"
    },
    {
      id: 2,
      name: "Smartwatch Sport Fitness Tracker",
      price: "Rp 199.000",
      originalPrice: "Rp 599.000",
      discount: "67%",
      platform: "shopee",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop",
      rating: 4.9,
      sold: "25rb",
      commission: "20%",
      affiliateLink: "#shopee-smartwatch"
    },
    {
      id: 3,
      name: "Mini Projector LED HD 1080P",
      price: "Rp 349.000",
      originalPrice: "Rp 1.200.000",
      discount: "71%",
      platform: "tiktok",
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&h=400&fit=crop",
      rating: 4.7,
      sold: "8rb",
      commission: "25%",
      affiliateLink: "#tiktok-projector"
    },
    {
      id: 4,
      name: "Tas Ransel Anti Air USB Charger",
      price: "Rp 129.000",
      originalPrice: "Rp 399.000",
      discount: "68%",
      platform: "shopee",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
      rating: 4.6,
      sold: "30rb",
      commission: "18%",
      affiliateLink: "#shopee-backpack"
    },
    {
      id: 5,
      name: "Electric Hair Dryer Professional",
      price: "Rp 159.000",
      originalPrice: "Rp 499.000",
      discount: "68%",
      platform: "tiktok",
      image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=400&fit=crop",
      rating: 4.8,
      sold: "12rb",
      commission: "22%",
      affiliateLink: "#tiktok-hairdryer"
    },
    {
      id: 6,
      name: "LED Ring Light Tripod Stand",
      price: "Rp 99.000",
      originalPrice: "Rp 350.000",
      discount: "72%",
      platform: "shopee",
      image: "https://images.unsplash.com/photo-1600069948671-0c45e80d9afc?w=400&h=400&fit=crop",
      rating: 4.9,
      sold: "45rb",
      commission: "16%",
      affiliateLink: "#shopee-ringlight"
    }
  ];

  const filteredProducts = selectedPlatform === "all"
    ? products
    : products.filter(p => p.platform === selectedPlatform);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-8 h-8 text-purple-600" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                AffiliateHub
              </h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#products" className="text-gray-700 hover:text-purple-600 font-medium transition">Produk</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-purple-600 font-medium transition">Cara Kerja</a>
              <a href="#earnings" className="text-gray-700 hover:text-purple-600 font-medium transition">Komisi</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
          Raih Passive Income dari TikTok & Shopee
        </h2>
        <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          Bergabunglah dengan ribuan affiliate marketer dan dapatkan komisi hingga 25% dari setiap penjualan produk viral!
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-3">
            <TrendingUp className="w-8 h-8 text-green-500" />
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">Rp 50jt+</p>
              <p className="text-sm text-gray-600">Total Komisi Dibayar</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-3">
            <Gift className="w-8 h-8 text-purple-500" />
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">500+</p>
              <p className="text-sm text-gray-600">Produk Affiliate</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 flex items-center space-x-3">
            <DollarSign className="w-8 h-8 text-orange-500" />
            <div className="text-left">
              <p className="text-2xl font-bold text-gray-800">25%</p>
              <p className="text-sm text-gray-600">Komisi Maksimal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Filter */}
      <section id="products" className="container mx-auto px-4 py-8">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setSelectedPlatform("all")}
            className={`px-6 py-3 rounded-full font-semibold transition ${
              selectedPlatform === "all"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            Semua Platform
          </button>
          <button
            onClick={() => setSelectedPlatform("tiktok")}
            className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 ${
              selectedPlatform === "tiktok"
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            <span>🎵</span>
            <span>TikTok</span>
          </button>
          <button
            onClick={() => setSelectedPlatform("shopee")}
            className={`px-6 py-3 rounded-full font-semibold transition flex items-center space-x-2 ${
              selectedPlatform === "shopee"
                ? "bg-shopee text-white shadow-lg"
                : "bg-white text-gray-700 hover:shadow-md"
            }`}
          >
            <span>🛍️</span>
            <span>Shopee</span>
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">
              <div className="relative">
                <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
                <div className="absolute top-3 left-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                    product.platform === "tiktok" ? "bg-black" : "bg-shopee"
                  }`}>
                    {product.platform === "tiktok" ? "🎵 TikTok" : "🛍️ Shopee"}
                  </span>
                </div>
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  -{product.discount}
                </div>
                <div className="absolute bottom-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Komisi {product.commission}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-lg mb-2 text-gray-800">{product.name}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="ml-1 text-sm font-semibold text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">|</span>
                  <span className="text-sm text-gray-600">Terjual {product.sold}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-2xl font-bold text-purple-600">{product.price}</span>
                  <span className="text-sm text-gray-400 line-through">{product.originalPrice}</span>
                </div>
                <a
                  href={product.affiliateLink}
                  className={`w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center space-x-2 transition ${
                    product.platform === "tiktok"
                      ? "bg-black hover:bg-gray-800"
                      : "bg-shopee hover:bg-orange-600"
                  }`}
                >
                  <span>Dapatkan Link Affiliate</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Cara Kerja</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">1️⃣</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Pilih Produk</h3>
            <p className="text-gray-600">Pilih produk viral dari TikTok atau Shopee yang ingin Anda promosikan</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">2️⃣</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Bagikan Link</h3>
            <p className="text-gray-600">Dapatkan link affiliate unik dan bagikan ke media sosial Anda</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">3️⃣</span>
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Raih Komisi</h3>
            <p className="text-gray-600">Dapatkan komisi hingga 25% dari setiap penjualan yang terjadi</p>
          </div>
        </div>
      </section>

      {/* Earnings Section */}
      <section id="earnings" className="bg-gradient-to-r from-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Siap Mulai Menghasilkan?</h2>
          <p className="text-xl mb-8 opacity-90">Bergabunglah dengan ribuan affiliate marketer sukses hari ini!</p>
          <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition transform hover:scale-105">
            Daftar Gratis Sekarang
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <ShoppingBag className="w-6 h-6" />
            <span className="text-xl font-bold">AffiliateHub</span>
          </div>
          <p className="text-gray-400 mb-4">Platform affiliate terpercaya untuk TikTok & Shopee</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Tentang Kami</a>
            <a href="#" className="hover:text-white transition">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-white transition">Kontak</a>
          </div>
          <p className="text-gray-500 text-sm mt-4">© 2024 AffiliateHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 flex flex-col">
      {/* Навигация (заглушка) */}
      <header className="w-full p-6 flex justify-between items-center bg-white shadow-sm">
        <h1 className="text-xl font-bold text-rose-600">Nail Studio</h1>
        <nav className="space-x-4 text-sm font-medium text-gray-600">
          <a href="#services" className="hover:text-rose-600">Услуги</a>
          <a href="#contacts" className="hover:text-rose-600">Контакты</a>
        </nav>
      </header>

      {/* Главный экран */}
      <section className="flex-1 flex flex-col justify-center items-center text-center px-4 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Идеальный маникюр для вашего образа
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Профессиональный уход, современный дизайн и атмосфера релакса. 
          Запишитесь на сеанс и подарите своим рукам заботу.
        </p>
        <button className="bg-rose-600 text-white px-8 py-3 rounded-full font-medium hover:bg-rose-700 transition-colors">
          Записаться онлайн
        </button>
      </section>
    </main>
  );
}
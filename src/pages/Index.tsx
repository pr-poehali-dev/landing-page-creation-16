import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: 'Users',
      title: 'Портретная съемка',
      description: 'Профессиональные портреты для соцсетей, резюме и личного архива',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Heart',
      title: 'Свадебная съемка',
      description: 'Полное сопровождение вашего торжества с созданием фотоистории',
      price: 'от 30000 ₽'
    },
    {
      icon: 'Building',
      title: 'Коммерческая съемка',
      description: 'Фотографии для бизнеса, товаров, интерьеров и мероприятий',
      price: 'от 8000 ₽'
    }
  ];

  const portfolio = [
    {
      id: 1,
      category: 'portrait',
      image: 'https://cdn.poehali.dev/projects/aefd5756-f657-4bf5-baf8-d87d3d2f4141/files/f77dffb3-c266-4797-a444-e51e6c5f55e9.jpg',
      title: 'Портретная съемка'
    },
    {
      id: 2,
      category: 'wedding',
      image: 'https://cdn.poehali.dev/projects/aefd5756-f657-4bf5-baf8-d87d3d2f4141/files/50d8407e-378b-4e1f-b062-0f8fc4d050d4.jpg',
      title: 'Свадебная фотография'
    },
    {
      id: 3,
      category: 'commercial',
      image: 'https://cdn.poehali.dev/projects/aefd5756-f657-4bf5-baf8-d87d3d2f4141/files/0e6f9dd6-8c6a-47e1-9be9-9bed8c292422.jpg',
      title: 'Коммерческая съемка'
    }
  ];

  const filteredPortfolio = activeCategory === 'all' 
    ? portfolio 
    : portfolio.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-[hsl(var(--primary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
            PHOTO
          </h1>
          <div className="flex gap-6">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="hover:text-[hsl(var(--primary))] transition-colors"
            >
              Главная
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="hover:text-[hsl(var(--primary))] transition-colors"
            >
              Галерея
            </button>
            <button 
              onClick={() => scrollToSection('services')} 
              className="hover:text-[hsl(var(--primary))] transition-colors"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('portfolio')} 
              className="hover:text-[hsl(var(--primary))] transition-colors"
            >
              Портфолио
            </button>
          </div>
        </nav>
      </header>

      <main>
        <section id="hero" className="pt-32 pb-20 px-4">
          <div className="container mx-auto text-center animate-fade-in">
            <h2 className="text-6xl font-bold mb-6 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--secondary))] to-[hsl(var(--accent))] bg-clip-text text-transparent">
              Создаю моменты
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Профессиональный фотограф с 10-летним опытом. Запечатлеваю эмоции и создаю истории через объектив
            </p>
            <div className="flex gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/90"
                onClick={() => scrollToSection('services')}
              >
                Услуги
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => scrollToSection('portfolio')}
              >
                Портфолио
              </Button>
            </div>
          </div>
        </section>

        <section id="gallery" className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Галерея работ</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {portfolio.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-xl aspect-square animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Услуги</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[hsl(var(--primary))] to-[hsl(var(--accent))] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <p className="text-2xl font-bold text-[hsl(var(--primary))]">{service.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="portfolio" className="py-20 bg-muted/30 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Портфолио</h2>
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('all')}
                className={activeCategory === 'all' ? 'bg-[hsl(var(--primary))]' : ''}
              >
                Все работы
              </Button>
              <Button
                variant={activeCategory === 'portrait' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('portrait')}
                className={activeCategory === 'portrait' ? 'bg-[hsl(var(--secondary))]' : ''}
              >
                Портреты
              </Button>
              <Button
                variant={activeCategory === 'wedding' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('wedding')}
                className={activeCategory === 'wedding' ? 'bg-[hsl(var(--accent))]' : ''}
              >
                Свадьбы
              </Button>
              <Button
                variant={activeCategory === 'commercial' ? 'default' : 'outline'}
                onClick={() => setActiveCategory('commercial')}
                className={activeCategory === 'commercial' ? 'bg-[hsl(var(--orange))]' : ''}
              >
                Коммерческие
              </Button>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {filteredPortfolio.map((item) => (
                <div 
                  key={item.id} 
                  className="group relative overflow-hidden rounded-xl aspect-square animate-scale-in"
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <h3 className="text-white text-xl font-semibold">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Свяжитесь со мной</h3>
          <div className="flex justify-center gap-6 mb-6">
            <a href="mailto:photo@example.com" className="hover:text-[hsl(var(--primary))] transition-colors">
              <Icon name="Mail" size={24} />
            </a>
            <a href="tel:+79001234567" className="hover:text-[hsl(var(--primary))] transition-colors">
              <Icon name="Phone" size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-[hsl(var(--primary))] transition-colors">
              <Icon name="Instagram" size={24} />
            </a>
          </div>
          <p className="text-sm opacity-70">© 2024 PHOTO. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

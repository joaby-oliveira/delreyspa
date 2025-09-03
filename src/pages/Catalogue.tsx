import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ServiceModal from "@/components/ServiceModal";
import { toast } from "@/components/ui/sonner";
import { services } from "@/data/services";

export const CataloguePage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  const handleCopyService = (service) => {
    const features = service.features.map(f => `- ${f}`).join('\n');
    const price = service.price.replace('a partir de ', '');
    const serviceInfo = `*${service.title}*\n*${service.description}*\n\n${features}\n\n💰 ${price}`;
    navigator.clipboard.writeText(serviceInfo);
    toast("Serviço copiado para a área de transferência");
  };


  return (
    <div className="bg-background min-h-screen">
      <header className="bg-background/95 backdrop-blur-sm sticky top-0 z-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <a href="/">
              <img src="/images/logo.png" alt="Del Rey Spa Automotivo" className="h-12 w-auto" />
            </a>
            <nav className="hidden md:flex gap-6 items-center">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
              <a href="/catalogue" className="text-foreground font-semibold">Catálogo</a>
              <Button>Agende seu Horário</Button>
            </nav>
            <Button variant="outline" className="md:hidden">Menu</Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-foreground">Nosso </span>
            <span className="gold-gradient bg-clip-text text-transparent">Catálogo de Serviços</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore nossos serviços premium e escolha o tratamento ideal para o seu veículo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden card-gradient border-luxury-gold/20 hover:border-luxury-gold/40 smooth-transition card-shadow hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-2">
              <CardHeader className="p-0">
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover smooth-image" />
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <CardTitle className="text-xl font-bold text-foreground">{service.title}</CardTitle>
                <p className="text-lg font-semibold text-luxury-gold">{service.price}</p>
                <p className="text-muted-foreground text-sm">{service.description}</p>
                <Button className="w-full" onClick={() => handleOpenModal(service)}>Ver Detalhes</Button>
                <Button className="w-full mt-2" variant="outline" onClick={() => handleCopyService(service)}>Copiar Serviço</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Del Rey Spa Automotivo. Todos os direitos reservados.</p>
        </div>
      </footer>

      <ServiceModal service={selectedService} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default CataloguePage;

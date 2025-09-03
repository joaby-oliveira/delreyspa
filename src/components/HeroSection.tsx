import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {

  return (
    <section className="relative min-h-screen luxury-gradient flex items-center justify-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start mb-8">
              <img 
                src="/images/logo.png" 
                alt="Del Rey Spa Automotivo" 
                className="h-32 w-auto animate-float"
              />
            </div>
            
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Seu carro com</span>
                <span className="block gold-gradient bg-clip-text text-transparent animate-pulse-gold">
                  cuidado premium
                </span>
                <span className="block text-foreground text-3xl md:text-4xl lg:text-5xl mt-2">
                  sem você sair de casa
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
                Estética automotiva de alto padrão a domicílio em Marília
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/5514996367578" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg luxury-shadow smooth-transition"
                >
                  Agende seu horário
                </Button>
              </a>
              
              <Link to="/catalogue">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-primary/30 text-foreground hover:bg-primary/10 px-8 py-4 text-lg smooth-transition"
                >
                  Ver Catálogo
                </Button>
              </Link>
            </div>
            
            {/* Highlight Message */}
            <div className="luxury-border bg-luxury-gray/50 p-6 rounded-lg backdrop-blur-sm">
              <p className="text-lg font-medium gold-accent">
                ✨ Atendimento exclusivo em Marília
              </p>
              <p className="text-muted-foreground mt-2">
                Vamos até você, na sua casa ou condomínio
              </p>
            </div>
          </div>
          
          {/* Right Content - Video Section */}
          <div className="relative flex justify-center">
            <div className="relative rounded-2xl overflow-hidden luxury-shadow w-[270px] h-[480px]">
              <video
                src="/videos/cta-hero-video.MP4"
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
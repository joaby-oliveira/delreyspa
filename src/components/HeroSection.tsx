import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
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
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden luxury-shadow">
              {/* Video Placeholder */}
              <div className="aspect-video bg-luxury-gray/30 backdrop-blur-sm flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-luxury-gold/20 to-transparent"></div>
                
                {/* Video Play Button */}
                <div className="relative z-10 text-center space-y-4">
                  <PlayCircle className="w-24 h-24 mx-auto text-primary hover:scale-110 smooth-transition cursor-pointer" />
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Bem-vindo à experiência premium
                    </h3>
                    <p className="text-lg text-muted-foreground">
                      em estética automotiva a domicílio
                    </p>
                    <p className="text-sm text-luxury-gold mt-2 font-medium">
                      Conheça o Antônio e nossa filosofia de trabalho
                    </p>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full animate-pulse-gold"></div>
                <div className="absolute bottom-4 left-4 w-2 h-2 bg-secondary rounded-full animate-pulse-gold delay-1000"></div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-primary/20 rounded-full animate-float delay-500"></div>
            <div className="absolute -bottom-6 -left-6 w-8 h-8 bg-secondary/20 rounded-full animate-float delay-1000"></div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
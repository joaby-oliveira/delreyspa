import { Shield, Clock, MapPin, Award } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Qualidade Premium",
    description: "Produtos profissionais e técnicas especializadas"
  },
  {
    icon: Clock,
    title: "Pontualidade",
    description: "Horários respeitados e serviço eficiente"
  },
  {
    icon: MapPin,
    title: "Atendimento Domiciliar",
    description: "Vamos até você em toda Marília"
  },
  {
    icon: Award,
    title: "Experiência",
    description: "Anos de dedicação à estética automotiva"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 luxury-gradient relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkQ3MDAiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PHBhdGggZD0iTTAgMGg4MHY4MEgweiIvPjxwYXRoIGQ9Ik0yMCAyMGg0MHY0MEgyMHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-foreground">Sobre </span>
                <span className="gold-gradient bg-clip-text text-transparent">Nós</span>
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Somos especialistas em <span className="text-luxury-gold font-semibold">estética automotiva premium</span>, 
                  com atendimento 100% a domicílio em Marília. 
                </p>
                
                <p>
                  Nosso compromisso é oferecer <span className="text-luxury-gold font-semibold">praticidade, excelência e resultado impecável</span>, 
                  cuidando do seu carro como se fosse nosso.
                </p>
                
                <p>
                  Com anos de experiência no mercado, desenvolvemos técnicas e processos que garantem 
                  a máxima qualidade em cada serviço, sempre utilizando produtos premium e 
                  equipamentos profissionais.
                </p>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-muted-foreground">Carros atendidos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold gold-gradient bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <p className="text-muted-foreground">Satisfação garantida</p>
              </div>
            </div>
          </div>
          
          {/* Right Content - Features */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Por que escolher a Del Rey?
            </h3>
            
            <div className="grid gap-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-6 card-gradient luxury-border rounded-xl hover:border-luxury-gold/40 smooth-transition card-shadow"
                  >
                    <div className="p-3 bg-primary/20 rounded-lg flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Testimonial */}
            <div className="luxury-border bg-luxury-gray/30 p-6 rounded-xl backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold text-lg">"</span>
                </div>
                <div>
                  <p className="text-foreground italic mb-3">
                    "O atendimento da Del Rey superou todas as minhas expectativas. 
                    Meu carro ficou impecável e o serviço foi feito na minha própria garagem. 
                    Recomendo de olhos fechados!"
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-luxury-gold text-lg">★</span>
                      ))}
                    </div>
                    <span className="text-muted-foreground">- Cliente satisfeito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
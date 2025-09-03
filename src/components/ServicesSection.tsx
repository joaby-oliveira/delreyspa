import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/data/services";

const ServicesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjRkZENzAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxwYXRoIGQ9Ik01MCA1MG0tMjUgMGEyNSwyNSAwIDEsMSA1MCwwYTI1LDI1IDAgMSwxIC01MCwwIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Nossos </span>
            <span className="gold-gradient bg-clip-text text-transparent">Serviços Premium</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cada serviço é executado com a máxima atenção aos detalhes, 
            utilizando produtos premium e técnicas profissionais
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`card-gradient border-luxury-gold/20 hover:border-luxury-gold/40 smooth-transition card-shadow hover:shadow-lg hover:shadow-luxury-gold/20 hover:-translate-y-2 ${
                  service.highlighted ? 'ring-2 ring-luxury-gold/50' : ''
                }`}
              >
                <CardHeader className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    {service.highlighted && (
                      <Badge className="bg-primary text-primary-foreground">
                        Mais Popular
                      </Badge>
                    )}
                  </div>
                  
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-luxury-gold font-semibold text-lg">
                      {service.price}
                    </CardDescription>
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  
                  {service.extras && (
                    <div className="pt-4 border-t border-luxury-gold/20">
                      <p className="text-sm font-medium text-luxury-gold mb-2">Opcionais:</p>
                      <div className="space-y-1">
                        {service.extras.map((extra, extraIndex) => (
                          <div key={extraIndex} className="flex items-start gap-2">
                            <div className="w-1 h-1 bg-luxury-gold-dark rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-xs text-muted-foreground">{extra}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="luxury-border bg-luxury-gray/30 p-8 rounded-2xl backdrop-blur-sm max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Pronto para transformar seu carro?
            </h3>
            <p className="text-muted-foreground mb-6">
              Entre em contato conosco e agende seu horário. Atendemos em toda Marília!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-3 rounded-lg luxury-shadow smooth-transition">
                Solicitar Orçamento
              </button>
              <button className="border border-primary/30 text-foreground hover:bg-primary/10 px-8 py-3 rounded-lg smooth-transition">
                Falar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
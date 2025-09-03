import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwIiBoZWlnaHQ9IjEyMCIgdmlld0JveD0iMCAwIDEyMCAxMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48ZyBmaWxsPSIjRkZENzAwIiBmaWxsLW9wYWNpdHk9IjAuMDQiPjxwb2x5Z29uIHBvaW50cz0iNjAsMCAxMjAsNjAgNjAsMTIwIDAsMjAiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Entre em </span>
            <span className="gold-gradient bg-clip-text text-transparent">Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Pronto para transformar seu carro? Agende agora seu serviço premium
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            
            {/* Main CTA */}
            <Card className="card-gradient luxury-border hover:border-luxury-gold/40 smooth-transition card-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <MessageCircle className="w-8 h-8 text-primary" />
                  Agende pelo WhatsApp
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Fale diretamente conosco e agende seu horário. Resposta garantida em até 2 horas!
                </p>
                <Button 
                  size="lg"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold luxury-shadow smooth-transition"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chamar no WhatsApp
                </Button>
              </CardContent>
            </Card>
            
            {/* Contact Details */}
            <div className="grid gap-6">
              <Card className="card-gradient luxury-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Telefone</h4>
                      <p className="text-muted-foreground">(14) 99999-9999</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient luxury-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Área de Atendimento</h4>
                      <p className="text-muted-foreground">Marília e região</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-gradient luxury-border">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">Horário de Funcionamento</h4>
                      <p className="text-muted-foreground">
                        Segunda a Sábado: 8h às 18h<br/>
                        Domingo: Mediante agendamento
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Siga-nos nas redes sociais</h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-primary/30 hover:bg-primary/10 smooth-transition"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 border-primary/30 hover:bg-primary/10 smooth-transition"
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>
          </div>
          
          {/* Service Highlights */}
          <div className="space-y-8">
            <div className="luxury-border bg-luxury-gray/30 p-8 rounded-2xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                🚗 Por que agendar conosco?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Atendimento Domiciliar</h4>
                    <p className="text-muted-foreground">Vamos até sua casa ou condomínio</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Produtos Premium</h4>
                    <p className="text-muted-foreground">Utilizamos apenas produtos profissionais</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Garantia de Qualidade</h4>
                    <p className="text-muted-foreground">Satisfação garantida ou seu dinheiro de volta</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Flexibilidade de Horários</h4>
                    <p className="text-muted-foreground">Atendemos conforme sua disponibilidade</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pricing Range */}
            <div className="luxury-border bg-luxury-gray/20 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-foreground mb-4">
                💰 Faixa de Preços
              </h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Lavagem básica</span>
                  <span className="text-luxury-gold font-semibold">R$ 70+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Higienização completa</span>
                  <span className="text-luxury-gold font-semibold">R$ 280+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Pacote premium total</span>
                  <span className="text-luxury-gold font-semibold">R$ 550</span>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                *Preços podem variar conforme o tamanho e estado do veículo
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="luxury-border bg-primary/10 p-8 rounded-2xl backdrop-blur-sm max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Transforme seu carro hoje mesmo!
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              Não perca tempo, agende agora e tenha seu carro com cuidado premium
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-4 text-xl luxury-shadow smooth-transition animate-pulse-gold"
            >
              Agendar Agora no WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ricardo Sabaraense",
    stars: 5,
    date: "Há 15 semanas",
    comment: "Atendimento e serviço nota 10. Parabéns pelo profissionalismo. Recomendo 👏👏",
  },
  {
    name: "Fernanda Araujo",
    stars: 5,
    date: "Há 7 semanas",
    comment: "Ótima experiência. Ajudou muito com a praticidade de buscar o carro em casa.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          O que nossos clientes dizem
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border/50 shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-semibold">{testimonial.name}</CardTitle>
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(testimonial.stars)].map((_, i) => (
                      <Star key={i} fill="currentColor" size={20} />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{testimonial.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="https://share.google.com/RYqrKMrTp3Hmceqh1" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-primary/30 text-foreground hover:bg-primary/10">
              Ver mais avaliações no Google
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

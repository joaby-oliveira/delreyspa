import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Service {
  title: string;
  price: string;
  description: string;
  features: string[];
  extras?: string[];
  image: string;
}

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
}

const ServiceModal = ({ service, isOpen, onClose }: ServiceModalProps) => {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0">
        <div className="max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <img src={service.image} alt={service.title} className="w-full h-64 object-cover" />
            <div className="p-6">
              <DialogTitle className="text-3xl font-bold text-foreground mb-2">{service.title}</DialogTitle>
              <DialogDescription className="text-xl font-semibold text-luxury-gold mb-4">{service.price}</DialogDescription>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          </DialogHeader>
          <div className="px-6 pb-6 space-y-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">O que está incluso:</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            {service.extras && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Opcionais:</h4>
                <div className="flex flex-wrap gap-2">
                  {service.extras.map((extra, index) => (
                    <Badge key={index} variant="secondary">{extra}</Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
          <DialogFooter className="p-6 bg-background/95 border-t sticky bottom-0">
            <Button onClick={onClose} variant="outline">Fechar</Button>
            <Button>Agendar Serviço</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceModal;

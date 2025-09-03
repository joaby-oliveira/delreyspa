import { Sparkles, Car, Shield, Droplets, Zap, Eye, Paintbrush } from "lucide-react";

export const services = [
  {
    icon: Car,
    title: "🚗 Lavagem Convencional",
    price: "a partir de R$70,00",
    description: "Cuidado completo por dentro e por fora",
    features: [
      "Rodas, pneus e caixas de rodas detalhados",
      "Pré-lavagem para remover sujeira pesada",
      "Lavagem com luva de microfibra e shampoo neutro",
      "Secagem segura + cera de 1 mês de proteção",
      "Pretinho nos pneus",
      "Interior aspirado, vidros limpos, pedais e volante higienizados",
      "Cheirinho novo e lixinho exclusivo"
    ],
    image: "/images/lavagem-convencional.png"
  },
  {
    icon: Zap,
    title: "🧼 Higienização de Motor",
    price: "a partir de R$150,00",
    description: "Motor com aspecto de novo",
    features: [
      "Isolamento de módulos eletrônicos",
      "Remoção de terra, minerais, óleo e graxa",
      "Finalização com verniz de motor para aspecto de novo"
    ],
    image: "/images/higienizacao-motor.png"
  },
  {
    icon: Shield,
    title: "🛡️ Enceramento Técnico (Selante)",
    price: "a partir de R$160,00",
    description: "Proteção de até 12 meses",
    features: [
      "Proteção contra sol, chuva, poluição, cocô de passarinho e seiva de árvores",
      "Inclui Lavagem Convencional completa",
      "Descontaminação da pintura",
      "Aplicação de selante premium que realça cor e brilho"
    ],
    image: "/images/enceramento-tecnico.png"
  },
  {
    icon: Sparkles,
    title: "🛋️ Higienização Parcial",
    price: "a partir de R$280,00",
    description: "Renovação parcial do interior",
    features: [
      "Inclui Lavagem Convencional",
      "Remoção dos bancos (tecido ou couro)",
      "Higienização completa de assentos e carpete",
      "Limpeza interna detalhada"
    ],
    extras: [
      "Vitrificação de couro (+R$80,00)",
      "Impermeabilização de tecido (+R$80,00)"
    ],
    image: "/images/higienizacao-parcial.png"
  },
  {
    icon: Sparkles,
    title: "✨ Higienização Total",
    price: "R$550,00 (à vista)",
    description: "Renovação completa do interior (dura 1 dia inteiro)",
    features: [
      "Inclui Lavagem Convencional",
      "Remoção dos bancos",
      "Higienização de bancos, carpete, portas, painel, volante, teto e porta-malas"
    ],
    extras: [
      "Vitrificação de couro",
      "Impermeabilização de tecido"
    ],
    highlighted: true,
    image: "/images/higienizacao-total.png"
  },
  {
    icon: Eye,
    title: "💎 Cristalização dos Vidros",
    price: "Para-brisa: R$50,00 | Todos: R$80,00",
    description: "Melhora visibilidade em dias de chuva",
    features: [
      "Aumenta segurança e conforto",
      "Melhor visibilidade na chuva",
      "Proteção duradoura"
    ],
    image: "/images/cristalizacao-vidros.png"
  },
  {
    icon: Paintbrush,
    title: "🎨 Intensificação de Plásticos Internos",
    price: "a partir de R$40,00",
    description: "Realce da cor original",
    features: [
      "Realce da cor original de painéis, portas e acabamentos soft touch",
      "Proteção contra ressecamento e queimaduras do sol",
      "Acabamento sofisticado, sem oleosidade"
    ],
    image: "/images/intensificacao-interior.png"
  },
  {
    icon: Droplets,
    title: "🖌️ Revitalização de Plásticos Externos",
    price: "a partir de R$40,00",
    description: "Proteção de até 12 meses",
    features: [
      "Higienização e tratamento profundo",
      "Recupera a cor original (mais preta, viva e intensa)",
      "Produto hidrorepelente com proteção de até 12 meses contra poeira e chuva"
    ],
    image: "/images/revitalizacao-exterior.png"
  }
];
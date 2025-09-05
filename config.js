// config.js

const siteConfig = {
  siteName: "Trivora",
  email: "info@trivora.pt",
  telefone: "+351 123 456 789",
  endereco: "Rua das Empresas 1, Lisbon, Portugal",
  mapa: "https://maps.google.com/maps?q=Lisbon&t=&z=13&ie=UTF8&iwloc=&output=embed",

  // Textos principais
  sobre: {
    historia: "A Trivora foi oficialmente constituída em 2024 e iniciou operações ativas no mês passado. Trabalhamos para oferecer serviços de gerenciamento, marketing e consultoria.",
    missao: "Capacitar empresas com estratégias pragmáticas e execução de alto impacto para alcançar crescimento sustentável.",
    visao: "Ser a parceira de referência para empresas que procuram excelência operacional e presença de mercado relevante.",
    valores: [
      "Integridade e transparência",
      "Foco em resultados",
      "Inovação aplicada",
      "Empatia pelo cliente"
    ]
  },

  // Equipa
  equipa: [
    { nome: "Matias Domingos", cargo: "CEO", img: "img/matias.jpg" },
    { nome: "Diretor de Operações", cargo: "Operações", img: "img/operacoes.jpg" },
    { nome: "Diretor de Marketing", cargo: "Marketing", img: "img/marketing.jpg" },
    { nome: "Gerente de Projetos", cargo: "Projetos", img: "img/projetos.jpg" }
  ],

  // Serviços
  servicos: [
    {
      nome: "Gerenciamento Empresarial",
      intro: "Planeamento operacional, reorganização de processos e melhoria contínua.",
      subsecoes: [
        { titulo: "Diagnóstico Operacional", texto: "Mapeamos processos e identificamos gargalos." },
        { titulo: "Reengenharia de Processos", texto: "Redesenho para aumentar eficiência." },
        { titulo: "Gestão Financeira & KPI", texto: "Indicadores e controlo financeiro para decisões rápidas." }
      ]
    },
    {
      nome: "Marketing Digital",
      intro: "Estratégias para presença online, aquisição de clientes e posicionamento de marca.",
      subsecoes: [
        { titulo: "SEO & Conteúdo", texto: "Foco em tráfego orgânico e autoridade de marca." },
        { titulo: "Performance Ads", texto: "Campanhas pagas com otimização de ROI." },
        { titulo: "Social Media & Community", texto: "Construção de comunidade e funil de vendas." }
      ]
    },
    {
      nome: "Consultoria de Negócios",
      intro: "Análises para expansão, avaliação de oportunidades e entrada em novos mercados.",
      subsecoes: [
        { titulo: "Estudo de Mercado", texto: "Pesquisa e análise competitiva." },
        { titulo: "Modelos de Negócio", texto: "Validação e ajuste do modelo de receita." },
        { titulo: "Planeamento Estratégico", texto: "Roadmap de 12-24 meses com metas e recursos." }
      ]
    }
  ]
};

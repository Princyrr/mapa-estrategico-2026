export interface Initiative {
  id: string;
  title: string;
}

export interface Objective {
  title: string;
  initiatives?: Initiative[];
}

export interface SubItem {
  id: string;
  label: string;
  objectives?: Objective[];
}

export interface Factor {
  id: string;
  label: string;

  color: string;
  lightColor: string;
  icon: string;
  subitems: SubItem[];
  description: string;
}

export const factors: Factor[] = [
  {
    id: "ambiente-negocios",
    label: "1 AMBIENTE DE NEGÓCIOS",
    color: "#2563EB",
    lightColor: "#93C5FD",
    icon: "🤝",
    description:
      "Promover um ambiente de negócios que favoreça o crescimento econômico e o desenvolvimento sustentável passa pela garantia de instituições – incluindo segurança pública e defesa do Estado – regramentos estáveis, transparentes e previsíveis, bem como pela capacidade de formulação de instrumentos eficientes para resolução de conflitos.",

    subitems: [
      {
        id: "amb-reg",
        label: "1.1 AMBIENTE REGULATÓRIO",
        objectives: [
          {
            title: "Melhorar a qualidade regulatória",
            initiatives: [
              {
                id: "001",
                title: "Implantar padronização em exigências municipais.",
              },

              {
                id: "002",
                title:
                  "Criar a “Casa do Empreendedor Industrial” centralizando licenciamentos, registros e acesso a incentivos.",
              },
              {
                id: "003",
                title:
                  "Criar câmara de arbitragem para resolução de contenciosos envolvendo empresas do estado.",
              },
            ],
          },
        ],
      },

      {
        id: "seg-jur",
        label: "1.2 SEGURANÇA JURÍDICA",
        objectives: [
          {
            title: "Elevar a segurança jurídica",
            initiatives: [
              {
                id: "004",
                title:
                  "Firmar acordos entre o judiciário estadual e o setor produtivo para garantir estabilidade contratual e reduzir inseguranças jurídicas.",
              },
            ],
          },
          {
            title:
              "Aumentar a efetividade dos mecanismos alternativos de resolução de conflito",
            initiatives: [
              {
                id: "005",
                title:
                  "Criar varas ou câmaras especializadas em direito empresarial e mediação de conflitos empresariais.",
              },
            ],
          },
        ],
      },

      {
        id: "gov",
        label: "1.3 GOVERNANÇA",
        objectives: [
          {
            title: "Melhorar a eficácia do setor público",
            initiatives: [
              {
                id: "006",
                title:
                  "Aprimorar práticas de governança corporativa e pública para elevar a eficiência, integridade e transparência na gestão de instituições e empresas.",
              },
            ],
          },
          {
            title: "Ampliar a transparência do poder público",
            initiatives: [
              {
                id: "007",
                title:
                  "Ampliar a atuação institucional da federação para facilitar a criação de modelos de governança e de compliance adaptados às realidades dos governos estaduais e municipais.",
              },
            ],
          },
          {
            title:
              "Aperfeiçoar a governança corporativa e do sistema de compliance no setor privado",
            initiatives: [
              {
                id: "008",
                title:
                  "Implementar sistema online integrado para monitorar processos de incentivos fiscais, alvarás e licenciamentos, permitindo acompanhamento em tempo real.",
              },
            ],
          },
        ],
      },

      {
        id: "desburo",
        label: "1.4 DESBUROCRATIZAÇÃO",
        objectives: [
          {
            title:
              "Reduzir o excesso de procedimentos burocráticos que afetam o ambiente de negócios.",
            initiatives: [
              {
                id: "009",
                title:
                  "Implantar um balcão único digital para registro e regularização de indústrias, conectando prefeituras, Receita Estadual e órgãos ambientais.",
              },
            ],
          },
        ],
      },

      {
        id: "seg-pub",
        label: "1.5 SEGURANÇA PÚBLICA E DEFESA DO ESTADO",
        objectives: [
          {
            title:
              "Reduzir custos sociais e econômicos decorrentes da insegurança pública",
            initiatives: [
              {
                id: "010",
                title:
                  "Fortalecer a presença das forças de segurança com foco preventivo nas áreas industriais.",
              },
            ],
          },
          {
            title: "Reduzir o número de roubos de carga",
            initiatives: [
              {
                id: "011",
                title:
                  "Instalar pontos avançados de vigilância integrada em regiões com maior incidência de crimes logísticos.",
              },
              {
                id: "012",
                title:
                  "Criar protocolos de resposta rápida entre transportadoras, polícias e federações.",
              },
              {
                id: "013",
                title:
                  "Ampliar a articulação entre órgãos civis e militares para reduzir exploração ilegal, criminalidade organizada e perda de controle sobre cadeias produtivas estratégicas.",
              },
            ],
          },
          {
            title: "Aumentar a cibersegurança no Brasil",
            initiatives: [
              {
                id: "014",
                title:
                  "Avançar na digitalização com protocolos mínimos de cibersegurança em sistemas públicos para eliminar a vulnerabilidade a ataques, sequestros de dados.",
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "ambiente-economico",
    label: "2 AMBIENTE ECONÔMICO",
    color: "#9B2335",
    lightColor: "#F3A0AA",
    icon: "💰",
    description:
      "O ambiente econômico molda o contexto da atividade industrial, sendo fator central para a modernização do setor.",

    subitems: [
      {
        id: "macro",
        label: "2.1 MACROECONOMIA E INVESTIMENTO",
        objectives: [
          {
            title: "Aumentar o nível de emprego",
            initiatives: [
              {
                id: "015",
                title:
                  "Estabelecer metas de geração de empregos vinculadas a incentivos.",
              },
              {
                id: "016",
                title:
                  "Ampliar a instalação de indústrias de transformação em municípios com alto desemprego.",
              },
              {
                id: "017",
                title:
                  "Fortalecer o núcleo estadual de arranjos produtivos locais da Paraíba.",
              },
            ],
          },
          {
            title:
              "Assegurar a estabilidade de preços de forma compatível com uma trajetória decrescente da taxa de juros de política monetária.",
            initiatives: [
              {
                id: "018",
                title:
                  "Criar uma política estadual de financiamento produtivo com taxas bonificadas para investimentos que expandam a oferta de bens essenciais (ex: agroindustrialização, produção de insumos da construção civil, energia renovável).",
              },
              {
                id: "019",
                title:
                  "Identificar gargalos de oferta que elevam os custos ao consumidor final.",
              },
              {
                id: "020",
                title:
                  "Priorizar incentivos para cadeias que apresentam dinâmica inovativa e maior agregação de valor.",
              },
            ],
          },
          {
            title: "Alcançar sustentabilidade fiscal",
            initiatives: [
              {
                id: "021",
                title:
                  "Incentivar a reforma administrativa estadual com foco em efi ciência e digitalização de serviços públicos.",
              },
            ],
          },
          {
            title: "Aumentar investimentos públicos e privados",
            initiatives: [
              {
                id: "022",
                title:
                  "Criar agência estadual de fomento e de financiamento dedicado ao setor industrial do estado visando a modernização do setor e o estímulo ao aumento da competitividade das empresas.",
              },
            ],
          },
        ],
      },

      {
        id: "financ",
        label: "2.2 FINANCIAMENTO",
        objectives: [
          {
            title: "Reduzir custo de financiamento",
            initiatives: [
              {
                id: "023",
                title:
                  "Criar um escritório de apoio técnico em projetos para captação de recursos com juros subsidiados junto a agências de fomento nacionais e internacionais.",
              },
              {
                id: "024",
                title:
                  "Criar um fundo estadual que subsidie os juros de financiamentos contratados por empresas dos setores industriais prioritários, por meio de convênios com bancos públicos.",
              },
            ],
          },
          {
            title: "Aumentar a disponibilidade e a oferta de crédito bancário.",
            initiatives: [
              {
                id: "025",
                title:
                  "Aumentar a disponibilidade e a oferta de crédito em âmbito estadual para as empresas do setor industrial.",
              },
            ],
          },
          {
            title:
              "Melhorar as condições de crédito para micro, pequenas e médias empresas.",
            initiatives: [
              {
                id: "026",
                title:
                  "Monitorar os acessos mais rápidos a crédito subsidiado, diminuição da dependência de bancos privados e maior viabilidade para pequenas e médias indústrias.",
              },
            ],
          },
          {
            title:
              "Aumentar a disponibilidade e a oferta de crédito não bancário.",
            initiatives: [
              {
                id: "027",
                title:
                  "Desenvolver um estudo do impacto direto e indireto dos investimentos financiados pelo BNDES e pelo BN na renda do Nordeste e da Paraíba.",
              },
              {
                id: "028",
                title:
                  "Fortalecer as cooperativas de crédito com foco no setor industrial.",
              },
              {
                id: "029",
                title:
                  "Criar um programa para apoiar a estruturação de FIDCs (Fundos de Investimento em Direitos Creditórios) e outras formas de financiamento direto para indústrias Paraibanas.",
              },
            ],
          },
          {
            title:
              "Aumentar a destinação de recursos dos Fundos Constitucionais de Financiamento (FCFs) para a indústria.",
            initiatives: [
              {
                id: "030",
                title:
                  "Atuar politicamente para que os representantes da Paraíba no CONDEL (Conselho Deliberativo) da SUDENE defendam o aumento do percentual dos recursos do FNE (Fundo Constitucional de Financiamento do Nordeste) destinado a atividades industriais, com critérios claros de impacto econômico e geração de empregos.",
              },
              {
                id: "031",
                title: "Apoiar o fortalecimento institucional da SUDENE.",
              },
              {
                id: "032",
                title:
                  "Estabelecer com o BNB (Banco do Nordeste) linhas de crédito específicas para indústrias paraibanas com recursos do FNE (Fundo Constitucional de Financiamento do Nordeste), estruturadas com apoio técnico da FIEPB e integradas ao plano industrial do estado.",
              },
              {
                id: "033",
                title:
                  "Estimular a celebração de convênios com bancos comerciais e privados para indústrias.",
              },
            ],
          },
        ],
      },

      {
        id: "trib",
        label: "2.3 TRIBUTAÇÃO",
        objectives: [
          {
            title:
              "Alinhar a tributação do consumo às melhores práticas internacionais, com a adoção de um modelo IVA.",
            initiatives: [
              {
                id: "034",
                title:
                  "Adaptar o FAIN/PB (Fundo de Apoio ao Desenvolvimento Industrial da Paraíba) ao contexto da nova política industrial NIB (Nova Indústria Brasil), vinculando os benefícios fiscais à transformação digital e transição energética.",
              },
              {
                id: "035",
                title:
                  "Orientar indústrias locais sobre os impactos e ajustes necessários na transição para o novo modelo de tributação sobre bens e serviços (IVA dual com IBS e CBS).",
              },
              {
                id: "036",
                title:
                  "Criar simulador de carga tributária para uso pelas indústrias.",
              },
              {
                id: "037",
                title:
                  "Realizar um estudo técnico sobre os efeitos esperados da nova tributação sobre setores industriais estratégicos do estado.",
              },
            ],
          },
          {
            title:
              "Reduzir a diferença entre a participação na arrecadação de tributos sobre o consumo e a participação da indústria no PIB.",
            initiatives: [
              {
                id: "038",
                title:
                  "Articular, no âmbito da regulamentação do IBS (Imposto sobre Bens e Serviços), uma alíquota diferenciada (reduzida) para segmentos industriais estratégicos da Paraíba, como alimentos e bebidas, têxtil, calçados e energias renováveis, com base na capacidade de geração de empregos e valor agregado.",
              },
            ],
          },
          {
            title: "Reduzir a tributação da renda corporativa.",
            initiatives: [
              {
                id: "039",
                title:
                  "Mobilizar a bancada paraibana no Congresso Nacional para apoiar uma reforma do IRPJ (Imposto de Renda da Pessoa Jurídica) e da CSLL (Contribuição Social sobre o Lucro Líquido), com redução de alíquotas nominais e ampliação da base tributável de forma neutra.",
              },
            ],
          },
        ],
      },

      {
        id: "dev-reg",
        label: "2.4 DESENVOLVIMENTO REGIONAL",
        objectives: [
          {
            title: "Reduzir desigualdades regionais de renda",
            initiatives: [
              {
                id: "040",
                title:
                  "Estimular e apoiar a interiorização do desenvolvimento industrial.",
              },
              {
                id: "041",
                title:
                  "Ampliar o apoio técnico, tributário e de crédito a APLs (arranjos produtivos locais) industriais no semiárido, como cerâmica, confecção, calçados e alimentos, com assistência gerencial, acesso a crédito simplificado e inovação incremental.",
              },

              {
                id: "042",
                title:
                  "Desenvolver um polo de indústrias de alta tecnologia na cidade de Campina Grande.",
              },
              {
                id: "043",
                title:
                  "Constituir as cidades de Campina Grande, Patos, Cajazeiras e Sousa como “cidades intermediadoras” do desenvolvimento industrial.",
              },
              {
                id: "044",
                title:
                  "Desenvolver a Matriz de Insumo/Produto do setor industrial da Paraíba.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "baixo-carbono",
    label: "3 BAIXO CARBONO E RECURSOS NATURAIS",
    color: "#6c4BC3",
    lightColor: "#DDD6FE",
    icon: "♻️",
    description:
      "A transição para uma economia de baixo carbono, baseada na redução de emissões de gases de efeito estufa (GEE) e no uso eficiente de recursos naturais, é fator essencial para o posicionamento da indústria brasileira como liderança na agenda nacional e global de sustentabilidade.",

    subitems: [
      {
        id: "rec-nat",
        label: "3.1 RECURSOS NATURAIS",
        objectives: [
          {
            title:
              "Ampliar o uso sustentável da biodiversidade brasileira pela indústria",
            initiatives: [
              {
                id: "045",
                title:
                  "Fomentar a bioeconomia com inovação e sustentabilidade.",
              },
              {
                id: "046",
                title:
                  "Estimular o surgimento de cadeias de valor que integrem conservação ambiental e geração de renda local.",
              },
              {
                id: "047",
                title:
                  "Desenvolver cursos e publicações para ampliar o entendimento empresarial sobre como transformar biodiversidade em negócios inovadores.",
              },
            ],
          },
          {
            title:
              "Contribuir para a segurança hídrica da indústria brasileira",
            initiatives: [
              {
                id: "048",
                title:
                  "Elaborar o plano de recursos hídricos da bacia do Rio Paraíba.",
              },
              {
                id: "049",
                title:
                  "Promover iniciativas de transição energética e sustentabilidade na indústria paraibana, o que inclui a segurança hídrica como eixo transversal.",
              },
            ],
          },
          {
            title:
              "Aumentar a produção madeireira de manejo florestal sustentável",
            initiatives: [
              {
                id: "050",
                title:
                  "Incentivar a indústria a usar madeira legal e proveniente de áreas manejadas com autorização dos órgãos ambientais estaduais e federais.",
              },
            ],
          },
        ],
      },

      {
        id: "descarb",
        label: "3.2 DESCARBONIZAÇÃO",
        objectives: [
          {
            title:
              "Reduzir a intensidade das emissões de gases de efeito estufa da indústria brasileira",
            initiatives: [
              {
                id: "051",
                title:
                  "Identificar os principais vetores de emissões em setores industriais.",
              },
              {
                id: "052",
                title:
                  "Desenvolver políticas estaduais de incentivo à utilização de resíduos orgânicos e agroindustriais (bagaço de cana, capim-elefante, restos alimentares, esterco) como fonte energética alternativa para indústrias, especialmente micro, pequenas e médias empresas, e agroindústrias.",
              },
            ],
          },
          {
            title:
              "Reduzir as emissões de gases de efeito estufa da indústria brasileira",
            initiatives: [
              {
                id: "053",
                title:
                  "Ampliar o uso de fontes renováveis de energia na indústria.",
              },
            ],
          },

          {
            title: "Ampliar o uso de fontes renováveis de energia na indústria",
            initiatives: [
              {
                id: "054",
                title:
                  "Mapear a escala de produção de resíduos orgânicos e vegetais com potencial de geração de biogás/energia elétrica em pequenas usinas.",
              },
              {
                id: "055",
                title:
                  "Identificar as regiões do estado com potencial para o uso de pequenas usinas de biogás para produção de energia elétrica em comunidades rurais.",
              },
              {
                id: "056",
                title:
                  "Ampliar políticas de uso de pequenos geradores de eletricidade a biogás.",
              },
              {
                id: "057",
                title:
                  "Promover o uso de pequenas usinas de biogás para produção de energia elétrica em comunidades rurais.",
              },
              {
                id: "058",
                title:
                  "Criar um polo de hidrogênio de baixo carbono na Paraíba.",
              },
              {
                id: "059",
                title:
                  "Incentivar projetos de aproveitamento energético de efluentes industriais.",
              },
            ],
          },
        ],
      },

      {
        id: "eco-circ",
        label: "3.3 ECONOMIA CIRCULAR",
        objectives: [
          {
            title:
              "Melhorar a eficiência no uso dos recursos naturais, com base nos princípios da economia circular.",
            initiatives: [
              {
                id: "060",
                title:
                  "Criar uma rede de inteligência e sustentabilidade para a indústria da Paraíba.",
              },
              {
                id: "061",
                title:
                  "Promover a implantação e o desenvolvimento de cadeias industriais que utilizem resíduos.",
              },
            ],
          },
          {
            title: "Aumentar a recuperação de resíduos como recursos de valor",
            initiatives: [
              {
                id: "062",
                title: "Mapear o mercado de reuso de resíduos na Paraíba.",
              },
              {
                id: "063",
                title:
                  "Mapear as empresas e associações de coleta de resíduos.",
              },
              {
                id: "064",
                title:
                  "Incentivar acordos setoriais de logística reversa avançada para reduzir a geração de rejeitos",
              },
              {
                id: "065",
                title:
                  "Integrar gestão de resíduos industriais e urbanos em consórcios municipais.",
              },
              {
                id: "066",
                title:
                  "Promover a diminuição de intermediários dentro da cadeia da reciclagem.",
              },
            ],
          },
          {
            title:
              "Universalizar a disposição adequada de resíduos sólidos não recuperáveis",
            initiatives: [
              {
                id: "067",
                title:
                  "Incentivar a criação de consórcios intermunicipais de aterros  regionalizados de resíduos não recuperáveis.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "comercio",
    label: "4 COMÉRCIO E INTEGRAÇÃO INTERNACIONAL",
    color: "#E8822A",
    lightColor: "#F9C898",
    icon: "🌐",
    description:
      "A integração da economia brasileira ao comércio internacional possibilita a ampliação do mercado para os produtos domésticos, ao mesmo tempo que promove a diversificação das oportunidades de negócios, estimula a inovação e expande o intercâmbio de conhecimento e tecnologia.",

    subitems: [
      {
        id: "comp-ext",
        label: "4.1 COMPETITIVIDADE DO COMÉRCIO EXTERIOR BRASILEIRO",
        objectives: [
          {
            title:
              "Aumentar a participação do Brasil nas exportações mundiais da indústria de transformação",
            initiatives: [
              {
                id: "068",
                title:
                  "Implantar os 5 serviços de apoio às empresas contidos na Mega Trilha de Exportação da APEX Brasil no CIN (Centro Internacional de Negócios) da FIEPB.",
              },
              {
                id: "069",
                title:
                  "Ampliar o programa de QualiExporta PBsF (Qualificação Para Exportação - Paraíba Sem Fronteiras).",
              },
              {
                id: "070",
                title:
                  "Atrair empresas de base tecnológica voltadas para exportação.",
              },
            ],
          },
          {
            title: "Ampliar o crédito à exportação",
            initiatives: [
              {
                id: "071",
                title:
                  "Fomentar parceria com o setor de exportação do Banco do Brasil.",
              },
            ],
          },
          {
            title:
              "Reduzir o tempo médio de liberação das operações de comércio exterior",
            initiatives: [
              {
                id: "072",
                title:
                  "Reduzir o tempo médio de liberação das operações de comércio exterior no Porto de Cabedelo.",
              },
            ],
          },
        ],
      },

      {
        id: "barr-exp",
        label: "4.2 ELIMINAÇÃO DE BARREIRAS À EXPORTAÇÃO",
        objectives: [
          {
            title:
              "Monitorar a eficácia do sistema de eliminação e mitigação das medidas restritivas às exportações brasileiras.",
            initiatives: [
              {
                id: "073",
                title:
                  "Criar um núcleo estadual de inteligência comercial e barreiras ao comércio exterior, com apoio de parceiros institucionais.",
              },
              {
                id: "074",
                title:
                  "Implementar um sistema digital integrado com a plataforma do MDIC (Ministério do Desenvolvimento, Indústria, Comércio e Serviços) e do MRE (Ministério das Relações Exteriores), para facilitar o reporte de entraves comerciais pelas empresas locais.",
              },
            ],
          },
        ],
      },

      {
        id: "acord-int",
        label: "4.3 ACORDOS INTERNACIONAIS",
        objectives: [
          {
            title:
              "Ampliar e modernizar a rede brasileira de acordos de livre comércio",
            initiatives: [
              {
                id: "075",
                title:
                  "Criar um programa estadual de capacitação em acordos comerciais internacionais, voltado para empresários, gestores públicos e entidades de classe, com foco na utilização estratégica dos benefícios tarifários e regulatórios previstos nos acordos existentes.",
              },
              {
                id: "076",
                title:
                  "Promover missões comerciais e rodadas de negócios internacionais.",
              },
            ],
          },
        ],
      },

      {
        id: "com-just",
        label: "4.4 COMÉRCIO JUSTO",
        objectives: [
          {
            title:
              "Neutralizar os efeitos na economia brasileira de subsídios ilegais e distorcivos em terceiros mercados.",
            initiatives: [
              {
                id: "077",
                title:
                  "Criar um comitê estadual de defesa da concorrência internacional.",
              },
              {
                id: "078",
                title:
                  "Desenvolver um programa de apoio à competitividade de setores vulneráveis à concorrência desleal.",
              },
            ],
          },
        ],
      },

      {
        id: "inv-ext",
        label: "4.5 INVESTIMENTO EXTERNO",
        objectives: [
          {
            title: "Ampliar a rede brasileira de ACFIs",
            initiatives: [
              {
                id: "079",
                title:
                  "Articular com o governo federal para incluir interesses regionais nos ACFIs (Acordos de Cooperação e Facilitação de Investimentos) em negociação, por meio da participação ativa da Paraíba em fóruns e agendas bilaterais, priorizando setores locais com potencial para atração de investimentos estrangeiros, como energias limpas, turismo sustentável e indústria de base tecnológica.",
              },
              {
                id: "080",
                title:
                  "Criar um centro estadual de apoio ao investidor estrangeiro, responsável por fornecer informações estratégicas, suporte jurídico e institucional, e acompanhamento pós-investimento, alinhado às diretrizes dos ACFIs (Acordos de Cooperação e Facilitação de Investimentos) existentes para garantir segurança e atratividade ao investidor internacional.",
              },
            ],
          },
          {
            title: "Ampliar e modernizar a rede brasileira de ADTs",
            initiatives: [
              {
                id: "081",
                title:
                  "Incentivar uma aliança interfederativa para promoção de novos ADTs (Acordos de Dupla Tributação) com foco em investidores estratégicos.",
              },
              {
                id: "082",
                title:
                  "Criar instrumentos que facilitem a análise da confiabilidade e qualidade de investimentos externos.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dev-humano",
    label: "5 DESENVOLVIMENTO HUMANO E TRABALHO",
    color: "#2E8B57",
    lightColor: "#9ED4B4",
    icon: "👥",
    description:
      "Para a indústria, promover o trabalho e o desenvolvimento humano representa a modernização do setor, estabelecendo um ambiente propício para a atração de investimento, promoção de inovações e para a construção de um futuro sustentável.",

    subitems: [
      {
        id: "rel-trab",
        label: "5.1 RELAÇÕES DE TRABALHO",
        objectives: [
          {
            title: "Continuar a modernização das relações de trabalho",
            initiatives: [
              {
                id: "083",
                title:
                  "Criar um núcleo que divulgue atualizações na legislação trabalhista e oriente as empresas.",
              },
              {
                id: "084",
                title:
                  "Mapear e articular política estadual para harmonização de legislações atuando com parlamentares estaduais e representantes no Congresso Nacional em prol da simplificação da legislação trabalhista e da não proliferação de leis conflitantes nos estados.",
              },
            ],
          },
          {
            title: "Melhorar a relação empregado-empregador",
            initiatives: [
              {
                id: "085",
                title:
                  "Fomentar programas regionais de mediação de conflitos e acordos extrajudiciais criando estruturas no estado que incentivem o uso de câmaras de mediação e arbitragem para reduzir a judicialização trabalhista.",
              },
              {
                id: "086",
                title:
                  "Criar premiação de boas práticas sindicais e de negociação coletiva no âmbito do estado.",
              },
              {
                id: "087",
                title:
                  "Realizar rodadas de encontros entre empresas e sindicatos com apoio técnico das federações para estimular a negociação coletiva e a cultura de consenso.",
              },
            ],
          },
        ],
      },

      {
        id: "saude-seg",
        label: "5.2 SAÚDE E SEGURANÇA",
        objectives: [
          {
            title:
              "Promover a saúde e prevenção de doenças crônicas dos trabalhadores e da população em geral.",
            initiatives: [
              {
                id: "088",
                title:
                  "Mapear o perfil de saúde e segurança dos trabalhadores das indústrias do estado da Paraíba.",
              },
              {
                id: "089",
                title:
                  "Criar núcleos de monitoramento e promoção da saúde do trabalhador com estrutura vinculada ao SESI e à federação para integrar dados ocupacionais, ações de saúde e capacitações normativas, atuando com foco em micro e pequenas empresas.",
              },
            ],
          },
          {
            title: "Promover a segurança e saúde nos ambientes de trabalho",
            initiatives: [
              {
                id: "090",
                title:
                  "Realizar treinamentos customizados e normativos em segurança e saúde no trabalho.",
              },
              {
                id: "091",
                title:
                  "Promover e orientar a gestão eficaz dos dados de Segurança e Saúde no Trabalho (SST), por meio da utilização estratégica de sistemas de indicadores de desempenho em saúde e segurança.",
              },
              {
                id: "092",
                title:
                  "Implementar ações integradas em saúde e segurança, contribuindo com a melhoria do ambiente laboral, tornando os trabalhadores mais saudáveis e produtivos.",
              },
            ],
          },
        ],
      },

      {
        id: "prev",
        label: "5.3 PREVIDÊNCIA",
        objectives: [
          {
            title:
              "Promover a reabilitação profissional e readaptação dos trabalhadores",
            initiatives: [
              {
                id: "093",
                title:
                  "Desenvolver cadastros estaduais integrados de trabalhadores reabilitados e empresas parceiras.",
              },
              {
                id: "094",
                title:
                  "Estimular a recolocação de trabalhadores afastados, por meio da requalificação para novas funções.",
              },
              {
                id: "095",
                title:
                  "Articular com a federação e secretarias estaduais de trabalho um sistema que identifique e acompanhe casos de reinserção no mercado, promovendo o “match” entre trabalhadores e vagas adaptadas.",
              },
            ],
          },
          {
            title: "Melhorar a governança do sistema de afastamentos",
            initiatives: [
              {
                id: "096",
                title:
                  "Capacitar gestores industriais em boas práticas de registro, laudos e comunicação com o INSS.",
              },
            ],
          },
          {
            title:
              "Reduzir a judicialização para concessão de aposentadoria especial",
            initiatives: [
              {
                id: "097",
                title:
                  "Promover assessoramento técnico às empresas sobre LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), PPP (Perfil Profissiográfico Previdenciário) e enquadramento de atividades.",
              },
              {
                id: "098",
                title:
                  "Criar comissões técnicas estaduais para harmonização de interpretações entre fiscalização, empresas e sindicatos.",
              },
            ],
          },
        ],
      },

      {
        id: "div-eq",
        label: "5.4 DIVERSIDADE, EQUIDADE E INCLUSÃO",
        objectives: [
          {
            title:
              "Fomentar o compromisso das empresas com a promoção da diversidade, equidade e inclusão.",
            initiatives: [
              {
                id: "099",
                title:
                  "Oferecer trilhas de capacitação e sensibilização em parceria com o IEL, SESI e universidades locais para gestores industriais de todos os portes.",
              },
              {
                id: "100",
                title:
                  "Promover editais, premiações ou publicações com destaque para indústrias que se destacam em diversidade e inclusão no estado.",
              },
            ],
          },
          {
            title:
              "Fomentar o compromisso das empresas com a promoção da equidade de gênero.",
            initiatives: [
              {
                id: "101",
                title:
                  "Elevar a participação de mulheres em cargos técnicos e de gestão nas indústrias.",
              },
              {
                id: "102",
                title:
                  "Criar programas regionais que conectem lideranças femininas experientes com jovens profissionais e empreendedoras da indústria.",
              },
            ],
          },
          {
            title: "Aumentar a participação de mulheres em áreas STEM",
            initiatives: [
              {
                id: "103",
                title:
                  "Criar programas de bolsas de estudo e iniciação científica para meninas em cursos técnicos e engenharias e ofertar incentivos específicos para meninas em áreas STEM (ciências, tecnologias, engenharias e matemática) desde o ensino médio técnico.",
              },
              {
                id: "104",
                title:
                  "Realizar eventos como hackathons, olimpíadas de robótica e semanas de ciência com foco em alunas da rede SESI/SENAI e escolas públicas.",
              },
              {
                id: "105",
                title:
                  "Conectar alunos de cursos de formação técnica e profissional que sejam de grupos étnicos, atípicos, mulheres, PCDs (pessoas com deficiência) e 50+ com profissionais desses mesmos grupos que sejam atuantes na indústria e pesquisa tecnológica, através de programas de tutoria e inspiração com profissionais atuantes em engenharia, tecnologia da informação, produção industrial e inovação.",
              },
            ],
          },
        ],
      },

      {
        id: "cult-desp",
        label: "5.5 ACESSO À CULTURA E AO DESPORTO",
        objectives: [
          {
            title: "Ampliar o acesso à cultura",
            initiatives: [
              {
                id: "106",
                title:
                  "Valorizar as culturas indígena e quilombola na educação básica, através da capacitação de professores e do desenvolvimento de um kit didático interdisciplinar.",
              },
              {
                id: "107",
                title:
                  "Promover a inclusão digital e o fortalecimento da identidade cultural nordestina por meio da criação de um ambiente educativo e colaborativo, integrando arte, tecnologia e cultura local.",
              },
              {
                id: "108",
                title:
                  "Ampliar e modernizar os recursos tecnológicos e o acervo multimidiático do SESI Museu Digital.",
              },
              {
                id: "109",
                title:
                  "Desenvolver exposições virtuais para o Museu Digital do SESI PB.",
              },
              {
                id: "110",
                title:
                  "Criação de editais de fomento cultural voltados a projetos realizados por ou para trabalhadores da indústria em parceria com leis estaduais de incentivo à cultura, apoiar iniciativas de artistas e coletivos culturais atuantes em territórios industriais.",
              },
            ],
          },
          {
            title: "Ampliar a prática de atividades físicas",
            initiatives: [
              {
                id: "111",
                title:
                  "Estimular a prática de atividades físicas como fator de cuidado para a saúde.",
              },
              {
                id: "112",
                title:
                  "Promover as atividades físicas nas indústrias para criar uma cultura do esporte.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "dev-produtivo",
    label: "6 DESENVOLVIMENTO PRODUTIVO, TECNOLOGIA E INOVAÇÃO",
    color: "#1B3A6B",
    lightColor: "#8AAED8",
    icon: "⚙️",
    description:
      "O direcionamento de esforços públicos e privados em prol do aprimoramento das propostas de iniciativas de Desenvolvimento produtivo, Tecnologia e Inovação tem potencial de fazer crescer a produtividade da economia brasileira, aumentando a competitividade do setor e gerando benefícios socioeconômicos para a indústria e o conjunto da economia brasileira.",

    subitems: [
      {
        id: "dev-prod",
        label: "6.1 DESENVOLVIMENTO PRODUTIVO",
        objectives: [
          {
            title:
              "Conferir protagonismo à indústria no crescimento econômico brasileiro",
            initiatives: [
              {
                id: "113",
                title:
                  "Criar um plano de trabalho estadual de missões industriais alinhado ao CNDI (Conselho Nacional de Desenvolvimento Industrial) no âmbito do NIB (Nova Indústria Brasil).",
              },
              {
                id: "114",
                title:
                  "Desenvolver diagnósticos por microrregiões que identifiquem cidades intermediadoras (conceito IBGE) com potencial industrial, promovendo o adensamento produtivo local.",
              },
              {
                id: "115",
                title:
                  "Incentivar a agregação de valor às cadeias já existentes (como mineração e cerâmica), estimulando investimentos em segmentos de transformação de base local.",
              },
              {
                id: "116",
                title:
                  "Fomentar compras públicas estaduais com preferência a soluções de base local.",
              },
            ],
          },
          {
            title:
              "Desenvolver a cadeia produtiva em setores estratégicos, mais complexos e intensivos em tecnologia.",
            initiatives: [
              {
                id: "117",
                title:
                  "Ampliar a oferta de cursos para setores como tecnologia da informação e comunicação, energias renováveis, máquinas e equipamentos, alimentos e construção civil.",
              },
              {
                id: "118",
                title:
                  "Formalizar acordos de cooperação técnica entre a FIEPB e as unidades EMBRAPII no estado.",
              },
              {
                id: "119",
                title:
                  "Implantar hubs industriais regionais com foco em setores estratégicos locais (ex: têxtil sustentável, agroindústria, energias renováveis, semicondutores) conectando SENAI, universidades e startups.",
              },
              {
                id: "120",
                title:
                  "Criar programas estaduais para inserção de mestres e doutores nas indústrias, com foco em P&D (pesquisa e desenvolvimento) aplicado aos gargalos produtivos.",
              },
              {
                id: "121",
                title:
                  "Criar programas de certificação e apoio a empresas locais que desenvolvam soluções industriais voltadas à saúde.",
              },
            ],
          },
        ],
      },

      {
        id: "cti",
        label: "6.2 CIÊNCIA, TECNOLOGIA E INOVAÇÃO",
        objectives: [
          {
            title: "Aumentar o investimento em inovação",
            initiatives: [
              {
                id: "122",
                title:
                  "Criar incentivos fiscais estaduais para empresas que investirem em pesquisa aplicada, desenvolvimento de produtos, serviços e processos industriais inovadores.",
              },
              {
                id: "123",
                title:
                  "Conceder bolsas para inserção de mestres e doutores em empresas industriais com foco em projetos de P&D (pesquisa e desenvolvimento), conectando academia e setor produtivo.",
              },
              {
                id: "124",
                title:
                  "Monitorar Escolas em iniciativas do Senai + Digital, que visam impulsionar a transformação digital na forma de atuação da Instituição.",
              },
              {
                id: "125",
                title:
                  "Melhorar a infraestrutura tecnológica das unidades educacionais relacionadas à transformação digital, com o objetivo de propiciar suporte da qualidade de mão de obra inerente aos novos serviços da indústria no que tange a 4ª revolução industrial.",
              },
              {
                id: "126",
                title:
                  "Fomentar a inovação por meio do aprimoramento dos projetos desenvolvidos pelos estudantes durante os desafios da SAGA SENAI de Inovação, visando à criação de novos negócios tecnológicos industriais (startups).",
              },
              {
                id: "127",
                title:
                  "Implementar um Plano de Transformação Digital personalizado para cada unidade do SENAI da Paraíba com o intuito de promover cultura digital de acordo com as áreas tecnológicas atendidas por cada uma.",
              },
              {
                id: "128",
                title:
                  "Utilizar a estrutura do SENAI para desenvolvimento de protótipos, testes e validação de tecnologias.",
              },
              {
                id: "129",
                title:
                  "Criar ambiente de inovação aberta para incubação e aceleração de startups industriais paraibanas, com mentoria e apoio técnico.",
              },
              {
                id: "130",
                title:
                  "Ampliar e fortalecer mecanismos de conexões com atores do Ecossistema de Inovação.",
              },
            ],
          },
          {
            title:
              "Aperfeiçoar as políticas e regulamentações públicas de fomento à inovação.",
            initiatives: [
              {
                id: "131",
                title:
                  "Criar ou atualizar a legislação estadual de ciência, tecnologia e inovação para desburocratizar convênios, permitir uso de FAPs (fundos de amparo à pesquisa) em editais contínuos e facilitar PPPs (Parcerias Público-Privadas) em inovação.",
              },
              {
                id: "132",
                title:
                  "Reformular os conselhos estaduais com participação ativa da indústria, ICTs (institutos de ciência e tecnologia), Sebrae e federações, com foco em orientar os investimentos das FAPs (fundos de amparo à pesquisa) e atrair editais federais.",
              },
              {
                id: "133",
                title:
                  "Criar marcos legais estaduais que permitam a instalação de “zonas de inovação” com normas regulatórias mais flexíveis e prioridade para testes tecnológicos em áreas-piloto.",
              },
              {
                id: "134",
                title:
                  "Buscar financiamentos não reembolsáveis para projetos inovadores em empresas e startups.",
              },
              {
                id: "135",
                title:
                  "Criar políticas públicas que ampliem o acesso das pequenas e médias empresas a recursos e programas de inovação.",
              },
              {
                id: "136",
                title:
                  "Promover parceria com INPI (Instituto Nacional de Propriedade Intelectual) para estimular o registro de patentes.",
              },
              {
                id: "137",
                title:
                  "Estimular ações que facilitem a materialização de patentes em produtos reais.",
              },
            ],
          },
        ],
      },

      {
        id: "prod-inov",
        label: "6.3 PRODUTIVIDADE E INOVAÇÃO NAS EMPRESAS",
        objectives: [
          {
            title: "Aumentar a produtividade da indústria brasileira",
            initiatives: [
              {
                id: "138",
                title:
                  "Implementar selo estadual de eficiência produtiva, com benefícios fiscais vinculados à melhoria de indicadores como OEE (eficiência global de equipamentos), produtividade por trabalhador e redução de desperdícios.",
              },
              {
                id: "139",
                title:
                  "Expandir programas como Brasil Mais Produtivo em versão estadual, para diagnosticar e implementar planos de produtividade com acompanhamento técnico.",
              },
              {
                id: "140",
                title:
                  "Ofertar consultorias em lean manufacturing e eficiência energética aplicada às indústrias de micro, pequeno e médio portes da Paraíba, objetivando o aumento de produtividade e maior competitividade da indústria (Brasil Mais Produtivo).",
              },
              {
                id: "141",
                title:
                  "Difundir ferramentas de manufatura enxuta (Lean Manufacturing).",
              },
              {
                id: "142",
                title:
                  "Implementar programa permanente de preparação de alunos para a WorldSkills, com foco em desenvolvimento de competências alinhadas às demandas da indústria local.",
              },
            ],
          },
          {
            title: "Incentivar o registro de patentes",
            initiatives: [
              {
                id: "143",
                title:
                  "Tornar a exigência de pedidos de patente ou proteção de propriedade industrial um critério de pontuação nos editais estaduais de inovação tecnológica.",
              },
              {
                id: "144",
                title:
                  "Disseminar o conhecimento das Iniciativas das legislações ligadas à inovação no âmbito Estadual que envolvem Programa de Patentes, Propriedade Intelectual e Lei do Bem.",
              },
            ],
          },
          {
            title: "Promover a transformação digital na indústria",
            initiatives: [
              {
                id: "145",
                title:
                  "Mapear setores prioritários em cada estado e implementar apoio à adoção de tecnologias como sistema ERP (Enterprise Resource Planning), IoT (internet das coisas), automação e rastreabilidade.",
              },
              {
                id: "146",
                title:
                  "Criar programas com recursos estaduais (via FAPs [fundos de amparo à pesquisa] ou secretarias de desenvolvimento) para financiar aquisição de software e hardware industrial.",
              },
              {
                id: "147",
                title:
                  "Ofertar cursos apresentando conceitos da Indústria 4.0 e em tecnologias habilitadoras em tecnologias digitais, automação, robótica, programação industrial e análise de dados industriais.",
              },
              {
                id: "148",
                title:
                  "Ofertar consultorias às empresas durante a jornada de transformação digital com diagnósticos de maturidade digital, planos de ação e acompanhamento na implementação.",
              },
              {
                id: "149",
                title:
                  "Disseminar dados e serviços de transformação digital com foco em tecnologias da Indústria 4.0, IoT (internet das coisas), automação, manufatura avançada e digital twin.",
              },
            ],
          },
          {
            title:
              "Melhorar a qualidade da gestão empresarial do Brasil, com impactos positivos sobre a qualidade dos produtos.",
            initiatives: [
              {
                id: "150",
                title:
                  "Premiar boas práticas de gestão e melhoria contínua com base em modelos como MEG da FNQ, padrões ISO e indicadores de inovação, produtividade e qualidade.",
              },

              {
                id: "151",
                title:
                  "Criar Programa de aperfeiçoamento na Gestão Industrial, como o foco no aumento da eficiência, melhoria na produtividade e qualidade para a indústria paraibana.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "educacao",
    label: "7 EDUCAÇÃO",
    color: "#3A9E9E",
    lightColor: "#A8DDD9",
    icon: "📚",
    description:
      "A educação, quando alinhada às demandas da indústria, desempenha papel transformador para a modernização e o desenvolvimento industrial brasileiro, impulsionando a competitividade e a produtividade do país.",

    subitems: [
      {
        id: "ed-basica",
        label: "7.1 EDUCAÇÃO BÁSICA",
        objectives: [
          {
            title: "Elevar a qualidade da educação básica",
            initiatives: [
              {
                id: "152",
                title:
                  "Ampliar o uso de laboratórios escolares para práticas interdisciplinares e melhoria da aprendizagem ativa.",
              },
              {
                id: "153",
                title:
                  "Instituir programas de nivelamento escolar, priorizando português e matemática para alunos ingressantes no ensino médio.",
              },
              {
                id: "154",
                title:
                  "Desenvolver ações voltadas à elevação dos níveis de proficiência em exames internos e externos.",
              },
              {
                id: "155",
                title:
                  "Aprimorar as atividades voltadas à Iniciação Científica.",
              },
              {
                id: "156",
                title:
                  "Impulsionar a qualidade e visibilidade da Robótica Educacional.",
              },
            ],
          },
          {
            title: "Elevar a qualidade da gestão escolar",
            initiatives: [
              {
                id: "157",
                title:
                  "Implantar formações continuadas de diretores e coordenadores com base em indicadores de desempenho, observatórios educacionais estaduais e metas pactuadas.",
              },

              {
                id: "158",
                title:
                  "Acompanhar os índices de desenvolvimento da gestão escolar.",
              },
            ],
          },
          {
            title: "Aprimorar a formação inicial e continuada dos professores",
            initiatives: [
              {
                id: "159",
                title:
                  "Desenvolver trilhas formativas modulares, com monitoramento de impacto sobre os indicadores de aprendizagem.",
              },
              {
                id: "160",
                title:
                  "Formalizar o circuito de formações presenciais nas escolas.",
              },
              {
                id: "161",
                title:
                  "Acompanhar os índices de formação continuada dos professores.",
              },
            ],
          },
          {
            title:
              "Ampliar as matrículas na EJA integrada à educação profissional",
            initiatives: [
              {
                id: "162",
                title:
                  "Promover parcerias entre setor privado e secretarias de educação para ampliar a EJA (educação de jovens e adultos) com itinerários técnicos de curta duração, com foco em empregabilidade e certificação profissional.",
              },
            ],
          },
          {
            title: "Melhorar a infraestrutura das escolas de educação básica",
            initiatives: [
              {
                id: "163",
                title:
                  "Mobilizar recursos estaduais e privados para requalificação física e digital das escolas, priorizando espaços maker, laboratórios e ambientes de aprendizagem digital.",
              },
              {
                id: "164",
                title:
                  "Investir na construção e manutenção dos laboratórios escolares.",
              },
              {
                id: "165",
                title:
                  "Acompanhar as necessidades estruturais particulares de cada escola.",
              },
              {
                id: "166",
                title:
                  "Melhorar a quantidade e qualidade de materiais tecnológicos.",
              },
              {
                id: "167",
                title:
                  "Acompanhar e participar dos processos relacionados à criação da Escola SESI de Referência.",
              },
            ],
          },
        ],
      },

      {
        id: "ed-prof",
        label: "7.2 EDUCAÇÃO PROFISSIONAL E SUPERIOR",
        objectives: [
          {
            title:
              "Ampliar as matrículas no itinerário da formação técnica e profissional no ensino médio.",
            initiatives: [
              {
                id: "168",
                title:
                  "Expandir convênios entre Secretarias de Educação e SENAI para ampliar a oferta de cursos técnicos no ensino médio.",
              },
              {
                id: "169",
                title:
                  "Ampliar a oferta de cursos EaD (educação a distância) como forma de garantir a qualidade do curso e expansão das áreas tecnológicas.",
              },
            ],
          },
          {
            title:
              "Ampliar o número de matrículas na educação profissional e tecnológica",
            initiatives: [
              {
                id: "170",
                title:
                  "Fortalecer o financiamento do ensino médio técnico via FUNDEB (Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação), com diretriz nacional de ampliação da oferta pelo setor produtivo, redes municipais e rede estadual.",
              },
              {
                id: "171",
                title:
                  "Construir parcerias com indústrias para ampliação da oferta de turmas alinhadas às demandas do setor produtivo.",
              },
              {
                id: "172",
                title:
                  "Garantir alto nível de conclusão em relação ao total de matrículas nos cursos FIC (Formação Inicial e Continuada) e TEC (Técnico) presencial e EaD (educação a distância).",
              },
              {
                id: "173",
                title:
                  "Ampliar a oferta cursos de Formação Inicial e Continuada por meio de trilhas de conhecimento, visando estabelecer uma capacitação evolutiva no âmbito profissional.",
              },
            ],
          },
          {
            title:
              "Aumentar a participação de alunos em cursos de ciência, tecnologia, engenharia e matemática",
            initiatives: [
              {
                id: "174",
                title:
                  "Desenvolver estratégias de atração de jovens para STEM (ciências, tecnologias, engenharias e matemática) com gamificação, bootcamps e plataformas digitais vinculadas ao setor produtivo local.",
              },
              {
                id: "175",
                title:
                  "Criar mecanismos para ampliar a empregabilidade de egressos dos cursos técnicos no mercado de trabalho.",
              },
            ],
          },
          {
            title: "Aprimorar o nível de educação executiva dos gestores",
            initiatives: [
              {
                id: "176",
                title:
                  "Realizar formações locais com certificação nacional para gestores industriais e sindicais, com apoio de parceiros.",
              },
              {
                id: "177",
                title:
                  "Avaliar o nível de incentivo à capacitação dos gestores.",
              },
            ],
          },
          {
            title:
              "Alinhar a educação profissional e superior às demandas do setor produtivo",
            initiatives: [
              {
                id: "178",
                title:
                  "Adotar mapas regionais do trabalho e painéis de empregabilidade (RAIS/SENAI) para alinhar a oferta formativa aos setores com maior pressão por mão de obra.",
              },
              {
                id: "179",
                title:
                  "Ampliar oferta de cursos ligados às atividades industriais.",
              },
            ],
          },
          {
            title:
              "Ampliar a participação de profissionais de nível técnico e superior (tecnologia e engenharia) na indústria.",
            initiatives: [
              {
                id: "180",
                title:
                  "Aprimorar a infraestrutura e a qualidade dos cursos de Educação Profissional e Superior.",
              },

              {
                id: "181",
                title:
                  "Facilitar o acesso das indústrias à mão de obra capacitada.",
              },
            ],
          },
          {
            title: "Aumentar a taxa de efetivação dos aprendizes na indústria",
            initiatives: [
              {
                id: "182",
                title:
                  "Criar metas setoriais de efetivação com sindicatos industriais e oferecer mentorias para empresas que aderirem ao sistema de formação continuada de aprendizes.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "infraestrutura",
    label: "8 INFRAESTRUTURA",
    color: "#E8A020",
    lightColor: "#F9D898",
    icon: "🏗️",
    description:
      "Fortalecer e expandir a infraestrutura nacional permite que o país crie bases sólidas para catalisar seu progresso, atrair investimentos e alcançar um desenvolvimento pleno e duradouro.",

    subitems: [
      {
        id: "energia",
        label: "8.1 ENERGIA",
        objectives: [
          {
            title:
              "Garantir o fornecimento de energia elétrica a preços competitivos para a indústria",
            initiatives: [
              {
                id: "183",
                title:
                  "Implantar linhas de transmissão exclusivas para polos industriais, como proposto na Paraíba, para viabilizar o uso da energia renovável local.",
              },
              {
                id: "184",
                title:
                  "Criar programas estaduais de eficiência energética industrial com incentivos fiscais.",
              },
              {
                id: "185",
                title:
                  "Estimular a implantação de usinas de energia fotovoltaica no estado.",
              },
              {
                id: "186",
                title:
                  "Expandir as redes de energia trifásica para áreas rurais e polos de mineração possibilitando o incremento à produção.",
              },
            ],
          },
          {
            title:
              "Garantir o fornecimento de gás natural a preços competitivos para a indústria",
            initiatives: [
              {
                id: "187",
                title:
                  "Implantar infraestrutura de gás nos distritos industriais para fornecimento direto com menor custo logístico.",
              },
              {
                id: "188",
                title:
                  "Oferecer incentivos para conversão de caldeiras e processos industriais do uso de lenha para gás natural (via programas estaduais de financiamento).",
              },
              {
                id: "189",
                title:
                  "Implantar o segundo gasoduto de João Pessoa a Campina Grande e expansão até a cidade de Cajazeiras.",
              },
            ],
          },
        ],
      },

      {
        id: "transp-log",
        label: "8.2 TRANSPORTE E LOGÍSTICA",
        objectives: [
          {
            title: "Aumentar os investimentos em infraestrutura de transportes",
            initiatives: [
              {
                id: "190",
                title:
                  "Implantar fundos estaduais com governança compartilhada com o setor industrial para alocar recursos em trechos rodoviários críticos.",
              },
              {
                id: "191",
                title:
                  "Criar ramal da ferrovia Transnordestina no estado da Paraíba.",
              },
            ],
          },
          {
            title: "Modernizar a infraestrutura das rodovias",
            initiatives: [
              {
                id: "192",
                title:
                  "Pavimentar e duplicar rodovias estaduais e federais com maior fluxo de cargas.",
              },
              {
                id: "193",
                title:
                  "Implantar a terceira faixa de rolamento na BR 230 - João Pessoa a Campina Grande.",
              },
            ],
          },
          {
            title: "Modernizar a infraestrutura das ferrovias",
            initiatives: [
              {
                id: "194",
                title:
                  "Fortalecer a retomada e ampliação de trechos ferroviários regionais ociosos ou desativados.",
              },
              {
                id: "195",
                title:
                  "Criar estruturas intermodais em cidades estratégicas para integração ferrovia-porto.",
              },
            ],
          },
          {
            title: "Melhorar a eficiência dos serviços logísticos",
            initiatives: [
              {
                id: "196",
                title:
                  "Criar centros logísticos regionais integrados com zonas industriais.",
              },
              {
                id: "197",
                title:
                  "Utilizar georreferenciamento e big data para gestão eficiente da malha logística.",
              },
              {
                id: "198",
                title:
                  "Ampliar e modernizar os distritos industriais em João Pessoa, Campina Grande, Patos, Sousa, Cajazeiras, Guarabira, Itaporanga e São Bento.",
              },
            ],
          },
        ],
      },

      {
        id: "mob-urb",
        label: "8.3 MOBILIDADE URBANA",
        objectives: [
          {
            title: "Elevar a qualidade da mobilidade urbana – Investimento",
            initiatives: [
              {
                id: "199",
                title:
                  "Ampliar corredores exclusivos de transporte de carga e BRT em áreas industriais (ex: VLT entre cidades da PB).",
              },
              {
                id: "200",
                title:
                  "Incentivar PPPs (Parcerias Público-Privadas) para construção de infraestrutura de recarga elétrica em corredores logísticos.",
              },
              {
                id: "201",
                title:
                  "Implantar o VLT (Veículo Leve Sobre Trilhos) na cidade de Campina Grande.",
              },
            ],
          },
          {
            title: "Elevar a qualidade da mobilidade urbana – Planejamento",
            initiatives: [
              {
                id: "202",
                title:
                  "Estabelecer consórcios regionais para planejamento de mobilidade intermunicipal com foco em distritos industriais.",
              },
              {
                id: "203",
                title:
                  "Integrar planos de mobilidade com planejamentos urbano-industriais.",
              },
            ],
          },
        ],
      },

      {
        id: "saneam",
        label: "8.4 SANEAMENTO",
        objectives: [
          {
            title:
              "Aumentar a participação privada na prestação de serviços de saneamento para garantir os investimentos.",
            initiatives: [
              {
                id: "204",
                title:
                  "Mapear oportunidades de concessão regionalizada com viabilidade técnica e segurança jurídica.",
              },
              {
                id: "205",
                title:
                  "Criar ambiente regulatório estadual favorável e em conformidade com o marco regulatório de saneamento.",
              },
            ],
          },
          {
            title:
              "Universalizar o acesso ao saneamento básico – Oferta de água potável",
            initiatives: [
              {
                id: "206",
                title:
                  "Priorizar investimentos em áreas industriais e polos emergentes para garantir segurança hídrica produtiva.",
              },
            ],
          },
          {
            title:
              "Universalizar o acesso ao saneamento básico – Coleta e tratamento de esgoto",
            initiatives: [
              {
                id: "207",
                title:
                  "Expandir as redes de esgoto e tratamento de resíduos nas áreas industriais.",
              },
            ],
          },
          {
            title:
              "Aumentar qualidade e eficiência na prestação dos serviços de saneamento básico.",
            initiatives: [
              {
                id: "208",
                title:
                  "Implementar sistemas de controle e auditoria pública e privada de desempenho dos serviços de saneamento básico.",
              },
              {
                id: "209",
                title:
                  "Melhorar os indicadores de produtividade e de custo por m³ com base em benchmarking estadual para operadores regionais de saneamento básico.",
              },
              {
                id: "210",
                title:
                  "Acompanhar a implantação do marco legal do saneamento básico propondo uma gestão compartilhada dos entes públicos e as entidades de representação empresarial.",
              },
            ],
          },
        ],
      },

      {
        id: "infra-dig",
        label: "8.5 INFRAESTRUTURA DIGITAL",
        objectives: [
          {
            title: "Aumentar a conectividade e o acesso à internet",
            initiatives: [
              {
                id: "211",
                title:
                  "Universalizar a conectividade em distritos industriais e escolas técnicas (via fibra ou satélite nacional).",
              },
              {
                id: "212",
                title:
                  "Criar programas de inclusão digital industrial para pequenas empresas.",
              },
              {
                id: "213",
                title:
                  "Implantar a internet 5G de qualidade na BR 230 entre João Pessoa e Campina Grande.",
              },
            ],
          },
          {
            title: "Expandir a rede 5G",
            initiatives: [
              {
                id: "214",
                title:
                  "Estabelecer zonas industriais como áreas prioritárias de cobertura 5G.",
              },
              {
                id: "215",
                title:
                  "Simplificar e digitalizar o licenciamento de torres e antenas em regiões industriais.",
              },
              {
                id: "216",
                title:
                  "Implantar o 5G em todas as cidades do estado como ferramenta de universalização da Internet.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const mapStats = {
  factors: 8,
  priorityThemes: 32,
  objectives: 96,
  initiatives: 342,
};

export const paraibaSummary = {
  totalInitiatives: 216,
  breakdown: [
    { factor: "Ambiente de Negócios", initiatives: 23 },
    { factor: "Ambiente Econômico", initiatives: 37 },
    { factor: "Baixo Carbono e Recursos Naturais", initiatives: 26 },
    { factor: "Comércio e Integração Internacional", initiatives: 16 },
    { factor: "Desenvolvimento Humano e Trabalho", initiatives: 30 },
    {
      factor: "Desenvolvimento Produtivo, Tecnologia e Inovação",
      initiatives: 45,
    },
    { factor: "Educação", initiatives: 33 },
    { factor: "Infraestrutura", initiatives: 37 },
  ],
};

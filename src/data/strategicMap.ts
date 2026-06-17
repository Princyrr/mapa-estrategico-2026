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
    color: "#6B7280",
    lightColor: "#D1D5DB",
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
                title:
                  "Aperfeiçoar procedimentos administrativos no ambiente regulatório",
              },
              {
                id: "002",
                title:
                  "Diminuir ambiguidades de interpretação em leis, normas e regulamentações",
              },
              {
                id: "003",
                title: "Implantar padronização em exigências municipais",
              },
              {
                id: "004",
                title:
                  "Criar a “Casa do Empreendedor Industrial” centralizando licenciamentos, registros e acesso a incentivos.",
              },
              {
                id: "005",
                title:
                  "Criar câmara de arbitragem para resolução de contenciosos envolvendo empresas do estado.",
              },
            ],
          },
          {
            title: "Aperfeiçoar os procedimentos administrativos",
            initiatives: [
              {
                id: "006",
                title:
                  "Corrigir inconsistências na aplicação de benefícios fiscais e regimes especiais",
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
                id: "007",
                title:
                  "Firmar acordos entre o judiciário estadual e o setor produtivo para garantir estabilidade contratual e reduzir inseguranças jurídicas.",
              },
            ],
          },
          {
            title:
              "Aumentar a efetividade dos mecanismos alternativos de resolução de conflitos",
            initiatives: [
              {
                id: "008",
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
                id: "009",
                title:
                  "Aprimorar práticas de governança corporativa e pública para elevar a eficiência, integridade e transparência na gestão de instituições e empresas.",
              },
            ],
          },
          {
            title: "Ampliar a transparência do poder público",
            initiatives: [
              {
                id: "010",
                title:
                  "Ampliar atuação institucional da federação para facilitar a criação de modelos de governança e de compliance adaptados à realidade local e setorial, com capacitação e suporte técnico.",
              },
              {
                id: "011",
                title:
                  "Construir o Balcão Único Digital para Indústrias para assessorar as áreas de compliance das indústrias.",
              },
            ],
          },
          {
            title:
              "Aperfeiçoar a governança corporativa e o sistema de compliance no setor privado",
            initiatives: [
              {
                id: "012",
                title:
                  "Implementar sistema online integrado para monitorar processos de incentivos fiscais, alvarás e licenciamentos, permitindo acompanhamento em tempo real.",
              },
            ],
          },
          {
            title: "Fortalecer e melhorar os mecanismos de combate à corrupção",
            initiatives: [
              {
                id: "013",
                title:
                  "Criar conselhos regionais de desenvolvimento industrial com participação de empresários, sindicatos, universidades e governo estadual, garantindo diálogo contínuo e acompanhamento das políticas públicas para o setor.",
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
                id: "014",
                title:
                  "Implantar um balcão único digital para registro e regularização de indústrias, conectando prefeituras, Receita Estadual e órgãos ambientais.",
              },
            ],
          },
          {
            title: "Apoiar o avanço da estratégia de governo digital",
            initiatives: [
              {
                id: "015",
                title:
                  "Adotar linguagem clara, intuitiva e dados atualizados para serviços empresariais em portais públicos.",
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
                id: "016",
                title:
                  "Fortalecer a presença das forças de segurança com foco preventivo.",
              },
              {
                id: "017",
                title:
                  "Ampliar a articulação entre entes municipais, estaduais e federal relacionada a licenciamentos (ambiental, urbanístico, uso/ocupação do solo), planejamento urbano e política de segurança pública.",
              },
            ],
          },
          {
            title: "Reduzir o número de roubos de carga",
            initiatives: [
              {
                id: "018",
                title:
                  "Instalar pontos avançados de vigilância integrada em regiões com maior incidência de crimes logísticos.",
              },
              {
                id: "019",
                title:
                  "Criar protocolos de resposta rápida entre transportadoras, polícias e federações.",
              },
              {
                id: "020",
                title:
                  "Desenvolver um plano logístico com uma visão estratégica do Estado em articular crescimento industrial com infraestrutura segura.",
              },
              {
                id: "021",
                title:
                  "Criar um planejamento logístico de atuação coordenada entre federação, estado e municípios para diminuir a fragilidade da segurança nas rotas, especialmente em áreas de extração mineral, agronegócio e indústrias isoladas.",
              },
            ],
          },
          {
            title: "Aumentar a cibersegurança no Brasil",
            initiatives: [
              {
                id: "022",
                title:
                  "Avançar na digitalização com protocolos mínimos de cibersegurança em sistemas públicos para eliminar a vulnerabilidade a ataques, sequestros de dados.",
              },
            ],
          },
          {
            title: "Aumentar a capacidade de defesa nacional",
            initiatives: [
              {
                id: "023",
                title:
                  "Ampliar a articulação entre órgãos civis e militares para reduzir exploração ilegal, criminalidade organizada e perda de controle sobre cadeias produtivas estratégicas.",
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
                id: "024",
                title:
                  "Estabelecer metas de geração de empregos vinculadas a incentivos.",
              },
              {
                id: "025",
                title:
                  "Ampliar a instalação de indústrias de transformação em municípios com alto desemprego.",
              },
              {
                id: "026",
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
                id: "027",
                title:
                  "Criar uma política estadual de financiamento produtivo com taxas bonificadas para investimentos que expandam a oferta de bens essenciais (ex: agroindustrialização, produção de insumos da construção civil, energia renovável).",
              },
              {
                id: "028",
                title:
                  "Identificar gargalos de oferta que elevam os custos ao consumidor final.",
              },
              {
                id: "029",
                title:
                  "Priorizar incentivos para cadeias que apresentam dinâmica inovativa e maior agregação de valor.",
              },
              {
                id: "030",
                title:
                  "Conectar o fundo estadual de desenvolvimento com metas de descarbonização, eficiência energética e aderência à NIB.",
              },
            ],
          },
          {
            title: "Alcançar sustentabilidade fiscal",
            initiatives: [
              {
                id: "031",
                title:
                  "Finalizar a reforma administrativa estadual com foco em eficiência e digitalização de serviços públicos.",
              },
              {
                id: "032",
                title:
                  "Criar um fundo estadual de estabilização e investimento com foco no aumento da produtividade e eficiência fiscal.",
              },
              {
                id: "033",
                title:
                  "Implantar um programa de reestruturação administrativa, com foco na digitalização de processos, redução de gastos com estruturas obsoletas e modernização da gestão de pessoal.",
              },
              {
                id: "034",
                title:
                  "Adotar metas de desempenho e produtividade nos órgãos estaduais, vinculadas a repasses ou gratificações.",
              },
            ],
          },
          {
            title: "Aumentar investimentos públicos e privados",
            initiatives: [
              {
                id: "035",
                title:
                  "Criar agência estadual de fomento e de financiamento dedicado ao setor industrial do estado visando a modernização do setor e o estímulo ao aumento da competitividade das empresas.",
              },
              {
                id: "036",
                title:
                  "Criar linha de financiamento estadual (ou parceria com FINEP/BNDES) voltada para a modernização produtiva, eficiência energética (solar, biomassa) e melhoria da logística interna e externa das indústrias.",
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
                id: "037",
                title:
                  "Criar um escritório de apoio técnico em projetos para captação de recursos com juros subsidiados junto a agências de fomento nacionais e internacionais.",
              },
              {
                id: "038",
                title:
                  "Criar um fundo estadual que subsidie os juros de financiamentos contratados por empresas dos setores industriais prioritários, por meio de convênios com bancos públicos.",
              },
            ],
          },
          {
            title: "Aumentar a disponibilidade e a oferta de crédito bancário.",
            initiatives: [
              {
                id: "039",
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
                id: "040",
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
                id: "041",
                title:
                  "Desenvolver um estudo do impacto direto e indireto dos investimentos financiados pelo BNDES e pelo BN na renda do Nordeste e da Paraíba.",
              },
              {
                id: "042",
                title:
                  "Fortalecer as cooperativas de crédito com foco no setor industrial.",
              },
              {
                id: "043",
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
                id: "044",
                title:
                  "Atuar politicamente para que os representantes da Paraíba no CONDEL (Conselho Deliberativo) da SUDENE defendam o aumento do percentual dos recursos do FNE (Fundo Constitucional de Financiamento do Nordeste) destinado a atividades industriais, com critérios claros de impacto econômico e geração de empregos.",
              },
              {
                id: "045",
                title: "Apoiar o fortalecimento institucional da SUDENE.",
              },
              {
                id: "046",
                title:
                  "Estabelecer com o BNB (Banco do Nordeste) linhas de crédito específicas para indústrias paraibanas com recursos do FNE (Fundo Constitucional de Financiamento do Nordeste), estruturadas com apoio técnico da FIEPB e integradas ao plano industrial do estado.",
              },
              {
                id: "047",
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
                id: "048",
                title:
                  "Adaptar o FAIN/PB (Fundo de Apoio ao Desenvolvimento Industrial da Paraíba) ao contexto da nova política industrial NIB (Nova Indústria Brasil), vinculando os benefícios fiscais à transformação digital e transição energética.",
              },
              {
                id: "049",
                title:
                  "Orientar indústrias locais sobre os impactos e ajustes necessários na transição para o novo modelo de tributação sobre bens e serviços (IVA dual com IBS e CBS).",
              },
              {
                id: "050",
                title:
                  "Criar simulador de carga tributária para uso pelas indústrias.",
              },
              {
                id: "051",
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
                id: "052",
                title:
                  "Articular, no âmbito da regulamentação do IBS (Imposto sobre Bens e Serviços), uma alíquota diferenciada (reduzida) para segmentos industriais estratégicos da Paraíba, como alimentos e bebidas, têxtil, calçados e energias renováveis, com base na capacidade de geração de empregos e valor agregado.",
              },
              {
                id: "053",
                title:
                  "Criar um programa estadual de incentivos tributários inteligentes.",
              },
            ],
          },
          {
            title: "Reduzir a tributação da renda corporativa.",
            initiatives: [
              {
                id: "054",
                title:
                  "Mobilizar a bancada paraibana no Congresso Nacional para apoiar uma reforma do IPJ (Imposto de Renda da Pessoa Jurídica) e da CSLL (Contribuição Social sobre o Lucro Líquido), com redução de alíquotas nominais e ampliação da base tributável de forma neutra.",
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
                id: "055",
                title:
                  "Estimular e apoiar a interiorização do desenvolvimento industrial.",
              },
              {
                id: "056",
                title: "Criar programa de redução de desigualdades regionais.",
              },
              {
                id: "057",
                title:
                  "Ampliar o apoio técnico, tributário e de crédito a APLs (arranjos produtivos locais) industriais no semiárido, como cerâmica, confecção, calçados e alimentos, com assistência gerencial, acesso a crédito simplificado e inovação incremental.",
              },
              {
                id: "058",
                title:
                  "Desenvolver um polo de indústrias de alta tecnologia na cidade de Campina Grande.",
              },
              {
                id: "059",
                title:
                  "Constituir as cidades de Campina Grande, Patos, Cajazeiras e Sousa como “cidades intermediadoras” do desenvolvimento industrial.",
              },
              {
                id: "060",
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
    color: "#6B9BC3",
    lightColor: "#C3DCF0",
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
                id: "061",
                title:
                  "Fomentar a bioeconomia com inovação e sustentabilidade.",
              },
              {
                id: "062",
                title:
                  "Estimular o surgimento de cadeias de valor que integrem conservação ambiental e geração de renda local.",
              },
              {
                id: "063",
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
                id: "064",
                title:
                  "Elaborar o plano de recursos hídricos da bacia do Rio Paraíba.",
              },
              {
                id: "065",
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
                id: "066",
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
                id: "067",
                title:
                  "Criar uma rede estadual que integre federação da indústria, SENAI, observatórios e centros de inovação para medir a pegada de carbono das indústrias locais.",
              },
              {
                id: "068",
                title:
                  "Identificar os principais vetores de emissões em setores industriais.",
              },
              {
                id: "069",
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
                id: "070",
                title:
                  "Ampliar o uso de fontes renováveis de energia na indústria.",
              },
            ],
          },
          {
            title: "Aumentar os índices de eficiência energética na indústria",
            initiatives: [
              {
                id: "071",
                title:
                  "Aumentar os índices de eficiência energética na indústria.",
              },
              {
                id: "072",
                title:
                  "Ampliar políticas públicas de instalação de linhas de transmissão robustas.",
              },
            ],
          },
          {
            title: "Ampliar o uso de fontes renováveis de energia na indústria",
            initiatives: [
              {
                id: "073",
                title:
                  "Mapear a escala de produção de resíduos orgânicos e vegetais com potencial de geração de biogás/energia elétrica em pequenas usinas.",
              },
              {
                id: "074",
                title:
                  "Identificar as regiões do estado com potencial para o uso de pequenas usinas de biogás para produção de energia elétrica em comunidades rurais.",
              },
              {
                id: "075",
                title:
                  "Ampliar políticas de uso de pequenos geradores de eletricidade a biogás.",
              },
              {
                id: "076",
                title:
                  "Promover o uso de pequenas usinas de biogás para produção de energia elétrica em comunidades rurais.",
              },
              {
                id: "077",
                title:
                  "Criar um polo de hidrogênio de baixo carbono na Paraíba.",
              },
              {
                id: "078",
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
                id: "079",
                title:
                  "Criar uma rede de inteligência e sustentabilidade para a indústria da Paraíba.",
              },
              {
                id: "080",
                title:
                  "Promover a implantação e o desenvolvimento de cadeias industriais que utilizem resíduos.",
              },
            ],
          },
          {
            title: "Aumentar a recuperação de resíduos como recursos de valor",
            initiatives: [
              {
                id: "081",
                title: "Mapear o mercado de reuso de resíduos na Paraíba.",
              },
              {
                id: "082",
                title:
                  "Mapear as empresas e associações de coleta de resíduos.",
              },
            ],
          },
          {
            title:
              "Universalizar a disposição adequada de resíduos sólidos não recuperáveis",
            initiatives: [
              {
                id: "083",
                title:
                  "Incentivar a criação de consórcios intermunicipais com aterros industriais regionalizados.",
              },
              {
                id: "084",
                title:
                  "Incentivar acordos setoriais de logística reversa avançada para reduzir a geração de rejeitos",
              },
              {
                id: "085",
                title:
                  "Integrar gestão de resíduos industriais e urbanos em consórcios municipais.",
              },
              {
                id: "086",
                title:
                  "Promover a diminuição de intermediários dentro da cadeia da reciclagem.",
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
                id: "087",
                title:
                  "Implantar os 5 serviços de apoio às empresas contidos na Mega Trilha de Exportação da APEX Brasil no CIN (Centro Internacional de Negócios) da FIEPB.",
              },
              {
                id: "088",
                title:
                  "Ampliar o programa de QualiExporta PBsF (Qualificação Para Exportação - Paraíba Sem Fronteiras).",
              },
              {
                id: "089",
                title:
                  "Atrair empresas de base tecnológica voltadas para exportação.",
              },
            ],
          },
          {
            title: "Ampliar o crédito à exportação",
            initiatives: [
              {
                id: "090",
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
                id: "091",
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
                id: "092",
                title:
                  "Criar um núcleo estadual de inteligência comercial e barreiras ao comércio exterior, com apoio de parceiros institucionais.",
              },
              {
                id: "093",
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
                id: "094",
                title:
                  "Criar um programa estadual de capacitação em acordos comerciais internacionais, voltado para empresários, gestores públicos e entidades de classe, com foco na utilização estratégica dos benefícios tarifários e regulatórios previstos nos acordos existentes.",
              },
              {
                id: "095",
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
                id: "096",
                title:
                  "Criar comitê estadual de defesa da concorrência internacional.",
              },
              {
                id: "097",
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
                id: "098",
                title:
                  "Articular com o governo federal para incluir interesses regionais nos ACFIs (Acordos de Cooperação e Facilitação de Investimentos) em negociação, por meio da participação ativa da Paraíba em fóruns e agendas bilaterais, priorizando setores locais com potencial para atração de investimentos estrangeiros, como energias limpas, turismo sustentável e indústria de base tecnológica.",
              },
              {
                id: "099",
                title:
                  "Criar um centro estadual de apoio ao investidor estrangeiro, responsável por fornecer informações estratégicas, suporte jurídico e institucional, e acompanhamento pós-investimento, alinhado às diretrizes dos ACFIs (Acordos de Cooperação e Facilitação de Investimentos) existentes para garantir segurança e atratividade ao investidor internacional.",
              },
            ],
          },
          {
            title: "Ampliar e modernizar a rede brasileira de ADTs",
            initiatives: [
              {
                id: "100",
                title:
                  "Criar núcleos estaduais de inteligência fiscal internacional.",
              },
              {
                id: "101",
                title:
                  "Incentivar uma aliança interfederativa para promoção de novos ADTs (Acordos de Dupla Tributação) com foco em investidores estratégicos.",
              },
              {
                id: "102",
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
                id: "103",
                title:
                  "Criar um núcleo que divulgue atualizações na legislação trabalhista e oriente as empresas.",
              },
              {
                id: "104",
                title:
                  "Mapear e articular política estadual para harmonização de legislações atuando com parlamentares estaduais e representantes no Congresso Nacional em prol da simplificação da legislação trabalhista e da não proliferação de leis conflitantes nos estados.",
              },
            ],
          },
          {
            title: "Melhorar a relação empregado-empregador",
            initiatives: [
              {
                id: "105",
                title:
                  "Fomentar programas regionais de mediação de conflitos e acordos extrajudiciais criando estruturas no estado que incentivem o uso de câmaras de mediação e arbitragem para reduzir a judicialização trabalhista.",
              },
              {
                id: "106",
                title:
                  "Criar premiação de boas práticas sindicais e de negociação coletiva no âmbito do estado.",
              },
              {
                id: "107",
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
                id: "108",
                title:
                  "Mapear o perfil de saúde e segurança dos trabalhadores das indústrias do estado da Paraíba.",
              },
              {
                id: "109",
                title:
                  "Criar núcleos de monitoramento e promoção da saúde do trabalhador com estrutura vinculada ao SESI e à federação para integrar dados ocupacionais, ações de saúde e capacitação normativas, atuando com foco em micro e pequenas empresas.",
              },
            ],
          },
          {
            title: "Promover a segurança e saúde nos ambientes de trabalho",
            initiatives: [
              {
                id: "110",
                title:
                  "Realizar treinamentos customizados e normativos em segurança e saúde no trabalho.",
              },
              {
                id: "111",
                title:
                  "Promover e orientar a gestão eficaz dos dados de Segurança e Saúde no Trabalho (SST), por meio da utilização estratégica de sistemas de indicadores de desempenho em saúde e segurança.",
              },
              {
                id: "112",
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
                id: "113",
                title:
                  "Desenvolver cadastros estaduais integrados de trabalhadores reabilitados e empresas parceiras.",
              },
              {
                id: "114",
                title:
                  "Estimular a recolocação de trabalhadores afastados, por meio da requalificação para novas funções.",
              },
              {
                id: "115",
                title:
                  "Articular com a federação e secretarias estaduais de trabalho um sistema que identifique e acompanhe casos de reinserção no mercado, promovendo o “match” entre trabalhadores e vagas adaptadas.",
              },
            ],
          },
          {
            title: "Melhorar a governança do sistema de afastamentos",
            initiatives: [
              {
                id: "116",
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
                id: "117",
                title:
                  "Promover assessoramento técnico às empresas sobre LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), PPP (Perfil Profissiográfico Previdenciário) e enquadramento de atividades.",
              },
              {
                id: "118",
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
                id: "119",
                title:
                  "Oferecer trilhas de capacitação e sensibilização em parceria com o IEL, SESI e universidades locais para gestores industriais de todos os portes.",
              },
              {
                id: "120",
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
                id: "121",
                title:
                  "Elevar a participação de mulheres em cargos técnicos e de gestão nas indústrias.",
              },
              {
                id: "122",
                title:
                  "Criar programas regionais que conectem lideranças femininas experientes com jovens profissionais e empreendedoras da indústria.",
              },
            ],
          },
          {
            title: "Aumentar a participação de mulheres em áreas STEM",
            initiatives: [
              {
                id: "123",
                title:
                  "Criar programas de bolsas de estudo e iniciação científica para meninas em cursos técnicos e engenharias e ofertar incentivos específicos para meninas em áreas STEM (ciências, tecnologias, engenharias e matemática) desde o ensino médio técnico.",
              },
              {
                id: "124",
                title:
                  "Realizar eventos como hackathons, olimpíadas de robótica e semanas de ciência com foco em alunas da rede SESI/SENAI e escolas públicas.",
              },
              {
                id: "125",
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
                id: "126",
                title:
                  "Valorizar as culturas indígena e quilombola na educação básica, através da capacitação de professores e do desenvolvimento de um kit didático interdisciplinar.",
              },
              {
                id: "127",
                title:
                  "Promover a inclusão digital e o fortalecimento da identidade cultural nordestina por meio da criação de um ambiente educativo e colaborativo, integrando arte, tecnologia e cultura local.",
              },
              {
                id: "128",
                title:
                  "Ampliar e modernizar os recursos tecnológicos e o acervo multimidiático do SESI Museu Digital.",
              },
              {
                id: "129",
                title:
                  "Desenvolver exposições virtuais para o Museu Digital do SESI PB.",
              },
              {
                id: "130",
                title:
                  "Criação de editais de fomento cultural voltados a projetos realizados por ou para trabalhadores da indústria em parceria com leis estaduais de incentivo à cultura, apoiar iniciativas de artistas e coletivos culturais atuantes em territórios industriais.",
              },
            ],
          },
          {
            title: "Ampliar a prática de atividades físicas",
            initiatives: [
              {
                id: "131",
                title:
                  "Estimular a prática de atividades físicas como fator de cuidado para a saúde.",
              },
              {
                id: "132",
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
                id: "133",
                title:
                  "Criar um plano de trabalho estadual de missões industriais alinhado ao CNDI (Conselho Nacional de Desenvolvimento Industrial) no âmbito do NIB (Nova Indústria Brasil).",
              },
              {
                id: "134",
                title:
                  "Desenvolver diagnósticos por microrregiões que identifiquem cidades intermediadoras (conceito IBGE) com potencial industrial, promovendo o adensamento produtivo local.",
              },
              {
                id: "135",
                title:
                  "Incentivar a agregação de valor às cadeias já existentes (como mineração e cerâmica), estimulando investimentos em segmentos de transformação de base local.",
              },
              {
                id: "136",
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
                id: "137",
                title:
                  "Ampliar a oferta de cursos para setores como tecnologia da informação e comunicação, energias renováveis, máquinas e equipamentos, alimentos e construção civil.",
              },
              {
                id: "138",
                title:
                  "Formalizar acordos de cooperação técnica entre a FIEPB e as unidades EMBRAPII no estado.",
              },
              {
                id: "139",
                title:
                  "Implantar hubs industriais regionais com foco em setores estratégicos locais (ex: têxtil sustentável, agroindústria, energias renováveis, semicondutores) conectando SENAI, universidades e startups.",
              },
              {
                id: "140",
                title:
                  "Criar programas estaduais para inserção de mestres e doutores nas indústrias, com foco em P&D (pesquisa e desenvolvimento) aplicado aos gargalos produtivos.",
              },
              {
                id: "141",
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
                id: "142",
                title:
                  "Criar incentivos fiscais estaduais para empresas que investirem em pesquisa aplicada, desenvolvimento de produtos, serviços e processos industriais inovadores.",
              },
              {
                id: "143",
                title:
                  "Conceder bolsas para inserção de mestres e doutores em empresas industriais com foco em projetos de P&D (pesquisa e desenvolvimento), conectando academia e setor produtivo.",
              },
              {
                id: "144",
                title:
                  "Monitorar Escolas em iniciativas do Senai + Digital, que visam impulsionar a transformação digital na forma de atuação da Instituição.",
              },
              {
                id: "145",
                title:
                  "Melhorar a infraestrutura tecnológica das unidades educacionais relacionadas à transformação digital, com o objetivo de propiciar suporte da qualidade de mão-de-obra inerente aos novos serviços da indústria no que tange a 4a revolução industrial.",
              },
              {
                id: "146",
                title:
                  "Fomentar a inovação por meio do aprimoramento dos projetos desenvolvidos pelos estudantes durante os desafios da SAGA SENAI de Inovação, visando a criação de novos negócios tecnológicos industriais (startups).",
              },
              {
                id: "147",
                title:
                  "Implementar um Plano de Transformação Digital personalizado para cada unidade do SENAI da Paraíba com o intuito de promover cultura digital de acordo com as áreas tecnológicas atendidas por cada uma.",
              },
              {
                id: "148",
                title:
                  "Utilizar a estrutura do SENAI para desenvolvimento de protótipos, testes e validação de tecnologias.",
              },
              {
                id: "149",
                title:
                  "Criar ambiente de inovação aberta para incubação e aceleração de startups industriais paraibanas, com mentoria e apoio técnico.",
              },
              {
                id: "150",
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
                id: "151",
                title:
                  "Criar ou atualizar a legislação estadual de ciência, tecnologia e inovação para desburocratizar convênios, permitir uso de FAPs (fundos de amparo à pesquisa) em editais contínuos e facilitar PPPs (Parcerias Público-Privadas) em inovação.",
              },
              {
                id: "152",
                title:
                  "Reformular os conselhos estaduais com participação ativa da indústria, ICTs (institutos de ciência e tecnologia), Sebrae e federações, com foco em orientar os investimentos das FAPs (fundos de amparo à pesquisa) e atrair editais federais.",
              },
              {
                id: "153",
                title:
                  "Criar marcos legais estaduais que permitam a instalação de “zonas de inovação” com normas regulatórias mais flexíveis e prioridade para testes tecnológicos em áreas-piloto.",
              },
              {
                id: "154",
                title:
                  "Buscar financiamentos não reembolsáveis para projetos inovadores em empresas e startups.",
              },
              {
                id: "155",
                title:
                  "Criar políticas públicas que ampliem o acesso das pequenas e médias empresas a recursos e programas de inovação.",
              },
              {
                id: "156",
                title:
                  "Promover parceria com INPI (Instituto Nacional de Propriedade Intelectual) para estimular o registro de patentes.",
              },
              {
                id: "157",
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
                id: "158",
                title:
                  "Criar polos regionais com foco no aumento da produtividade por meio de capacitação, benchmarking e acesso conjunto a tecnologias produtivas básicas.",
              },
              {
                id: "159",
                title:
                  "Implementar selo estadual de eficiência produtiva, com benefícios fiscais vinculados à melhoria de indicadores como OEE (eficiência global de equipamentos), produtividade por trabalhador e redução de desperdícios.",
              },
              {
                id: "160",
                title:
                  "Expandir programas como Brasil Mais Produtivo em versão estadual, para diagnosticar e implementar planos de produtividade com acompanhamento técnico.",
              },
              {
                id: "161",
                title:
                  "Ofertar consultorias em lean manufacturing e eficiência energética aplicada às indústrias de micro, pequeno e médio portes da Paraíba, objetivando o aumento de produtividade e maior competitividade da indústria (Brasil Mais Produtivo).",
              },
              {
                id: "162",
                title:
                  "Difundir ferramentas de manufatura enxuta (Lean Manufacturing).",
              },
              {
                id: "163",
                title:
                  "Implementar programa permanente de preparação de alunos para a WorldSkills, com foco em desenvolvimento de competências alinhadas às demandas da indústria local.",
              },
              {
                id: "164",
                title:
                  "Fortalecer o acesso a fomento de subvenção econômica pela Plataforma Inovação para a Indústria.",
              },
            ],
          },
          {
            title: "Incentivar o registro de patentes",
            initiatives: [
              {
                id: "165",
                title:
                  "Tornar a exigência de pedidos de patente ou proteção de propriedade industrial um critério de pontuação nos editais estaduais de inovação tecnológica.",
              },
              {
                id: "166",
                title:
                  "Disseminar o conhecimento das Iniciativas das legislações ligadas à inovação no âmbito Estadual que envolvem Programa de Patentes, Propriedade Intelectual e Lei do Bem.",
              },
            ],
          },
          {
            title: "Promover a transformação digital na indústria",
            initiatives: [
              {
                id: "167",
                title:
                  "Mapear setores prioritários em cada estado e implementar apoio à adoção de tecnologias como sistema ERP (Enterprise Resource Planning), IoT (internet das coisas), automação e rastreabilidade.",
              },
              {
                id: "168",
                title:
                  "Criar programas com recursos estaduais (via FAPs [fundos de amparo à pesquisa] ou secretarias de desenvolvimento) para financiar aquisição de software e hardware industrial.",
              },
              {
                id: "169",
                title:
                  "Ofertar cursos apresentando conceitos da Indústria 4.0 e em tecnologias habilitadoras em tecnologias digitais, automação, robótica, programação industrial e análise de dados industriais.",
              },
              {
                id: "170",
                title:
                  "Ofertar consultorias às empresas durante a jornada de transformação digital com diagnósticos de maturidade digital, planos de ação e acompanhamento na implementação.",
              },
              {
                id: "171",
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
                id: "172",
                title:
                  "Premiar boas práticas de gestão e melhoria contínua com base em modelos como MEG da FNQ, padrões ISO e indicadores de inovação, produtividade e qualidade.",
              },
              {
                id: "173",
                title:
                  "Atuar com núcleos regionais itinerantes oferecendo consultoria combinada em gestão, inovação e melhoria de produto, voltada especialmente para micro e pequenas indústrias.",
              },
              {
                id: "174",
                title:
                  "Criar Programa de aperfeiçoamento na Gestão Industrial, como foco no aumento da eficiência, melhoria na produtividade e qualidade para a indústria paraibana.",
              },
              {
                id: "175",
                title:
                  "Ofertar testes e certificação de produtos para melhorar a qualidade da gestão empresarial do Brasil, com impactos positivos sobre a qualidade dos produtos.",
              },
              {
                id: "176",
                title:
                  "Criar programa de excelência em gestão para melhorar a qualidade da gestão empresarial no estado, com impactos positivos sobre a qualidade dos produtos.",
              },
              {
                id: "177",
                title:
                  "Estimular a adoção de softwares regulares e desestimular o uso de softwares ilegais nas indústrias.",
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
                id: "178",
                title:
                  "Ampliar o uso de laboratórios escolares para práticas interdisciplinares e melhoria da aprendizagem ativa.",
              },
              {
                id: "179",
                title:
                  "Instituir programas de nivelamento escolar, priorizando português e matemática para alunos ingressantes no ensino médio.",
              },
              {
                id: "180",
                title:
                  "Desenvolver ações voltadas à elevação dos níveis de proficiência em exames internos e externos.",
              },
              {
                id: "181",
                title:
                  "Aprimorar as atividades voltadas à Iniciação Científica.",
              },
              {
                id: "182",
                title:
                  "Impulsionar a qualidade e visibilidade da Robótica Educacional.",
              },
            ],
          },
          {
            title: "Elevar a qualidade da gestão escolar",
            initiatives: [
              {
                id: "183",
                title:
                  "Implantar formações continuadas de diretores e coordenadores com base em indicadores de desempenho, observatórios educacionais estaduais e metas pactuadas.",
              },
              {
                id: "184",
                title:
                  "Potencializar a formação continuada dos gestores escolares.",
              },
              {
                id: "185",
                title:
                  "Acompanhar os índices de desenvolvimento da gestão escolar.",
              },
            ],
          },
          {
            title: "Aprimorar a formação inicial e continuada dos professores",
            initiatives: [
              {
                id: "186",
                title:
                  "Desenvolver trilhas formativas modulares, com monitoramento de impacto sobre os indicadores de aprendizagem.",
              },
              {
                id: "187",
                title:
                  "Formalizar o circuito de formações presenciais nas escolas.",
              },
              {
                id: "188",
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
                id: "189",
                title:
                  "Promover parcerias entre setor privado e secretarias de educação para ampliar a EJA (educação de jovens e adultos) com itinerários técnicos de curta duração, com foco em empregabilidade e certificação profissional.",
              },
            ],
          },
          {
            title: "Melhorar a infraestrutura das escolas de educação básica",
            initiatives: [
              {
                id: "190",
                title:
                  "Mobilizar recursos estaduais e privados para requalificação física e digital das escolas, priorizando espaços maker, laboratórios e ambientes de aprendizagem digital.",
              },
              {
                id: "191",
                title:
                  "Investir na construção e manutenção dos laboratórios escolares.",
              },
              {
                id: "192",
                title:
                  "Acompanhar as necessidades estruturais particulares de cada escola.",
              },
              {
                id: "193",
                title:
                  "Melhorar a quantidade e qualidade de materiais tecnológicos.",
              },
              {
                id: "194",
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
                id: "195",
                title:
                  "Expandir convênios entre Secretarias de Educação e SENAI para ampliar a oferta de cursos técnicos no ensino médio.",
              },
              {
                id: "196",
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
                id: "197",
                title:
                  "Fortalecer o financiamento do ensino médio técnico via FUNDEB (Fundo de Manutenção e Desenvolvimento da Educação Básica e de Valorização dos Profissionais da Educação), com diretriz nacional de ampliação da oferta pelo setor produtivo, redes municipais e rede estadual.",
              },
              {
                id: "198",
                title:
                  "Construir parcerias com indústrias para ampliação da oferta de turmas alinhadas às demandas do setor produtivo.",
              },
              {
                id: "199",
                title:
                  "Garantir alto nível de conclusão em relação ao total de matrículas nos cursos FIC (Formação Inicial e Continuada) e TEC (Técnico) presencial e EaD (educação a distância).",
              },
              {
                id: "200",
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
                id: "201",
                title:
                  "Desenvolver estratégias de atração de jovens para STEM (ciências, tecnologias, engenharias e matemática) com gamificação, bootcamps e plataformas digitais vinculadas ao setor produtivo local.",
              },
              {
                id: "202",
                title:
                  "Criar mecanismos para ampliar a empregabilidade de egressos dos cursos técnicos no mercado de trabalho.",
              },
            ],
          },
          {
            title: "Aprimorar o nível de educação executiva dos gestores",
            initiatives: [
              {
                id: "203",
                title:
                  "Realizar formações locais com certificação nacional para gestores industriais e sindicais, com apoio de parceiros.",
              },
              {
                id: "204",
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
                id: "205",
                title:
                  "Adotar mapas regionais do trabalho e painéis de empregabilidade (RAIS/SENAI) para alinhar a oferta formativa aos setores com maior pressão por mão de obra.",
              },
              {
                id: "206",
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
                id: "207",
                title:
                  "Aprimorar a infraestrutura e a qualidade dos cursos de Educação Profissional e Superior.",
              },
              {
                id: "208",
                title:
                  "Estimular o desenvolvimento de novas tecnologias e soluções em resposta às demandas da indústria paraibana.",
              },
              {
                id: "209",
                title:
                  "Facilitar o acesso das indústrias a mão de obra capacitada.",
              },
            ],
          },
          {
            title: "Aumentar a taxa de efetivação dos aprendizes na indústria",
            initiatives: [
              {
                id: "210",
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
                id: "211",
                title:
                  "Implantar linhas de transmissão exclusivas para polos industriais, como proposto na Paraíba, para viabilizar o uso da energia renovável local.",
              },
              {
                id: "212",
                title:
                  "Criar programas estaduais de eficiência energética industrial com incentivos fiscais.",
              },
              {
                id: "213",
                title:
                  "Estimular a implantação de usinas de energia fotovoltaica no estado.",
              },
              {
                id: "214",
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
                id: "215",
                title:
                  "Implantar infraestrutura de gás nos distritos industriais para fornecimento direto com menor custo logístico.",
              },
              {
                id: "216",
                title:
                  "Oferecer incentivos para conversão de caldeiras e processos industriais do uso de lenha para gás natural (via programas estaduais de financiamento).",
              },
              {
                id: "217",
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
                id: "218",
                title:
                  "Implantar fundos estaduais com governança compartilhada com o setor industrial para alocar recursos em trechos críticos.",
              },
              {
                id: "219",
                title:
                  "Criar ramal da ferrovia Transnordestina no estado da Paraíba.",
              },
            ],
          },
          {
            title: "Modernizar a infraestrutura das rodovias",
            initiatives: [
              {
                id: "220",
                title:
                  "Pavimentar e duplicar rodovias estaduais e federais com maior fluxo de cargas.",
              },
              {
                id: "221",
                title:
                  "Implantar a terceira faixa de rolamento na BR 230 - João Pessoa a Campina Grande.",
              },
            ],
          },
          {
            title: "Modernizar a infraestrutura das ferrovias",
            initiatives: [
              {
                id: "222",
                title:
                  "Fortalecer a retomada e ampliação de trechos ferroviários regionais ociosos ou desativados.",
              },
              {
                id: "223",
                title:
                  "Criar estruturas intermodais em cidades estratégicas para integração ferrovia-porto.",
              },
            ],
          },
          {
            title: "Melhorar a eficiência dos serviços logísticos",
            initiatives: [
              {
                id: "224",
                title:
                  "Criar centros logísticos regionais integrados com zonas industriais.",
              },
              {
                id: "225",
                title:
                  "Utilizar georreferenciamento e big data para gestão eficiente da malha logística.",
              },
              {
                id: "226",
                title:
                  "Ampliar e modernizar os polos industriais em João Pessoa, Campina Grande, Patos, Sousa, Cajazeiras, Guarabira, Itaporanga e São Bento.",
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
                id: "227",
                title:
                  "Ampliar corredores exclusivos de transporte de carga e BRT em áreas industriais (ex: VLT entre cidades da PB).",
              },
              {
                id: "228",
                title:
                  "Incentivar PPPs (Parcerias Público-Privadas) para construção de infraestrutura de recarga elétrica em corredores logísticos.",
              },
              {
                id: "229",
                title:
                  "Implantar o VLT (Veículo Leve Sobre Trilhos) na cidade de Campina Grande.",
              },
            ],
          },
          {
            title: "Elevar a qualidade da mobilidade urbana – Planejamento",
            initiatives: [
              {
                id: "230",
                title:
                  "Estabelecer consórcios regionais para planejamento de mobilidade intermunicipal com foco em distritos industriais.",
              },
              {
                id: "231",
                title:
                  "Integrar planos de mobilidade com planejamento urbano-industriais.",
              },
              {
                id: "232",
                title:
                  "Melhorar a mobilidade urbana na região metropolitana de João Pessoa.",
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
                id: "233",
                title:
                  "Mapear oportunidades de concessão regionalizada com viabilidade técnica e segurança jurídica.",
              },
              {
                id: "234",
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
                id: "235",
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
                id: "236",
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
                id: "237",
                title:
                  "Implementar sistemas de controle e auditoria pública e privada de desempenho dos serviços de saneamento básico.",
              },
              {
                id: "238",
                title:
                  "Melhorar os indicadores de produtividade e de custo por m3 com base em benchmarking estadual para operadores regionais de saneamento básico.",
              },
              {
                id: "239",
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
                id: "240",
                title:
                  "Universalizar a conectividade em distritos industriais e escolas técnicas (via fibra ou satélite nacional).",
              },
              {
                id: "241",
                title:
                  "Criar programas de inclusão digital industrial para pequenas empresas.",
              },
              {
                id: "242",
                title:
                  "Implantar a internet 5G de qualidade na BR 230 entre João Pessoa e Campina Grande.",
              },
            ],
          },
          {
            title: "Expandir a rede 5G",
            initiatives: [
              {
                id: "243",
                title:
                  "Estabelecer zonas industriais como áreas prioritárias de cobertura 5G.",
              },
              {
                id: "244",
                title:
                  "Simplificar e digitalizar o licenciamento de torres e antenas em regiões industriais.",
              },
              {
                id: "245",
                title:
                  "Implantar o 5G em todas as cidades do estado como ferramenta de universalização da Internet.",
              },
            ],
          },
          {
            title: "Reduzir a dependência de satélites estrangeiros",
            initiatives: [
              {
                id: "246",
                title:
                  "Estimular projetos acadêmicos e empresariais de nanosatélites em parceria com centros de inovação.",
              },
              {
                id: "247",
                title:
                  "Implantar centros estaduais de recepção e processamento de dados via satélite.",
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
  totalInitiatives: 247,
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

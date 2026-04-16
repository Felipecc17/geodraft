/**
 * Scores normalizados para todos os países (1 casa decimal)
 * Escala: 0.0 a 100.0
 */

import type { Category } from "@/types";
import { ALL_COUNTRIES } from "./allCountries";

// Mapa de scores por país e categoria
const scoreMap: Record<string, Record<Category, number>> = {
  // Afeganistão
  afeganistao: { bandeira: 65.3, clima: 45.2, culinaria: 72.1, economia: 28.4, educacao: 35.6, esporte: 42.3, exercito: 55.7, governo: 32.1, historia_cultura: 78.9, idioma: 68.5, localizacao: 52.3, populacao: 58.4, seguranca: 25.3, territorio: 68.2, saude: 55.5, cultura: 50.0 },
  
  // Albânia
  albania: { bandeira: 72.4, clima: 68.9, culinaria: 75.2, economia: 45.3, educacao: 52.1, esporte: 48.7, exercito: 42.3, governo: 48.5, historia_cultura: 72.1, idioma: 65.3, localizacao: 62.4, populacao: 42.1, seguranca: 52.3, territorio: 58.9, saude: 61.1, cultura: 61.6 },
  
  // Argélia
  argelia: { bandeira: 68.2, clima: 35.4, culinaria: 78.9, economia: 52.1, educacao: 48.3, esporte: 55.2, exercito: 62.3, governo: 45.6, historia_cultura: 82.1, idioma: 72.4, localizacao: 58.9, populacao: 72.3, seguranca: 38.2, territorio: 85.4, saude: 64.6, cultura: 61.1 },
  
  // Andorra
  andorra: { bandeira: 65.1, clima: 62.3, culinaria: 68.4, economia: 72.5, educacao: 85.2, esporte: 58.9, exercito: 28.3, governo: 78.5, historia_cultura: 62.1, idioma: 55.3, localizacao: 65.2, populacao: 22.1, seguranca: 88.3, territorio: 35.2, saude: 61.0, cultura: 57.5 },
  
  // Angola
  angola: { bandeira: 62.3, clima: 58.2, culinaria: 65.4, economia: 42.1, educacao: 38.9, esporte: 52.3, exercito: 48.5, governo: 35.2, historia_cultura: 68.3, idioma: 62.1, localizacao: 55.3, populacao: 58.9, seguranca: 32.1, territorio: 72.5, saude: 56.7, cultura: 57.7 },
  
  // Anguila
  anguila: { bandeira: 58.2, clima: 82.3, culinaria: 72.1, economia: 55.3, educacao: 68.9, esporte: 45.2, exercito: 15.3, governo: 62.1, historia_cultura: 48.5, idioma: 75.2, localizacao: 72.3, populacao: 18.5, seguranca: 85.2, territorio: 28.3, saude: 60.7, cultura: 60.7 },
  
  // Antígua e Barbuda
  antigua_barbuda: { bandeira: 68.5, clima: 85.2, culinaria: 75.3, economia: 58.9, educacao: 65.2, esporte: 72.1, exercito: 18.5, governo: 68.3, historia_cultura: 55.2, idioma: 78.9, localizacao: 75.2, populacao: 25.3, seguranca: 82.1, territorio: 32.1, saude: 66.0, cultura: 57.5 },
  
  // Arábia Saudita
  arabia_saudita: { bandeira: 72.3, clima: 28.5, culinaria: 82.1, economia: 88.9, educacao: 62.3, esporte: 65.2, exercito: 82.3, governo: 58.5, historia_cultura: 78.9, idioma: 72.1, localizacao: 68.5, populacao: 75.2, seguranca: 72.3, territorio: 78.5, saude: 73.9, cultura: 74.9 },
  
  // Argentina
  argentina: { bandeira: 75.2, clima: 72.1, culinaria: 92.3, economia: 65.4, educacao: 78.9, esporte: 88.5, exercito: 72.3, governo: 62.1, historia_cultura: 85.2, idioma: 82.1, localizacao: 68.5, populacao: 78.9, seguranca: 65.2, territorio: 82.3, saude: 77.9, cultura: 73.9 },
  
  // Armênia
  armenia: { bandeira: 68.2, clima: 58.3, culinaria: 78.9, economia: 48.5, educacao: 72.1, esporte: 55.2, exercito: 62.3, governo: 45.2, historia_cultura: 82.1, idioma: 65.3, localizacao: 52.1, populacao: 42.3, seguranca: 48.5, territorio: 45.2, saude: 59.4, cultura: 61.4 },
  
  // Aruba
  aruba: { bandeira: 62.1, clima: 82.3, culinaria: 72.5, economia: 68.9, educacao: 75.2, esporte: 58.3, exercito: 12.1, governo: 72.1, historia_cultura: 52.3, idioma: 78.5, localizacao: 75.2, populacao: 28.5, seguranca: 88.9, territorio: 25.3, saude: 65.4, cultura: 64.9 },
  
  // Austrália
  australia: { bandeira: 78.5, clima: 65.2, culinaria: 72.1, economia: 85.3, educacao: 88.9, esporte: 92.1, exercito: 78.5, governo: 82.3, historia_cultura: 75.2, idioma: 95.2, localizacao: 68.5, populacao: 72.3, seguranca: 85.2, territorio: 92.3, saude: 85.3, cultura: 83.3 },
  
  // Áustria
  austria: { bandeira: 72.3, clima: 68.5, culinaria: 82.1, economia: 88.5, educacao: 92.3, esporte: 78.9, exercito: 65.2, governo: 85.2, historia_cultura: 88.5, idioma: 78.5, localizacao: 72.1, populacao: 68.9, seguranca: 88.3, territorio: 58.2, saude: 75.7, cultura: 76.7 },
  
  // Azerbaijão
  azerbaijao: { bandeira: 68.5, clima: 62.3, culinaria: 75.2, economia: 58.9, educacao: 65.2, esporte: 62.1, exercito: 68.5, governo: 48.3, historia_cultura: 72.1, idioma: 68.5, localizacao: 62.3, populacao: 58.5, seguranca: 52.1, territorio: 62.3, saude: 66.2, cultura: 60.7 },
  
  // Bahamas
  bahamas: { bandeira: 65.2, clima: 85.2, culinaria: 72.3, economia: 72.1, educacao: 72.5, esporte: 68.9, exercito: 22.3, governo: 68.5, historia_cultura: 58.2, idioma: 82.1, localizacao: 78.5, populacao: 32.1, seguranca: 75.2, territorio: 42.3, saude: 59.0, cultura: 64.5 },
  
  // Bangladesh
  bangladeche: { bandeira: 72.1, clima: 58.3, culinaria: 82.5, economia: 48.2, educacao: 52.1, esporte: 55.3, exercito: 62.1, governo: 42.3, historia_cultura: 78.9, idioma: 72.3, localizacao: 62.5, populacao: 92.1, seguranca: 38.2, territorio: 52.3, saude: 62.6, cultura: 63.6 },
  
  // Barbados
  barbados: { bandeira: 62.3, clima: 82.5, culinaria: 75.2, economia: 68.9, educacao: 78.5, esporte: 72.1, exercito: 18.5, governo: 72.3, historia_cultura: 62.1, idioma: 82.3, localizacao: 75.2, populacao: 28.5, seguranca: 82.1, territorio: 32.1, saude: 66.8, cultura: 62.3 },
  
  // Bahrein
  bahrein: { bandeira: 68.2, clima: 32.1, culinaria: 78.5, economia: 82.3, educacao: 72.1, esporte: 62.3, exercito: 68.5, governo: 62.1, historia_cultura: 72.3, idioma: 72.1, localizacao: 68.5, populacao: 52.3, seguranca: 72.1, territorio: 35.2, saude: 66.7, cultura: 64.7 },
  
  // Bélgica
  belgica: { bandeira: 72.5, clima: 65.2, culinaria: 85.2, economia: 88.3, educacao: 88.9, esporte: 75.2, exercito: 68.5, governo: 82.1, historia_cultura: 85.2, idioma: 78.5, localizacao: 72.1, populacao: 65.3, seguranca: 82.3, territorio: 52.1, saude: 73.3, cultura: 72.8 },
  
  // Belize
  belize: { bandeira: 65.2, clima: 78.5, culinaria: 72.1, economia: 52.3, educacao: 58.9, esporte: 55.2, exercito: 35.2, governo: 55.2, historia_cultura: 62.3, idioma: 75.2, localizacao: 68.5, populacao: 42.1, seguranca: 48.5, territorio: 62.3, saude: 54.9, cultura: 57.9 },
  
  // Benin
  benin: { bandeira: 62.1, clima: 55.2, culinaria: 68.3, economia: 38.5, educacao: 42.1, esporte: 48.2, exercito: 42.3, governo: 38.2, historia_cultura: 65.2, idioma: 62.1, localizacao: 58.3, populacao: 52.3, seguranca: 35.2, territorio: 62.1, saude: 56.6, cultura: 53.1 },
  
  // Bermudas
  bermudas: { bandeira: 62.3, clima: 78.5, culinaria: 72.1, economia: 82.3, educacao: 85.2, esporte: 68.9, exercito: 25.3, governo: 78.5, historia_cultura: 62.1, idioma: 88.5, localizacao: 75.2, populacao: 22.1, seguranca: 88.9, territorio: 28.5, saude: 65.1, cultura: 66.1 },
  
  // Bielorrússia
  bielorrussia: { bandeira: 68.2, clima: 52.3, culinaria: 72.1, economia: 48.5, educacao: 78.9, esporte: 72.3, exercito: 72.1, governo: 38.2, historia_cultura: 75.2, idioma: 68.5, localizacao: 62.1, populacao: 62.3, seguranca: 55.2, territorio: 72.5, saude: 67.7, cultura: 64.2 },
  
  // Birmânia
  birmânia: { bandeira: 65.2, clima: 62.3, culinaria: 78.5, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 58.5, governo: 35.2, historia_cultura: 72.1, idioma: 65.3, localizacao: 62.1, populacao: 72.3, seguranca: 32.1, territorio: 68.5, saude: 60.2, cultura: 54.2 },
  
  // Bolívia
  bolivia: { bandeira: 68.5, clima: 48.2, culinaria: 75.2, economia: 42.3, educacao: 52.1, esporte: 55.3, exercito: 48.5, governo: 38.2, historia_cultura: 72.1, idioma: 65.2, localizacao: 62.3, populacao: 58.9, seguranca: 35.2, territorio: 78.5, saude: 55.2, cultura: 57.7 },
  
  // Bósnia e Herzegovina
  bosnia_herzegovina: { bandeira: 65.2, clima: 62.3, culinaria: 78.9, economia: 48.5, educacao: 65.2, esporte: 62.1, exercito: 55.2, governo: 45.3, historia_cultura: 72.1, idioma: 62.3, localizacao: 62.1, populacao: 48.2, seguranca: 48.5, territorio: 58.3, saude: 61.1, cultura: 60.6 },
  
  // Botsuana
  botsuana: { bandeira: 62.1, clima: 42.3, culinaria: 62.1, economia: 58.9, educacao: 68.5, esporte: 55.2, exercito: 48.3, governo: 62.1, historia_cultura: 62.3, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 72.1, territorio: 72.5, saude: 63.7, cultura: 57.2 },
  
  // Brasil
  brasil: { bandeira: 82.3, clima: 78.5, culinaria: 88.9, economia: 72.1, educacao: 65.2, esporte: 92.3, exercito: 72.5, governo: 58.2, historia_cultura: 78.9, idioma: 88.5, localizacao: 72.3, populacao: 88.9, seguranca: 48.5, territorio: 92.1, saude: 80.1, cultura: 77.6 },
  
  // Brunei
  brunei: { bandeira: 65.2, clima: 72.1, culinaria: 75.2, economia: 78.5, educacao: 72.3, esporte: 52.1, exercito: 55.2, governo: 68.5, historia_cultura: 62.1, idioma: 65.3, localizacao: 68.5, populacao: 35.2, seguranca: 78.9, territorio: 48.5, saude: 68.6, cultura: 65.6 },
  
  // Bulgária
  bulgaria: { bandeira: 68.2, clima: 62.3, culinaria: 75.2, economia: 55.2, educacao: 72.1, esporte: 68.5, exercito: 62.3, governo: 52.1, historia_cultura: 78.9, idioma: 68.5, localizacao: 68.2, populacao: 58.5, seguranca: 62.1, territorio: 62.3, saude: 60.3, cultura: 67.3 },
  
  // Burquina Faso
  burquina_faso: { bandeira: 62.1, clima: 45.2, culinaria: 65.3, economia: 35.2, educacao: 38.9, esporte: 48.2, exercito: 42.1, governo: 35.2, historia_cultura: 62.1, idioma: 58.5, localizacao: 55.2, populacao: 52.3, seguranca: 32.1, territorio: 62.1, saude: 52.6, cultura: 53.1 },
  
  // Burundi
  burundi: { bandeira: 62.3, clima: 58.2, culinaria: 62.1, economia: 32.1, educacao: 35.2, esporte: 45.3, exercito: 38.5, governo: 32.1, historia_cultura: 58.9, idioma: 58.2, localizacao: 52.1, populacao: 48.5, seguranca: 28.3, territorio: 48.2, saude: 51.6, cultura: 45.1 },
  
  // Butão
  butao: { bandeira: 68.5, clima: 55.2, culinaria: 72.1, economia: 48.3, educacao: 62.1, esporte: 52.3, exercito: 45.2, governo: 62.3, historia_cultura: 65.2, idioma: 62.1, localizacao: 58.5, populacao: 38.2, seguranca: 72.1, territorio: 55.2, saude: 61.9, cultura: 53.4 },
  
  // Cabo Verde
  cabo_verde: { bandeira: 62.1, clima: 72.3, culinaria: 68.5, economia: 48.2, educacao: 62.1, esporte: 52.3, exercito: 28.5, governo: 58.2, historia_cultura: 58.9, idioma: 68.5, localizacao: 68.2, populacao: 32.1, seguranca: 72.1, territorio: 38.5, saude: 54.5, cultura: 60.0 },
  
  // Camboja
  cambodja: { bandeira: 65.2, clima: 62.3, culinaria: 75.2, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 48.5, governo: 38.2, historia_cultura: 72.1, idioma: 62.3, localizacao: 62.1, populacao: 58.9, seguranca: 35.2, territorio: 62.5, saude: 52.1, cultura: 54.6 },
  
  // Camarões
  cameroes: { bandeira: 62.1, clima: 58.2, culinaria: 68.5, economia: 42.3, educacao: 45.2, esporte: 52.1, exercito: 48.3, governo: 38.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 62.3, seguranca: 32.1, territorio: 68.5, saude: 55.8, cultura: 58.3 },
  
  // Canadá
  canada: { bandeira: 82.3, clima: 58.5, culinaria: 78.9, economia: 88.5, educacao: 92.1, esporte: 85.2, exercito: 75.2, governo: 85.3, historia_cultura: 82.1, idioma: 92.3, localizacao: 72.1, populacao: 78.5, seguranca: 88.9, territorio: 92.1, saude: 83.3, cultura: 80.8 },
  
  // Catar
  catar: { bandeira: 68.2, clima: 28.5, culinaria: 78.5, economia: 92.1, educacao: 72.3, esporte: 75.2, exercito: 72.1, governo: 68.5, historia_cultura: 62.1, idioma: 68.5, localizacao: 68.2, populacao: 48.5, seguranca: 82.3, territorio: 42.1, saude: 65.7, cultura: 65.2 },
  
  // Cazaquistão
  cazaquistao: { bandeira: 65.2, clima: 42.1, culinaria: 68.5, economia: 62.3, educacao: 72.1, esporte: 62.3, exercito: 68.5, governo: 52.1, historia_cultura: 72.1, idioma: 65.3, localizacao: 62.1, populacao: 58.9, seguranca: 62.1, territorio: 92.3, saude: 61.7, cultura: 65.2 },
  
  // Chade
  chade: { bandeira: 62.1, clima: 38.2, culinaria: 62.1, economia: 32.1, educacao: 35.2, esporte: 42.1, exercito: 42.3, governo: 32.1, historia_cultura: 58.9, idioma: 58.2, localizacao: 52.1, populacao: 52.3, seguranca: 28.3, territorio: 68.5, saude: 49.0, cultura: 43.5 },
  
  // Chile
  chile: { bandeira: 72.3, clima: 48.5, culinaria: 78.9, economia: 72.1, educacao: 78.5, esporte: 72.3, exercito: 68.5, governo: 68.2, historia_cultura: 78.9, idioma: 82.1, localizacao: 68.5, populacao: 62.3, seguranca: 72.1, territorio: 82.5, saude: 70.8, cultura: 76.3 },
  
  // China
  china: { bandeira: 72.1, clima: 58.3, culinaria: 92.3, economia: 88.9, educacao: 78.5, esporte: 85.2, exercito: 92.1, governo: 62.1, historia_cultura: 92.3, idioma: 72.1, localizacao: 68.5, populacao: 98.5, seguranca: 72.1, territorio: 92.1, saude: 79.9, cultura: 82.4 },
  
  // Chipre
  chipre: { bandeira: 65.2, clima: 72.3, culinaria: 78.9, economia: 62.1, educacao: 72.1, esporte: 62.3, exercito: 55.2, governo: 62.1, historia_cultura: 78.5, idioma: 68.5, localizacao: 68.2, populacao: 48.5, seguranca: 72.1, territorio: 48.2, saude: 60.8, cultura: 62.8 },
  
  // Cidade do Vaticano
  cidade_vaticano: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 58.5, educacao: 78.9, esporte: 42.1, exercito: 22.1, governo: 68.5, historia_cultura: 92.1, idioma: 72.3, localizacao: 68.2, populacao: 12.1, seguranca: 82.3, territorio: 22.1, saude: 61.8, cultura: 58.3 },
  
  // Colômbia
  colombia: { bandeira: 72.3, clima: 72.1, culinaria: 82.5, economia: 58.9, educacao: 62.1, esporte: 78.5, exercito: 72.1, governo: 52.3, historia_cultura: 72.1, idioma: 82.1, localizacao: 68.5, populacao: 72.3, seguranca: 42.1, territorio: 78.5, saude: 70.5, cultura: 65.5 },
  
  // Comores
  comores: { bandeira: 62.1, clima: 72.3, culinaria: 68.5, economia: 38.2, educacao: 42.1, esporte: 45.2, exercito: 28.5, governo: 38.5, historia_cultura: 58.9, idioma: 58.2, localizacao: 62.1, populacao: 35.2, seguranca: 35.2, territorio: 42.1, saude: 50.6, cultura: 52.6 },
  
  // Congo
  congo: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 42.1, educacao: 42.3, esporte: 48.2, exercito: 45.2, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 58.9, seguranca: 32.1, territorio: 68.5, saude: 51.4, cultura: 51.4 },
  
  // Congo (RDC)
  congo_rdc: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 35.2, educacao: 38.9, esporte: 45.2, exercito: 42.1, governo: 32.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 72.3, seguranca: 28.3, territorio: 92.1, saude: 58.4, cultura: 49.4 },
  
  // Coreia do Norte
  coreia_norte: { bandeira: 68.2, clima: 52.3, culinaria: 62.1, economia: 35.2, educacao: 72.1, esporte: 68.5, exercito: 82.1, governo: 28.5, historia_cultura: 72.1, idioma: 68.5, localizacao: 62.1, populacao: 62.3, seguranca: 42.1, territorio: 62.3, saude: 58.4, cultura: 59.9 },
  
  // Coreia do Sul
  coreia_sul: { bandeira: 72.1, clima: 58.3, culinaria: 82.5, economia: 88.5, educacao: 92.1, esporte: 82.3, exercito: 78.5, governo: 72.1, historia_cultura: 78.9, idioma: 72.1, localizacao: 68.5, populacao: 72.3, seguranca: 78.9, territorio: 62.1, saude: 73.2, cultura: 71.7 },
  
  // Costa do Marfim
  costa_marfim: { bandeira: 62.1, clima: 58.2, culinaria: 68.5, economia: 48.2, educacao: 45.2, esporte: 52.1, exercito: 48.3, governo: 38.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 62.3, seguranca: 35.2, territorio: 62.5, saude: 56.5, cultura: 51.0 },
  
  // Costa Rica
  costa_rica: { bandeira: 68.5, clima: 78.5, culinaria: 75.2, economia: 68.9, educacao: 78.5, esporte: 72.1, exercito: 28.5, governo: 72.3, historia_cultura: 68.5, idioma: 78.9, localizacao: 72.1, populacao: 52.3, seguranca: 72.1, territorio: 62.1, saude: 68.8, cultura: 62.8 },
  
  // Croácia
  croacia: { bandeira: 68.2, clima: 68.5, culinaria: 78.9, economia: 62.1, educacao: 75.2, esporte: 72.3, exercito: 62.1, governo: 62.3, historia_cultura: 78.5, idioma: 72.1, localizacao: 68.2, populacao: 48.5, seguranca: 68.5, territorio: 58.3, saude: 66.9, cultura: 63.4 },
  
  // Cuba
  cuba: { bandeira: 68.2, clima: 78.5, culinaria: 78.9, economia: 45.2, educacao: 82.1, esporte: 82.3, exercito: 68.5, governo: 42.1, historia_cultura: 78.9, idioma: 82.1, localizacao: 68.5, populacao: 62.3, seguranca: 62.1, territorio: 62.1, saude: 64.7, cultura: 65.2 },
  
  // Dinamarca
  dinamarca: { bandeira: 72.3, clima: 52.3, culinaria: 78.5, economia: 88.9, educacao: 92.1, esporte: 78.5, exercito: 68.5, governo: 85.2, historia_cultura: 78.9, idioma: 82.1, localizacao: 72.1, populacao: 58.5, seguranca: 88.3, territorio: 62.1, saude: 73.6, cultura: 79.1 },
  
  // Djibuti
  djibouti: { bandeira: 62.1, clima: 35.2, culinaria: 65.3, economia: 42.1, educacao: 48.3, esporte: 48.2, exercito: 52.3, governo: 42.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 35.2, seguranca: 48.5, territorio: 48.2, saude: 55.0, cultura: 53.5 },
  
  // Dominica
  dominica: { bandeira: 62.1, clima: 78.5, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 55.2, exercito: 18.5, governo: 58.2, historia_cultura: 55.2, idioma: 75.2, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 57.4, cultura: 58.9 },
  
  // República Dominicana
  dominicana: { bandeira: 68.5, clima: 82.3, culinaria: 78.9, economia: 62.1, educacao: 65.2, esporte: 78.5, exercito: 62.3, governo: 55.2, historia_cultura: 72.1, idioma: 82.1, localizacao: 72.3, populacao: 62.3, seguranca: 52.1, territorio: 62.1, saude: 70.3, cultura: 70.3 },
  
  // Egito
  egito: { bandeira: 72.1, clima: 35.2, culinaria: 82.5, economia: 58.9, educacao: 62.1, esporte: 68.5, exercito: 72.3, governo: 52.1, historia_cultura: 92.1, idioma: 72.1, localizacao: 62.1, populacao: 82.3, seguranca: 48.5, territorio: 82.5, saude: 65.4, cultura: 70.9 },
  
  // Emirados Árabes Unidos
  emirados_arabes: { bandeira: 72.3, clima: 32.1, culinaria: 78.5, economia: 92.1, educacao: 78.5, esporte: 75.2, exercito: 72.1, governo: 72.1, historia_cultura: 62.1, idioma: 68.5, localizacao: 68.5, populacao: 62.3, seguranca: 82.3, territorio: 48.2, saude: 65.9, cultura: 66.9 },
  
  // Equador
  equador: { bandeira: 68.5, clima: 72.1, culinaria: 78.9, economia: 58.2, educacao: 62.1, esporte: 62.3, exercito: 58.5, governo: 48.2, historia_cultura: 72.1, idioma: 82.1, localizacao: 68.5, populacao: 62.3, seguranca: 42.1, territorio: 68.5, saude: 67.6, cultura: 61.6 },
  
  // Eritreia
  eritreia: { bandeira: 62.1, clima: 45.2, culinaria: 65.3, economia: 35.2, educacao: 42.1, esporte: 48.2, exercito: 52.3, governo: 35.2, historia_cultura: 62.1, idioma: 58.5, localizacao: 58.2, populacao: 42.1, seguranca: 35.2, territorio: 62.1, saude: 47.3, cultura: 50.8 },
  
  // Eslováquia
  eslovaquia: { bandeira: 68.2, clima: 58.3, culinaria: 75.2, economia: 68.5, educacao: 78.9, esporte: 68.5, exercito: 62.1, governo: 68.2, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.2, populacao: 58.5, seguranca: 72.1, territorio: 62.3, saude: 69.8, cultura: 70.8 },
  
  // Eslovênia
  eslovenia: { bandeira: 68.2, clima: 62.3, culinaria: 78.9, economia: 75.2, educacao: 82.1, esporte: 72.3, exercito: 62.1, governo: 78.5, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.2, populacao: 48.5, seguranca: 82.3, territorio: 52.1, saude: 72.1, cultura: 66.6 },
  
  // Espanha
  espanha: { bandeira: 72.3, clima: 72.1, culinaria: 85.2, economia: 78.9, educacao: 82.1, esporte: 82.3, exercito: 72.1, governo: 72.1, historia_cultura: 88.5, idioma: 82.1, localizacao: 72.1, populacao: 78.5, seguranca: 78.9, territorio: 72.1, saude: 75.8, cultura: 77.8 },
  
  // Estados Unidos
  estados_unidos: { bandeira: 82.3, clima: 65.2, culinaria: 78.9, economia: 92.1, educacao: 82.1, esporte: 92.3, exercito: 92.1, governo: 78.5, historia_cultura: 82.1, idioma: 92.3, localizacao: 72.1, populacao: 88.5, seguranca: 72.1, territorio: 92.1, saude: 83.5, cultura: 82.0 },
  
  // Estônia
  estonia: { bandeira: 68.2, clima: 52.3, culinaria: 72.1, economia: 72.5, educacao: 85.2, esporte: 68.5, exercito: 62.1, governo: 78.5, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.2, populacao: 42.3, seguranca: 82.3, territorio: 58.2, saude: 71.2, cultura: 68.7 },
  
  // Etiópia
  etiopia: { bandeira: 68.5, clima: 52.3, culinaria: 72.1, economia: 42.1, educacao: 48.3, esporte: 62.1, exercito: 62.3, governo: 42.1, historia_cultura: 82.1, idioma: 62.1, localizacao: 62.1, populacao: 72.3, seguranca: 38.2, territorio: 72.5, saude: 62.4, cultura: 56.9 },
  
  // Fiji
  fiji: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 68.9, exercito: 28.5, governo: 58.2, historia_cultura: 58.9, idioma: 72.1, localizacao: 72.3, populacao: 38.5, seguranca: 62.1, territorio: 48.2, saude: 56.4, cultura: 61.4 },
  
  // Filipinas
  filipinas: { bandeira: 68.5, clima: 72.1, culinaria: 78.5, economia: 58.2, educacao: 62.1, esporte: 72.3, exercito: 62.1, governo: 48.2, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.5, populacao: 82.3, seguranca: 42.1, territorio: 62.1, saude: 65.8, cultura: 61.3 },
  
  // Finlândia
  finlandia: { bandeira: 72.3, clima: 48.5, culinaria: 72.1, economia: 88.5, educacao: 92.1, esporte: 78.5, exercito: 68.5, governo: 85.2, historia_cultura: 78.9, idioma: 78.5, localizacao: 72.1, populacao: 58.5, seguranca: 88.3, territorio: 72.1, saude: 74.3, cultura: 70.8 },
  
  // França
  franca: { bandeira: 82.3, clima: 68.5, culinaria: 92.3, economia: 88.9, educacao: 88.5, esporte: 82.1, exercito: 82.3, governo: 78.5, historia_cultura: 92.1, idioma: 88.5, localizacao: 72.1, populacao: 78.5, seguranca: 78.9, territorio: 72.1, saude: 85.8, cultura: 85.3 },
  
  // Guiana Francesa
  franca_guiana: { bandeira: 62.1, clima: 72.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 55.2, exercito: 35.2, governo: 58.2, historia_cultura: 58.9, idioma: 78.5, localizacao: 68.5, populacao: 32.1, seguranca: 62.1, territorio: 62.5, saude: 60.9, cultura: 58.4 },
  
  // Gabão
  gabao: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 58.9, educacao: 52.1, esporte: 48.2, exercito: 48.3, governo: 42.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 42.1, territorio: 72.5, saude: 53.3, cultura: 50.3 },
  
  // Gâmbia
  gambia: { bandeira: 62.1, clima: 55.2, culinaria: 65.3, economia: 38.2, educacao: 42.1, esporte: 45.2, exercito: 35.2, governo: 38.5, historia_cultura: 58.9, idioma: 62.1, localizacao: 58.2, populacao: 38.5, seguranca: 35.2, territorio: 48.2, saude: 51.3, cultura: 49.8 },
  
  // Gana
  gana: { bandeira: 62.1, clima: 58.2, culinaria: 68.5, economia: 48.2, educacao: 52.1, esporte: 55.2, exercito: 48.3, governo: 48.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 58.9, seguranca: 42.1, territorio: 62.1, saude: 56.7, cultura: 54.2 },
  
  // Geórgia
  georgia: { bandeira: 68.2, clima: 62.3, culinaria: 78.5, economia: 52.1, educacao: 72.1, esporte: 62.3, exercito: 62.1, governo: 48.2, historia_cultura: 78.5, idioma: 68.5, localizacao: 62.1, populacao: 48.5, seguranca: 52.1, territorio: 58.3, saude: 61.4, cultura: 64.9 },
  
  // Gibraltar
  gibraltar: { bandeira: 62.1, clima: 72.3, culinaria: 72.1, economia: 68.9, educacao: 78.5, esporte: 62.1, exercito: 42.3, governo: 72.1, historia_cultura: 62.1, idioma: 82.1, localizacao: 68.5, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 58.1, cultura: 59.1 },
  
  // Granada
  granada: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 55.2, exercito: 18.5, governo: 58.2, historia_cultura: 55.2, idioma: 75.2, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 59.2, cultura: 58.7 },
  
  // Grécia
  grecia: { bandeira: 72.3, clima: 72.1, culinaria: 82.5, economia: 62.1, educacao: 78.5, esporte: 72.3, exercito: 68.5, governo: 62.1, historia_cultura: 92.1, idioma: 78.5, localizacao: 68.5, populacao: 62.3, seguranca: 72.1, territorio: 62.1, saude: 69.9, cultura: 75.4 },
  
  // Groenlândia
  groenlandia: { bandeira: 62.1, clima: 38.2, culinaria: 62.1, economia: 48.2, educacao: 68.5, esporte: 62.1, exercito: 35.2, governo: 62.1, historia_cultura: 58.9, idioma: 68.5, localizacao: 72.1, populacao: 22.1, seguranca: 72.1, territorio: 92.1, saude: 59.9, cultura: 58.9 },
  
  // Guadalupe
  guadalupe: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 58.9, educacao: 68.5, esporte: 62.1, exercito: 25.3, governo: 62.1, historia_cultura: 58.9, idioma: 78.5, localizacao: 72.3, populacao: 32.1, seguranca: 72.1, territorio: 38.5, saude: 64.9, cultura: 62.4 },
  
  // Guam
  guam: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 62.3, educacao: 72.1, esporte: 65.2, exercito: 42.3, governo: 68.5, historia_cultura: 58.9, idioma: 82.1, localizacao: 72.3, populacao: 32.1, seguranca: 78.5, territorio: 35.2, saude: 59.8, cultura: 63.3 },
  
  // Guatemala
  guatemala: { bandeira: 68.5, clima: 72.1, culinaria: 75.2, economia: 48.2, educacao: 52.1, esporte: 58.3, exercito: 52.1, governo: 42.1, historia_cultura: 68.5, idioma: 72.1, localizacao: 68.5, populacao: 62.3, seguranca: 38.2, territorio: 62.1, saude: 59.5, cultura: 61.0 },
  
  // Guernsey
  guernsey: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 72.5, educacao: 78.5, esporte: 62.1, exercito: 28.5, governo: 72.1, historia_cultura: 62.1, idioma: 82.1, localizacao: 68.5, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 65.1, cultura: 56.6 },
  
  // Guiana
  guiana: { bandeira: 62.1, clima: 72.1, culinaria: 68.5, economia: 48.2, educacao: 52.1, esporte: 55.2, exercito: 42.3, governo: 45.2, historia_cultura: 58.9, idioma: 72.1, localizacao: 68.5, populacao: 38.5, seguranca: 42.1, territorio: 68.5, saude: 54.7, cultura: 56.2 },
  
  // Guiné
  guine: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 38.2, educacao: 42.1, esporte: 45.2, exercito: 42.1, governo: 35.2, historia_cultura: 62.1, idioma: 58.5, localizacao: 58.2, populacao: 52.3, seguranca: 32.1, territorio: 62.1, saude: 48.0, cultura: 53.5 },
  
  // Guiné-Bissau
  guine_bissau: { bandeira: 62.1, clima: 55.2, culinaria: 62.1, economia: 35.2, educacao: 38.9, esporte: 42.1, exercito: 38.5, governo: 32.1, historia_cultura: 58.9, idioma: 58.2, localizacao: 58.2, populacao: 38.5, seguranca: 28.3, territorio: 48.2, saude: 47.4, cultura: 47.9 },
  
  // Guiné Equatorial
  guine_equatorial: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 52.1, educacao: 42.1, esporte: 45.2, exercito: 42.1, governo: 35.2, historia_cultura: 58.9, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 32.1, territorio: 62.1, saude: 48.3, cultura: 49.3 },
  
  // Haiti
  haiti: { bandeira: 68.5, clima: 78.5, culinaria: 72.1, economia: 35.2, educacao: 42.1, esporte: 55.2, exercito: 48.5, governo: 32.1, historia_cultura: 68.5, idioma: 72.1, localizacao: 68.5, populacao: 58.9, seguranca: 28.3, territorio: 62.1, saude: 61.0, cultura: 57.5 },
  
  // Holanda
  holanda: { bandeira: 72.3, clima: 62.3, culinaria: 78.5, economia: 88.9, educacao: 88.5, esporte: 78.5, exercito: 68.5, governo: 82.1, historia_cultura: 82.1, idioma: 82.1, localizacao: 72.1, populacao: 62.3, seguranca: 82.3, territorio: 52.1, saude: 76.2, cultura: 71.7 },
  
  // Honduras
  honduras: { bandeira: 68.5, clima: 72.1, culinaria: 72.1, economia: 45.2, educacao: 52.1, esporte: 62.3, exercito: 52.1, governo: 42.1, historia_cultura: 62.1, idioma: 78.9, localizacao: 68.5, populacao: 58.9, seguranca: 35.2, territorio: 62.1, saude: 57.9, cultura: 63.9 },
  
  // Hong Kong
  hong_kong: { bandeira: 68.2, clima: 72.3, culinaria: 85.2, economia: 88.9, educacao: 82.1, esporte: 72.3, exercito: 48.5, governo: 62.1, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.5, populacao: 72.3, seguranca: 78.9, territorio: 38.5, saude: 69.6, cultura: 74.6 },
  
  // Hungria
  hungria: { bandeira: 68.2, clima: 62.3, culinaria: 78.5, economia: 68.5, educacao: 78.9, esporte: 78.5, exercito: 62.1, governo: 62.1, historia_cultura: 78.5, idioma: 68.5, localizacao: 68.2, populacao: 58.5, seguranca: 68.5, territorio: 62.3, saude: 66.3, cultura: 65.8 },
  
  // Iêmen
  iemen: { bandeira: 62.1, clima: 42.3, culinaria: 72.1, economia: 32.1, educacao: 38.9, esporte: 45.2, exercito: 52.3, governo: 28.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 62.1, populacao: 62.3, seguranca: 22.1, territorio: 62.1, saude: 54.6, cultura: 50.6 },
  
  // Ilhas Cayman
  ilhas_cayman: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 82.3, educacao: 78.5, esporte: 62.1, exercito: 18.5, governo: 72.1, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 22.1, seguranca: 88.9, territorio: 28.5, saude: 65.1, cultura: 59.1 },
  
  // Ilhas Cook
  ilhas_cook: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 58.9, exercito: 15.2, governo: 58.2, historia_cultura: 55.2, idioma: 72.1, localizacao: 72.3, populacao: 22.1, seguranca: 72.1, territorio: 38.5, saude: 57.8, cultura: 57.8 },
  
  // Ilhas Faroe
  ilhas_faroe: { bandeira: 62.1, clima: 48.5, culinaria: 72.1, economia: 72.5, educacao: 82.1, esporte: 68.5, exercito: 35.2, governo: 72.1, historia_cultura: 62.1, idioma: 78.5, localizacao: 68.5, populacao: 22.1, seguranca: 82.3, territorio: 48.2, saude: 61.0, cultura: 62.0 },
  
  // Ilhas Mariana do Norte
  ilhas_mariana: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 58.9, educacao: 68.5, esporte: 62.1, exercito: 35.2, governo: 62.1, historia_cultura: 58.9, idioma: 78.5, localizacao: 72.3, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 56.4, cultura: 61.9 },
  
  // Ilhas Salomão
  ilhas_salomao: { bandeira: 62.1, clima: 78.5, culinaria: 68.5, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 28.5, governo: 45.2, historia_cultura: 55.2, idioma: 62.1, localizacao: 68.5, populacao: 38.5, seguranca: 42.1, territorio: 62.1, saude: 57.3, cultura: 53.8 },
  
  // Ilhas Turcos e Caicos
  ilhas_turcos_caicos: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 18.5, governo: 68.5, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 62.9, cultura: 58.9 },
  
  // Ilhas Virgens Britânicas
  ilhas_virgens_britanicas: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 72.1, educacao: 75.2, esporte: 62.1, exercito: 18.5, governo: 68.5, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 62.9, cultura: 63.9 },
  
  // Ilhas Virgens dos EUA
  ilhas_virgens_eua: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 72.1, educacao: 75.2, esporte: 62.1, exercito: 22.3, governo: 68.5, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 28.5, seguranca: 82.3, territorio: 28.5, saude: 65.6, cultura: 62.1 },
  
  // Índia
  india: { bandeira: 72.1, clima: 62.3, culinaria: 92.3, economia: 72.1, educacao: 62.1, esporte: 75.2, exercito: 82.3, governo: 58.5, historia_cultura: 88.5, idioma: 72.1, localizacao: 68.5, populacao: 98.5, seguranca: 48.5, territorio: 82.1, saude: 71.4, cultura: 69.9 },
  
  // Indonésia
  indonesia: { bandeira: 68.5, clima: 72.1, culinaria: 82.5, economia: 62.3, educacao: 62.1, esporte: 68.5, exercito: 68.5, governo: 52.1, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.5, populacao: 88.9, seguranca: 42.1, territorio: 82.1, saude: 66.2, cultura: 67.2 },
  
  // Irã
  ira: { bandeira: 68.2, clima: 48.5, culinaria: 82.5, economia: 58.9, educacao: 72.1, esporte: 62.3, exercito: 72.1, governo: 42.1, historia_cultura: 88.5, idioma: 72.1, localizacao: 62.1, populacao: 72.3, seguranca: 52.1, territorio: 78.5, saude: 66.1, cultura: 66.1 },
  
  // Iraque
  iraque: { bandeira: 68.2, clima: 42.3, culinaria: 78.5, economia: 58.9, educacao: 52.1, esporte: 58.3, exercito: 62.1, governo: 38.2, historia_cultura: 88.5, idioma: 68.5, localizacao: 62.1, populacao: 68.5, seguranca: 32.1, territorio: 72.1, saude: 65.2, cultura: 60.2 },
  
  // Irlanda
  irlanda: { bandeira: 72.3, clima: 62.3, culinaria: 72.1, economia: 82.5, educacao: 82.1, esporte: 78.5, exercito: 62.1, governo: 78.5, historia_cultura: 82.1, idioma: 88.5, localizacao: 72.1, populacao: 62.3, seguranca: 82.3, territorio: 62.1, saude: 78.8, cultura: 70.8 },
  
  // Islândia
  islandia: { bandeira: 68.2, clima: 48.5, culinaria: 68.5, economia: 78.9, educacao: 88.5, esporte: 72.3, exercito: 42.1, governo: 82.1, historia_cultura: 72.1, idioma: 78.5, localizacao: 72.1, populacao: 38.5, seguranca: 88.9, territorio: 72.1, saude: 66.4, cultura: 67.9 },
  
  // Israel
  israel: { bandeira: 68.2, clima: 48.5, culinaria: 78.5, economia: 78.9, educacao: 82.1, esporte: 72.3, exercito: 82.1, governo: 62.1, historia_cultura: 88.5, idioma: 72.1, localizacao: 62.1, populacao: 58.9, seguranca: 62.1, territorio: 48.2, saude: 64.4, cultura: 69.9 },
  
  // Itália
  italia: { bandeira: 82.3, clima: 72.1, culinaria: 92.3, economia: 78.9, educacao: 82.1, esporte: 82.3, exercito: 72.1, governo: 68.5, historia_cultura: 92.1, idioma: 82.1, localizacao: 72.1, populacao: 72.3, seguranca: 72.1, territorio: 62.1, saude: 79.4, cultura: 72.9 },
  
  // Jamaica
  jamaica: { bandeira: 68.5, clima: 82.3, culinaria: 75.2, economia: 52.3, educacao: 62.1, esporte: 82.1, exercito: 42.3, governo: 55.2, historia_cultura: 62.1, idioma: 82.1, localizacao: 72.3, populacao: 52.3, seguranca: 42.1, territorio: 48.2, saude: 63.8, cultura: 63.8 },
  
  // Japão
  japao: { bandeira: 72.1, clima: 58.3, culinaria: 92.3, economia: 92.1, educacao: 92.1, esporte: 88.5, exercito: 72.1, governo: 78.5, historia_cultura: 88.5, idioma: 72.1, localizacao: 68.5, populacao: 78.5, seguranca: 88.9, territorio: 62.1, saude: 78.4, cultura: 78.9 },
  
  // Jersey
  jersey: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 78.5, educacao: 78.5, esporte: 62.1, exercito: 28.5, governo: 72.1, historia_cultura: 62.1, idioma: 82.1, localizacao: 68.5, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 59.6, cultura: 66.1 },
  
  // Jordânia
  jordania: { bandeira: 68.2, clima: 42.3, culinaria: 78.5, economia: 52.1, educacao: 62.1, esporte: 62.3, exercito: 68.5, governo: 52.1, historia_cultura: 78.5, idioma: 72.1, localizacao: 62.1, populacao: 58.9, seguranca: 62.1, territorio: 62.1, saude: 64.5, cultura: 65.0 },
  
  // Kosovo
  kosovo: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 48.5, educacao: 62.1, esporte: 58.9, exercito: 48.5, governo: 42.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 42.1, seguranca: 48.5, territorio: 48.2, saude: 60.3, cultura: 52.3 },
  
  // Kuwait
  kuwait: { bandeira: 68.2, clima: 28.5, culinaria: 78.5, economia: 88.9, educacao: 72.1, esporte: 62.3, exercito: 72.1, governo: 62.1, historia_cultura: 62.1, idioma: 68.5, localizacao: 68.5, populacao: 48.5, seguranca: 72.1, territorio: 48.2, saude: 67.8, cultura: 64.3 },
  
  // Quirguistão
  kyrgyzstan: { bandeira: 62.1, clima: 48.5, culinaria: 68.5, economia: 42.1, educacao: 62.1, esporte: 55.2, exercito: 58.5, governo: 38.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 48.5, territorio: 72.5, saude: 59.5, cultura: 55.5 },
  
  // Laos
  laos: { bandeira: 65.2, clima: 62.3, culinaria: 75.2, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 48.5, governo: 38.2, historia_cultura: 68.5, idioma: 62.3, localizacao: 62.1, populacao: 52.3, seguranca: 38.2, territorio: 62.1, saude: 52.0, cultura: 59.5 },
  
  // Lesoto
  lesoto: { bandeira: 62.1, clima: 52.3, culinaria: 62.1, economia: 38.2, educacao: 42.1, esporte: 52.1, exercito: 42.3, governo: 42.1, historia_cultura: 58.9, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 42.1, territorio: 62.1, saude: 46.8, cultura: 54.8 },
  
  // Letônia
  letonia: { bandeira: 68.2, clima: 52.3, culinaria: 72.1, economia: 68.5, educacao: 82.1, esporte: 68.5, exercito: 62.1, governo: 72.1, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.2, populacao: 42.3, seguranca: 72.1, territorio: 62.3, saude: 65.8, cultura: 65.3 },
  
  // Líbano
  libano: { bandeira: 68.2, clima: 62.3, culinaria: 82.5, economia: 48.5, educacao: 62.1, esporte: 62.3, exercito: 58.5, governo: 42.1, historia_cultura: 78.5, idioma: 72.1, localizacao: 62.1, populacao: 52.3, seguranca: 38.2, territorio: 48.2, saude: 57.9, cultura: 60.4 },
  
  // Libéria
  liberia: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 35.2, educacao: 42.1, esporte: 48.2, exercito: 42.1, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 48.5, seguranca: 32.1, territorio: 62.1, saude: 52.0, cultura: 47.5 },
  
  // Líbia
  libia: { bandeira: 68.2, clima: 35.2, culinaria: 72.1, economia: 58.9, educacao: 52.1, esporte: 55.2, exercito: 52.3, governo: 32.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 58.2, populacao: 52.3, seguranca: 28.3, territorio: 82.5, saude: 57.8, cultura: 60.3 },
  
  // Liechtenstein
  liechtenstein: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 88.9, educacao: 88.5, esporte: 68.5, exercito: 42.1, governo: 82.1, historia_cultura: 68.5, idioma: 78.5, localizacao: 68.2, populacao: 22.1, seguranca: 88.9, territorio: 35.2, saude: 67.8, cultura: 69.8 },
  
  // Lituânia
  lituania: { bandeira: 68.2, clima: 52.3, culinaria: 72.1, economia: 72.5, educacao: 82.1, esporte: 72.3, exercito: 62.1, governo: 72.1, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.2, populacao: 48.5, seguranca: 72.1, territorio: 62.3, saude: 67.3, cultura: 71.8 },
  
  // Luxemburgo
  luxemburgo: { bandeira: 68.2, clima: 62.3, culinaria: 78.5, economia: 92.1, educacao: 88.5, esporte: 68.5, exercito: 52.1, governo: 82.1, historia_cultura: 72.1, idioma: 78.5, localizacao: 68.2, populacao: 32.1, seguranca: 88.9, territorio: 48.2, saude: 71.0, cultura: 70.5 },
  
  // Macau
  macau: { bandeira: 68.2, clima: 72.3, culinaria: 85.2, economia: 88.9, educacao: 78.5, esporte: 62.1, exercito: 35.2, governo: 62.1, historia_cultura: 68.5, idioma: 68.5, localizacao: 68.5, populacao: 48.5, seguranca: 78.9, territorio: 35.2, saude: 62.3, cultura: 67.3 },
  
  // Macedônia do Norte
  macedonia: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 52.1, educacao: 62.1, esporte: 62.3, exercito: 55.2, governo: 48.2, historia_cultura: 68.5, idioma: 62.1, localizacao: 62.1, populacao: 42.1, seguranca: 52.1, territorio: 52.3, saude: 59.3, cultura: 60.8 },
  
  // Madagascar
  madagascar: { bandeira: 62.1, clima: 62.3, culinaria: 68.5, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 42.3, governo: 38.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 62.3, seguranca: 35.2, territorio: 72.5, saude: 53.2, cultura: 53.7 },
  
  // Malásia
  malaia: { bandeira: 68.5, clima: 72.1, culinaria: 82.5, economia: 78.9, educacao: 72.1, esporte: 72.3, exercito: 68.5, governo: 62.1, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.5, populacao: 68.5, seguranca: 68.5, territorio: 62.1, saude: 65.6, cultura: 74.6 },
  
  // Malawi
  malavi: { bandeira: 62.1, clima: 58.2, culinaria: 62.1, economia: 38.2, educacao: 42.1, esporte: 48.2, exercito: 42.1, governo: 38.5, historia_cultura: 58.9, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 35.2, territorio: 62.1, saude: 49.0, cultura: 46.5 },
  
  // Maldivas
  maldivas: { bandeira: 68.5, clima: 82.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 22.1, governo: 62.1, historia_cultura: 52.3, idioma: 72.1, localizacao: 72.3, populacao: 28.5, seguranca: 78.9, territorio: 28.5, saude: 64.7, cultura: 61.7 },
  
  // Mali
  mali: { bandeira: 62.1, clima: 42.3, culinaria: 65.3, economia: 35.2, educacao: 38.9, esporte: 45.2, exercito: 42.1, governo: 32.1, historia_cultura: 62.1, idioma: 58.5, localizacao: 55.2, populacao: 52.3, seguranca: 28.3, territorio: 68.5, saude: 50.6, cultura: 48.1 },
  
  // Malta
  malta: { bandeira: 68.2, clima: 72.3, culinaria: 78.9, economia: 68.5, educacao: 78.5, esporte: 62.3, exercito: 52.1, governo: 68.5, historia_cultura: 78.5, idioma: 72.1, localizacao: 68.2, populacao: 42.1, seguranca: 78.9, territorio: 38.5, saude: 66.8, cultura: 64.8 },
  
  // Ilhas Malvinas
  malvinas: { bandeira: 62.1, clima: 48.5, culinaria: 62.1, economia: 62.3, educacao: 72.1, esporte: 62.1, exercito: 42.3, governo: 68.5, historia_cultura: 62.1, idioma: 82.1, localizacao: 68.5, populacao: 18.5, seguranca: 82.3, territorio: 48.2, saude: 58.1, cultura: 60.1 },
  
  // Marrocos
  maranhao: { bandeira: 68.2, clima: 48.5, culinaria: 82.5, economia: 58.9, educacao: 62.1, esporte: 62.3, exercito: 62.1, governo: 52.1, historia_cultura: 78.5, idioma: 72.1, localizacao: 62.1, populacao: 68.5, seguranca: 52.1, territorio: 72.1, saude: 61.9, cultura: 62.9 },
  
  // Martinica
  martinica: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 62.3, educacao: 72.1, esporte: 62.1, exercito: 25.3, governo: 62.1, historia_cultura: 58.9, idioma: 78.5, localizacao: 72.3, populacao: 32.1, seguranca: 72.1, territorio: 38.5, saude: 59.4, cultura: 64.4 },
  
  // Maurício
  mauricia: { bandeira: 62.1, clima: 72.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 35.2, governo: 68.5, historia_cultura: 62.1, idioma: 72.1, localizacao: 68.5, populacao: 42.1, seguranca: 72.1, territorio: 42.1, saude: 59.3, cultura: 62.3 },
  
  // Mauritânia
  mauritania: { bandeira: 62.1, clima: 35.2, culinaria: 65.3, economia: 42.1, educacao: 38.9, esporte: 45.2, exercito: 48.3, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 48.5, seguranca: 32.1, territorio: 72.5, saude: 47.6, cultura: 47.1 },
  
  // Mayotte
  mayotte: { bandeira: 62.1, clima: 72.3, culinaria: 68.5, economia: 48.2, educacao: 52.1, esporte: 48.2, exercito: 25.3, governo: 52.1, historia_cultura: 52.3, idioma: 72.1, localizacao: 68.5, populacao: 32.1, seguranca: 62.1, territorio: 38.5, saude: 53.9, cultura: 51.9 },
  
  // México
  mexico: { bandeira: 72.3, clima: 68.5, culinaria: 88.9, economia: 72.1, educacao: 65.2, esporte: 78.5, exercito: 68.5, governo: 58.2, historia_cultura: 82.1, idioma: 82.1, localizacao: 68.5, populacao: 82.3, seguranca: 42.1, territorio: 82.1, saude: 69.7, cultura: 76.2 },
  
  // Micronésia
  micronesia: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 42.1, educacao: 52.1, esporte: 55.2, exercito: 28.5, governo: 48.2, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 28.5, seguranca: 62.1, territorio: 48.2, saude: 58.8, cultura: 57.3 },
  
  // Moçambique
  mocambique: { bandeira: 62.1, clima: 62.3, culinaria: 65.3, economia: 38.2, educacao: 42.1, esporte: 52.1, exercito: 48.3, governo: 38.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 58.9, seguranca: 32.1, territorio: 72.5, saude: 56.4, cultura: 52.4 },
  
  // Moldávia
  moldavia: { bandeira: 62.1, clima: 58.3, culinaria: 72.1, economia: 48.5, educacao: 68.5, esporte: 62.1, exercito: 55.2, governo: 42.1, historia_cultura: 68.5, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 48.5, territorio: 58.3, saude: 57.4, cultura: 54.4 },
  
  // Mônaco
  monaco: { bandeira: 62.1, clima: 72.3, culinaria: 82.5, economia: 88.9, educacao: 82.1, esporte: 72.1, exercito: 28.5, governo: 78.5, historia_cultura: 68.5, idioma: 78.5, localizacao: 68.2, populacao: 18.5, seguranca: 88.9, territorio: 22.1, saude: 67.1, cultura: 66.6 },
  
  // Mongólia
  mongolia: { bandeira: 68.5, clima: 42.1, culinaria: 68.5, economia: 48.2, educacao: 68.5, esporte: 62.3, exercito: 62.1, governo: 48.2, historia_cultura: 72.1, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 52.1, territorio: 92.1, saude: 60.2, cultura: 57.7 },
  
  // Montenegro
  montenegro: { bandeira: 62.1, clima: 62.3, culinaria: 72.1, economia: 52.1, educacao: 62.1, esporte: 62.3, exercito: 48.5, governo: 48.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 38.5, seguranca: 52.1, territorio: 48.2, saude: 56.3, cultura: 58.3 },
  
  // Montserrat
  montserrat: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 48.2, educacao: 62.1, esporte: 55.2, exercito: 15.2, governo: 52.1, historia_cultura: 52.3, idioma: 75.2, localizacao: 68.5, populacao: 18.5, seguranca: 72.1, territorio: 38.5, saude: 59.8, cultura: 58.8 },
  
  // Namíbia
  namibia: { bandeira: 62.1, clima: 42.3, culinaria: 62.1, economia: 52.3, educacao: 62.1, esporte: 58.9, exercito: 48.3, governo: 58.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 62.1, territorio: 72.5, saude: 60.0, cultura: 55.5 },
  
  // Nauru
  nauru: { bandeira: 62.1, clima: 82.3, culinaria: 62.1, economia: 48.2, educacao: 52.1, esporte: 48.2, exercito: 15.2, governo: 48.2, historia_cultura: 48.5, idioma: 72.1, localizacao: 68.5, populacao: 18.5, seguranca: 62.1, territorio: 28.5, saude: 51.7, cultura: 52.7 },
  
  // Nepal
  nepal: { bandeira: 68.5, clima: 58.3, culinaria: 78.5, economia: 42.1, educacao: 52.1, esporte: 62.3, exercito: 58.5, governo: 42.1, historia_cultura: 72.1, idioma: 62.1, localizacao: 62.1, populacao: 62.3, seguranca: 42.1, territorio: 62.1, saude: 57.4, cultura: 56.9 },
  
  // Nicarágua
  nicaragua: { bandeira: 68.5, clima: 72.1, culinaria: 72.1, economia: 45.2, educacao: 52.1, esporte: 62.3, exercito: 52.1, governo: 42.1, historia_cultura: 62.1, idioma: 78.9, localizacao: 68.5, populacao: 52.3, seguranca: 38.2, territorio: 62.1, saude: 54.7, cultura: 54.7 },
  
  // Níger
  niger: { bandeira: 62.1, clima: 38.2, culinaria: 62.1, economia: 32.1, educacao: 35.2, esporte: 42.1, exercito: 42.1, governo: 32.1, historia_cultura: 58.9, idioma: 58.2, localizacao: 55.2, populacao: 52.3, seguranca: 28.3, territorio: 72.5, saude: 52.5, cultura: 47.5 },
  
  // Nigéria
  nigeria: { bandeira: 68.5, clima: 58.2, culinaria: 72.1, economia: 62.3, educacao: 52.1, esporte: 72.3, exercito: 62.1, governo: 48.2, historia_cultura: 72.1, idioma: 72.1, localizacao: 62.1, populacao: 92.1, seguranca: 35.2, territorio: 72.5, saude: 59.9, cultura: 65.9 },
  
  // Niue
  niue: { bandeira: 62.1, clima: 82.3, culinaria: 62.1, economia: 42.1, educacao: 52.1, esporte: 48.2, exercito: 12.1, governo: 48.2, historia_cultura: 48.5, idioma: 72.1, localizacao: 68.5, populacao: 18.5, seguranca: 62.1, territorio: 38.5, saude: 49.2, cultura: 54.7 },
  
  // Noruega
  noruega: { bandeira: 72.3, clima: 48.5, culinaria: 72.1, economia: 92.1, educacao: 92.1, esporte: 82.3, exercito: 72.1, governo: 85.2, historia_cultura: 82.1, idioma: 82.1, localizacao: 72.1, populacao: 58.5, seguranca: 88.9, territorio: 82.1, saude: 75.8, cultura: 77.8 },
  
  // Nova Caledônia
  nova_caledonia: { bandeira: 62.1, clima: 78.5, culinaria: 68.5, economia: 58.9, educacao: 68.5, esporte: 62.1, exercito: 35.2, governo: 62.1, historia_cultura: 58.9, idioma: 72.1, localizacao: 68.5, populacao: 38.5, seguranca: 68.5, territorio: 62.1, saude: 60.8, cultura: 66.2 },
  
  // Nova Zelândia
  nova_zelandia: { bandeira: 78.5, clima: 68.5, culinaria: 72.1, economia: 82.3, educacao: 88.5, esporte: 88.9, exercito: 72.1, governo: 82.1, historia_cultura: 78.9, idioma: 92.3, localizacao: 72.1, populacao: 62.3, seguranca: 88.3, territorio: 82.1, saude: 79.2, cultura: 83.2 },
  
  // Omã
  oma: { bandeira: 68.2, clima: 35.2, culinaria: 72.1, economia: 72.1, educacao: 62.1, esporte: 55.2, exercito: 62.3, governo: 62.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.5, populacao: 48.5, seguranca: 72.1, territorio: 72.5, saude: 59.2, cultura: 61.2 },
  
  // Países Baixos (duplicado com Holanda, então usamos Holanda)
  paises_baixos: { bandeira: 72.3, clima: 62.3, culinaria: 78.5, economia: 88.9, educacao: 88.5, esporte: 78.5, exercito: 68.5, governo: 82.1, historia_cultura: 82.1, idioma: 82.1, localizacao: 72.1, populacao: 62.3, seguranca: 82.3, territorio: 52.1, saude: 77.7, cultura: 78.7 },
  
  // Palau
  palau: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 42.1, educacao: 52.1, esporte: 55.2, exercito: 22.1, governo: 48.2, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 22.1, seguranca: 62.1, territorio: 38.5, saude: 48.6, cultura: 50.6 },
  
  // Palestina
  palestina: { bandeira: 68.2, clima: 48.5, culinaria: 78.5, economia: 42.1, educacao: 52.1, esporte: 58.3, exercito: 52.1, governo: 38.2, historia_cultura: 72.1, idioma: 68.5, localizacao: 62.1, populacao: 52.3, seguranca: 38.2, territorio: 48.2, saude: 50.7, cultura: 51.7 },
  
  // Panamá
  panama: { bandeira: 68.5, clima: 78.5, culinaria: 75.2, economia: 68.9, educacao: 68.5, esporte: 68.5, exercito: 52.1, governo: 58.2, historia_cultura: 68.5, idioma: 78.9, localizacao: 72.1, populacao: 58.9, seguranca: 48.5, territorio: 62.1, saude: 69.2, cultura: 64.7 },
  
  // Papua-Nova Guiné
  papua_nova_guine: { bandeira: 62.1, clima: 72.1, culinaria: 65.3, economia: 42.1, educacao: 42.1, esporte: 52.1, exercito: 42.3, governo: 38.5, historia_cultura: 58.9, idioma: 62.1, localizacao: 62.1, populacao: 62.3, seguranca: 32.1, territorio: 72.5, saude: 50.3, cultura: 56.3 },
  
  // Paquistão
  paquistao: { bandeira: 68.5, clima: 48.5, culinaria: 82.5, economia: 52.3, educacao: 52.1, esporte: 68.5, exercito: 78.5, governo: 42.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 62.1, populacao: 88.9, seguranca: 38.2, territorio: 72.1, saude: 59.4, cultura: 60.9 },
  
  // Paraguai
  paraguai: { bandeira: 68.5, clima: 68.5, culinaria: 72.1, economia: 52.3, educacao: 58.9, esporte: 68.5, exercito: 58.5, governo: 48.2, historia_cultura: 68.5, idioma: 78.9, localizacao: 68.5, populacao: 52.3, seguranca: 42.1, territorio: 62.1, saude: 65.0, cultura: 59.0 },
  
  // Peru
  peru: { bandeira: 68.5, clima: 62.1, culinaria: 88.9, economia: 62.3, educacao: 62.1, esporte: 72.3, exercito: 68.5, governo: 48.2, historia_cultura: 82.1, idioma: 82.1, localizacao: 68.5, populacao: 68.5, seguranca: 42.1, territorio: 82.5, saude: 69.5, cultura: 69.0 },
  
  // Polinésia Francesa
  polinesia_francesa: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 62.3, educacao: 68.5, esporte: 62.1, exercito: 32.3, governo: 62.1, historia_cultura: 58.9, idioma: 78.5, localizacao: 72.3, populacao: 32.1, seguranca: 72.1, territorio: 48.2, saude: 63.9, cultura: 59.4 },
  
  // Polônia
  polonia: { bandeira: 68.2, clima: 58.3, culinaria: 75.2, economia: 72.1, educacao: 78.9, esporte: 72.3, exercito: 68.5, governo: 62.1, historia_cultura: 82.1, idioma: 72.1, localizacao: 68.2, populacao: 62.3, seguranca: 68.5, territorio: 62.3, saude: 70.9, cultura: 73.9 },
  
  // Porto Rico
  porto_rico: { bandeira: 62.1, clima: 82.3, culinaria: 75.2, economia: 68.9, educacao: 72.1, esporte: 72.3, exercito: 35.2, governo: 68.5, historia_cultura: 62.1, idioma: 82.1, localizacao: 72.3, populacao: 48.5, seguranca: 62.1, territorio: 48.2, saude: 69.6, cultura: 63.1 },
  
  // Portugal
  portugal: { bandeira: 72.3, clima: 72.1, culinaria: 78.5, economia: 72.1, educacao: 78.5, esporte: 72.3, exercito: 62.1, governo: 68.5, historia_cultura: 82.1, idioma: 82.1, localizacao: 72.1, populacao: 62.3, seguranca: 72.1, territorio: 62.1, saude: 75.1, cultura: 70.1 },
  
  // Quênia
  quenia: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 48.2, educacao: 52.1, esporte: 72.3, exercito: 58.5, governo: 48.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 62.3, seguranca: 42.1, territorio: 72.5, saude: 53.9, cultura: 54.4 },
  
  // Reino Unido
  reino_unido: { bandeira: 82.3, clima: 62.3, culinaria: 72.1, economia: 88.5, educacao: 88.5, esporte: 88.5, exercito: 82.1, governo: 78.5, historia_cultura: 92.1, idioma: 95.2, localizacao: 72.1, populacao: 78.5, seguranca: 82.3, territorio: 62.1, saude: 81.9, cultura: 81.9 },
  
  // Reunião
  reuniao: { bandeira: 62.1, clima: 72.3, culinaria: 72.1, economia: 58.9, educacao: 68.5, esporte: 62.1, exercito: 25.3, governo: 62.1, historia_cultura: 58.9, idioma: 78.5, localizacao: 68.5, populacao: 32.1, seguranca: 62.1, territorio: 38.5, saude: 56.2, cultura: 62.2 },
  
  // Romênia
  romenia: { bandeira: 68.2, clima: 62.3, culinaria: 75.2, economia: 62.1, educacao: 72.1, esporte: 68.5, exercito: 62.3, governo: 58.2, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.2, populacao: 58.5, seguranca: 62.1, territorio: 62.3, saude: 67.8, cultura: 69.3 },
  
  // Ruanda
  ruanda: { bandeira: 62.1, clima: 58.2, culinaria: 62.1, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 52.3, governo: 48.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 48.5, territorio: 48.2, saude: 56.6, cultura: 52.6 },
  
  // Rússia
  russia: { bandeira: 72.1, clima: 42.1, culinaria: 72.1, economia: 62.3, educacao: 82.1, esporte: 82.3, exercito: 92.1, governo: 52.1, historia_cultura: 88.5, idioma: 72.1, localizacao: 68.5, populacao: 78.5, seguranca: 62.1, territorio: 98.5, saude: 76.7, cultura: 72.7 },
  
  // Samoa
  samoa: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 42.1, educacao: 52.1, esporte: 68.9, exercito: 22.1, governo: 52.1, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 32.1, seguranca: 62.1, territorio: 48.2, saude: 56.8, cultura: 52.3 },
  
  // Samoa Americana
  samoa_americana: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 48.2, educacao: 58.9, esporte: 68.9, exercito: 28.5, governo: 58.2, historia_cultura: 55.2, idioma: 78.5, localizacao: 68.5, populacao: 28.5, seguranca: 62.1, territorio: 38.5, saude: 59.6, cultura: 56.1 },
  
  // San Marino
  san_marino: { bandeira: 62.1, clima: 62.3, culinaria: 78.5, economia: 72.5, educacao: 82.1, esporte: 68.5, exercito: 28.5, governo: 78.5, historia_cultura: 72.1, idioma: 72.1, localizacao: 68.2, populacao: 22.1, seguranca: 88.9, territorio: 35.2, saude: 62.2, cultura: 58.7 },
  
  // Santa Helena
  santa_helena: { bandeira: 62.1, clima: 62.3, culinaria: 62.1, economia: 48.2, educacao: 62.1, esporte: 48.2, exercito: 22.1, governo: 58.2, historia_cultura: 62.1, idioma: 82.1, localizacao: 68.5, populacao: 18.5, seguranca: 72.1, territorio: 38.5, saude: 51.8, cultura: 54.3 },
  
  // Santa Lúcia
  santa_lucia: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 68.9, exercito: 18.5, governo: 58.2, historia_cultura: 55.2, idioma: 75.2, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 62.7, cultura: 55.7 },
  
  // São Tomé e Príncipe
  santo_tome_principe: { bandeira: 62.1, clima: 72.3, culinaria: 68.5, economia: 38.2, educacao: 42.1, esporte: 45.2, exercito: 28.5, governo: 38.5, historia_cultura: 58.9, idioma: 62.1, localizacao: 62.1, populacao: 28.5, seguranca: 35.2, territorio: 42.1, saude: 43.9, cultura: 45.4 },
  
  // São Bartolomeu
  sao_bartolomeu: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 15.2, governo: 68.5, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 22.1, seguranca: 82.3, territorio: 28.5, saude: 57.7, cultura: 58.7 },
  
  // São Cristóvão e Neves
  sao_cristovao_neves: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 58.9, educacao: 68.5, esporte: 72.1, exercito: 18.5, governo: 62.1, historia_cultura: 55.2, idioma: 75.2, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 57.6, cultura: 60.6 },
  
  // São Vicente e Granadinas
  sao_vicente_granadinas: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 52.3, educacao: 62.1, esporte: 68.9, exercito: 18.5, governo: 58.2, historia_cultura: 55.2, idioma: 75.2, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 38.5, saude: 53.2, cultura: 55.2 },
  
  // Senegal
  senegal: { bandeira: 62.1, clima: 55.2, culinaria: 68.5, economia: 42.1, educacao: 48.3, esporte: 58.2, exercito: 48.5, governo: 48.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 42.1, territorio: 62.1, saude: 58.5, cultura: 51.5 },
  
  // Serra Leoa
  serra_leoa: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 35.2, educacao: 38.9, esporte: 45.2, exercito: 42.1, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 48.5, seguranca: 32.1, territorio: 62.1, saude: 49.0, cultura: 54.0 },
  
  // Sérvia
  servia: { bandeira: 68.2, clima: 62.3, culinaria: 78.9, economia: 58.9, educacao: 72.1, esporte: 72.3, exercito: 62.1, governo: 52.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.2, populacao: 58.5, seguranca: 58.5, territorio: 58.3, saude: 63.6, cultura: 66.1 },
  
  // Seicheles
  seychelles: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 22.1, governo: 68.5, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 28.5, seguranca: 72.1, territorio: 42.1, saude: 56.1, cultura: 56.1 },
  
  // Singapura
  singapura: { bandeira: 68.5, clima: 72.1, culinaria: 85.2, economia: 92.1, educacao: 88.9, esporte: 72.3, exercito: 72.1, governo: 78.5, historia_cultura: 72.1, idioma: 82.1, localizacao: 68.5, populacao: 62.3, seguranca: 88.9, territorio: 35.2, saude: 78.7, cultura: 76.2 },
  
  // Sint Maarten
  sint_marteen: { bandeira: 62.1, clima: 82.3, culinaria: 72.1, economia: 68.9, educacao: 72.1, esporte: 62.1, exercito: 18.5, governo: 68.5, historia_cultura: 52.3, idioma: 82.1, localizacao: 72.3, populacao: 22.1, seguranca: 72.1, territorio: 28.5, saude: 54.7, cultura: 55.7 },
  
  // Síria
  siria: { bandeira: 68.2, clima: 42.3, culinaria: 82.5, economia: 42.1, educacao: 52.1, esporte: 58.3, exercito: 62.1, governo: 28.1, historia_cultura: 82.1, idioma: 68.5, localizacao: 62.1, populacao: 62.3, seguranca: 22.1, territorio: 62.1, saude: 56.3, cultura: 52.8 },
  
  // Somália
  somalia: { bandeira: 62.1, clima: 45.2, culinaria: 65.3, economia: 28.4, educacao: 32.1, esporte: 42.3, exercito: 42.1, governo: 25.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 22.1, territorio: 62.5, saude: 42.3, cultura: 51.3 },
  
  // Sri Lanka
  sri_lanka: { bandeira: 68.5, clima: 72.1, culinaria: 82.5, economia: 58.2, educacao: 62.1, esporte: 68.5, exercito: 62.1, governo: 48.2, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.5, populacao: 62.3, seguranca: 48.5, territorio: 58.2, saude: 59.8, cultura: 65.3 },
  
  // Eswatini
  suazilândia: { bandeira: 62.1, clima: 58.2, culinaria: 62.1, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 42.3, governo: 42.1, historia_cultura: 58.9, idioma: 62.1, localizacao: 58.2, populacao: 42.1, seguranca: 42.1, territorio: 58.2, saude: 51.7, cultura: 50.2 },
  
  // Sudão
  sudao: { bandeira: 68.2, clima: 38.2, culinaria: 72.1, economia: 42.1, educacao: 42.1, esporte: 52.1, exercito: 58.5, governo: 32.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 58.2, populacao: 68.5, seguranca: 28.3, territorio: 82.5, saude: 53.0, cultura: 58.5 },
  
  // Sudão do Sul
  sudao_sul: { bandeira: 62.1, clima: 58.2, culinaria: 62.1, economia: 32.1, educacao: 35.2, esporte: 45.2, exercito: 48.3, governo: 28.1, historia_cultura: 58.9, idioma: 58.2, localizacao: 52.1, populacao: 48.5, seguranca: 25.3, territorio: 62.5, saude: 52.3, cultura: 45.3 },
  
  // Suécia
  suecia: { bandeira: 72.3, clima: 48.5, culinaria: 72.1, economia: 88.9, educacao: 92.1, esporte: 82.3, exercito: 72.1, governo: 85.2, historia_cultura: 82.1, idioma: 82.1, localizacao: 72.1, populacao: 62.3, seguranca: 88.3, territorio: 82.1, saude: 78.8, cultura: 79.8 },
  
  // Suíça
  suica: { bandeira: 72.3, clima: 62.3, culinaria: 82.5, economia: 92.1, educacao: 92.1, esporte: 82.3, exercito: 72.1, governo: 85.2, historia_cultura: 82.1, idioma: 78.5, localizacao: 72.1, populacao: 62.3, seguranca: 88.9, territorio: 58.2, saude: 75.9, cultura: 76.4 },
  
  // Suriname
  suriname: { bandeira: 62.1, clima: 72.1, culinaria: 68.5, economia: 48.2, educacao: 52.1, esporte: 55.2, exercito: 42.3, governo: 45.2, historia_cultura: 58.9, idioma: 72.1, localizacao: 68.5, populacao: 38.5, seguranca: 42.1, territorio: 68.5, saude: 56.2, cultura: 52.7 },
  
  // Tailândia
  tailandia: { bandeira: 68.5, clima: 72.1, culinaria: 88.9, economia: 68.9, educacao: 62.1, esporte: 72.3, exercito: 68.5, governo: 52.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.5, populacao: 72.3, seguranca: 52.1, territorio: 62.1, saude: 68.8, cultura: 64.3 },
  
  // Taiwan
  taiwan: { bandeira: 68.2, clima: 72.3, culinaria: 82.5, economia: 82.3, educacao: 82.1, esporte: 72.3, exercito: 68.5, governo: 62.1, historia_cultura: 72.1, idioma: 68.5, localizacao: 68.5, populacao: 68.5, seguranca: 72.1, territorio: 52.1, saude: 73.9, cultura: 70.4 },
  
  // Tajiquistão
  tajiquistao: { bandeira: 62.1, clima: 48.5, culinaria: 68.5, economia: 42.1, educacao: 62.1, esporte: 55.2, exercito: 58.5, governo: 38.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 48.5, territorio: 62.1, saude: 56.8, cultura: 57.3 },
  
  // Tanzânia
  tanzania: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 42.1, educacao: 48.3, esporte: 62.1, exercito: 52.3, governo: 42.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 72.3, seguranca: 38.2, territorio: 82.5, saude: 60.2, cultura: 59.2 },
  
  // Timor-Leste
  timor_leste: { bandeira: 62.1, clima: 72.1, culinaria: 68.5, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 48.5, governo: 38.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 38.2, territorio: 58.2, saude: 58.5, cultura: 58.5 },
  
  // Togo
  togo: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 38.2, educacao: 42.1, esporte: 48.2, exercito: 42.1, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 48.5, seguranca: 32.1, territorio: 58.2, saude: 49.4, cultura: 52.9 },
  
  // Tokelau
  tokelau: { bandeira: 62.1, clima: 82.3, culinaria: 62.1, economia: 42.1, educacao: 52.1, esporte: 48.2, exercito: 12.1, governo: 48.2, historia_cultura: 48.5, idioma: 72.1, localizacao: 68.5, populacao: 18.5, seguranca: 62.1, territorio: 28.5, saude: 54.0, cultura: 54.0 },
  
  // Tonga
  tonga: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 42.1, educacao: 52.1, esporte: 68.9, exercito: 22.1, governo: 52.1, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 32.1, seguranca: 62.1, territorio: 48.2, saude: 52.8, cultura: 57.3 },
  
  // Trinidad e Tobago
  trinidad_tobago: { bandeira: 68.5, clima: 82.3, culinaria: 75.2, economia: 68.9, educacao: 72.1, esporte: 72.3, exercito: 42.3, governo: 62.1, historia_cultura: 62.1, idioma: 82.1, localizacao: 72.3, populacao: 42.1, seguranca: 52.1, territorio: 48.2, saude: 60.5, cultura: 61.0 },
  
  // Tunísia
  tunisia: { bandeira: 68.2, clima: 48.5, culinaria: 82.5, economia: 52.1, educacao: 62.1, esporte: 62.3, exercito: 62.1, governo: 48.2, historia_cultura: 78.5, idioma: 72.1, localizacao: 62.1, populacao: 58.9, seguranca: 52.1, territorio: 62.1, saude: 65.3, cultura: 63.8 },
  
  // Turcomenistão
  turcomenistao: { bandeira: 62.1, clima: 42.1, culinaria: 68.5, economia: 58.9, educacao: 62.1, esporte: 55.2, exercito: 62.1, governo: 38.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 62.1, populacao: 48.5, seguranca: 48.5, territorio: 72.5, saude: 59.0, cultura: 59.0 },
  
  // Turquia
  turquia: { bandeira: 72.3, clima: 68.5, culinaria: 85.2, economia: 72.1, educacao: 72.1, esporte: 72.3, exercito: 78.5, governo: 58.2, historia_cultura: 88.5, idioma: 72.1, localizacao: 68.5, populacao: 72.3, seguranca: 58.5, territorio: 72.1, saude: 75.7, cultura: 75.7 },
  
  // Tuvalu
  tuvalu: { bandeira: 62.1, clima: 82.3, culinaria: 62.1, economia: 38.2, educacao: 48.3, esporte: 45.2, exercito: 12.1, governo: 48.2, historia_cultura: 48.5, idioma: 72.1, localizacao: 68.5, populacao: 18.5, seguranca: 62.1, territorio: 28.5, saude: 50.8, cultura: 53.3 },
  
  // Uganda
  uganda: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 42.1, educacao: 48.3, esporte: 62.1, exercito: 52.3, governo: 42.1, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 62.3, seguranca: 38.2, territorio: 62.5, saude: 52.1, cultura: 52.6 },
  
  // Ucrânia
  ucrania: { bandeira: 68.2, clima: 52.3, culinaria: 72.1, economia: 52.1, educacao: 78.9, esporte: 72.3, exercito: 72.1, governo: 42.1, historia_cultura: 78.5, idioma: 68.5, localizacao: 62.1, populacao: 62.3, seguranca: 42.1, territorio: 72.5, saude: 68.0, cultura: 68.5 },
  
  // Uruguai
  uruguai: { bandeira: 68.5, clima: 68.5, culinaria: 78.9, economia: 72.1, educacao: 78.5, esporte: 82.3, exercito: 62.1, governo: 72.1, historia_cultura: 78.9, idioma: 82.1, localizacao: 68.5, populacao: 48.5, seguranca: 72.1, territorio: 62.1, saude: 71.6, cultura: 74.1 },
  
  // Uzbequistão
  uzbequistao: { bandeira: 62.1, clima: 42.1, culinaria: 72.1, economia: 52.3, educacao: 68.5, esporte: 62.3, exercito: 62.1, governo: 38.2, historia_cultura: 72.1, idioma: 62.1, localizacao: 62.1, populacao: 62.3, seguranca: 48.5, territorio: 78.5, saude: 55.9, cultura: 63.4 },
  
  // Vanuatu
  vanuatu: { bandeira: 62.1, clima: 78.5, culinaria: 68.5, economia: 42.1, educacao: 48.3, esporte: 52.1, exercito: 28.5, governo: 45.2, historia_cultura: 55.2, idioma: 62.1, localizacao: 68.5, populacao: 38.5, seguranca: 42.1, territorio: 58.2, saude: 54.1, cultura: 53.1 },
  
  // Venezuela
  venezuela: { bandeira: 72.3, clima: 72.1, culinaria: 78.9, economia: 48.2, educacao: 62.1, esporte: 72.3, exercito: 62.1, governo: 32.1, historia_cultura: 72.1, idioma: 82.1, localizacao: 68.5, populacao: 68.5, seguranca: 35.2, territorio: 82.5, saude: 65.9, cultura: 66.4 },
  
  // Vietnã
  vietna: { bandeira: 68.5, clima: 72.1, culinaria: 85.2, economia: 62.3, educacao: 62.1, esporte: 68.5, exercito: 72.1, governo: 48.2, historia_cultura: 78.9, idioma: 68.5, localizacao: 68.5, populacao: 82.3, seguranca: 58.5, territorio: 62.1, saude: 72.9, cultura: 66.9 },
  
  // Wallis e Futuna
  wallis_futuna: { bandeira: 62.1, clima: 82.3, culinaria: 68.5, economia: 42.1, educacao: 52.1, esporte: 48.2, exercito: 22.1, governo: 48.2, historia_cultura: 55.2, idioma: 72.1, localizacao: 68.5, populacao: 22.1, seguranca: 62.1, territorio: 38.5, saude: 48.6, cultura: 51.6 },
  
  // Zâmbia
  zambia: { bandeira: 62.1, clima: 58.2, culinaria: 62.1, economia: 42.1, educacao: 42.1, esporte: 52.1, exercito: 48.3, governo: 38.5, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 35.2, territorio: 72.5, saude: 49.9, cultura: 52.9 },
  
  // Zimbábue
  zimbabue: { bandeira: 62.1, clima: 58.2, culinaria: 65.3, economia: 38.2, educacao: 42.1, esporte: 52.1, exercito: 48.3, governo: 35.2, historia_cultura: 62.1, idioma: 62.1, localizacao: 58.2, populacao: 52.3, seguranca: 32.1, territorio: 72.5, saude: 48.4, cultura: 49.4 },
};

export function getCountryScores(countryId: string): Record<Category, number> | null {
  return scoreMap[countryId] || null;
}

export function getAllCountryScores() {
  return scoreMap;
}

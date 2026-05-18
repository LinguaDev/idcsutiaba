// ==================== DIRECTORIO SIMPLE - IDCLATAM ====================
// ==================== ESTRUCTURA DE DATOS ====================
// Países y estados de Latinoamérica.
// Cada estado tiene un arreglo de iglesias (vacío por defecto).
// Agrega las iglesias siguiendo el formato:
// {
//   nombre: "Nombre de la Iglesia",
//   direccion: "Dirección física completa",
//   telefono: "+código país número",
//   website: "https://sitio-web"
// }

const iglesiasData = {
  // ARGENTINA
  argentina: {
    nombre: "Argentina",
    estados: {
      buenos_aires: { nombre: "Buenos Aires", iglesias: [] },
      capital_federal: { nombre: "Capital Federal (CABA)", iglesias: [] },
      catamarca: { nombre: "Catamarca", iglesias: [] },
      chaco: { nombre: "Chaco", iglesias: [] },
      chubut: { nombre: "Chubut", iglesias: [] },
      cordoba: { nombre: "Córdoba", iglesias: [] },
      corrientes: { nombre: "Corrientes", iglesias: [] },
      entre_rios: { nombre: "Entre Ríos", iglesias: [] },
      formosa: { nombre: "Formosa", iglesias: [] },
      jujuy: { nombre: "Jujuy", iglesias: [] },
      la_pampa: { nombre: "La Pampa", iglesias: [] },
      la_rioja: { nombre: "La Rioja", iglesias: [] },
      mendoza: { nombre: "Mendoza", iglesias: [] },
      misiones: { nombre: "Misiones", iglesias: [] },
      neuquen: { nombre: "Neuquén", iglesias: [] },
      rio_negro: { nombre: "Río Negro", iglesias: [] },
      salta: { nombre: "Salta", iglesias: [] },
      san_juan: { nombre: "San Juan", iglesias: [] },
      san_luis: { nombre: "San Luis", iglesias: [] },
      santa_cruz: { nombre: "Santa Cruz", iglesias: [] },
      santa_fe: { nombre: "Santa Fe", iglesias: [] },
      santiago_del_estero: { nombre: "Santiago del Estero", iglesias: [] },
      tierra_del_fuego: { nombre: "Tierra del Fuego", iglesias: [] },
      tucuman: { nombre: "Tucumán", iglesias: [] }
    }
  },
  // BOLIVIA
  bolivia: {
    nombre: "Bolivia",
    estados: {
      beni: { nombre: "Beni", iglesias: [] },
      chuquisaca: { nombre: "Chuquisaca", iglesias: [] },
      cochabamba: { nombre: "Cochabamba", iglesias: [] },
      la_paz: { nombre: "La Paz", iglesias: [] },
      oruro: { nombre: "Oruro", iglesias: [] },
      pando: { nombre: "Pando", iglesias: [] },
      potosi: { nombre: "Potosí", iglesias: [] },
      santa_cruz: { nombre: "Santa Cruz", iglesias: [] },
      tarija: { nombre: "Tarija", iglesias: [] }
    }
  },
  // BRASIL
  brasil: {
    nombre: "Brasil",
    estados: {
      acre: { nombre: "Acre", iglesias: [] },
      alagoas: { nombre: "Alagoas", iglesias: [] },
      amapa: { nombre: "Amapá", iglesias: [] },
      amazonas: { nombre: "Amazonas", iglesias: [] },
      bahia: { nombre: "Bahia", iglesias: [] },
      ceara: { nombre: "Ceará", iglesias: [] },
      distrito_federal: { nombre: "Distrito Federal", iglesias: [] },
      espirito_santo: { nombre: "Espírito Santo", iglesias: [] },
      goias: { nombre: "Goiás", iglesias: [] },
      maranhao: { nombre: "Maranhão", iglesias: [] },
      mato_grosso: { nombre: "Mato Grosso", iglesias: [] },
      mato_grosso_sul: { nombre: "Mato Grosso do Sul", iglesias: [] },
      minas_gerais: { nombre: "Minas Gerais", iglesias: [] },
      para: { nombre: "Pará", iglesias: [] },
      paraiba: { nombre: "Paraíba", iglesias: [] },
      parana: { nombre: "Paraná", iglesias: [] },
      pernambuco: { nombre: "Pernambuco", iglesias: [] },
      piaui: { nombre: "Piauí", iglesias: [] },
      rio_de_janeiro: { nombre: "Rio de Janeiro", iglesias: [] },
      rio_grande_norte: { nombre: "Rio Grande do Norte", iglesias: [] },
      rio_grande_sul: { nombre: "Rio Grande do Sul", iglesias: [] },
      rondonia: { nombre: "Rondônia", iglesias: [] },
      roraima: { nombre: "Roraima", iglesias: [] },
      santa_catarina: { nombre: "Santa Catarina", iglesias: [] },
      sao_paulo: { nombre: "São Paulo", iglesias: [] },
      sergipe: { nombre: "Sergipe", iglesias: [] },
      tocantins: { nombre: "Tocantins", iglesias: [] }
    }
  },
  // CHILE
  chile: {
    nombre: "Chile",
    estados: {
      arica_parinacota: { nombre: "Arica y Parinacota", iglesias: [] },
      tarapaca: { nombre: "Tarapacá", iglesias: [] },
      antofagasta: { nombre: "Antofagasta", iglesias: [] },
      atacama: { nombre: "Atacama", iglesias: [] },
      coquimbo: { nombre: "Coquimbo", iglesias: [] },
      valparaiso: { nombre: "Valparaíso", iglesias: [] },
      metropolitana: { nombre: "Región Metropolitana", iglesias: [] },
      ohiggins: { nombre: "Libertador General Bernardo O'Higgins", iglesias: [] },
      maule: { nombre: "Maule", iglesias: [] },
      nuble: { nombre: "Ñuble", iglesias: [] },
      biobio: { nombre: "Biobío", iglesias: [] },
      araucania: { nombre: "La Araucanía", iglesias: [] },
      los_rios: { nombre: "Los Ríos", iglesias: [] },
      los_lagos: { nombre: "Los Lagos", iglesias: [] },
      aysen: { nombre: "Aysén", iglesias: [] },
      magallanes: { nombre: "Magallanes", iglesias: [] }
    }
  },
  // COLOMBIA
  colombia: {
    nombre: "Colombia",
    estados: {
      amazonas: { nombre: "Amazonas", iglesias: [] },
      antioquia: { nombre: "Antioquia", iglesias: [] },
      arauca: { nombre: "Arauca", iglesias: [] },
      atlantico: { nombre: "Atlántico", iglesias: [] },
      bolivar: { nombre: "Bolívar", iglesias: [] },
      boyaca: { nombre: "Boyacá", iglesias: [] },
      caldas: { nombre: "Caldas", iglesias: [] },
      caqueta: { nombre: "Caquetá", iglesias: [] },
      casanare: { nombre: "Casanare", iglesias: [] },
      cauca: { nombre: "Cauca", iglesias: [] },
      cesar: { nombre: "Cesar", iglesias: [] },
      choco: { nombre: "Chocó", iglesias: [] },
      cordoba: { nombre: "Córdoba", iglesias: [] },
      cundinamarca: { nombre: "Cundinamarca", iglesias: [] },
      guainia: { nombre: "Guainía", iglesias: [] },
      guaviare: { nombre: "Guaviare", iglesias: [] },
      huila: { nombre: "Huila", iglesias: [] },
      la_guajira: { nombre: "La Guajira", iglesias: [] },
      magdalena: { nombre: "Magdalena", iglesias: [] },
      meta: { nombre: "Meta", iglesias: [] },
      narino: { nombre: "Nariño", iglesias: [] },
      norte_de_santander: { nombre: "Norte de Santander", iglesias: [] },
      putumayo: { nombre: "Putumayo", iglesias: [] },
      quindio: { nombre: "Quindío", iglesias: [] },
      risaralda: { nombre: "Risaralda", iglesias: [] },
      san_andres: { nombre: "San Andrés y Providencia", iglesias: [] },
      santander: { nombre: "Santander", iglesias: [] },
      sucre: { nombre: "Sucre", iglesias: [] },
      tolima: { nombre: "Tolima", iglesias: [] },
      valle_del_cauca: { nombre: "Valle del Cauca", iglesias: [] },
      vaupes: { nombre: "Vaupés", iglesias: [] },
      vichada: { nombre: "Vichada", iglesias: [] }
    }
  },
  // COSTA RICA
  costa_rica: {
    nombre: "Costa Rica",
    estados: {
      san_jose: { nombre: "San José", iglesias: [] },
      alajuela: { nombre: "Alajuela", iglesias: [] },
      cartago: { nombre: "Cartago", iglesias: [] },
      heredia: { nombre: "Heredia", iglesias: [] },
      guanacaste: { nombre: "Guanacaste", iglesias: [] },
      puntarenas: { nombre: "Puntarenas", iglesias: [] },
      limon: { nombre: "Limón", iglesias: [] }
    }
  },
  // CUBA
  cuba: {
    nombre: "Cuba",
    estados: {
      artemisa: { nombre: "Artemisa", iglesias: [] },
      camaguey: { nombre: "Camagüey", iglesias: [] },
      ciego_de_avila: { nombre: "Ciego de Ávila", iglesias: [] },
      cienfuegos: { nombre: "Cienfuegos", iglesias: [] },
      granma: { nombre: "Granma", iglesias: [] },
      guantanamo: { nombre: "Guantánamo", iglesias: [] },
      holguin: { nombre: "Holguín", iglesias: [] },
      isla_de_la_juventud: { nombre: "Isla de la Juventud", iglesias: [] },
      la_habana: { nombre: "La Habana", iglesias: [] },
      las_tunas: { nombre: "Las Tunas", iglesias: [] },
      matanzas: { nombre: "Matanzas", iglesias: [] },
      mayabeque: { nombre: "Mayabeque", iglesias: [] },
      pinar_del_rio: { nombre: "Pinar del Río", iglesias: [] },
      sancti_spiritus: { nombre: "Sancti Spíritus", iglesias: [] },
      santiago_de_cuba: { nombre: "Santiago de Cuba", iglesias: [] },
      villa_clara: { nombre: "Villa Clara", iglesias: [] }
    }
  },
  // ECUADOR
  ecuador: {
    nombre: "Ecuador",
    estados: {
      azuay: { nombre: "Azuay", iglesias: [] },
      bolivar: { nombre: "Bolívar", iglesias: [] },
      canar: { nombre: "Cañar", iglesias: [] },
      carchi: { nombre: "Carchi", iglesias: [] },
      chimborazo: { nombre: "Chimborazo", iglesias: [] },
      cotopaxi: { nombre: "Cotopaxi", iglesias: [] },
      el_oro: { nombre: "El Oro", iglesias: [] },
      esmeraldas: { nombre: "Esmeraldas", iglesias: [] },
      galapagos: { nombre: "Galápagos", iglesias: [] },
      guayas: { nombre: "Guayas", iglesias: [] },
      imbabura: { nombre: "Imbabura", iglesias: [] },
      loja: { nombre: "Loja", iglesias: [] },
      los_rios: { nombre: "Los Ríos", iglesias: [] },
      manabi: { nombre: "Manabí", iglesias: [] },
      morona_santiago: { nombre: "Morona Santiago", iglesias: [] },
      napo: { nombre: "Napo", iglesias: [] },
      orellana: { nombre: "Orellana", iglesias: [] },
      pastaza: { nombre: "Pastaza", iglesias: [] },
      pichincha: { nombre: "Pichincha", iglesias: [] },
      santa_elena: { nombre: "Santa Elena", iglesias: [] },
      santo_domingo: { nombre: "Santo Domingo de los Tsáchilas", iglesias: [] },
      sucumbios: { nombre: "Sucumbíos", iglesias: [] },
      tungurahua: { nombre: "Tungurahua", iglesias: [] },
      zamora_chinchipe: { nombre: "Zamora Chinchipe", iglesias: [] }
    }
  },
  // EL SALVADOR
  el_salvador: {
    nombre: "El Salvador",
    estados: {
      ahuachapan: { nombre: "Ahuachapán", iglesias: [] },
      cabanas: { nombre: "Cabañas", iglesias: [] },
      chalatenango: { nombre: "Chalatenango", iglesias: [] },
      cuscatlan: { nombre: "Cuscatlán", iglesias: [] },
      la_libertad: { nombre: "La Libertad", iglesias: [] },
      la_paz: { nombre: "La Paz", iglesias: [] },
      la_union: { nombre: "La Unión", iglesias: [] },
      morazan: { nombre: "Morazán", iglesias: [] },
      san_miguel: { nombre: "San Miguel", iglesias: [] },
      san_salvador: { nombre: "San Salvador", iglesias: [] },
      san_vicente: { nombre: "San Vicente", iglesias: [] },
      santa_ana: { nombre: "Santa Ana", iglesias: [] },
      sonsonate: { nombre: "Sonsonate", iglesias: [] },
      usulutan: { nombre: "Usulután", iglesias: [] }
    }
  },
  // GUATEMALA
  guatemala: {
    nombre: "Guatemala",
    estados: {
      alta_verapaz: { nombre: "Alta Verapaz", iglesias: [] },
      baja_verapaz: { nombre: "Baja Verapaz", iglesias: [] },
      chimaltenango: { nombre: "Chimaltenango", iglesias: [] },
      chiquimula: { nombre: "Chiquimula", iglesias: [] },
      el_progreso: { nombre: "El Progreso", iglesias: [] },
      escuintla: { nombre: "Escuintla", iglesias: [] },
      guatemala: { nombre: "Guatemala", iglesias: [] },
      huehuetenango: { nombre: "Huehuetenango", iglesias: [] },
      izabal: { nombre: "Izabal", iglesias: [] },
      jalapa: { nombre: "Jalapa", iglesias: [] },
      jutiapa: { nombre: "Jutiapa", iglesias: [] },
      peten: { nombre: "Petén", iglesias: [] },
      quetzaltenango: { nombre: "Quetzaltenango", iglesias: [] },
      quiche: { nombre: "Quiché", iglesias: [] },
      retalhuleu: { nombre: "Retalhuleu", iglesias: [] },
      sacatepequez: { nombre: "Sacatepéquez", iglesias: [] },
      san_marcos: { nombre: "San Marcos", iglesias: [] },
      santa_rosa: { nombre: "Santa Rosa", iglesias: [] },
      solola: { nombre: "Sololá", iglesias: [] },
      suchitepequez: { nombre: "Suchitepéquez", iglesias: [] },
      totonicapan: { nombre: "Totonicapán", iglesias: [] },
      zacapa: { nombre: "Zacapa", iglesias: [] }
    }
  },
  // HAITÍ
  haiti: {
    nombre: "Haití",
    estados: {
      artebonite: { nombre: "Artibonite", iglesias: [] },
      centre: { nombre: "Centre", iglesias: [] },
      grandanse: { nombre: "Grand'Anse", iglesias: [] },
      nipes: { nombre: "Nippes", iglesias: [] },
      nord: { nombre: "Nord", iglesias: [] },
      nordest: { nombre: "Nord-Est", iglesias: [] },
      nordouest: { nombre: "Nord-Ouest", iglesias: [] },
      ouest: { nombre: "Ouest", iglesias: [] },
      sud: { nombre: "Sud", iglesias: [] },
      sudest: { nombre: "Sud-Est", iglesias: [] }
    }
  },
  // HONDURAS
  honduras: {
    nombre: "Honduras",
    estados: {
      atlantida: { nombre: "Atlántida", iglesias: [] },
      choluteca: { nombre: "Choluteca", iglesias: [] },
      colon: { nombre: "Colón", iglesias: [] },
      comayagua: { nombre: "Comayagua", iglesias: [] },
      copan: { nombre: "Copán", iglesias: [] },
      cortes: { nombre: "Cortés", iglesias: [] },
      el_paraíso: { nombre: "El Paraíso", iglesias: [] },
      francisco_morazan: { nombre: "Francisco Morazán", iglesias: [] },
      gracias_a_dios: { nombre: "Gracias a Dios", iglesias: [] },
      intibuca: { nombre: "Intibucá", iglesias: [] },
      islas_de_la_bahia: { nombre: "Islas de la Bahía", iglesias: [] },
      la_paz: { nombre: "La Paz", iglesias: [] },
      lempira: { nombre: "Lempira", iglesias: [] },
      ocotepeque: { nombre: "Ocotepeque", iglesias: [] },
      olancho: { nombre: "Olancho", iglesias: [] },
      santa_barbara: { nombre: "Santa Bárbara", iglesias: [] },
      valle: { nombre: "Valle", iglesias: [] },
      yoro: { nombre: "Yoro", iglesias: [] }
    }
  },
  // MÉXICO
  mexico: {
    nombre: "México",
    estados: {
      aguascalientes: { nombre: "Aguascalientes", iglesias: [] },
      baja_california: { nombre: "Baja California", iglesias: [] },
      baja_california_sur: { nombre: "Baja California Sur", iglesias: [] },
      campeche: { nombre: "Campeche", iglesias: [] },
      chiapas: { nombre: "Chiapas", iglesias: [] },
      chihuahua: { nombre: "Chihuahua", iglesias: [] },
      coahuila: { nombre: "Coahuila", iglesias: [] },
      colima: { nombre: "Colima", iglesias: [] },
      durango: { nombre: "Durango", iglesias: [] },
      estado_de_mexico: { nombre: "Estado de México", iglesias: [] },
      guanajuato: { nombre: "Guanajuato", iglesias: [] },
      guerrero: { nombre: "Guerrero", iglesias: [] },
      hidalgo: { nombre: "Hidalgo", iglesias: [] },
      jalisco: { nombre: "Jalisco", iglesias: [] },
      michoacan: { nombre: "Michoacán", iglesias: [] },
      morelos: { nombre: "Morelos", iglesias: [] },
      nayarit: { nombre: "Nayarit", iglesias: [] },
      nuevo_leon: { nombre: "Nuevo León", iglesias: [] },
      oaxaca: { nombre: "Oaxaca", iglesias: [] },
      puebla: { nombre: "Puebla", iglesias: [] },
      queretaro: { nombre: "Querétaro", iglesias: [] },
      quintana_roo: { nombre: "Quintana Roo", iglesias: [] },
      san_luis_potosi: { nombre: "San Luis Potosí", iglesias: [] },
      sinaloa: { nombre: "Sinaloa", iglesias: [] },
      sonora: { nombre: "Sonora", iglesias: [] },
      tabasco: { nombre: "Tabasco", iglesias: [] },
      tamaulipas: { nombre: "Tamaulipas", iglesias: [] },
      tlaxcala: { nombre: "Tlaxcala", iglesias: [] },
      veracruz: { nombre: "Veracruz", iglesias: [] },
      yucatan: { nombre: "Yucatán", iglesias: [] },
      zacatecas: { nombre: "Zacatecas", iglesias: [] }
    }
  },
  // NICARAGUA
  nicaragua: {
    nombre: "Nicaragua",
    estados: {
      boaco: { nombre: "Boaco", iglesias: [] },
      carazo: { nombre: "Carazo", iglesias: [] },
      chinandega: { nombre: "Chinandega", iglesias: [] },
      chontales: { nombre: "Chontales", iglesias: [] },
      esteli: { nombre: "Estelí", iglesias: [] },
      granada: { nombre: "Granada", iglesias: [] },
      jinotega: { nombre: "Jinotega", iglesias: [] },
      leon: { nombre: "León", iglesias: [] },
      madriz: { nombre: "Madriz", iglesias: [] },
      managua: { nombre: "Managua", iglesias: [] },
      masaya: { nombre: "Masaya", iglesias: [] },
      matagalpa: { nombre: "Matagalpa", iglesias: [] },
      nueva_segovia: { nombre: "Nueva Segovia", iglesias: [] },
      rio_san_juan: { nombre: "Río San Juan", iglesias: [] },
      rivas: { nombre: "Rivas", iglesias: [] }
    }
  },
  // PANAMÁ
  panama: {
    nombre: "Panamá",
    estados: {
      bocas_del_toro: { nombre: "Bocas del Toro", iglesias: [] },
      chiriqui: { nombre: "Chiriquí", iglesias: [] },
      cocle: { nombre: "Coclé", iglesias: [] },
      colon: { nombre: "Colón", iglesias: [] },
      darien: { nombre: "Darién", iglesias: [] },
      herrera: { nombre: "Herrera", iglesias: [] },
      los_santos: { nombre: "Los Santos", iglesias: [] },
      panama: { nombre: "Panamá", iglesias: [] },
      panama_oeste: { nombre: "Panamá Oeste", iglesias: [] },
      veraguas: { nombre: "Veraguas", iglesias: [] }
    }
  },
  // PARAGUAY
  paraguay: {
    nombre: "Paraguay",
    estados: {
      alto_paraguay: { nombre: "Alto Paraguay", iglesias: [] },
      alto_parana: { nombre: "Alto Paraná", iglesias: [] },
      amambay: { nombre: "Amambay", iglesias: [] },
      asuncion: { nombre: "Asunción (Distrito Capital)", iglesias: [] },
      boqueron: { nombre: "Boquerón", iglesias: [] },
      caaguazu: { nombre: "Caaguazú", iglesias: [] },
      cazapa: { nombre: "Caazapá", iglesias: [] },
      canindeyu: { nombre: "Canindeyú", iglesias: [] },
      central: { nombre: "Central", iglesias: [] },
      concepcion: { nombre: "Concepción", iglesias: [] },
      cordillera: { nombre: "Cordillera", iglesias: [] },
      guaira: { nombre: "Guairá", iglesias: [] },
      itapua: { nombre: "Itapúa", iglesias: [] },
      misiones: { nombre: "Misiones", iglesias: [] },
      neembucu: { nombre: "Ñeembucú", iglesias: [] },
      paraguari: { nombre: "Paraguarí", iglesias: [] },
      presidente_hayes: { nombre: "Presidente Hayes", iglesias: [] },
      san_pedro: { nombre: "San Pedro", iglesias: [] }
    }
  },
  // PERÚ
  peru: {
    nombre: "Perú",
    estados: {
      amazonas: { nombre: "Amazonas", iglesias: [] },
      ancash: { nombre: "Áncash", iglesias: [] },
      apurimac: { nombre: "Apurímac", iglesias: [] },
      arequipa: { nombre: "Arequipa", iglesias: [] },
      ayacucho: { nombre: "Ayacucho", iglesias: [] },
      cajamarca: { nombre: "Cajamarca", iglesias: [] },
      callao: { nombre: "Callao", iglesias: [] },
      cusco: { nombre: "Cusco", iglesias: [] },
      huancavelica: { nombre: "Huancavelica", iglesias: [] },
      huanuco: { nombre: "Huánuco", iglesias: [] },
      ica: { nombre: "Ica", iglesias: [] },
      junin: { nombre: "Junín", iglesias: [] },
      la_libertad: { nombre: "La Libertad", iglesias: [] },
      lambayeque: { nombre: "Lambayeque", iglesias: [] },
      lima: { nombre: "Lima", iglesias: [] },
      loreto: { nombre: "Loreto", iglesias: [] },
      madre_de_dios: { nombre: "Madre de Dios", iglesias: [] },
      moquegua: { nombre: "Moquegua", iglesias: [] },
      pasco: { nombre: "Pasco", iglesias: [] },
      piura: { nombre: "Piura", iglesias: [] },
      puno: { nombre: "Puno", iglesias: [] },
      san_martin: { nombre: "San Martín", iglesias: [] },
      tacna: { nombre: "Tacna", iglesias: [] },
      tumbes: { nombre: "Tumbes", iglesias: [] },
      ucayali: { nombre: "Ucayali", iglesias: [] }
    }
  },
  // REPÚBLICA DOMINICANA
  republica_dominicana: {
    nombre: "República Dominicana",
    estados: {
      azua: { nombre: "Azua", iglesias: [] },
      baoruco: { nombre: "Baoruco", iglesias: [] },
      barahona: { nombre: "Barahona", iglesias: [] },
      dajabon: { nombre: "Dajabón", iglesias: [] },
      duarte: { nombre: "Duarte", iglesias: [] },
      elias_pina: { nombre: "Elías Piña", iglesias: [] },
      el_seibo: { nombre: "El Seibo", iglesias: [] },
      espaillat: { nombre: "Espaillat", iglesias: [] },
      hatomayor: { nombre: "Hato Mayor", iglesias: [] },
      independencia: { nombre: "Independencia", iglesias: [] },
      la_altagracia: { nombre: "La Altagracia", iglesias: [] },
      la_romana: { nombre: "La Romana", iglesias: [] },
      la_vega: { nombre: "La Vega", iglesias: [] },
      maria_trinidad_sanchez: { nombre: "María Trinidad Sánchez", iglesias: [] },
      montecristi: { nombre: "Montecristi", iglesias: [] },
      monte_plata: { nombre: "Monte Plata", iglesias: [] },
      pedernales: { nombre: "Pedernales", iglesias: [] },
      peravia: { nombre: "Peravia", iglesias: [] },
      puerto_plata: { nombre: "Puerto Plata", iglesias: [] },
      samana: { nombre: "Samaná", iglesias: [] },
      san_cristobal: { nombre: "San Cristóbal", iglesias: [] },
      san_jose_de_o coa: { nombre: "San José de Ocoa", iglesias: [] },
      san_juan: { nombre: "San Juan", iglesias: [] },
      san_pedro_de_macoris: { nombre: "San Pedro de Macorís", iglesias: [] },
      sanchez_ramirez: { nombre: "Sánchez Ramírez", iglesias: [] },
      santiago: { nombre: "Santiago", iglesias: [] },
      santiago_rodriguez: { nombre: "Santiago Rodríguez", iglesias: [] },
      santo_domingo: { nombre: "Santo Domingo", iglesias: [] },
      valverde: { nombre: "Valverde", iglesias: [] }
    }
  },
  // URUGUAY
  uruguay: {
    nombre: "Uruguay",
    estados: {
      artigas: { nombre: "Artigas", iglesias: [] },
      canelones: { nombre: "Canelones", iglesias: [] },
      cerro_largo: { nombre: "Cerro Largo", iglesias: [] },
      colonia: { nombre: "Colonia", iglesias: [] },
      durazno: { nombre: "Durazno", iglesias: [] },
      flores: { nombre: "Flores", iglesias: [] },
      florida: { nombre: "Florida", iglesias: [] },
      lavalleja: { nombre: "Lavalleja", iglesias: [] },
      maldonado: { nombre: "Maldonado", iglesias: [] },
      montevideo: { nombre: "Montevideo", iglesias: [] },
      paysandu: { nombre: "Paysandú", iglesias: [] },
      rio_negro: { nombre: "Río Negro", iglesias: [] },
      rivera: { nombre: "Rivera", iglesias: [] },
      rocha: { nombre: "Rocha", iglesias: [] },
      salto: { nombre: "Salto", iglesias: [] },
      san_jose: { nombre: "San José", iglesias: [] },
      soriano: { nombre: "Soriano", iglesias: [] },
      tacuarembo: { nombre: "Tacuarembó", iglesias: [] },
      treinta_y_tres: { nombre: "Treinta y Tres", iglesias: [] }
    }
  },
  // VENEZUELA
  venezuela: {
    nombre: "Venezuela",
    estados: {
      amazonas: { nombre: "Amazonas", iglesias: [] },
      anzoategui: { nombre: "Anzoátegui", iglesias: [] },
      apure: { nombre: "Apure", iglesias: [] },
      aragua: { nombre: "Aragua", iglesias: [] },
      barinas: { nombre: "Barinas", iglesias: [] },
      bolivar: { nombre: "Bolívar", iglesias: [] },
      carabobo: { nombre: "Carabobo", iglesias: [] },
      cojedes: { nombre: "Cojedes", iglesias: [] },
      delta_amacuro: { nombre: "Delta Amacuro", iglesias: [] },
      distrito_capital: { nombre: "Distrito Capital", iglesias: [] },
      falcon: { nombre: "Falcón", iglesias: [] },
      guarico: { nombre: "Guárico", iglesias: [] },
      la_guaira: { nombre: "La Guaira", iglesias: [] },
      lara: { nombre: "Lara", iglesias: [] },
      merida: { nombre: "Mérida", iglesias: [] },
      miranda: { nombre: "Miranda", iglesias: [] },
      monagas: { nombre: "Monagas", iglesias: [] },
      nueva_esparta: { nombre: "Nueva Esparta", iglesias: [] },
      portuguesa: { nombre: "Portuguesa", iglesias: [] },
      sucre: { nombre: "Sucre", iglesias: [] },
      tachira: { nombre: "Táchira", iglesias: [] },
      trujillo: { nombre: "Trujillo", iglesias: [] },
      yaracuy: { nombre: "Yaracuy", iglesias: [] },
      zulia: { nombre: "Zulia", iglesias: [] }
    }
  }
};

// ==================== NO EDITAR DEBAJO A MENOS QUE SEPAS LO QUE HACES ====================
// Elementos del DOM
const paisSelect = document.getElementById('pais');
const estadoSelect = document.getElementById('estado');
const limpiarBtn = document.getElementById('limpiarBtn');
const resultadosDiv = document.getElementById('resultados');

// Cargar países
function cargarPaises() {
  for (const [key, value] of Object.entries(iglesiasData)) {
    const option = document.createElement('option');
    option.value = key;
    option.textContent = value.nombre;
    paisSelect.appendChild(option);
  }
}

// Cargar estados según país seleccionado
function cargarEstados(paisKey) {
  estadoSelect.innerHTML = '<option value="">-- Selecciona un estado --</option>';
  const estados = iglesiasData[paisKey]?.estados;
  if (estados) {
    for (const [stateKey, stateValue] of Object.entries(estados)) {
      const option = document.createElement('option');
      option.value = stateKey;
      option.textContent = stateValue.nombre;
      estadoSelect.appendChild(option);
    }
    estadoSelect.disabled = false;
  } else {
    estadoSelect.disabled = true;
  }
}

// Mostrar iglesias del estado seleccionado
function mostrarIglesias(paisKey, estadoKey) {
  if (!paisKey || !estadoKey) {
    resultadosDiv.innerHTML = `<div class="mensaje-inicial"><i class="fas fa-church"></i><p>Selecciona un país y estado para ver las iglesias.</p></div>`;
    return;
  }
  const iglesias = iglesiasData[paisKey]?.estados[estadoKey]?.iglesias;
  if (!iglesias || iglesias.length === 0) {
    resultadosDiv.innerHTML = `<div class="mensaje-inicial"><i class="fas fa-info-circle"></i><p>No hay iglesias registradas en este estado.</p></div>`;
    return;
  }
  let html = '';
  iglesias.forEach(iglesia => {
    html += `
      <div class="iglesia-card">
        <div class="iglesia-nombre">${escapeHtml(iglesia.nombre)}</div>
        <div class="iglesia-direccion"><i class="fas fa-map-marker-alt"></i> ${escapeHtml(iglesia.direccion)}</div>
        <div class="iglesia-website"><i class="fas fa-globe"></i> <a href="${escapeHtml(iglesia.website)}" target="_blank" rel="noopener">${escapeHtml(iglesia.website)}</a></div>
        <div class="iglesia-telefono"><i class="fas fa-phone-alt"></i> ${escapeHtml(iglesia.telefono || 'No disponible')}</div>
      </div>
    `;
  });
  resultadosDiv.innerHTML = html;
}

// Limpiar filtros
function limpiarFiltros() {
  paisSelect.value = '';
  estadoSelect.innerHTML = '<option value="">-- Primero selecciona un país --</option>';
  estadoSelect.disabled = true;
  resultadosDiv.innerHTML = `<div class="mensaje-inicial"><i class="fas fa-church"></i><p>Selecciona un país y estado para ver las iglesias.</p></div>`;
}

// Eventos
paisSelect.addEventListener('change', () => {
  const paisKey = paisSelect.value;
  if (!paisKey) {
    estadoSelect.disabled = true;
    estadoSelect.innerHTML = '<option value="">-- Primero selecciona un país --</option>';
    resultadosDiv.innerHTML = `<div class="mensaje-inicial"><i class="fas fa-church"></i><p>Selecciona un país y estado para ver las iglesias.</p></div>`;
    return;
  }
  cargarEstados(paisKey);
  resultadosDiv.innerHTML = `<div class="mensaje-inicial"><i class="fas fa-map-pin"></i><p>Ahora selecciona un estado.</p></div>`;
});

estadoSelect.addEventListener('change', () => {
  const paisKey = paisSelect.value;
  const estadoKey = estadoSelect.value;
  if (!paisKey || !estadoKey) return;
  mostrarIglesias(paisKey, estadoKey);
});

limpiarBtn.addEventListener('click', limpiarFiltros);

// Escapar HTML para seguridad
function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// Scroll top (opcional, si tienes el botón en el HTML)
const scrollBtn = document.getElementById('scrollTopBtn');
if (scrollBtn) {
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('visible', window.scrollY > 500);
  });
  scrollBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Inicializar
cargarPaises();
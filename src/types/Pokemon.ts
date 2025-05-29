interface PokemonType {
  type: {
    name: string;
  };
}

interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  pokemon: {
    id: number;
    name: string;
    height: number;
    weight: number;
    types: PokemonType[];
    cries: {
      legacy: string;
      latest: string;
    };
    stats: PokemonStat[];
  };
}

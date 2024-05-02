export interface IFood {
    id: number;
    nome: string;
    ingredientes: string;
    preço: number;
    referencia: string;
    totalEstoque: number;
    totalAddCarrinho: number;
};

type FoodType = {
    id: number;
    nome: string;
    ingredientes: string;
    preço: number;
    referencia: string;
    totalEstoque: number;
    totalAddCarrinho: number;
}

type FoodFantansyType = FoodType & { fantasyType: "high fantasy"};
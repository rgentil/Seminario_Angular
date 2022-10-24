export interface Bike {
    id: number;
    maker: string;
    model: string;
    price: number;
    stock: number;
    image: string;
    clearance: boolean;
    /*Esto no me viene desde la api que consumo, por eso lo tengo que transformar en el llamado
    o puedo declararlo asi:
    quantity: number = 0;
    */
    quantity: number;
}
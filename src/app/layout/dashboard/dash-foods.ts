export interface DashFoods {
    id: number;
    name: string;
    calories: number;
    quantity: number;
}

export interface Dashboard {
    items: DashFoods[];
    totalAmount: number;
}


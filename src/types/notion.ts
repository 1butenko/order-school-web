export interface Module {
    id: string;
    moduleId: number;
    title: string;
    startDate: string;
    endDate: string;
    description: string;
}

export interface ModuleWithStatus extends Module {
    status: "upcoming" | "current" | "next" | "completed";
    dateRange: string;
}
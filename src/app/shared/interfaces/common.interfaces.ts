export namespace ICommon {
    export interface ITab {
        order: number;
        tabName: string;
        icon: string;
        redirectTo: string;
    }
    export interface ITopButton {
        text: string;
        icon?: string;
        activeIcon?: string;
        redirectTo?: string;
        activePages?: string[];
        active: boolean;
    }
}

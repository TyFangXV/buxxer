

interface ITheme {
    name: string;
    colors: {
        primary: string;
        secondary: string;
        background: string;
        text: string;
        border: string;
        foreground : string;
        error: string;
        success: string;
        logo : string;
        warning: string;
        info: string;
    };
    font : {
        primary : string;

    };

}



const themes:ITheme[] = [
    {
        name: 'default',
        colors: {
            primary: '#0070f3',
            secondary: '#1C1C1C',
            background: '#200028',
            text: '#fff9',
            border: '#2F2F2F',
            foreground : '#450755',
            error: '#ff5b57',
            success: '#00c48c',
            logo : "#F3C5FF",
            warning: '#f4ce46',
            info: '#3a7bd5'
        },
        font : {
            primary : 'Alata',
        }
    },
]


class theme{
    static getThemes(){
        return themes;
    }

    getThemeByName(name:string){
        return themes.find(t => t.name === name);
    }


}

export default theme;

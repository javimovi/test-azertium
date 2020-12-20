/**
 * Clase donde tenemos valores constantes
 */
export class Constants{
    /**
     * Método que devuelve la url de búsqueda de los respositorios de github
     * @param {string} search 
     * @param {number} numPage 
     * @returns {string}
     */
    public static UrlSearchedProjects = (search: string, numPage: number) => {
        return "https://api.github.com/search/repositories?q=" + search + "&page=1&per_page=" + numPage + "&sort=stars&order=desc";
    }
}
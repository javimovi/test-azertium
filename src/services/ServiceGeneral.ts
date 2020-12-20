import { Constants } from '@/utils/Constants';
import axios from 'axios';

/**
 * Clase que contiene los servicios generales
 */
export class ServiceGeneral {
    /**
     * Método que realiza la llamada para obtener todos los proyectos según nuestra búsqueda
     * @param {string} search 
     * @returns {Promise<AxiosResponse<any>>}
     */
    public static GetAllEntityProjects(search: string) : any{
        const numPage: number = 10,
            url: string = Constants.UrlSearchedProjects(search, numPage);
        return axios.get(url, {})
    }
}
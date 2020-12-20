import { ReponseGeneral } from '@/responses/ResponseGeneral';
import { ServiceGeneral } from '@/services/ServiceGeneral';
import $ from 'jquery';

/**
 * Clase que contiene los métodos del controlador general
 */
export class ControlGeneral {
    /**
     * Método que se llama para obtener todos los proyectos según nuestra búsqueda
     * @param {string} search 
     */
    public static GetAllEntityProjects(search: string){
        kendo.ui.progress($('body'), true);
        ServiceGeneral.GetAllEntityProjects(search).then(ReponseGeneral.SuccessGetAllEntityProjects)
            .catch(ReponseGeneral.ErrorGetAllEntityProjects)
    }
}
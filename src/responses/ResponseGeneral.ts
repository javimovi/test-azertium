import StoreGeneral from '@/stores/StoreGeneral';
import EntityProject from '@/class/EntityProject';
import $ from 'jquery';

/**
 * Clase que contiene las respuestas de los servicios generales
 */
export class ReponseGeneral {
    /**
     * Método que se llama en la acción "success" de obtener todos los proyectos según nuestra búsqueda
     * @param {any} response 
     */
    public static SuccessGetAllEntityProjects(response){
        const mapData: Array<EntityProject> = (response.data && response.data.items && response.data.items.length && response.data.items.map((item, it: number)=>{
            return { Url: item.url, RepositoryName: item.name, Id: it } as EntityProject
        }) ) || new EntityProject()
        StoreGeneral.actions.SetSearchedEntityProjects({searchedEntityProjects: mapData})
        kendo.ui.progress($('body'), false);
    }
    /**
     * Método que se llama en la acción "error" de obtener todos los proyectos según nuestra búsqueda
     * @param {any} e 
     */
    public static ErrorGetAllEntityProjects(e){
        kendo.ui.progress($('body'), false);    
        console.error(e);
    }
}
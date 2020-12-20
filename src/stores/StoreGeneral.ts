import EntityProject from '@/class/EntityProject';
import {getStoreBuilder} from 'vuex-typex';
import {RootState} from "./store";

interface StateBase {
    searchedEntityProjects: Array<EntityProject>
}

/**
 * Estados iniciales
 */
const defaultState: StateBase = {
    searchedEntityProjects: new Array<EntityProject>()
}
/**
 * Se inicializa el modulo
 * @type {ModuleBuilder<StateBase, RootState>}
 */

 export const mb = getStoreBuilder<RootState>().module<StateBase>("General", defaultState);

 export namespace Getters {
    export const getters = {

    }
 }

 /**
  * Mutaciones de la StoreGeneral
  */
 export namespace Mutations {
     /**
     * Mutación para guardar la búsqueda de proyectos de Github
     * @param {StateBase} state 
     * @param payload 
     */
    function SearchedEntityProjects (state: StateBase, payload: { searchedEntityProjects: any }) {
        state.searchedEntityProjects = payload.searchedEntityProjects;
    }
    export const mutations = {
        SearchedEntityProjects: mb.commit(SearchedEntityProjects)
    }
}

/**
 * Actions de la StoreGeneral
 */
export namespace Actions {
    /**
     * Acción para guardar la búsqueda de proyectos de Github
     * @param {StateBase} state 
     * @param payload 
     */
    function SetSearchedEntityProjects (state: StateBase, payload: { searchedEntityProjects: any }) {
        Mutations.mutations.SearchedEntityProjects({searchedEntityProjects: payload.searchedEntityProjects})
    }
    export const actions = {
        SetSearchedEntityProjects: mb.commit(SetSearchedEntityProjects)
    }
}

const stateReader = mb.state();

const StoreGeneral = {
    get state() { return stateReader() },
    getters: Getters.getters,
    mutations: Mutations.mutations,
    actions: Actions.actions
};

export default StoreGeneral;
export { mb as moduleBaseModelBuilder }
<template>
  <div class="main">
    <input placeholder="Busca proyectos..." class="mb-5 inputSearch" @change="onChangeSearchInput" />
    <kendo-grid v-if="localDataSource.length" :data-source="localDataSource">
        <kendo-grid-column :field="'RepositoryName'" :title="'Nombre del repositorio'"></kendo-grid-column> 
        <kendo-grid-column :field="'Url'" :title="'URL'"></kendo-grid-column>
    </kendo-grid>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import EntityProject from '../class/EntityProject';
import StoreGeneral from '../stores/StoreGeneral';
import {ControlGeneral} from '../controls/ControlGeneral';

@Component({
  components: {

  }
})
/**
 * Componente de la vista inicial
 */
export default class Main extends Vue {

  /**
   * Hace una nueva búsqueda cuando el elemento input lanza el evento change
   * @param {string} textSearch
   */
  onChangeSearchInput(textSearch) {
    const textValue = textSearch && textSearch.currentTarget && textSearch.currentTarget.value
    if(textValue && textValue.length >= 3) { ControlGeneral.GetAllEntityProjects(textValue); }
  }

  /**
   * Últimos elementos buscados, guardados en la StoreGeneral
   * @returns {Array<EntityProject>}
   */
  get localDataSource() : Array<EntityProject> {
    return StoreGeneral.state.searchedEntityProjects;
  }
}
</script>

<style lang="scss" >
    @import '../styles/Main.scss';    
</style>

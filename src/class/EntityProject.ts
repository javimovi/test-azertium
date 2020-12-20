/**
 * Clase-Modelo para un proyecto de Github
 */
export default class EntityProject {
    public Id: number = 0;
    public RepositoryName: string = "";
    public Url: string = "";

    constructor(project?: EntityProject){
        if(project){
            this.Id = project.Id;
            this.RepositoryName = project.RepositoryName;
            this.Url = project.Url;
        }
    }
}
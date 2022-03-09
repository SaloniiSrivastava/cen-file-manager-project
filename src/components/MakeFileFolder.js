function MakeFileFolder(id,name,path,isFolder,content){
    this.id=id
    this.name=name
    this.isFolder=isFolder
    this.path=path
    this.isActive=false
    this.content=content
    this.childNodes=[]
}; 




export default MakeFileFolder;
function MakeFileFolder(id,name,path,isFolder){
    this.id=id
    this.name=name
    this.isFolder=isFolder
    this.path=path
    this.isActive=false
    this.childNodes=[]
}




export default MakeFileFolder;
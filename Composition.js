class Create {
    create(name) {
        console.log("created!");
    }
}

class Delete {
    delete(name) {
        console.log("Deleted!");
    }
}
class Update {
    update(name) {
        console.log("Updated!");
    }
}
class Read {
    read(file) {
        console.log("Reading...");
    }
}

class Crud {
    constructor(file) {
        this.file = file;
        this.create = new Create();
        this.read = new Read();
        this.update = new Update();
        this.delete = new Delete();
    }
}

var crud = new Crud();
crud.create.create();
crud.read.read();
crud.update.update();
crud.delete.delete();

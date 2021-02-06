class dataGetter {
  objectID: string
  path: string
  static path: any
  static objectID: any

  constructor(path: string, objectID: string) {
    this.objectID = objectID
    this.path = path
  }

  static async getData(id:string) {
    try {
      let url: string = `${this.path}/${this.objectID}`
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': 'klZEZ7Ye5CUTHx5jq9J5uAZ781Ek9AEIrPkqYKFC',
          'X-Parse-Javascript-Key': 'DyxGIWZ0TaYLF8NQJLYb4Bayfux8pUYfgNirSvJi'
        }
      });
      let json = await response.json();
      return JSON.stringify(json, null, 2);
    } catch (error) {
      console.error(error);
    }
  };
};

class USStates extends dataGetter{

  constructor(
    path: string = 'https://parseapi.back4app.com/classes/States',
    objectID: string
    ) 
    {
      super(path, objectID)
    }
}

export default dataGetter;
export { USStates }
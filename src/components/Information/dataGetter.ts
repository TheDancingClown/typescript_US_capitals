import * as ENV from '../../environments'

class dataGetter {

  static async getData(id:string, db: string) {
    try {
      let url: string = `${ENV.SERVER_URL}/${db}/${id}`
      let response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Parse-Application-Id': ENV.APPLICATION_ID,
          'X-Parse-Javascript-Key': ENV.JAVASCRIPT_KEY
        }
      });
      let json = await response.json();
      return json
    } catch (error) {
      console.error(error);
    }
  };
};

export default dataGetter;

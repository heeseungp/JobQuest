
class Response {

    constructor(){
        this.ErrorTitle = '';
        this.ErrorMsg = '';
    }

    /**
     * Authenticate a user. Save a token stringand timestamp in Local Storage
     *
     * @param {string} token
     */
    static setError(error) {
        console.log('Intercepted an error');
        this.ErrorTitle = error.response.status + " " + error.response.statusText + " Error";
        this.ErrorMsg = JSON.stringify(error.response.data);
    }

    static getError() {
        console.log('Got the error info');
       // return {title: localStorage.getItem('ErrorTitle'), text: localStorage.getItem('ErrorMsg')};
       return {title: this.ErrorTitle, text: this.ErrorMsg};
    }

    static isErrorSet() {
        console.log('Error ',this.ErrorTitle,this.ErrorMsg);
        return (this.ErrorTitle !== undefined) && (this.ErrorMsg !== undefined);
    }

    static resetError() {
        //localStorage.removeItem('ErrorTitle');
        //localStorage.removeItem('ErrorMsg');
        this.ErrorTitle = '';
        this.ErrorMsg = '';
    }

}

export default Response;
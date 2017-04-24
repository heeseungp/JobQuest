
class Response {

    constructor(){
        this.ErrorTitle = undefined;
        this.ErrorMsg = undefined;
    }

    /**
     * Sets the error title and message. Takes the error json returned by axios as an input.
     *
     * @param {object} error
     */
    static setError(error) {
        this.ErrorTitle = error.response.status + " " + error.response.statusText;
        this.ErrorMsg = JSON.stringify(error.response.data);
    }

    /**
     * Returns the error title and message as a JSON.
     *
     */
    static getError() {
       return {title: this.ErrorTitle, text: this.ErrorMsg};
    }

    /**
     * Checks to see whether or not the error is set.
     *
     */
    static isErrorSet() {
        if((this.ErrorTitle !== undefined) && (this.ErrorMsg !== undefined)){
            console.log('Error: ',this.ErrorTitle,this.ErrorMsg);
        }
        return (this.ErrorTitle !== undefined) && (this.ErrorMsg !== undefined);
    }

    /**
     * Resets the error title and message to its initial value (undefined)
     *
     */
    static resetError() {
        this.ErrorTitle = undefined;
        this.ErrorMsg = undefined;
    }

}

export default Response;
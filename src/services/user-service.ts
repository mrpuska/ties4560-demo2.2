export default new class UserService {

    constructor() {
        this.getStoredAuthData();
        this.getUserData();

        if (this.userData &&  this.authData)
            return;

        if (this.authData)
            this.fetchUser();
    }

    authData: any;
    userData: any;

    getAccessToken(){
        return this.authData?.access_token;
    }

    isAuthenticated() {
        return this.userData != null;
    }

    logout() {
        this.authData = null;
        this.userData = null;
        localStorage.clear();
    }

    setAuthData(data: any) {
        this.authData = data;
        localStorage.setItem('authData', JSON.stringify(data));
    }

    setUserData(data: any){
        this.userData = data;
        localStorage.setItem('userData', JSON.stringify(data));
    }

    getUserData() {
        let data = localStorage.getItem('userData');
        if (data != null)
            this.userData = JSON.parse(data)
        else
            this.userData = null;
    }

    getStoredAuthData() {
        let data = localStorage.getItem('authData')
        if (data != null)
            this.authData = JSON.parse(data);
        else
            this.authData = null;
    }

    fetchUser() {
        let uri = "https://api.dropboxapi.com/2/users/get_account";
        let params = new URLSearchParams();
        params.set('authorization', 'Bearer ' + this.authData.access_token)
        let args = new URLSearchParams();
        args.set('account_id', this.authData.account_id)
        fetch(uri + "?" + params.toString(), {
            method: 'POST',
            body: JSON.stringify({account_id: this.authData.account_id}),
            headers: new Headers(
                {
                    'Content-Type': 'text/plain; charset=dropbox-cors-hack'
                })
        }).then(res => {
            res.json().then(json => {
                this.setUserData(json);
            })
        }).catch(err => {
            this.setAuthData(null)
            this.setUserData(null);
        })
    }

}